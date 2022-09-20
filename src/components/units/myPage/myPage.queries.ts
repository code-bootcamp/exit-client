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

export const FETCH_LIKES = gql`
  query fetchLikes($userId: String) {
    fetchLikes(userId: $userId) {
      id
      board {
        id
        title
        address
        totalMember
        countLike
        startAt
      }
    }
  }
`;

export const FETCH_PROJECTS_OF_USER = gql`
  query fetchProjectsOfUser($userId: String!) {
    fetchProjectsOfUser(userId: $userId) {
      id
      title
      address
      totalMember
      countLike
      startAt
    }
  }
`;
