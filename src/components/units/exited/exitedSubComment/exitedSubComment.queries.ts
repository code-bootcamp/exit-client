import { gql } from "@apollo/client";

export const UPDATE_SUB_COMMENT = gql`
  mutation updateSubComment($updateSubCommentInput: UpdateSubCommentInput!) {
    updateSubComment(updateSubCommentInput: $updateSubCommentInput)
  }
`;

export const REMOVE_SUB_COMMENT = gql`
  mutation removeSubComment($subCommentId: String, $commentId: String) {
    removeSubComment(subCommentId: $subCommentId, commentId: $commentId)
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
