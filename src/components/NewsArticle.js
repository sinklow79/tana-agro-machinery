import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import defaultImg from "./assets/images/onion.jpg";

const NewsArticle = memo((news) => {
  const newsData = news.news;
  return (
    <Link to={`/medee/${newsData.id}`} alt={newsData.title + "мэдээ"}>
      <NewsArticleContainer>
        <ImgContainer>
          <img
            src={newsData.mainImg ? newsData.mainImg : defaultImg}
            alt={news.title + "зураг"}
          />
        </ImgContainer>
        <Data>
          <NewsTitle>{newsData.title}</NewsTitle>
          <NewsDate>{newsData.date}</NewsDate>
          <NewsDescription>{newsData.description}</NewsDescription>
        </Data>
      </NewsArticleContainer>
    </Link>
  );
});
const ImgContainer = styled.div`
  width: 100%;
  max-height: 130px;
  overflow: hidden;
  img {
    display: block;
    transition: 250ms ease;
  }
`;
/*
  padding: calc(calc(100% - 275px) * 0.1 + 40px) 15px
    calc(calc(100% - 275px) * 0.1 + 30px) 15px;
*/
const Data = styled.div`
  padding: calc(20px + 1%) calc(15px + 1%) 0;
  color: white;
  letter-spacing: 0.5px;
`;

const NewsArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #636369;
  box-shadow: 0 10px 10px -5px #63636970;
  border: 1px solid #d3d3d9;
  border-bottom: 0;
  transition: 250ms ease;

  &:hover {
    box-shadow: 0 15px 20px -5px #636369a0, 0 -1px 20px -5px #636369a0;
    ${ImgContainer} {
      img {
        transform: scale(1.08);
      }
    }
  }
`;
const NewsTitle = styled.h3`
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 8px;
`;
const NewsDate = styled.p`
  font-size: 11px;
  color: #ffffffcc;
`;
const NewsDescription = styled.p`
  font-size: 12px;
  line-height: 1.4;
  margin-top: 25px;
  padding: calc(25px + 1%) 0;
  border-top: 1px solid #fff;
`;

export default NewsArticle;
