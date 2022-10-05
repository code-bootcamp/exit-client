import { gql } from "@apollo/client";

export const FETCH_COMMENTS = gql`
  query fetchComments($userId: String, $boardId: String) {
    fetchComments(userId: $userId, boardId: $boardId) {
      id
      comment
      createdAt
      updatedAt
      user {
        email
        nickname
        userImage {
          url
        }
      }
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($updateCommentInput: UpdateCommentInput!) {
    updateComment(updateCommentInput: $updateCommentInput)
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($commentId: String) {
    removeComment(commentId: $commentId)
  }
`;

export const FETCH_SUB_COMMENTS = gql`
  query fetchSubComments($commentId: String) {
    fetchSubComments(commentId: $commentId) {
      id
      subComment
      createdAt
      updatedAt
      user {
        id
        email
        nickname
        userImage {
          url
        }
      }
    }
  }
`;

export const CREATE_SUB_COMMENT = gql`
  mutation createSubComment($createSubCommentInput: CreateSubCommentInput!) {
    createSubComment(createSubCommentInput: $createSubCommentInput) {
      id
    }
  }
`;
