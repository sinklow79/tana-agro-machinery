import React, { memo, useEffect } from "react";
import { Section } from "../components/GlobalStyles";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useLoaderData } from "react-router-dom";
import News from "../components/News";

export async function loader({ params }) {
  const data = require("../components/News.json");
  const exactData = data.find((obj) => obj.id === params.newsId);
  return exactData;
}

const NewsPage = memo(() => {
  const news = useLoaderData();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <Navbar position={4} disable />
      <Section bgColor="#f2f2fa">
        <SectionMasked>
          <SectionBackground className="container">
            <GuidesContainer>
              <Guide />
              <Guide />
            </GuidesContainer>
          </SectionBackground>
        </SectionMasked>
        <Container>
          <NewsTitle>{news.title}</NewsTitle>
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
      </Section>
      <News />
    </>
  );
});

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
  padding: 0 15px;
  margin: auto;
  position: relative;
  z-index: 1;
`;
const Video = styled.video`
  max-width: 100%;
`;
const NewsImg = styled.img``;
const NewsTitle = styled.h1`
  font-size: 30px;
  /* text-align: center; */
  margin-bottom: 50px;
`;
const NewsDate = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
  color: #000000aa;
  /* text-align: center; */
`;
const NewsText = styled.p`
  margin-top: 50px;
  line-height: 1.4;
  font-size: 16.5px;
`;

export default NewsPage;
