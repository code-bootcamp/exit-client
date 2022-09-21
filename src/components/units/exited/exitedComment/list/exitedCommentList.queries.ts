import { gql } from "@apollo/client";

export const FETCH_COMMENTS = gql`
  query fetchComments($userId: String, $boardId: String) {
    fetchComments(userId: $userId, boardId: $boardId) {
      id
      comment
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
