import React from "react";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
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
  background: #dddddd;
  border: 1px solid #aaaaaa;
  margin: 20px 0;
  padding: 10px;
`;

const BlogPostHeading = styled.div`
  font-family: serif;

  h2 {
    font-size: 2rem;
  }
`;

const Byline = styled.address`
  font-size: 0.9rem;
  font-style: normal;
  text-transform: uppercase;
`;

const Timestamp = styled.div`
  font-size: 0.9rem;
  margin: 0;
  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}
`;

const BlogPostContent = styled.div`
  font-family: serif;

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1.1rem;
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {data.allPrismicBlogPost.edges.map((edge) => {
        const {
          node: { data, first_publication_date, last_publication_date, uid },
        } = edge;
        return (
          <BlogPost key={uid}>
            <BlogPostHeading>
              <PrismicRichText field={data.title.richText} />
            </BlogPostHeading>
            <Byline>Posted by {data.author.document.data.name}</Byline>
            <Timestamp>
              Published{" "}
              <time dateTime={first_publication_date}>
                {new Date(first_publication_date).toLocaleString()}
              </time>
            </Timestamp>
            {first_publication_date !== last_publication_date && (
              <Timestamp italic>
                Last updated{" "}
                <time dateTime={last_publication_date}>
                  {new Date(last_publication_date).toLocaleString()}
                </time>
              </Timestamp>
            )}
            <BlogPostContent>
              <PrismicRichText field={data.content.richText} />
            </BlogPostContent>
          </BlogPost>
        );
      })}
    </Layout>
  );
};

export default IndexPage;
