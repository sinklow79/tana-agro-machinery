import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NewsArticle = memo((news) => {
  const linkName = news.news.title.replace(/ /g, "-");
  return (
    <NewsArticleContainer
      img={news.news.mainImg ? news.news.mainImg : news.news.defaultImg}
    >
      <NewsTitle>{news.news.title}</NewsTitle>
      <NewsDate>{news.news.date}</NewsDate>
      <NewsDescription>{news.news.description}</NewsDescription>
      <Link to={`мэдээ/${linkName}`}>
        <NewsButton>Унших</NewsButton>
      </Link>
    </NewsArticleContainer>
  );
});

const NewsButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  z-index: 0;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  background-color: rgb(232, 52, 13);
  transition: 250ms ease;
  color: #fff;
`;

const NewsArticleContainer = styled.article`
  background-color: #f2f2fa;
  padding: 40px 15px;
  padding: calc(calc(100% - 275px) * 0.1 + 40px) 15px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  position: relative;
  letter-spacing: 0.5px;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.6)),
    ${(props) => `url(${props.img})`} no-repeat center/cover;
  color: white;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 0;
    transition: 250ms ease;
  }

  &:hover {
    ${NewsButton} {
      transform: translate(-50%, -50%) scale(1);
      z-index: 1;
    }
    &::after {
      left: 0;
    }
  }
`;
const NewsTitle = styled.h3`
  font-size: 17px;
  font-weight: 500;
`;
const NewsDate = styled.p`
  font-size: 11px;
  color: #ffffffcc;
`;
const NewsDescription = styled.p`
  font-size: 12px;
  line-height: 1.4;
  margin-top: 8px;
`;

export default NewsArticle;
