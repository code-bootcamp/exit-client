import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      title
      totalMember
      countMember
      countLike
      description
      leader
      leaderNickname
      bail
      status
      isSuccess
      address
      frequency
      startAt
      endAt
      createdAt
      closedAt
      boardImage {
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

export const CREATE_OR_DELETE_LIKE = gql`
  mutation createOrDeleteLike($boardId: String!) {
    createOrDeleteLike(boardId: $boardId)
  }
`;

export const FETCH_USER_WITH_USER_ID = gql`
  query fetchUserWithUserId($userId: String!) {
    fetchUserWithUserId(userId: $userId) {
      id
      nickname
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

export const FETCH_USER_BOARDS = gql`
  query fetchUserBoards($boardId: String) {
    fetchUserBoards(boardId: $boardId) {
      isAccepted
      user {
        id
        nickname
        userImage {
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
  }
`;

export const CREATE_USER_BOARD = gql`
  mutation createUserBoard($createUserBoardInput: CreateUserBoardInput!) {
    createUserBoard(createUserBoardInput: $createUserBoardInput) {
      id
    }
  }
`;

export const UPDATE_USER_BOARD = gql`
  mutation updateUserBoard($updateUserBoardInput: UpdateUserBoardInput!) {
    updateUserBoard(updateUserBoardInput: $updateUserBoardInput) {
      id
    }
  }
`;

export const REMOVE_USER_BOARDS = gql`
  mutation removeUserBoards($userId: String, $boardId: String) {
    removeUserBoards(userId: $userId, boardId: $boardId)
  }
`;

export const REMOVE_BOARD = gql`
  mutation removeBoard($boardId: String!) {
    removeBoard(boardId: $boardId)
  }
`;
