import { gql } from "@apollo/client";

export const CHECK_EMAIL_TOKEN = gql`
  mutation checkEmailToken($email: string) {
    checkEmailToken(email: $email, emailToken: $emailToken) {
      email
      emailToken
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($password: String!) {
    updatePassword(password: $password)
  }
`;
