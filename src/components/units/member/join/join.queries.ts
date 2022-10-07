import { gql } from "@apollo/client";

export const SEND_EMAIL_TOKEN = gql`
  mutation sendEmailToken($email: String!) {
    sendEmailToken(email: $email)
  }
`;

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
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const FETCH_LOGINED_USER = gql`
  query fetchLoginedUser {
    fetchLoginedUser {
      id
      email
      nickname
    }
  }
`;
