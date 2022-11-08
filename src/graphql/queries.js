import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GetRepositories{
    repositories {
      edges {
        node {
          id
          ownerName
          name
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          ownerAvatarUrl
          description
          language
          createdAt
          fullName
        }
      }
    }
  }
`;

export const IS_USER_LOGGED_IN = gql`
  query IsUserLoggedIn{
    me {
      id
      username
    }
  }
`
