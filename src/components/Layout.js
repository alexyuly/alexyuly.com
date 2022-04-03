import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
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
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const HeaderAnchor = styled.a`
  color: #ffffff;
`;

const Header = styled.h1`
  background: #222222;
  box-shadow: 0 20px 40px 20px #222222;
  font-family: "Playfair Display SC", serif;
  font-size: ${(props) => (props.small ? "1rem" : "1.75rem")};
  font-weight: 400;
  line-height: 1.2;
  margin: 0 80px;
  padding: 20px 0;
  position: sticky;
  top: 0;
  transition: font-size 0.2s ease-in 0.5s;
  z-index: 1;

  @media (max-width: 600px) {
    margin: 0 20px;
  }
`;

const Main = styled.main`
  margin: 0 80px;

  @media (max-width: 600px) {
    margin: 0 20px;
  }
`;

const Footer = styled.footer`
  background: #111111;
  border-top: 1px solid #000000;
  color: #bbbbbb;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.2;
  margin: 100px 0 0;
  padding: 20px 80px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const Layout = ({ children }) => {
  const headerRef = useRef(null);
  const scrollAnimationFrameRef = useRef(null);

  const [smallHeader, setSmallHeader] = useState(false);

  useEffect(() => {
    const handleSetSmallHeader = () => {
      setSmallHeader(
        document.documentElement.scrollTop > headerRef.current.offsetHeight
      );
    };
    const handleScroll = () => {
      if (scrollAnimationFrameRef.current) {
        cancelAnimationFrame(scrollAnimationFrameRef.current);
      }
      scrollAnimationFrameRef.current = requestAnimationFrame(() => {
        handleSetSmallHeader();
      });
    };
    handleSetSmallHeader();
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet title="The Writings of Alex Yuly" />
      <GlobalStyle />
      <HeaderAnchor href="#">
        <Header ref={headerRef} small={smallHeader}>
          The Writings of Alex Yuly
        </Header>
      </HeaderAnchor>
      <Main>{children}</Main>
      <Footer>Copyright &copy; 2022 Alex Yuly</Footer>
    </>
  );
};

export default Layout;
