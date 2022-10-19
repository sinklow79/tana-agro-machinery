import React, { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import implementData from "../components/implements.json";
import AvailableImages from "../components/AvailableImages";
import { ReactComponent as BenefitSVG } from "../components/assets/icon/benefit.svg";
import { TiTick } from "react-icons/ti";
import { FaTractor } from "react-icons/fa";
import { Main } from "../components/GlobalStyles";

const Implements = ({ name }) => {
  const data = useMemo(() => {
    for (let i = 0; i < implementData.length; i++) {
      if (implementData[i].name === name) {
        return implementData[i];
      }
    }
  }, [name]);
  const [selectedImg, setSelectedImg] = useState(data.images[0]);
  const handleImageClick = (path) => {
    setSelectedImg(path);
  };

  return (
    <>
      <Navbar />
      <Main style={{marginTop: "50px"}} id="#home">
        {data.video && (
          <ImplementVideoContainer>
            <ImplementVideo autoPlay muted>
              <source src={`${data.video}`} alt={name + "бичлэг"} />
            </ImplementVideo>
            <Skeleton />
          </ImplementVideoContainer>
        )}
        <ImplementImages>
          <div className="container">
            <ImplementTitle>{data.name}</ImplementTitle>
            <ImgCollection>
              <BigImgContainer>
                <BigImg alt={name} src={`${selectedImg}`} />
                <Skeleton />
              </BigImgContainer>
              <AvailableImages
                alt={name}
                selectedImg={selectedImg}
                images={data.images}
                handleImageClick={handleImageClick}
                swiperClassName="availableImgSwiper"
              />
            </ImgCollection>
          </div>
        </ImplementImages>
        <FeaturesBenefits>
          <div className="container">
            <Padding>
              <FeaturesTitleContainer>
                <FeaturesTitle company={data.company}>
                  Онцлох чанарууд
                </FeaturesTitle>
                <BenefitSVG
                  fill={
                    data.company === "greenmax"
                      ? "rgb(232, 52, 13)"
                      : "rgb(33, 131, 199)"
                  }
                  style={{ width: "40px", height: "40px" }}
                />
              </FeaturesTitleContainer>
              <FeaturesBenefitsUl>
                {data.benefits.map((benefit) => (
                  <FeaturesBenefitsLi key={benefit}>
                    <TiTick
                      className="tick-list"
                      style={{
                        fill:
                          data.company === "greenmax"
                            ? "rgb(232, 52, 13)"
                            : "rgb(33, 131, 199)",
                        width: "16px",
                        height: "16px",
                        padding: "2px",
                        borderRadius: "50%",
                        backgroundColor:
                          data.company === "greenmax"
                            ? "rgba(232, 52, 13, .2)"
                            : "rgba(33, 131, 199, .2)",
                        fontSize: "5px",
                        transform: "translateY(2px)",
                        marginRight: "9px",
                      }}
                    />
                    {benefit}
                  </FeaturesBenefitsLi>
                ))}
              </FeaturesBenefitsUl>
              {data.tractor && (
                <>
                  <FeaturesTitleContainer>
                    <FeaturesTitle company={data.company}>
                      Чирэх трактор
                    </FeaturesTitle>
                  </FeaturesTitleContainer>
                  <FeaturesBenefitsLi>
                    <FaTractor
                      style={{
                        fill: "rgb(232, 52, 13)",
                        width: "16px",
                        height: "16px",
                        fontSize: "5px",
                        transform: "translateY(2px)",
                        marginRight: "9px",
                      }}
                    />
                    {data.tractor}
                  </FeaturesBenefitsLi>
                </>
              )}
            </Padding>
          </div>
          <CompanyLogo target={"_blank"} href={data.web}>
            <img alt={data.company + "logo"} src={`${data.companyLogo}`} />
          </CompanyLogo>
        </FeaturesBenefits>
      </Main>
    </>
  );
};
const Padding = styled.div`
  padding: 0 15px;
`;
const ImplementImages = styled.div`
  background-color: #f2f2f5;
  padding: 32px 0;
`;
const ImplementVideoContainer = styled.div`
  width: 100%;
  position: relative;
`;
const ImplementVideo = styled.video`
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
`;
const Skeleton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(190, 190, 195, 0.2);
  animation: skeleton 1s linear infinite alternate;
  @keyframes skeleton {
    0% {
      background-color: rgba(190, 190, 195, 0.2);
    }
    100% {
      background-color: rgba(170, 170, 175, 0.8);
    }
  }
`;
const ImplementTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 32px;
`;
const ImgCollection = styled.div``;
const BigImgContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 150px;
`;
const BigImg = styled.img`
  /* border: 1px solid rgb(195, 195, 195); */
  position: relative;
  display: block;
  box-shadow: 0 1px 5px 1px rgb(0 0 0 / 10%);
  background-color: #fff;
  padding: 20px 15px;
  z-index: 2;
`;
const FeaturesBenefits = styled.div`
  padding: 36px 0;
`;
const FeaturesBenefitsUl = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-bottom: 30px;
`;
const FeaturesBenefitsLi = styled.li`
  font-size: 15px;
  font-weight: 300;
  color: #425466;
  line-height: 1.6;
`;
const FeaturesTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
const FeaturesTitle = styled.h3`
  font-size: 16px;
  font-weight: 425;
  line-height: 1.6;
  letter-spacing: 0.5px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translateY(-50%);
    width: 1px;
    height: 13px;
    background-color: ${(props) =>
      props.company === "greenmax" ? "rgb(232, 52, 13)" : "rgb(33, 131, 199)"};
  }
`;
const CompanyLogo = styled.a`
  display: block;
  width: 80px;
  margin: 50px auto 0;
`;
export default Implements;
