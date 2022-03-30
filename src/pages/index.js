import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { PrismicRichText } from "@prismicio/react";
import Layout from "../components/Layout";

export const query = graphql`
  query IndexPageQuery {
    allPrismicBlogPost {
      edges {
        node {
          data {
            content {
              richText
            }
            title {
              richText
            }
            author {
              document {
                ... on PrismicAuthor {
                  data {
                    name
                  }
                }
              }
            }
          }
          first_publication_date
          last_publication_date
          uid
        }
      }
    }
  }
`;

const BlogPost = styled.article`
  margin: 80px 0;
`;

const BlogPostHeadingAnchor = styled.a`
  color: #b999ff;
`;

const BlogPostHeading = styled.section`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  position: relative;

  h2 {
    font-size: 3rem;
    line-height: 1.2;
    margin: 20px 0;
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

const BlogPostContent = styled.section`
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

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {data.allPrismicBlogPost.edges.map(({ node }) => {
        return (
          <BlogPost key={node.uid}>
            <BlogPostHeadingAnchor href={`#${node.uid}`}>
              <BlogPostHeading id={node.uid}>
                <PrismicRichText field={node.data.title.richText} />
              </BlogPostHeading>
            </BlogPostHeadingAnchor>
            <Timestamp>
              <p>
                <time dateTime={node.first_publication_date}>
                  {new Date(node.first_publication_date).toLocaleDateString(
                    "en-US",
                    { timeZone: "UTC" }
                  )}
                </time>
              </p>
              {node.first_publication_date !== node.last_publication_date && (
                <p>
                  Last updated{" "}
                  <time dateTime={node.last_publication_date}>
                    {new Date(node.last_publication_date).toLocaleDateString(
                      "en-US",
                      { timeZone: "UTC" }
                    )}
                  </time>
                </p>
              )}
            </Timestamp>
            <BlogPostContent>
              <PrismicRichText field={node.data.content.richText} />
            </BlogPostContent>
          </BlogPost>
        );
      })}
    </Layout>
  );
};

export default IndexPage;
