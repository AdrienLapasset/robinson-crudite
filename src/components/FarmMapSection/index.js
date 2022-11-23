import React, { useState } from "react";
import styled from "styled-components";
import Heading from "components/Heading";
import FarmMap from "./FarmMap";
import ParcelleDescription from "./ParcelleDescription";

const StyledContainer = styled.section`
  margin-top: 72px;
  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

const FarmMapSection = () => {
  const [activeParcelle, setActiveParcelle] = useState("");

  const handleActiveParcelle = (activeParcelle) => {
    setActiveParcelle(activeParcelle);
  };

  return (
    <StyledContainer>
      <div>
        <Heading section>
          Plan <br />
          de la <br />
          ferme
        </Heading>
        <ParcelleDescription activeParcelle={activeParcelle} />
      </div>
      <FarmMap activeParcelleCallBack={handleActiveParcelle} />
    </StyledContainer>
  );
};

export default FarmMapSection;
