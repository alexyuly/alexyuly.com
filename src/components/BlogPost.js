import React from "react";
import styled from "styled-components";
import { PrismicRichText } from "@prismicio/react";

const formatDateString = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", { timeZone: "UTC" });
};

const Root = styled.article`
  max-width: 1000px;
  padding: 0;
`;

const OuterWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
`;

const InnerWrapper = styled.section`
  margin: 32px 0;
  padding: 0;
`;

const HeadingAnchor = styled.a`
  color: #add8e6;
`;

const Heading = styled.section`
  font-weight: 600;
  position: relative;

  h2 {
    font-size: 2rem;
    line-height: 1.2;
    margin: 20px 0;
  }
`;

const Timestamp = styled.section`
  color: #bbbbbb;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.2;
  margin: 10px 0 30px;

  p {
    margin: 0;
  }
`;

const Content = styled.section`
  overflow-wrap: break-word;

  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: 1.2;
  }

  h3 {
    font-size: 1.75rem;
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
    font-family: "Libre Baskerville", serif;
    font-size: 1rem;
    line-height: 1.5;
    margin: 15px 0;
  }

  a {
    color: #add8e6;
  }

  pre {
    background-color: #333333;
    font-family: monospace;
    font-size: 1rem;
    line-height: 1.5;
    overflow-x: auto;
    padding: 10px;
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
      <OuterWrapper>
        <InnerWrapper>
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
        </InnerWrapper>
      </OuterWrapper>
    </Root>
  );
};

export default BlogPost;
