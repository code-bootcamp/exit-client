import { gql } from "@apollo/client";

export const FETCH_LOGINED_USER = gql`
  query fetchLoginedUser {
    fetchLoginedUser {
      id
      email
      nickname
      point
      userUrl
      userImage {
        id
        url
      }
    }
  }
`;

export const FETCH_PROJECT_OF_USER = gql`
  query fetchProjectOfUser($userId: String!) {
    fetchProjectOfUser(userId: $userId) {
      id
      title
      address
      totalMember
      countLike
      startAt
      boardImage {
        url
      }
    }
  }
`;
export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;
