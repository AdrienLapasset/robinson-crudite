import * as React from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Header from "components/Header";
import FarmMap from "components/FarmMap";
import Container from "components/Container";

const StyledContainer = styled.main`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
`;

const IndexPage = () => {
  return (
    <Layout>
      <StyledContainer>
        <Container>
          <Header />
          <StaticImage
            src="../assets/imgs/lavage-legumes.jpg"
            alt="lavage legumes"
            loading="eager"
            quality="90"
          />
          <FarmMap />
        </Container>
      </StyledContainer>
    </Layout>
  );
};

export default IndexPage;
