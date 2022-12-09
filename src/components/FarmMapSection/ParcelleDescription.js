import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const StyledContainer = styled.div`
  flex: 0 0 400px;
  margin-top: 100px;
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
  const data = useStaticQuery(graphql`
    query {
      allSanityJardin {
        nodes {
          name
          description
          cultures
        }
      }
    }
  `);

  const parcellesData = data.allSanityJardin.nodes;
  const [isTransition, setIsTransition] = useState(false);
  const [parcelleData, setParcelleData] = useState(null);
  const transitionDuration = 200;

  useEffect(() => {
    setIsTransition(true);
    setTimeout(() => {
      setParcelleData(parcellesData[activeParcelle]);
      setIsTransition(false);
    }, transitionDuration + 100);
  }, [parcellesData, activeParcelle]);

  return (
    <StyledContainer
      isTransition={isTransition}
      transitionDuration={transitionDuration}
    >
      <h3>{parcelleData?.name}</h3>
      <p>{parcelleData?.description}</p>
      <ul>
        {parcelleData?.cultures.map((culture) => {
          return <li>{culture}</li>;
        })}
      </ul>
    </StyledContainer>
  );
};

export default ParcelleDescription;
