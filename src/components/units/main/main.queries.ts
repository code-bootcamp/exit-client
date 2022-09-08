import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      id
      title
      leader
      totalMember
      countMember
      countLike
      description
      bail
      status
      categories {
        name
      }
      boardImage {
        url
      }
      # 모집마감일
    }
  }
`;

export const FETCH_USER_WITH_USERID = gql`
  query fetchUserWithUserId($userId: String!) {
    fetchUserWithUserId(userId: $userId) {
      nickname
    }
  }
`;

// query {
//   fetchBoardsByLikes {
//           id
//       title
//       leader
//       totalMember
//       countMember
//       countLike
//       description
//       bail
//       status
//       # categories {
//       #   name
//       # }
//       # boardImage {
//       #   url
//       # }
//   }
// }
