import { gql } from "@apollo/client";

export const SEND_EMAIL_TOKEN = gql`
  mutation sendEmailToken($email: String!) {
    sendEmailToken(email: $email)
  }
`;

export const CHECK_EMAIL_TOKEN = gql`
  mutation checkEmailToken($email: String!, $emailToken: String!) {
    checkEmailToken(email: $email, emailToken: $emailToken)
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($password: String!) {
    updatePassword(password: $password)
  }
`;

export const SEND_NEW_PASSWORD = gql`
  mutation sendNewPassword($email: String!) {
    sendNewPassword(email: $email)
  }
`;

// export const FETCH_USER = gql

export const CHECK_EMAIL_DUPLICATE = gql`
  mutation checkEmailDuplicate($email: String!) {
    checkEmailDuplicate(email: $email)
  }
`;
