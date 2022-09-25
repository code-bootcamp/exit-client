import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      id
      title
      address
      totalMember
      countMember
      countLike
      description
      frequency
      startAt
      endAt
      closedAt
      bail
      status
      categories {
        name
      }
      boardImage {
        url
      }
      tags {
        name
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

export const FETCH_CATEGORIES = gql`
  query fetchCategories {
    fetchCategories {
      id
      name
    }
  }
`;
