import { gql } from "@apollo/client";
export const FETCH_USER_WITH_USER_ID = gql`
  query fetchUserWithUserId($userId: String!) {
    fetchUserWithUserId(userId: $userId) {
      id
      nickname
    }
  }
`;
