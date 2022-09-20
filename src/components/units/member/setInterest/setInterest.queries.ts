import { gql } from "@apollo/client";

export const FETCH_CATEGORIES = gql`
  query fetchCategories {
    fetchCategories {
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
