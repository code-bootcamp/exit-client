import { gql } from "@apollo/client";

export const SEND_EMAIL_TOKEN = gql`
  mutation sendEmailToken($email: String!) {
    sendEmailToken(email: $email)
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $createUserInput: CreateUserInput!
    $emailToken: String!
  ) {
    createUser(createUserInput: $createUserInput, emailToken: $emailToken) {
      id
      # email
    }
  }
`;
