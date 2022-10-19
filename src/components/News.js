import React, { memo, useEffect, useRef } from "react";
import { Section, SectionMasked, SectionTitle } from "./GlobalStyles";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import newsJSON from "./News.json";
import NewsArticle from "./NewsArticle";
import { Navigation } from "swiper";

const News = memo(({ setPos }) => {

  const slidesPerView =
    window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 4;
  const spaceBetween = window.innerWidth < 600 ? 15 : 15;

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
      setPos(4);
    }
  };

  useEffect(() => {
    if (sectionRef.current) {
      window.addEventListener("scroll", calcSth);
    }
  }, []);

  return (
    newsJSON[0].title && (
      <NewsSection id="Мэдээ" ref={sectionRef}>
        <SectionMasked />
        <SectionContainer className="container">
          <NewsContainer>
            <SectionTitle>Мэдээ</SectionTitle>
            <NewsLayout>
              <Swiper
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                navigation={true}
                modules={[Navigation]}
                className="newsSwiper"
              >
                {newsJSON.map((news, idx) => (
                  <SwiperSlide key={news.description + news.title + idx}>
                    <NewsArticle news={news} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </NewsLayout>
          </NewsContainer>
        </SectionContainer>
      </NewsSection>
    )
  );
});

const NewsSection = styled(Section)`
  border-bottom: 1px solid #f2f2fa;
`;
const SectionContainer = styled.div``;
const NewsContainer = styled.div``;
const NewsLayout = styled.div`
  padding: 0 ${window.innerWidth < 600 ? "15px" : "7.5px"};
`;

export default News;
