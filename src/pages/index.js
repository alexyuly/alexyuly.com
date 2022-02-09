import * as React from "react";
import { graphql } from "gatsby";
import { PrismicRichText } from "@prismicio/react";

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
          uid
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <main>
      <h1>Alex Yuly's Blog</h1>
      {data.allPrismicBlogPost.edges.map((edge) => {
        return (
          <article key={edge.node.uid}>
            <PrismicRichText field={edge.node.data.title.richText} />
            <address>By {edge.node.data.author.document.data.name}</address>
            <PrismicRichText field={edge.node.data.content.richText} />
          </article>
        );
      })}
    </main>
  );
};

export default IndexPage;
