import { gql } from "@apollo/client";

export const FETCH_USERS = gql`
  query fetchUsers {
    fetchUsers {
      id
      email
      nickname
      point
    }
  }
`;

export const FETCH_USER_RANDOM = gql`
  query fetchUserRandom {
    fetchUserRandom {
      id
      email
      nickname
    }
  }
`;
