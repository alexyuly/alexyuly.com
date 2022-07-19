import React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const forZeroTo = (count, fn) => new Array(count).fill().map((_, i) => fn(i));

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
  }

  body {
    background: #202124;
    color: #e8eaed;
    margin: 0;
    padding: 0;
  }

  a {
    color: #e8eaed;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 800px;
  text-align: center;

  @media (max-width: 832px) {
    margin: 0 16px;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 2rem;
  justify-content: center;
  margin: 32px 0;
`;

const headingBlockAnimation = keyframes`
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const HeadingBlock = styled.div`
  animation: 1s ${headingBlockAnimation} forwards;
  transform: translate3d(0, calc(-100% - 16px), 0);
  width: 32px;

  ${forZeroTo(
    9,
    (i) => css`
      &:nth-child(${i + 1}) {
        animation-delay: ${100 * i}ms;
      }
    `
  )}
`;

const dividerAnimation = keyframes`
  100% {
    height: 2px;
    margin: 39px 0;
    width: 100%;
  }
`;

const Divider = styled.hr`
  animation: 1.8s ${dividerAnimation} forwards;
  background: #e8eaed;
  border: none;
  height: 16px;
  margin: 32px 50%;
  width: 0%;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Helmet title="Alex Yuly" />
      <GlobalStyle />
      <Content>
        <Heading>
          <HeadingBlock>A</HeadingBlock>
          <HeadingBlock>L</HeadingBlock>
          <HeadingBlock>E</HeadingBlock>
          <HeadingBlock>X</HeadingBlock>
          <HeadingBlock>&nbsp;</HeadingBlock>
          <HeadingBlock>Y</HeadingBlock>
          <HeadingBlock>U</HeadingBlock>
          <HeadingBlock>L</HeadingBlock>
          <HeadingBlock>Y</HeadingBlock>
        </Heading>
        <Divider />
      </Content>
    </>
  );
};

export default Layout;
