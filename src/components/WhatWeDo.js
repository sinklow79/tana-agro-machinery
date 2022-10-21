import { memo, useEffect, useRef } from "react";
import { ReactComponent as WWDIcon1 } from "./assets/icon/WWD1.svg";
import { ReactComponent as WWDIcon2 } from "./assets/icon/WWD2.svg";
import { ReactComponent as WWDIcon4 } from "./assets/icon/WWD4.svg";
import WWDIcon3 from "./assets/icon/WWD3.png";
import styled from "styled-components";
import { Section, SectionMasked, SectionTitle } from "./GlobalStyles";

const WhatWeDo = memo(({ setPos }) => {
  // const renderCounter = useRef(0);
  // console.log(++renderCounter.current);
  const sectionRef = useRef();

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
      setPos(1);
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", calcSth);
    }
    return () => window.removeEventListener("scroll", calcSth);
  }, []);

  return (
    <Section id="тухай" ref={sectionRef}>
      <SectionMasked />
      <SectionContainer className="container">
        <WWDSectionTitle>Ягаад бидэнтэй ажиллана гэж?</WWDSectionTitle>
        <WWDGridContainer>
          <WWD>
            <WWDIcon1
              width={window.innerWidth < 1024 ? "35px" : "58px"}
              height={window.innerWidth < 1024 ? "35px" : "43px"}
              className="WWDIcon1"
            />
            <h3>Илүү төхөөрөмжүүд</h3>
            <p>
              Бид өндөр хөгжилтэй Солонгос орны хөдөөн аж ахуйн төхөөрөмж
              үйлдвэрлэдэг Greenmax компаний албан ёсны борлуулагч болон
              түрээслэгч юм.
            </p>
          </WWD>
          <WWD>
            <WWDIcon2 width={window.innerWidth < 1024 ? "30px" : "42px"} />
            <h3>Илүү хөрс боловсруулалт</h3>
            <p>
              Бид хөрс боловсруулалтын иж бүрдэлээрээ таны хөрсийг өндөр
              стандартаар хагалж бэлдэх болно.
            </p>
          </WWD>
          <WWD>
            <img
              src={WWDIcon3}
              width={window.innerWidth < 1024 ? "30px" : "42px"}
              fill="#000000"
              style={{ fill: "#000000 !important" }}
              className="svgg"
              alt=""
            />
            <h3>Илүү тариалалт</h3>
            <p>
              Бид сонгино, сармисны үр сортлогч болон таригчаар таны үрийг
              хурдан, нэгэн жигд үрлэнэ.
            </p>
          </WWD>
          <WWD>
            <WWDIcon4 width={window.innerWidth < 1024 ? "30px" : "42px"} />
            <h3>Илүү хураалт</h3>
            <p>
              Та ийнхүү бидний төхөөрөмжүүдийг ашигласнаар илүү ургац авахад
              олон алхам ойртох юм.
            </p>
          </WWD>
        </WWDGridContainer>
      </SectionContainer>
    </Section>
  );
});
const SectionContainer = styled.div`
  position: relative;
  z-index: 1;
`;
const WWDSectionTitle = styled(SectionTitle)`
  @media (min-width: 600px) {
    padding-bottom: 70px;
  }
`;
const WWDGridContainer = styled.div`
  display: grid;
  row-gap: 30px;
  position: relative;
  z-index: 1;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const WWD = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  border-radius: 20px;
  transition: 250ms ease-in-out;
  padding: 0 15px;
  @media (min-width: 600px) {
    padding: 0 30px 0 15px;
  }
  h3 {
    margin-top: 10px;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0.5px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -15px;
      transform: translateY(-50%);
      width: 1px;
      height: 13px;
      background-color: rgb(232, 52, 13);
    }
  }
  p {
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 1.5;
    font-size: 15px;
  }
  &:hover {
    img,
    svg {
      transition: inherit;
      transform: scale(1.06);
    }
  }
`;

export default WhatWeDo;
