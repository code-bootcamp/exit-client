import { gql } from "@apollo/client";
export const FETCH_USER_WITH_USER_ID = gql`
  query fetchUserWithUserId($userId: String!) {
    fetchUserWithUserId(userId: $userId) {
      id
      nickname
      userUrl
      userImage {
        id
        url
      }
      tags {
        id
        name
      }
      keywords {
        id
        name
      }
      categories {
        id
        name
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
