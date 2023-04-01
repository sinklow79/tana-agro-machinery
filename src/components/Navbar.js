import React, { useState, useRef, memo, useCallback } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  companyThemeColor1,
  companyThemeColor2,
  navHeight,
  paddingSides,
  TAMLogo,
} from "./GlobalStyles";

const Navbar = memo(({ position, disable }) => {
  // const renderCounter = useRef(0);
  // console.log(++renderCounter.current);
  const [menuOpen, setMenuOpen] = useState(false);
  const linkRef2 = useRef(null);
  const linkRef3 = useRef(null);
  const linkRef4 = useRef(null);
  const linkRef5 = useRef(null);

  const [bottomPosition, setBottomPosition] = useState(0);
  const [linkClicked, setLinkClicked] = useState(null);
  const [linkWidths, setLinkWidths] = useState([0, 0, 0, 0, 0]);
  const navigate = useNavigate();
  const curPath = window.location.pathname;
  const handleLinkClick = useCallback(
    (path, pos) => {
      if (window.innerWidth < 768) setMenuOpen(false);
      if (curPath !== "/") {
        navigate(path);
      }
      if (position !== bottomPosition) {
        setLinkClicked(pos);
      }
    },
    [bottomPosition, curPath, navigate, position]
  );

  useEffect(() => {
    const linkWidthsInterval = setTimeout(() => {
      setLinkWidths([
        0,
        linkRef2.current.offsetWidth,
        linkRef3.current.offsetWidth,
        linkRef4.current.offsetWidth,
        linkRef5.current.offsetWidth,
      ]);
    }, 1000);

    return () => clearTimeout(linkWidthsInterval);
  }, []);

  useEffect(() => {
    if (disable) {
      setBottomPosition(position);
    } else if (linkClicked !== null && position === linkClicked) {
      setLinkClicked(null);
    } else if (!linkClicked) {
      if (bottomPosition !== position) {
        setBottomPosition(position);
      }
    }
  }, [position, linkClicked]);
  const leftCalculator = (position, linkWidths) => {
    if (!position) return 0;
    let left = 7.5;
    for (let i = 0; i < position; i++) {
      left += linkWidths[i];
    }
    return left;
  };

  return (
    <Nav menuOpen={menuOpen}>
      <NavBar className="container" pos={position}>
        <NavCompany href="#нүүр" onClick={() => handleLinkClick("/#нүүр", 0)}>
          <StyledNavLogo />
        </NavCompany>
        <NavMenu menuOpen={menuOpen}>
          <NavList>
            <NavLink
              href="#тухай"
              ref={linkRef2}
              onClick={() => handleLinkClick("/#тухай", 1)}
              onMouseEnter={() => {
                if (bottomPosition === 1) return;
                setBottomPosition(1);
              }}
              onMouseLeave={() => {
                if (bottomPosition === position || linkClicked) return;
                setBottomPosition(position);
              }}
            >
              Тухай
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              href="#төхөөрөмжүүд"
              ref={linkRef3}
              onClick={() => handleLinkClick("/#төхөөрөмжүүд", 2)}
              onMouseEnter={() => {
                if (bottomPosition === 2) return;
                setBottomPosition(2);
              }}
              onMouseLeave={() => {
                if (bottomPosition === position || linkClicked) return;
                setBottomPosition(position);
              }}
            >
              Төхөөрөмжүүд
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              href="#мэдээ"
              ref={linkRef4}
              onClick={() => handleLinkClick("", 3)}
              onMouseEnter={() => {
                if (bottomPosition === 3) return;
                setBottomPosition(3);
              }}
              onMouseLeave={() => {
                if (bottomPosition === position || linkClicked) return;
                setBottomPosition(position);
              }}
            >
              Мэдээ
            </NavLink>
          </NavList>
          <NavList>
            <NavLink
              href="#холбоо-барих"
              ref={linkRef5}
              onClick={() => handleLinkClick("/#холбоо-барих", 4)}
              onMouseEnter={() => {
                if (bottomPosition === 4) return;
                setBottomPosition(4);
              }}
              onMouseLeave={() => {
                if (bottomPosition === position || linkClicked) return;
                setBottomPosition(position);
              }}
            >
              Холбоо барих
            </NavLink>
          </NavList>
          <NavLinkBottom
            width={linkWidths[bottomPosition]}
            left={leftCalculator(bottomPosition, linkWidths)}
          />
        </NavMenu>
        <NavMenuBarsContainer>
          <NavMenuBars onClick={() => setMenuOpen(!menuOpen)}>
            <MenuBar menuOpen={menuOpen}></MenuBar>
            <MenuBar menuOpen={menuOpen}></MenuBar>
            <MenuBar menuOpen={menuOpen}></MenuBar>
            <MenuBar menuOpen={menuOpen}></MenuBar>
          </NavMenuBars>
        </NavMenuBarsContainer>
      </NavBar>
    </Nav>
  );
});

