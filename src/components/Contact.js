import React, { useState, useRef, memo, useEffect } from "react";
import styled from "styled-components";
import { Formik, Field, Form } from "formik";
import { object, string, number, array } from "yup";
import { Button, TextField } from "@mui/material";
import {
  SectionTitle,
  SectionCaption,
  SectionMasked,
  Section,
} from "./GlobalStyles";
import ContactMap from "./ContactMap";
import implementsJSON from "./implements.json";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { TiTick, TiTimes } from "react-icons/ti";

const Contact = memo(({ setPos }) => {
  const [position, setPosition] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);
  const form = useRef();
  const sectionRef = useRef();
  // const { ref, inView, entry } = useInView({
  //   threshold: .5
  // });

  // useEffect(() => {
  //   if (inView) setInView(4);
  // }, [inView, setInView]);

  const renderCounter = useRef(0);
  // console.log(++renderCounter.current, " Contact")

  const calcSth = () => {
    const topWPadding =
      sectionRef.current.getBoundingClientRect().top +
      window.innerWidth * 0.03 +
      72;
    const top = sectionRef.current.getBoundingClientRect().top;
    if (
      (topWPadding >= 0 && topWPadding <= window.innerHeight * 0.4) ||
      (top <= 0 &&
        sectionRef.current.offsetHeight + top >= window.innerHeight * 0.4)
    ) {
      setPos(5);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", calcSth);
  }, []);

  useEffect(() => {
    let submitStatusInterval;
    if (submitStatus !== false) {
      submitStatusInterval = setInterval(() => setSubmitStatus(false), 6500);
    }
    return () => clearInterval(submitStatusInterval);
  }, [submitStatus]);

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_70vmkro",
        "template_hax4mfq",
        form.current,
        "ci5bxbcH8IwKeHz-2"
      )
      .then(
        (result) => {
          setSubmitStatus("success");
        },
        (error) => {
          setSubmitStatus("error");
        }
      );
  };

  const validationSchema = object({
    name: string("Нэрээ бичнэ үү")
      .min(3, "Нэр 2 үсгээс дээш байх ёстой")
      .required("Нэр бичих шаардлагатай"),
    companyName: string("Компани нэр"),
    email: string("Email бичнэ үү")
      .email("Зөв Email бичнэ үү")
      .required("Email бичих шаардлагатай"),
    phoneNumber: number("Утасны дугаар")
      .min(9999999, "Зөв утасны дугаар бичнэ үү")
      .max(99999999, "Зөв утасны дугаар бичнэ үү")
      .required("Утасны дугаар шаардлагатай"),
    location: string("Газрынхаа байршилийг бичнэ үү").required(
      "Газрын байршил шаардлагатай"
    ),
    түрээслэхТөхөөрөмж: array()
      .min(1, "Заавал нэгийг сонгох шаардлагатай")
      .required("Заавал нэгийг сонгох шаардлагатай"),
  });

  const handleMapClick = (pos) => {
    setPosition(pos);
  };

  return (
    <ContactSection id="Холбоо-барих" ref={sectionRef}>
      {submitStatus && (
        <SubmitStatus status={submitStatus}>
          {submitStatus === "success" ? <StyledTick /> : <StyledClose />}{" "}
          {submitStatus === "success" ? "Амжилттай явууллаа." : "Алдаа гарлаа."}
        </SubmitStatus>
      )}
      <SectionMasked />
      <SectionLayoutContainer className="container">
        <SectionLayout>
          <SectionHeader>
            <SectionCaption>Холбоо барих</SectionCaption>
            <SectionTitle>Бидэнтэй хамтарч ажиллаарай</SectionTitle>
          </SectionHeader>
          <ContactForm>
            <Formik
              initialValues={{
                email: "",
                phoneNumber: "",
                name: "",
                location: "",
                companyName: "",
                түрээслэхТөхөөрөмж: [],
                lat: "",
                lng: "",
              }}
              onSubmit={sendEmail}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form ref={form} className="ContactForm">
                  <TextField
                    className="textField"
                    fullWidth
                    id="name"
                    name="name"
                    label="Нэр *"
                    value={props.values.name}
                    onChange={props.handleChange}
                    error={props.touched.name && Boolean(props.errors.name)}
                    helperText={props.touched.name && props.errors.name}
                  />
                  <TextField
                    className="textField"
                    fullWidth
                    id="email"
                    name="email"
                    label="Email *"
                    value={props.values.email}
                    onChange={props.handleChange}
                    error={props.touched.email && Boolean(props.errors.email)}
                    helperText={props.touched.email && props.errors.email}
                  />
                  <TextField
                    className="textField"
                    fullWidth
                    id="companyName"
                    name="companyName"
                    label="Компанийн нэр"
                    value={props.values.companyName}
                    onChange={props.handleChange}
                    error={
                      props.touched.companyName &&
                      Boolean(props.errors.companyName)
                    }
                    helperText={
                      props.touched.companyName && props.errors.companyName
                    }
                  />
                  <TextField
                    className="textField"
                    fullWidth
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Утасны дугаар *"
                    type={"number"}
                    value={props.values.phoneNumber}
                    onChange={props.handleChange}
                    error={
                      props.touched.phoneNumber &&
                      Boolean(props.errors.phoneNumber)
                    }
                    helperText={
                      props.touched.phoneNumber && props.errors.phoneNumber
                    }
                    style={{
                      backgroundColor: "#fff",
                    }}
                  />
                  <CheckboxGroupContainer>
                    <ContactLabel>Түрээслэх Төхөөрөмжүүд</ContactLabel>
                    <CheckboxGroup
                      role="group"
                      aria-labelledby="checkbox-group"
                    >
                      {implementsJSON.map((implement) => (
                        <Label key={implement.name}>
                          <Field
                            type="checkbox"
                            name="түрээслэхТөхөөрөмж"
                            value={implement.name}
                          />
                          {implement.name}
                        </Label>
                      ))}
                    </CheckboxGroup>
                    {props.errors.түрээслэхТөхөөрөмж &&
                      props.touched.түрээслэхТөхөөрөмж && (
                        <ErrorMessage>
                          Заавал нэгийг сонгох шаардлагатай
                        </ErrorMessage>
                      )}
                  </CheckboxGroupContainer>
                  <TextField
                    className="textField"
                    fullWidth
                    id="location"
                    name="location"
                    label="Талбайн байршил *"
                    value={props.values.location}
                    onChange={props.handleChange}
                    error={
                      props.touched.location && Boolean(props.errors.location)
                    }
                    helperText={
                      props.touched.phoneNumber && props.errors.location
                    }
                    size={"medium"}
                    fontSize={"0.9rem"}
                    style={{
                      gridColumn: "1 / span 2",
                    }}
                  />
                  <ContactMap handleMapClick={handleMapClick} />
                  <input
                    name="lat"
                    value={position.lat}
                    readOnly
                    style={{ display: "none" }}
                  />
                  <input
                    name="lng"
                    value={position.lng}
                    readOnly
                    style={{ display: "none" }}
                  />
                  <ReCAPTCHA
                    sitekey="6LdvLGIiAAAAAPs64aTnN3ZNa73QhohVdgnkHxZV"
                    style={{
                      transform:
                        window.innerWidth < 360 ? "scale(0.8)" : "scale(1)",
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    className="ContactBtn"
                  >
                    Илгээх
                  </Button>
                </Form>
              )}
            </Formik>
          </ContactForm>
        </SectionLayout>
      </SectionLayoutContainer>
    </ContactSection>
  );
});

