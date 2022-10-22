import React, { memo, useEffect, useRef, useState } from "react";
import { Section } from "../components/GlobalStyles";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useLoaderData } from "react-router-dom";
import News from "../components/News";
import bgImg from "../components/assets/images/defaultImg.jfif";

export async function loader({ params }) {
  const data = require("../components/News.json");
  const exactData = data.find((obj) => obj.id === params.newsId);
  return exactData;
}

const NewsPage = memo(() => {
  // const renderCounter = useRef(0);
  // console.log(++renderCounter.current, "newsPage");
  const news = useLoaderData();
  const prevNews = useRef();
  if (!prevNews.current) prevNews.current = news.id;
  else if (prevNews.current !== news.id) window.location.reload();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <Navbar position={3} disable />
      <NewsSection bgColor="#f2f2fa">
        <SectionMasked>
          <SectionBackground className="container">
            <GuidesContainer>
              <Guide />
              <Guide />
            </GuidesContainer>
          </SectionBackground>
        </SectionMasked>
        <BGImg>
          <NewsTitle>{news.title}</NewsTitle>
        </BGImg>
        <Container>
          <NewsDate>{news.date}</NewsDate>
          {news.video && (
            <Video autoPlay controls>
              <source src={news.video} />
            </Video>
          )}
          <NewsText>{news.text ? news.text : news.description}</NewsText>
          {news.images && (
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="newsPageSwiper"
              loop={false}
            >
              {news.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <NewsImg alt={`${news.title} + зураг`} src={img} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Container>
      </NewsSection>
      <News />
    </>
  );
});

const NewsSection = styled(Section)`
  padding-top: 0;
  margin-top: 50px;
`;
const BGImg = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  z-index: 1;
  background: linear-gradient(
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.25)
    ),
    url(${bgImg}) center/cover no-repeat;
  /* margin-top: 50px; */
`;

const NewsTitle = styled.h1`
  font-size: 30px;
  padding: 0 15px;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  z-index: 1;
`;

const SectionMasked = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
const SectionBackground = styled.div`
  width: 100%;
  height: 100%;
`;
const GuidesContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
const Guide = styled.div`
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(66, 71, 112, 0.1),
    rgba(66, 71, 112, 0.1) 50%,
    transparent 0,
    transparent
  );
  background-size: 1px 8px;
  &:last-of-type {
    position: absolute;
    top: 0;
    right: 0px;
    background: rgba(66, 71, 112, 0.1);
    background-size: 0;
  }
  &:first-of-type {
    background: rgba(66, 71, 112, 0.1);
    background-size: 0;
  }
`;
const Container = styled.div`
  max-width: 680px;
  padding: 30px 15px 0;
  margin: auto;
  position: relative;
  z-index: 1;
`;
const Video = styled.video`
  max-width: 100%;
  padding: 0 15px;
`;
const NewsImg = styled.img``;

const NewsDate = styled.p`
  font-size: 13.5px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #000000aa;
  padding: 0 15px;
`;
const NewsText = styled.p`
  margin-top: 50px;
  line-height: 1.4;
  padding: 0 15px;
  font-size: 16.5px;
`;

export default NewsPage;
