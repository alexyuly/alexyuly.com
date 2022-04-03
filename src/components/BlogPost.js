import React from "react";
import styled from "styled-components";
import { PrismicRichText } from "@prismicio/react";

const formatDateString = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", { timeZone: "UTC" });
};

const Root = styled.article`
  display: flex;
  flex-flow: column nowrap;
  margin: 80px 0;
`;

const TopDecoration = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const TopDecorationLeft = styled.div`
  background-color: #111111;
  flex: 1 1 auto;
`;

const TopDecorationRight = styled.div`
  border-left: 40px solid #000000;
  border-top: 40px solid #222222;
  flex: 0 0 0;
`;

const Container = styled.section`
  background-color: #111111;
  margin: 0;
  padding: 0 20px 40px;
`;

const HeadingAnchor = styled.a`
  color: #b999ff;
`;

const Heading = styled.section`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  position: relative;

  h2 {
    font-size: 3rem;
    line-height: 1.2;
    margin: 40px 0 20px;
  }
`;

const Timestamp = styled.section`
  color: #bbbbbb;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.2;
  margin: 10px 0 30px;

  p {
    margin: 0;
  }
`;

const Content = styled.section`
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    line-height: 1.2;
  }

  h3 {
    font-size: 2rem;
    margin: 15px 0;
  }

  h4 {
    font-size: 1.5rem;
    margin: 15px 0;
  }

  h5 {
    font-size: 1.33rem;
    margin: 15px 0;
  }

  h6 {
    font-size: 1.25rem;
    margin: 15px 0;
  }

  p,
  ul {
    font-size: 1rem;
    line-height: 1.4;
    margin: 15px 0;
  }
`;

const BlogPost = ({
  contentRichText,
  firstPublicationDate,
  headingRichText,
  lastPublicationDate,
  uid,
}) => {
  return (
    <Root id={uid}>
      <TopDecoration>
        <TopDecorationLeft />
        <TopDecorationRight />
      </TopDecoration>
      <Container>
        <HeadingAnchor href={`#${uid}`}>
          <Heading>
            <PrismicRichText field={headingRichText} />
          </Heading>
        </HeadingAnchor>
        <Timestamp>
          <p>
            <time dateTime={firstPublicationDate}>
              {formatDateString(firstPublicationDate)}
            </time>
          </p>
          {firstPublicationDate !== lastPublicationDate && (
            <p>
              Last updated{" "}
              <time dateTime={lastPublicationDate}>
                {formatDateString(lastPublicationDate)}
              </time>
            </p>
          )}
        </Timestamp>
        <Content>
          <PrismicRichText field={contentRichText} />
        </Content>
      </Container>
    </Root>
  );
};

export default BlogPost;