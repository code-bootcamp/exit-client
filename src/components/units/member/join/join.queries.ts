import { gql } from "@apollo/client";

export const CHECK_EMAIL_DUPLICATE = gql`
  mutation checkEmailDuplicate($email: String!) {
    checkEmailDuplicate(email: $email)
  }
`;

export const SEND_SIGNUP_EMAIL_TOKEN = gql`
  mutation sendSignupEmailToken($email: String!) {
    sendSignupEmailToken(email: $email)
  }
`;

export const CHECK_EMAIL_TOKEN = gql`
  mutation checkEmailToken($email: String!, $emailToken: String!) {
    checkEmailToken(email: $email, emailToken: $emailToken)
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $createUserInput: CreateUserInput!
    $emailToken: String!
  ) {
    createUser(createUserInput: $createUserInput, emailToken: $emailToken) {
      id
    }
  }
`;
