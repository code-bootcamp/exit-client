import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      id
      title
      # leader
      address
      totalMember
      countMember
      countLike
      description
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
