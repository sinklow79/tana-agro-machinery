import { useState } from "react";
import styled from "styled-components";
import AvailableImages from "./AvailableImages";

import { TiTick } from "react-icons/ti";
import { FaTractor } from "react-icons/fa";
import { ReactComponent as BenefitSVG } from "../components/assets/icon/benefit.svg";

const ImplementModal = ({ data, handleOutsideClick }) => {
  
  let availableContent = [...data.images];
  if (data.video) availableContent.unshift(data.video);

  const [selectedContent, setSelectedContent] = useState(availableContent[0]);

  const handleImageClick = (path) => setSelectedContent(path);

  return (
    <>
      <ModalBackground onClick={handleOutsideClick} />
      <Modal className="SMD">
        <ModalMasked>
          <ModalGuides>
            <Guide />
            <Guide />
            <Guide />
            <Guide />
          </ModalGuides>
        </ModalMasked>
        <ModalContent>
          <Left>
            <SelectedContent>
              {["webm", "mp4", "ogg"].includes(
                selectedContent.slice(selectedContent.length - 3)
              ) ? (
                <SelectedVideo autoPlay controls muted id="displayedContent">
                  <source alt={data.name + "бичлэг"} src={selectedContent} />
                </SelectedVideo>
              ) : (
                <SelectedImg
                  alt={data.name}
                  src={selectedContent}
                  id="displayedContent"
                />
              )}
            </SelectedContent>
            <AvailableContent className="AvailableContent">
              <AvailableImages
                selectedImg={selectedContent}
                images={availableContent}
                handleImageClick={handleImageClick}
                modal={true}
                swiperClassName="SwiperImplementModal"
                spaceBetween={10}
                slidesPerView={"auto"}
                width={500}
              />
            </AvailableContent>
          </Left>
          <Right>
            <FeaturesBenefits>
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
            </FeaturesBenefits>
            <CompanyLogo target={"_blank"} href={data.web}>
              <img alt={data.company + "logo"} src={`${data.companyLogo}`} />
            </CompanyLogo>
          </Right>
        </ModalContent>
      </Modal>
    </>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 10, .4);
  width: 100%;
  height: 100vh;
  z-index: 9990;
`;
const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${window.innerWidth < 1000 ? `${window.innerWidth}px` : "1000px"};
  background-color: #fff;
  z-index: 9991;
  cursor: auto;
`;
const ModalMasked = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const ModalGuides = styled.div`
  position: absolute;
  top: 0;
  left: 30px;
  width: calc(100% - 60px);
  height: 100%;
  display: grid;
  grid: 1fr / repeat(3, 1fr);
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
const ModalContent = styled.div`
  width: calc(100% - 60px);
  height: 100%;
  padding: 15px 0;
  display: grid;
  grid: 1fr / repeat(3, 1fr);
  margin: 0 auto;
  position: relative;
  z-index: 1001;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 15px;
  max-width: 100%;
  grid-column: 1 / 3;
`;
const Right = styled.div`
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 20px;
`;
const SelectedContent = styled.div`
  max-width: 100%;
  border: 1px solid rgba(66, 71, 112, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const SelectedImg = styled.img`
  display: block;
  max-height: 400px;
`;
const SelectedVideo = styled.video`
  display: block;
  max-width: 100%;
  width: 100%;
  max-height: 400px;
`;
const AvailableContent = styled.div`
  max-width: 100%;
  width: 100%;
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
const FeaturesBenefits = styled.div``;
const CompanyLogo = styled.a`
  display: block;
  width: 80px;
  margin-left: auto;
`;
export default ImplementModal;
