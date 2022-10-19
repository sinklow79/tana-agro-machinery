import styled from "styled-components";

export const Section = styled.section`
  padding: calc(72px + 3vw) 0;
  position: relative;
  background-color: ${(props) => props.bgColor && props.bgColor};
  z-index: 1;
`;

export const Main = styled.main`
`;

export const SectionTitle = styled.h2`
  padding-left: 15px;
  padding-bottom: 25px;
  font-size: 20px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 34px;
    padding-bottom: 50px;
  }
`;
export const SectionCaption = styled.h3`
  position: relative;
  /* font: 400 18px/1.55; */
  font-size: 15px;
  font-weight: 400;
  line-height: 1.55;
  padding: 0 15px;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 1px;
    height: 13px;
    background-color: rgb(232, 52, 13);
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
export const SectionMasked = () => {
  return (
    <SectionBackgroundMasked>
      <SectionBackground className="container">
        <GuidesContainer>
          <Guide />
          <Guide />
          <Guide />
          <Guide />
          <Guide />
        </GuidesContainer>
      </SectionBackground>
    </SectionBackgroundMasked>
  );
};

const SectionBackgroundMasked = styled.div`
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
  display: grid;
  height: 100%;
  width: 100%;
  grid: 1fr / 1fr;
  @media (min-width: 600px) {
    grid: 1fr / repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid: 1fr / repeat(4, 1fr);
  }
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
