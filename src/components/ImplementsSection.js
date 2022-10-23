import React, { memo, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  paddingSides,
  Section,
  SectionContainer,
  SectionMasked,
  SectionTitle,
} from "./GlobalStyles.js";
import ImplementCard from "./ImplementCard.js";
import implementsJSON from "./implements.json";
import greenmaxCatalog from "./assets/other/Greenmax catalog.pdf";
import { BiChevronRight } from "react-icons/bi";
import catalogThumbnail from "./assets/images/CatalogueImg.png";

const ImplementsSection = memo(({ setPos }) => {
  // const renderCounter = useRef(0);
  // console.log(++renderCounter.current);
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
      setPos(2);
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", calcSth);
    }
    return () => window.removeEventListener("scroll", calcSth);
  }, []);

  return (
    <StyledSection id="төхөөрөмжүүд" bgColor="#f2f2fa" ref={sectionRef}>
      <SectionMasked />
      <SectionContainer>
        <SectionLayoutContainer className="container">
          <SectionTitle>Төхөөрөмжүүд</SectionTitle>
          <ImplementCardContainer>
            {implementsJSON &&
              implementsJSON.map((obj) => (
                <ImplementCard obj={obj} key={obj.id} />
              ))}
          </ImplementCardContainer>
            <CatalogueCardContainer href={greenmaxCatalog} download>
              <CatalogTitle href={greenmaxCatalog} download>
                Каталог татах
                <CatalogLinkSpan />
                <StyledChevronRight />
              </CatalogTitle>
              <ImgContainer>
                <CatalogImg alt={"Каталог зураг"} src={`${catalogThumbnail}`} />
              </ImgContainer>
            </CatalogueCardContainer>
        </SectionLayoutContainer>
      </SectionContainer>
    </StyledSection>
  );
});
const StyledSection = styled(Section)`
  z-index: 2;
`;

const StyledChevronRight = styled(BiChevronRight)`
  position: absolute;
  right: -2px;
  top: 52%;
  transform: translateY(-50%);
  color: #0a2540;
  stroke-width: 2px;
  transition: 300ms ease-in-out;
`;
const CatalogLinkSpan = styled.span`
  position: absolute;
  width: 0;
  height: 2.5px;
  background-color: #0a2540;
  transition: 300ms ease-in-out;
  top: 52%;
  left: calc(100% - 7.5px);
  transform: translateY(-50%);
`;
const CatalogImg = styled.img`
  width: 100%;
  display: block;
  transition: 300ms ease-in-out;
`;
const CatalogueCardContainer = styled.a`
  display: block;
  width: fit-content;
  padding: 0 ${paddingSides}px;
  margin-top: 20px;
  @media (min-width: 600px) {
    margin-top: 30px;
  }
  &:hover {
    ${CatalogLinkSpan} {
      width: 8px;
    }
    ${StyledChevronRight} {
      right: -9.5px;
    }
    ${CatalogImg} {
      transform: scale(1.1);
    }
  }
`;
const ImgContainer = styled.div`
  width: 150px;
  overflow: hidden;
`
const CatalogTitle = styled.h3`
  height: fit-content;
  width: fit-content;
  display: inline-block;
  position: relative;
  font-weight: 500;
  font-size: 17px;
  padding-right: 20px;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.92);
  @media (min-width: 768px) {
    font-size: 18.5px;
  }
`;
const SectionLayoutContainer = styled.div`
  position: relative;
  z-index: 1;
`;
const ImplementCardContainer = styled.div`
  display: grid;
  gap: 20px;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
  padding: 0 ${paddingSides}px;
`;

export default ImplementsSection;
