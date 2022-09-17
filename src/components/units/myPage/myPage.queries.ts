import { gql } from "@apollo/client";

export const FETCH_LOGINED_USER = gql`
  query fetchLoginedUser {
    fetchLoginedUser {
      id
      email
      nickname
      point
      userImage {
        id
        url
      }
    }
  }
`;

export const FETCH_POINT_HISTORIES = gql`
  query fetchPointHistories($userId: String!) {
    fetchPointHistories(userId: $userId) {
      id
      pointHistory
      amount
      # createAt
      # deleteAt
      # user
    }
  }
`;
