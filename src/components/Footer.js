import React from "react";
import { Section, SectionMasked } from "./GlobalStyles";
import styled from "styled-components";
import { ReactComponent as CompanyLogo } from "./assets/icon/tana-lab-logo-removebg-preview.svg";
import { AiFillFacebook } from "react-icons/ai";
/*
    1. location of our office
    2. socials
    3. the date our company was created
*/

const Footer = () => {
  return (
    <FooterSection as="footer">
      <SectionMasked />
      <FooterContainer className="container">
        <FooterCompanyInfo>
          <p>&#169; 2020 - 2022 <span>Tana Agro Machinery</span></p>
        </FooterCompanyInfo>
        <FooterCompanyLogo href="#home">
          <CompanyLogo
            style={{
              height: "40px",
              width: "40px",
              marginBottom: "-3px",
            }}
          />
        </FooterCompanyLogo>
        <FooterSocials>
          <Socials
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100063638048135"
          >
            <StyledFBLogo />
          </Socials>
        </FooterSocials>
      </FooterContainer>
    </FooterSection>
  );
};

const StyledFBLogo = styled(AiFillFacebook)`
  fill: #000;
  font-size: 30px;
  transition: 200ms;
  &:hover {
    transform: scale(1.01);
  }
`;

const Socials = styled.a``;

const FooterCompanyLogo = styled.a`
  width: fit-content;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

const FooterSection = styled(Section)`
  padding: 36px 0;
  border-top: 1px solid #f2f2fa;
`;

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
`;
const FooterSocials = styled.div`
  padding-right: 11px;
  @media (min-width: 900px) {
    grid-column: 4 / span 5;
  }
`;
const FooterCompanyInfo = styled.div`
  font-size: 12px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  color: #a0a0a0;

  max-width: calc(calc(100vw - 60px) / 3);

  span {
    font-size: 14px;
    color: #000;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 900;
    display: inline-block;
    margin-left: 3px;
  }
`;

export default Footer;
