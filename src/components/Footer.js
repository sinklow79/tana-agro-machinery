import React from "react";
import {
  paddingSides,
  Section,
  SectionContainer,
  SectionMasked,
  TAMLogo,
} from "./GlobalStyles";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
/*
    1. location of our office
    2. socials
    3. the date our company was created
    logo                                                           socials
    location                                                                                           
    © 2022 Cable News Network.
    All Rights Reserved.
*/

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const navigate = useNavigate();
  return (
    <footer>
      <FooterSection as="div">
        <SectionMasked />
        <SectionContainer>
          <FooterContainer className="container">
            <FooterCompanyInfo>
              <FooterCompanyLogo href="#нүүр" onClick={() => {
                if (window.location.pathname !== '/') {
                  navigate("/#нүүр");
                }
              }}>
                <TAMLogo />
              </FooterCompanyLogo>
              <p>ЧД 3-р хороо, Улаанбаатар хот, ОРШИЛ-2 оффис, 302 тоот</p>
            </FooterCompanyInfo>
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
        </SectionContainer>
      </FooterSection>
      <Copyright>
        <p>
          &#169; {year} <span>TANA AGRO MACHINERY</span>. All rights reserved.
        </p>
      </Copyright>
    </footer>
  );
};

const Copyright = styled.div`
  padding: 36px ${paddingSides}px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  border-top: 1px solid #f2f2fa;
  max-width: 1020px;
  margin: 0 auto;
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
const StyledFBLogo = styled(FaFacebookF)`
  fill: #fff;
  font-size: 37px;
  transition: 200ms;
  background-color: #4267b2;
  padding: 10px;
  &:hover {
    transform: scale(1.05);
  }
`;

const Socials = styled.a``;

const FooterCompanyLogo = styled.a`
  width: fit-content;
  margin-bottom: 15px;
`;

const FooterSection = styled(Section)`
  padding: 36px 0;
  border-top: 1px solid #f2f2fa;
`;

const FooterContainer = styled.div`
  display: grid;
  row-gap: 35px;
  position: relative;
  z-index: 1;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const FooterSocials = styled.div`
  padding: 0 ${paddingSides}px;
  display: flex;
  align-items: end;
  @media (min-width: 900px) {
    grid-column: 4 / 5;
  }
`;
const FooterCompanyInfo = styled.div`
  font-size: 14px;
  padding: 0 ${paddingSides}px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export default Footer;
