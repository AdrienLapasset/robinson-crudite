import * as React from "react";
import styled from "styled-components";
import Heading from "components/Heading";
import FarmMap from "./FarmMap";

const StyledContainer = styled.section`
  margin-top: 72px;
`;

const FarmMapSection = () => {
  return (
    <StyledContainer>
      <Heading section>
        Plan <br />
        de la <br />
        ferme
      </Heading>
      <FarmMap />
    </StyledContainer>
  );
};

export default FarmMapSection;
