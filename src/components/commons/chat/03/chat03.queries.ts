import { gql } from "@apollo/client";

export const CONNECTION_ROOM = gql`
  query connectionRoom($hostNickname: String!) {
    connectionRoom(hostNickname: $hostNickname) {
      id
    }
  }
`;

export const CREATE_ROOM = gql`
  mutation createRoom($nickname: String!) {
    createRoom(nickname: $nickname) {
      id
      room
    }
  }
`;

export const FETCH_LOGS = gql`
  query fetchLogs($room: String!) {
    fetchLogs(room: $room) {
      id
      message
      room
      user {
        id
        nickname
      }
      createdAt
    }
  }
`;
