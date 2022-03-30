import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'EB Garamond', serif;
    font-size: 16px;
  }

  body {
    background: #222222;
    color: #ffffff;
    margin: 0;
    padding: 0 80px;

    @media (max-width: 600px) {
      padding: 0 20px;
    }
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const HeadingAnchor = styled.a`
  color: #ffffff;
`;

const Heading = styled.h1`
  font-family: "Playfair Display SC", serif;
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
  padding: 20px 0;
`;

const Main = styled.main`
  padding: 0;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <HeadingAnchor href="#">
        <Heading>The Writings of Alex Yuly</Heading>
      </HeadingAnchor>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
