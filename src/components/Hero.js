import React, { memo, useEffect, useRef } from "react";
import styled from "styled-components";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import "./Hero.css";
import { Section } from "./GlobalStyles";

const Hero = memo(({ setPos }) => {
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
      setPos(0);
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", calcSth);
    }

    return () => window.removeEventListener("scroll", calcSth);
  }, []);

  return (
    <HeroSection id="нүүр" ref={sectionRef}>
      <HeroGridContainer>
        <HeroGrid className="container">
          <Left>
            <Title>
              Сонгино, сармисын талбайн боловсруулалтын Солонгосын ХАА-н тоног
              төхөөрөмж, технологийг Монголд нутагшуулж байна.
            </Title>
            <SubTitle>
              Сармис, сонгинын талбайн бүтэн цикл үйлдвэрлэлийн бүтээмж өндөртөй
              орчин үеийн техник тоног төхөөрөмжийг борлуулах болон түрээслэх
              үйл ажиллагааг бид явуулдаг.
            </SubTitle>

            <CTALink href="#Холбоо-барих">
              <span>Бидэнтэй холбогдох</span>
            </CTALink>
          </Left>
          <Right>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="HeroSwiper"
              slidesPerView={1}
              loop
              autoplay={true}
            >
              <SwiperSlide>
                <img
                  alt="боловсруулсан талбай"
                  src={require("./assets/images/HeroImages/HeroImg6.jpg")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt="боловсруулсан талбай"
                  src={require("./assets/images/HeroImages/HeroImg1.jpg")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt="боловсруулсан талбай"
                  src={require("./assets/images/HeroImages/HeroImg2.jpg")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt="боловсруулсан талбай"
                  src={require("./assets/images/HeroImages/HeroImg3.jpg")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt="боловсруулсан талбай"
                  src={require("./assets/images/HeroImages/HeroImg4.jpg")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt="боловсруулсан талбай"
                  src={require("./assets/images/HeroImages/HeroImg5.jpg")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt="боловсруулсан талбай"
                  src={require("./assets/images/HeroImages/HeroImg0.jpg")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt="боловсруулсан талбай"
                  src={require("./assets/images/HeroImages/HeroImg7.jpg")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt="боловсруулсан талбай"
                  src={require("./assets/images/HeroImages/HeroImg8.jpg")}
                />
              </SwiperSlide>
            </Swiper>
          </Right>
        </HeroGrid>
      </HeroGridContainer>
      <Companies className="container">
        <img
          alt="greenmax company logo"
          src={require("./assets/images/CompanyLogos/gm-horizontal.png")}
        />
        <img
          alt="hada company logo"
          src={require("./assets/images/CompanyLogos/HADA-removed-bg.png")}
        />
      </Companies>
    </HeroSection>
  );
});

const HeroSection = styled(Section)`
  overflow-x: hidden;
  padding-top: 122px;
`;
const HeroGridContainer = styled.div`
  position: relative;
  @media (min-width: 1800px) {
    position: initial;
  }
`;
const HeroGrid = styled.div`
  @media (min-width: 1800px) {
    position: relative;
  }
`;
const Companies = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  margin-top: calc(72px + 5vw);
  img {
    width: 100px;
  }
`;
const Left = styled.div`
  position: relative;
  display: grid;
  row-gap: 32px;
  margin-bottom: 32px;
  @media (min-width: 1024px) {
  }
`;
const Right = styled.div`
  img {
    display: block;
  }
  @media (min-width: 820px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
  @media (min-width: 1024px) {
    top: 0;
    transform: translateY(0);
    right: 0;
  }
  @media (min-width: 1800px) {
    left: 700px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  max-width: 400px;
  font-weight: 500;
  line-height: 0.85;
  @media (min-width: 370px) {
    font-size: calc(35px + 1vw);
  }
  @media (min-width: 820px) {
    max-width: calc((100vw - 60px) / 2);
    min-height: 200px;
    display: flex;
    align-items: flex-end;
  }
  @media (min-width: 1024px) {
    max-width: 510px;
  }
  @media (min-width: 2000px) {
    font-size: 55px;
  }
`;
const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #425466;
  max-width: 540px;
  @media (min-width: 820px) {
    max-width: 400px;
    position: relative;
  }
`;
const CTALink = styled.a`
  text-transform: uppercase;
  font-size: 13px;
  padding: 15px 22px;
  font-weight: 600;
  letter-spacing: 1px;
  /* background-color: rgb(232, 52, 13); */
  border: 4px solid rgb(232, 52, 13);
  width: max-content;
  color: rgb(232, 52, 13);
  transition: 300ms ease;
  box-shadow: 2px 2px 5px 1px rgba(50, 0, 0, 0.3);
  position: relative;

  span {
    position: relative;
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    z-index: 1;
    transition: 250ms ease;
    background-color: rgb(232, 52, 13);
  }
  &:hover {
    color: #fff;
    &:after {
      width: 100%;
    }
  }
  @media (min-width: 600px) {
    font-size: 14px;
    padding: 16px 24px;
  }
`;

export default Hero;
