import { gql } from "@apollo/client";

export const FETCH_USER_BOARDS = gql`
  query fetchUserBoards($boardId: String, $isAccepted: Boolean) {
    fetchUserBoards(boardId: $boardId, isAccepted: $isAccepted) {
      id
      isAccepted
      board {
        bail
      }
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

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      title
      bail
      address
      frequency
      leaderNickname
      leader
    }
  }
`;

export const FETCH_USER_WITH_USER_ID = gql`
  query fetchUserWithUserId($userId: String!) {
    fetchUserWithUserId(userId: $userId) {
      id
      email
      nickname
      userImage {
        id
        url
      }
    }
  }
`;

export const CHECK_GPS = gql`
  query checkGps($latitude: Float!, $longitude: Float!, $boardId: String!) {
    checkGps(latitude: $latitude, longitude: $longitude, boardId: $boardId)
  }
`;

export const GET_LOCATION_LEADER = gql`
  query getLocationLeader($boardId: String!) {
    getLocationLeader(boardId: $boardId)
  }
`;

export const GET_LOCATION_CREW = gql`
  query getLocationCrew($boardId: String!, $userId: String!) {
    getLocationCrew(boardId: $boardId, userId: $userId)
  }
`;

export const GET_ATTENDANCE_PERCENT = gql`
  query getAttendancePercent($boardId: String!) {
    getAttendancePercent(boardId: $boardId)
  }
`;

export const GET_ATTENDANCE_TIME = gql`
  query getAttendanceTime($boardId: String!) {
    getAttendanceTime(boardId: $boardId)
  }
`;

export const FETCH_ATTENDANCE = gql`
  query fetchAttendance($boardId: String!) {
    fetchAttendance(boardId: $boardId) {
      userId
      nickname
      attendedAt
      latitude
      longitude
    }
  }
`;
