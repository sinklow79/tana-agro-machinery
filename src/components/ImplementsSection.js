import React, { useState, memo, useEffect, useRef } from "react";
import styled from "styled-components";
import { Section, SectionMasked, SectionTitle } from "./GlobalStyles.js";
import ImplementCard from "./ImplementCard.js";
import implementsJSON from "./implements.json";
import greenmaxCatalog from "./assets/other/Greenmax catalog.pdf";
import { BiChevronRight } from "react-icons/bi";

const ImplementsSection = memo(({ setPos }) => {
  const [open, setOpen] = useState(false);
  const handleClick1 = () => setOpen(!open);

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
    window.addEventListener("scroll", calcSth);

    return () => window.removeEventListener("scroll", calcSth);
  }, []);

  return (
    <StyledSection
      id="Төхөөрөмжүүд"
      bgColor="#f2f2fa"
      open={open}
      ref={sectionRef}
    >
      <SectionMasked />
      <SectionContainer className="container">
        <SectionTitle>Төхөөрөмжүүд</SectionTitle>
        <ImplementCardContainer>
          {implementsJSON &&
            implementsJSON.map((obj) => (
              <ImplementCard
                obj={obj}
                key={obj.id}
                handleClick1={handleClick1}
                open={open}
              />
            ))}
        </ImplementCardContainer>
        <CatalogLink href={greenmaxCatalog} download>
          Каталог татах
          <CatalogLinkSpan />
          <StyledChevronRight />
        </CatalogLink>
      </SectionContainer>
    </StyledSection>
  );
});
const StyledSection = styled(Section)`
  z-index: ${(props) => (props.open ? 2 : 1)};
`;
const StyledChevronRight = styled(BiChevronRight)`
  vertical-align: middle;
  margin-left: -8px;
  color: #0a2540;
  stroke-width: 2px;
`;
const CatalogLinkSpan = styled.span`
  display: inline-block;
  width: 0;
  height: 2px;
  background-color: #0a2540;
  vertical-align: middle;
  margin-left: 7px;
  transition: 250ms ease;
`;
const CatalogLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  color: #0a2540;
  padding: 3px 15px;
  font-weight: 425;
  font-size: 15px;
  color: inherit;
  &:hover {
    ${CatalogLinkSpan} {
      width: 6px;
    }
  }
`;
const SectionContainer = styled.div`
  position: relative;
  z-index: 1;
`;
const ImplementCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  row-gap: 20px;
  column-gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  padding: 0 15px;
`;

export default ImplementsSection;