// style={{
//   position: "relative",
//   zIndex: "999",
//   height: "40px",
//   width: "40px",
// }}

const NavMenuBarsContainer = styled.div`
  position: relative;
  z-index: inherit;
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNavLogo = styled(TAMLogo)``;

const NavLinkBottom = styled.span`
  position: absolute;
  width: ${(props) => (!props.width ? 0 : props.width - 15)}px;
  height: 1.3px;
  background-image: linear-gradient(
    to right,
    ${companyThemeColor1},
    ${companyThemeColor2}
  );
  bottom: 15px;
  left: ${(props) => props.left}px;
  transition: 250ms ease-in-out;
`;
// width: x, bottomPosition: x - 15,

const NavCompany = styled.a`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: inherit;
  height: 100%;
  position: relative;
  z-index: 900;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${navHeight}px;
  box-shadow: ${(props) =>
    props.menuOpen ? "0 -1px 0px 2px #c0c0c2" : "0 0 15px 0 rgba(0, 0, 0, .3)"};
  background: ${(props) =>
    props.menuOpen ? "#f2f2f5" : "rgba(255,255,255,.8)"};
  backdrop-filter: ${(props) =>
    !props.menuOpen ? "saturate(180%) blur(20px)" : "none"};
  border-bottom: ${(props) => props.menuOpen && "1px solid #c0c0c2"};
  z-index: 900;
  transition: all 300ms ease;
`;
const NavBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: inherit;
  position: relative;
  z-index: 900;
  padding: 0 ${paddingSides}px;
`;

const NavMenu = styled.ul`
  position: fixed;
  top: ${navHeight}px;
  left: 0;
  width: 100%;
  height: calc(100vh - ${navHeight}px);
  transform: ${(props) =>
    props.menuOpen
      ? "translateY(0) scaleY(1)"
      : "translateY(-100vh) scaleY(0)"};
  background-color: #f2f2f5;
  padding: 8px 40px 35px;
  transition: inherit;
  z-index: 100;

  @media (min-width: 768px) {
    overflow-x: hidden;
    position: relative;
    top: initial;
    left: initial;
    height: initial;
    transform: initial;
    padding: 3px 0;
    display: flex;
    width: fit-content;
    height: 100%;
    align-items: center;
    background-color: transparent;
  }
`;

const NavList = styled.li`
  @media (min-width: 768px) {
    height: 100%;
  }
`;

const NavLink = styled.a`
  color: inherit;
  font-size: 17px;
  display: block;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid #c0c0c2;
  margin-top: 2px;
  &:hover {
    color: #000;
    border-color: 1px solid #555;
    transition: 220ms ease;
  }
  @media (min-width: 768px) {
    font-size: 16px;
    border-bottom: 0;
    padding: 0 15px;
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NavMenuBars = styled.div`
  width: 20px;
  height: 40px;
  position: relative;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: inherit;
`;

const MenuBar = styled.div`
  display: block;
  position: absolute;
  height: 1.5px;
  width: 20px;
  background: rgba(0, 0, 0, 0.9);
  opacity: 1;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  transition: 0.25s ease-in-out;

  &:nth-of-type(1) {
    top: ${(props) => (props.menuOpen ? "50%" : "35%")};
    width: ${(props) => (props.menuOpen ? "0%" : "20px")};
  }

  &:nth-of-type(2),
  &:nth-of-type(3) {
    top: 50%;
  }

  &:nth-of-type(2) {
    transform: ${(props) =>
      props.menuOpen
        ? " translate(-50%, -50%) rotate(45deg)"
        : " translate(-50%, -50%) rotate(0)"};
  }

  &:nth-of-type(3) {
    transform: ${(props) =>
      props.menuOpen
        ? " translate(-50%, -50%) rotate(-45deg)"
        : " translate(-50%, -50%) rotate(0)"};
  }

  &:nth-of-type(4) {
    top: ${(props) => (props.menuOpen ? "50%" : "65%")};
    width: ${(props) => (props.menuOpen ? "0%" : "20px")};
  }
`;

export default Navbar;
