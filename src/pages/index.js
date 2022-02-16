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

const BlogPostHeading = styled.div`
  font-family: Signika, serif;

  h2 {
    font-size: 4rem;
    margin: 20px 0;
  }
`;

const Timestamp = styled.div`
  color: #666666;
  font-family: Signika, serif;
  font-size: 0.9rem;
  margin: 10px 0;
  text-transform: uppercase;
`;

const BlogPostContent = styled.div`
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

  p {
    font-size: 1rem;
    margin: 10px 0;
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {data.allPrismicBlogPost.edges.map(({ node }) => {
        return (
          <BlogPost key={node.uid}>
            <Timestamp>
              <div>
                Published{" "}
                <time dateTime={node.first_publication_date}>
                  {new Date(node.first_publication_date).toLocaleDateString(
                    "en-US",
                    { timeZone: "UTC" }
                  )}
                </time>
              </div>
              {node.first_publication_date !== node.last_publication_date && (
                <div>
                  Last updated{" "}
                  <time dateTime={node.last_publication_date}>
                    {new Date(node.last_publication_date).toLocaleDateString(
                      "en-US",
                      { timeZone: "UTC" }
                    )}
                  </time>
                </div>
              )}
            </Timestamp>
            <BlogPostHeading>
              <PrismicRichText field={node.data.title.richText} />
            </BlogPostHeading>
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
