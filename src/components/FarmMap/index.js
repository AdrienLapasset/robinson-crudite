import * as React from "react";
import styled from "styled-components";
import Heading from "components/Heading";

const StyledContainer = styled.section`
  margin-top: 72px;
`;
const StyledHeading = styled(Heading)`
  position: absolute;
`;

const FarmMap = () => {
  return (
    <StyledContainer>
      <StyledHeading section>
        Plan <br />
        de la <br />
        ferme
      </StyledHeading>
    </StyledContainer>
  );
};

export default FarmMap;
