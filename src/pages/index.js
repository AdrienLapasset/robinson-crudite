import * as React from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import Header from "components/Header";
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
        </Container>
      </StyledContainer>
    </Layout>
  );
};

export default IndexPage;
