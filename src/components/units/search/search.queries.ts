import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Float = 1, $search: String) {
    fetchBoards(page: $page, search: $search) {
      id
      title
      totalMember
      countMember
      countLike
      description
      bail
      status
      address
      isSuccess
      startAt
      createdAt
      closedAt
      boardImage {
        url
      }
      tags {
        name
      }
      categories {
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
