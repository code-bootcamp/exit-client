import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IAttendance,
  IQuery,
  IQueryFetchAttendanceArgs,
  IQueryFetchBoardArgs,
  IQueryFetchUserBoardsArgs,
  IQueryFetchUserWithNicknameArgs,
  IQueryFetchUserWithUserIdArgs,
  IQueryGetLocationLeaderArgs,
} from "../../../commons/types/generated/types";
import { userInfoState } from "../../commons/store";
import { FETCH_BOARD } from "../exited/list/ExitedList.queries";
import CurrentProjectUI from "./currentProject.presenter";
import {
  FETCH_ATTENDANCE,
  FETCH_USER_BOARDS,
  FETCH_USER_WITH_USER_ID,
  GET_ATTENDANCE_PERCENT,
  GET_LOCATION_LEADER,
} from "./currentProject.queries";
import moment from "moment";

export default function CurrentProject() {
  const [date, setDate] = useState<any>(moment());
  const [selectedDayAttendence, setSelectedDayAttendance] = useState([]);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const router = useRouter();

  // 유저 보드
  const { data } = useQuery<
    Pick<IQuery, "fetchUserBoards">,
    IQueryFetchUserBoardsArgs
  >(FETCH_USER_BOARDS, {
    variables: { boardId: String(router.query.projectId) },
  });

  // 보드
  const { data: board } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: { boardId: String(router.query.projectId) },
  });

  // 리더
  const { data: leaderData } = useQuery<
    Pick<IQuery, "fetchUserWithUserId">,
    IQueryFetchUserWithUserIdArgs
  >(FETCH_USER_WITH_USER_ID, {
    variables: {
      userId: String(board?.fetchBoard.leader),
    },
  });

  // 출석율
  const { data: getAttendancePercent } = useQuery(GET_ATTENDANCE_PERCENT, {
    variables: { boardId: String(router.query.projectId) },
  });

  const attendancePercent = getAttendancePercent?.getAttendancePercent;

  // 출석 데이터
  const { data: attendanceData } = useQuery(FETCH_ATTENDANCE, {
    variables: {
      boardId: String(router.query.projectId),
    },
  });

  // 선택한 날짜 출석데이터 받기
  useEffect(() => {
    const selectedDayAttendanceData = attendanceData?.fetchAttendance?.filter(
      (el: IAttendance) =>
        moment(el.attendedAt).format("YYYY-MM-DD") === date.format("YYYY-MM-DD")
    );
    setSelectedDayAttendance(selectedDayAttendanceData);
  }, [attendanceData, date]);

  // 리더 위치
  const { data: leaderLocation } = useQuery<
    Pick<IQuery, "getLocationLeader">,
    IQueryGetLocationLeaderArgs
  >(GET_LOCATION_LEADER, {
    variables: {
      boardId: String(router.query.projectId),
    },
  });

  const minDay = moment().add("1", "d").format("YYYY-MM-DD");
  const maxDay = moment().add("3", "m").format("YYYY-MM-DD");

  const onChangeDate = async (newDate: string) => {
    const date: any = moment(newDate).format("YYYY-MM-DD");
    setDate(date);
  };

  return (
    <CurrentProjectUI
      data={data} // 유저보드 데이터
      date={date} // 날짜 데이터
      leaderData={leaderData}
      selectedDayAttendence={selectedDayAttendence}
      board={board}
      userInfo={userInfo}
      leaderLocation={leaderLocation}
      setDate={setDate}
      minDay={minDay}
      maxDay={maxDay}
      onChangeDate={onChangeDate}
      attendancePercent={attendancePercent || 0}
    />
  );
}
