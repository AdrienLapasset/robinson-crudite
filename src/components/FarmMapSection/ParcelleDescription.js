import * as React from "react";
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

const StyledContainer = styled.section``;

const ParcelleDescription = ({ activeParcelle }) => {
  console.log(activeParcelle);

  const parcelle = parcellesData.find(
    (parcelle) => parcelle.id === activeParcelle
  );

  return (
    <StyledContainer>
      {parcelle?.name}
      {parcelle?.description}
      {parcelle?.vegetables.map((vegetable) => {
        return vegetable;
      })}
    </StyledContainer>
  );
};

export default ParcelleDescription;
