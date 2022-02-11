import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
    font-size: 14px;
  }

  body {
    background: #cccccc;
    color: #222255;
    margin: 0;
  }
`;

const Heading = styled.h1`
  background: #dddddd;
  border-bottom: 1px solid #bbbbbb;
  box-shadow: 0 2px 2px #bbbbbb;
  font-size: 1.5rem;
  font-weight: normal;
  letter-spacing: 2px;
  margin: 0;
  padding: 10px 20%;
  position: sticky;
  text-transform: uppercase;
  top: 0;
`;

const Main = styled.main`
  padding: 0 20%;
`;

// TODO break out stuff from index.js into here
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
