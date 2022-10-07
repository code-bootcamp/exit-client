import { gql } from "@apollo/client";

export const FETCH_USERS = gql`
  query fetchUsers($page: Float) {
    fetchUsers(page: $page) {
      id
      email
      nickname
      point
      userImage {
        id
        url
      }
      categories {
        name
      }
      tags {
        name
      }
      keywords {
        name
      }
    }
  }
`;

export const FETCH_USER_RANDOM = gql`
  query fetchUserRandom {
    fetchUserRandom {
      id
      email
      nickname
      userImage {
        id
        url
      }
      categories {
        name
      }
      tags {
        name
      }
      keywords {
        name
      }
    }
  }
`;
