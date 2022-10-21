import React, { memo, useEffect, useRef } from "react";
import { Section, SectionMasked, SectionTitle } from "./GlobalStyles";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import newsJSON from "./News.json";
import NewsArticle from "./NewsArticle";
import { Navigation } from "swiper";

const News = memo(({ setPos }) => {
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
      setPos(3);
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 768 && setPos) {
      window.addEventListener("scroll", calcSth);
    }
    return () => window.removeEventListener("scroll", calcSth);
  }, []);

  return (
    <NewsSection id="мэдээ" ref={sectionRef}>
      <SectionMasked />
      <SectionContainer className="container">
        <NewsContainer>
          <SectionTitle>Мэдээ</SectionTitle>
          <NewsLayout>
            <Swiper
              spaceBetween={15}
              slidesPerView={1}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 4,
                },
              }}
              navigation={true}
              modules={[Navigation]}
              updateOnWindowResize={true}
              resizeObserver={true}
              observer={true}
              observeParents={true}
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
  );
});

const NewsSection = styled(Section)`
  border-top: 1px solid #f2f2fa;
`;
const SectionContainer = styled.div``;
const NewsContainer = styled.div``;
const NewsLayout = styled.div`
  padding: 0 ${window.innerWidth < 600 ? "15px" : "7.5px"};
`;

export default News;