const SubmitStatus = styled.div`
  position: fixed;
  left: 50%;
  top: -100%;
  opacity: 0;
  z-index: -1;
  width: fit-content;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  column-gap: 5px;
  background-color: ${(props) =>
    props.status === "success" ? "rgb(34, 144, 219)" : "rgb(255, 100, 100)"};
  padding: 12px 28px;
  font-size: 15px;
  color: #fff;
  animation: SSA 3500ms;
  @keyframes SSA {
    0% {
      top: 0;
      opacity: 0;
      z-index: -1;
    }
    5% {
      top: 70px;
      opacity: 1;
      z-index: 99999;
    }
    95% {
      top: 70px;
      opacity: 1;
      z-index: 99999;
    }
    100% {
      top: 0;
      opacity: 0;
      z-index: -1;
    }
  }
`;

const StyledTick = styled(TiTick)`
  /* font-size: 5px */
  font-size: 17px;
  padding: 2px;
  border-radius: 50%;
  background-color: rgba(0, 255, 0, 0.25);
  color: rgba(0, 255, 0, 0.7);
`;
const StyledClose = styled(TiTimes)`
  font-size: 17px;
  padding: 2px;
  border-radius: 50%;
  background-color: red;
  color: white;
`;

const ContactSection = styled(Section)``;
const SectionLayoutContainer = styled.div``;
const SectionLayout = styled.div``;
const SectionHeader = styled.div``;
const ContactForm = styled.div`
  padding: 0 15px;
`;
const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 20px;
  @media (min-width: 665px) {
    justify-content: space-between;
  }
`;
const Label = styled.label`
  display: flex;
  column-gap: 6px;
  font-size: 14px;
  letter-spacing: 0.00938em;
  align-items: center;
  user-select: none;
`;
const CheckboxGroupContainer = styled.div`
  grid-column: 1 / span 2;
`;
export const ContactLabel = styled.div`
  margin: 20px 0;
  font-weight: 500;
`;
const ErrorMessage = styled.p`
  color: #d32f2f;
  font-size: 0.72rem;
  margin: 6px 14px 0;
`;

export default Contact;
