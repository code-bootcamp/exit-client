import { gql } from "@apollo/client";

export const FETCH_TAGS = gql`
  query fetchTags {
    fetchTags {
      id
      name
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      categories {
        name
      }
    }
  }
`;
