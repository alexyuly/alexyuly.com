import React from "react";
import { graphql } from "gatsby";
import BlogPost from "../components/BlogPost";
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
          }
          first_publication_date
          last_publication_date
          uid
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {data.allPrismicBlogPost.edges.map(({ node }) => {
        return (
          <BlogPost
            key={node.uid}
            contentRichText={node.data.content.richText}
            firstPublicationDate={node.first_publication_date}
            headingRichText={node.data.title.richText}
            lastPublicationDate={node.last_publication_date}
            uid={node.uid}
          />
        );
      })}
    </Layout>
  );
};

export default IndexPage;
