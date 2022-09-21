import { gql } from "@apollo/client";

export const CREATE_ROOM = gql`
  mutation createRoom($nickname: String!) {
    createRoom(nickname: $nickname) {
      id
      room
      user {
        id
      }
    }
  }
`;
