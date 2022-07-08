import React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import IconBoxClosed from "../images/AlexYulyWebsite_BoxClosed.svg";
import IconBoxOpen from "../images/AlexYulyWebsite_BoxOpen.svg";
import IconBookClosed from "../images/AlexYulyWebsite_BookClosed.svg";
import IconBookOpen from "../images/AlexYulyWebsite_BookOpen.svg";

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

  @media (max-width: 840px) {
    margin: 0 20px;
  }
`;

const HeadingPrimary = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 40px 0;
  padding: 0;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
`;

const NavItem = styled.a`
  border-bottom: 4px solid
    ${(props) => (props.selected ? "#e8eaed" : "transparent")};
  display: flex;
  flex: 0 0 100px;
  flex-flow: column nowrap;
  font-size: 1.25rem;
  font-weight: ${(props) => (props.selected ? 700 : 500)};
  gap: 8px;
  justify-content: flex-end;
  margin: 0;
  padding: 16px;
  text-align: center;
  text-transform: uppercase;

  &::before {
    content: url(${(props) => (props.selected ? props.iconOn : props.iconOff)});
  }

  &:hover {
    background: #34363b;
    border-bottom: 4px solid #575859;

    &::before {
      content: url(${(props) => props.iconOn});
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Helmet title="Alex Yuly" />
      <GlobalStyle />
      <Content>
        <HeadingPrimary>Alex Yuly</HeadingPrimary>
        <Nav>
          <NavItem
            href="#"
            iconOff={IconBookClosed}
            iconOn={IconBookOpen}
            selected
          >
            Writings
          </NavItem>
          <NavItem href="#" iconOff={IconBoxClosed} iconOn={IconBoxOpen}>
            Projects
          </NavItem>
          <NavItem href="#">About</NavItem>
        </Nav>
        {children}
      </Content>
    </>
  );
};

export default Layout;
