import React from "react";
import styled from "styled-components";

const StyledContainer = styled.g`
  position: relative;
  text {
    stroke: none;
    fill: black;
    display: none;
    font-size: 40px;
  }
  &:hover {
    path {
      fill: black;
    }
    text {
      display: block;
    }
  }
`;

const Planche = ({ legume, d }) => {
  return (
    <StyledContainer>
      <path d={d} />
      <text x="100" y="100">
        {legume}
      </text>
    </StyledContainer>
  );
};

export default Planche;
