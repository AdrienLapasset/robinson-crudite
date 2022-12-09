import React, { useState, useEffect } from "react";
import styled from "styled-components";

const parcellesData = [
  {
    id: "parcelle1",
    name: "Parcelle Solanacés",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    vegetables: ["Tomates", "Salades", "Oignons"],
  },
  {
    id: "parcelle2",
    name: "Parcelle Cucurbitacés",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    vegetables: ["Toto", "Tata", "Prout"],
  },
];

const StyledContainer = styled.div`
  max-width: 400px;
  margin: auto 0 20px;
  position: relative;
  & > * {
    transition: all ${(props) => props.transitionDuration}ms;
    opacity: ${(props) => (props.isTransition ? 0 : 1)};
    transform: ${(props) =>
      props.isTransition ? `translateX(-5px)` : `translateX(0px)`};
  }
  &::before {
    position: absolute;
    left: -25px;
    content: "";
    height: 100px;
    width: 10px;
    background-color: black;
    display: block;
  }
  h3 {
    font-size: 40px;
    letter-spacing: -1px;
  }
  ul {
    padding-left: 15px;
    li {
      list-style: disc;
    }
  }
`;

const ParcelleDescription = ({ activeParcelle }) => {
  const [isTransition, setIsTransition] = useState(false);
  const [parcelleData, setParcelleData] = useState(null);
  const transitionDuration = 200;

  useEffect(() => {
    setIsTransition(true);
    setTimeout(() => {
      setParcelleData(
        parcellesData.find((parcelle) => parcelle.id === activeParcelle)
      );
      setIsTransition(false);
    }, transitionDuration + 100);
  }, [activeParcelle]);

  return (
    <StyledContainer
      isTransition={isTransition}
      transitionDuration={transitionDuration}
    >
      <h3>{parcelleData?.name}</h3>
      <p>{parcelleData?.description}</p>
      <ul>
        {parcelleData?.vegetables.map((vegetable) => {
          return <li>{vegetable}</li>;
        })}
      </ul>
    </StyledContainer>
  );
};

export default ParcelleDescription;
