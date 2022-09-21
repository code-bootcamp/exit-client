import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
      title
      totalMember
      description
      keywords {
        name
      }
      bail
      address
      tags {
        name
      }
      frequency
      closedAt
      startAt
      endAt
      categories {
        name
      }
    }
  }
`;

export const UPLOAD_BOARD_IMAGE = gql`
  mutation uploadBoardImage($image: [Upload!]!) {
    uploadBoardImage(image: $image)
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $boardId: String!
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(boardId: $boardId, updateBoardInput: $updateBoardInput) {
      id
      title
    }
  }
`;
