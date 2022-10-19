import { memo,useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImplementModal from "./ImplementModal";

const ImplementCard = memo(({ obj, handleClick1 }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {setOpen(!open); handleClick1()}
  return (
    <>
      {window.screen.width < 768 ? (
        <Link to={`implements/${obj.name}`}>
          <ImplementCardContainer onClick={handleClick}>
            <ImplementTitle>{obj.name}</ImplementTitle>
            <ImplementImg alt={obj.name} src={`${obj.mainImg}`} />
          </ImplementCardContainer>
        </Link>
      ) : (
        <>
          <ImplementCardContainer onClick={handleClick}>
            <ImplementTitle>{obj.name}</ImplementTitle>
            <ImplementImg alt={obj.name} src={`${obj.mainImg}`} />
          </ImplementCardContainer>
          {open && (
            <ImplementModal data={obj} handleOutsideClick={handleClick} />
          )}
        </>
      )}
    </>
  );
});

const ImplementCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(200px + 1vh);
  background-color: #fff;
  padding: calc(16px + 1%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 300ms ease-in-out;
  box-shadow: 0 1px 5px 1px rgb(0 0 0 / 10%);
  &:hover {
    box-shadow: 0 2px 5px 1px rgb(0 0 0 / 30%);
  }
  @media (min-width: 768px) {
    height: 250px;
    box-shadow: 5px 5px 15px -3px rgb(0 0 0 / 10%);
    &:hover {
      box-shadow: 11px 11px 15px 1px rgb(0 0 0 / 12%);
    }
  }
  cursor: pointer;
`;

const ImplementImg = styled.img`
  display: block;
  height: calc(130px + 1vh + 1vw);
  max-width: 400px;
  position: absolute;
  bottom: 5%;
  right: 5%;
  @media (min-width: 600px) {
    height: 130px;
  }
  @media (min-width: 768px) {
    height: 166px;
  }
  @media (min-width: 820px) {
    height: 188px;
  }
`;

const ImplementTitle = styled.h3`
  font-family: "Poppins", "Roboto";
  font-size: 17px;
  color: rgba(0, 0, 0, 0.92);
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 18.5px;
  }
`;

export default ImplementCard;
