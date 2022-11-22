import * as React from "react";
import styled from "styled-components";
import LogoNoText from "assets/logos/LogoNoText";

const StyledContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
`;
const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin-left: 12px;
    font-size: 30px;
    line-height: 20px;
    margin-top: 5px;
    span {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;
const StyledNav = styled.ul`
  display: flex;
  li {
    font-size: 20px;
    margin-left: 50px;
  }
`;

const Header = () => {
  return (
    <StyledContainer>
      <StyledLogo>
        <LogoNoText />
        <h1>
          Robinson Crudité <br />
          <span>Maraîchage sol vivant</span>
        </h1>
      </StyledLogo>
      <StyledNav>
        <li>Plan de la ferme</li>
        <li>Mes pratiques</li>
      </StyledNav>
    </StyledContainer>
  );
};

export default Header;
