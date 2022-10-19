import React from "react";
// STYLED
import styled from "styled-components";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const AvailableImages = ({
  selectedImg,
  images,
  handleImageClick,
  modal,
  swiperClassName,
  spaceBetween,
  slidesPerView,
  width,
}) => {
  let swiperUse;
  if (width) {
    if (images.length > 6) {
      swiperUse = true;
    } else {
      swiperUse = false;
    }
  } else {
    if (images.length > 3) swiperUse = true;
    else swiperUse = false;
  }
  return (
    <>
      {swiperUse ? (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          // className="available-img-swiper"
          className={swiperClassName}
          slidesPerView={slidesPerView ? slidesPerView : 3}
          loop
          spaceBetween={spaceBetween ? spaceBetween : 12}
          allowTouchMove={false}
        >
          {images.map(
            (path) =>
              path !== selectedImg && (
                <SwiperSlide key={path} onClick={() => handleImageClick(path)}>
                  <Span></Span>
                  {["webm", "mp4", "ogg"].includes(
                    path.slice(path.length - 3)
                  ) ? (
                    <AvailableVideo>
                      <source src={path} alt="төхөөрөмж бичлэг" />
                    </AvailableVideo>
                  ) : (
                    <AvailableImg src={`${path}`} alt="төхөөрөмж зураг" />
                  )}
                  <Skeleton />
                </SwiperSlide>
              )
          )}
        </Swiper>
      ) : (
        <AvailableImagesContainer>
          {images.map(
            (path) =>
              path !== selectedImg && (
                <AvailableImageContainer
                  key={path}
                  onClick={() => handleImageClick(path)}
                  modal={modal}
                >
                  <Span></Span>
                  {["webm", "mp4", "ogg"].includes(
                    path.slice(path.length - 3)
                  ) ? (
                    <AvailableVideo>
                      <source src={path} alt="төхөөрөмж бичлэг" />
                    </AvailableVideo>
                  ) : (
                    <AvailableImg src={`${path}`} alt="төхөөрөмж зураг" />
                  )}
                  <Skeleton />
                </AvailableImageContainer>
              )
          )}
        </AvailableImagesContainer>
      )}
    </>
  );
};

const Skeleton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 80%;
  transform: translate(-50%, -50%);
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

const Span = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 70%;
`;
const AvailableImg = styled.img`
  position: absolute;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: #fff;
`;
const AvailableImagesContainer = styled.div`
  display: flex;
  column-gap: 12px;
  margin-top: 1rem;
`;
const AvailableImageContainer = styled.div`
  background-color: #fff;
  border: 1px solid rgb(195, 195, 195);
  max-width: 100px;
  cursor: pointer;
  width: ${(window.innerWidth - 54) / 3}px;
  position: relative;
  overflow: hidden;
`;
const AvailableVideo = styled.video`
  position: absolute;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 2;
`;
export default AvailableImages;
