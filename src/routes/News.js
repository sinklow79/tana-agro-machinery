import React, { memo } from "react";
import { Main, Section, SectionMasked } from "../components/GlobalStyles";
import Navbar from "../components/Navbar";
import newsJSON from "../components/News.json";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Footer from "../components/Footer";

const News = memo(({ id }) => {
  let newsObj;
  for (let i = 0; i < newsJSON.length; i++) {
    if (newsJSON[i].id === id) {
      newsObj = newsJSON[i];
      break;
    }
  }

  return (
    <>
      <Navbar />
      <Main>
        <Section>
          <SectionMasked />
          <SectionContainer className="container">
            <ColumnLayout>
              <Left>
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="newsPageSwiper"
                  loop={false}
                >
                  {newsObj.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <NewsImg alt={`${newsObj.title} + зураг`} src={img} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Left>
              <Right>
                <NewsTitle>{newsObj.title}</NewsTitle>
                <NewsDate>{newsObj.date}</NewsDate>
                <NewsText>{newsObj.text}</NewsText>
              </Right>
            </ColumnLayout>
          </SectionContainer>
        </Section>
      </Main>
      <Footer />
    </>
  );
});
const SectionContainer = styled.div`
  position: relative;
  z-index: 1;
`;
const ColumnLayout = styled.div`
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const Left = styled.div``;
const NewsImg = styled.img``;
const Right = styled.div`
  padding: 0 15px;
  letter-spacing: 0.5px;
  margin-top: 72px;
  @media (min-width: 600px) {
    margin-top: 0;
  }
`;
const NewsTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 5px;
`;
const NewsDate = styled.p`
  font-size: 12px;
  color: #000000cc;
`;
const NewsText = styled.p`
  margin-top: 50px;
  line-height: 1.4;
  font-size: 16.5px;
`;

export default News;
