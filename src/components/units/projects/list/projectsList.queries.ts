import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards(
    $isSuccess: Boolean
    $status: Boolean
    $page: Float
    $tagName: String
    $categoryName: String
    $keywordName: String
  ) {
    fetchBoards(
      isSuccess: $isSuccess
      status: $status
      page: $page
      tagName: $tagName
      categoryName: $categoryName
      keywordName: $keywordName
    ) {
      id
      title
      leader
      address
      totalMember
      countMember
      countLike
      description
      categories {
        name
      }
      bail
      status
      startAt
      endAt
      closedAt
      tags {
        id
        name
      }
      categories {
        id
        name
      }
      boardImage {
        url
      }
    }
  }
`;

export const FETCH_LIKES = gql`
  query fetchLikes($userId: String) {
    fetchLikes(userId: $userId) {
      board {
        id
        title
      }
    }
  }
`;

export const FETCH_CATEGORIES_TAGS = gql`
  query FETCH_CATEGORIES_TAGS {
    fetchTags {
      name
    }
    fetchCategories {
      name
    }
  }
`;

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      title
      leader
      address
      totalMember
      countMember
      countLike
      description
      categories {
        name
      }
      bail
      status
      startAt
      endAt
      closedAt
      tags {
        id
        name
      }
      categories {
        name
      }
      boardImage {
        url
      }
    }
  }
`;

export const FETCH_USER_WITH_NICKNAME = gql`
  query fetchUserWithNickname($nickname: String!) {
    fetchUserWithNickname(nickname: $nickname) {
      categories {
        id
        name
      }
    }
  }
`;

export const FETCH_BOARD_RANDOM = gql`
  query fetchBoardRandom($categoryId: String!) {
    fetchBoardRandom(categoryId: $categoryId) {
      id
      title
      description
      bail
      boardImage {
        url
      }
    }
  }
`;
