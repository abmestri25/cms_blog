import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
  query MyQuery {
    postsConnection {
      edges {
        node {
          slug
          title
          excerpt
          createdAt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
          author {
            bio
            name
            id
            photo {
              url
            }
          }
        }
      }
    }
  }
  
  `
  
  const result = await request(graphqlAPI,query)
  return result.postsConnection.edges;
};
