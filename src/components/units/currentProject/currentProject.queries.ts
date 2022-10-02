import { gql } from "@apollo/client";

export const FETCH_USER_BOARDS = gql`
  query fetchUserBoards(
    # $userId: String
    $boardId: String
    $isAccepted: Boolean
  ) {
    fetchUserBoards(
      # userId: $userId
      boardId: $boardId
      isAccepted: $isAccepted
    ) {
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

export const FECTH_BOARD = gql`
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

// 리더 정보 받아오기
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

// 출석 체크(반경 계산)
export const CHECK_GPS = gql`
  query checkGps($latitude: Float!, $longitude: Float!, $boardId: String!) {
    checkGps(latitude: $latitude, longitude: $longitude, boardId: $boardId)
  }
`;

// 리더 위치 받아오기
export const GET_LOCATION_LEADER = gql`
  query getLocationLeader($boardId: String!) {
    getLocationLeader(boardId: $boardId)
  }
`;

// 팀원 위치 받아오기
export const GET_LOCATION_CREW = gql`
  query getLocationCrew($boardId: String!, $userId: String!) {
    getLocationCrew(boardId: $boardId, userId: $userId)
  }
`;

// 출석율 받기
export const GET_ATTENDANCE_PERCENT = gql`
  query getAttendancePercent($boardId: String!) {
    getAttendancePercent(boardId: $boardId)
  }
`;

// 출석 유효시간
export const GET_ATTENDANCE_TIME = gql`
  query getAttendanceTime($boardId: String!) {
    getAttendanceTime(boardId: $boardId)
  }
`;

// 출석한 유저 목록
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
