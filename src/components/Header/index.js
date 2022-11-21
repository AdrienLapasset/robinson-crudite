import * as React from "react";
import styled from "styled-components";

const StyledContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;
const StyledLogo = styled.h1`
  font-size: 30px;
  span {
    font-size: 18px;
    font-weight: 600;
  }
`;
const StyledNav = styled.ul`
  display: flex;
  li {
    font-size: 20px;
  }
`;

const Header = () => {
  return (
    <StyledContainer>
      <StyledLogo>
        Robinson Crudité <br />
        <span>Maraîchage sol vivant</span>
      </StyledLogo>
      <StyledNav>
        <li>Plan de la ferme</li>
        <li>Mes pratiques</li>
      </StyledNav>
    </StyledContainer>
  );
};

export default Header;
