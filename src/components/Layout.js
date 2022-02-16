import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Lora, serif;
    font-size: 15px;
  }

  body {
    background: #cccccc;
    color: #222255;
    margin: 0;
    padding: 0;
  }
`;

const Heading = styled.h1`
  background: #cccccc;
  box-shadow: 0 20px 20px #c0c0c0;
  font-size: 2rem;
  font-weight: normal;
  margin: 0;
  padding: 20px 40px;
  position: sticky;
  top: 0;
`;

const Main = styled.main`
  padding: 0 40px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Heading>Alex Yuly</Heading>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
