import { useApolloClient, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchAttendanceArgs,
  IQueryFetchBoardArgs,
  IQueryFetchUserBoardsArgs,
  IQueryFetchUserWithUserIdArgs,
  IQueryGetAttendanceTimeArgs,
  IQueryGetLocationLeaderArgs,
} from "../../../commons/types/generated/types";
import { accessTokenState, userInfoState } from "../../commons/store";
import CurrentProjectUI from "./currentProject.presenter";
import {
  CHECK_GPS,
  FETCH_ATTENDANCE,
  FETCH_BOARD,
  FETCH_USER_BOARDS,
  FETCH_USER_WITH_USER_ID,
  GET_ATTENDANCE_PERCENT,
  GET_ATTENDANCE_TIME,
  GET_LOCATION_LEADER,
} from "./currentProject.queries";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export default function CurrentProject() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [loading, setLoading] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const router = useRouter();
  const client = useApolloClient();

  // 보드
  const { data: board } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: { boardId: String(router.query.projectId) },
  });

  // 유저 보드(리더 제외)
  const { data } = useQuery<
    Pick<IQuery, "fetchUserBoards">,
    IQueryFetchUserBoardsArgs
  >(FETCH_USER_BOARDS, {
    variables: { boardId: String(router.query.projectId), isAccepted: true },
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

  useEffect(() => {
    if (data !== undefined && leaderData !== undefined) {
      setIsDataLoaded(true);
    }
    if (isDataLoaded) {
      const members = [
        leaderData?.fetchUserWithUserId.id,
        ...data?.fetchUserBoards?.map((el) => el.user.id),
      ];
      if (!members.includes(userInfo.id)) {
        Modal.error({ content: "프로젝트 멤버만 접근할 수 있습니다." });
        router.push("/");
      }
    }
  }, [data, leaderData, isDataLoaded]);

  // 출석율
  const { data: getAttendancePercent } = useQuery(GET_ATTENDANCE_PERCENT, {
    variables: { boardId: String(router.query.projectId) },
  });

  const attendancePercent = getAttendancePercent?.getAttendancePercent;

  // 출석 데이터
  const { data: attendanceData } = useQuery<
    Pick<IQuery, "fetchAttendance">,
    IQueryFetchAttendanceArgs
  >(FETCH_ATTENDANCE, {
    variables: {
      boardId: String(router.query.projectId),
    },
  });

  // 출석 유효시간
  const { data: attendanceTime } = useQuery<
    Pick<IQuery, "getAttendanceTime">,
    IQueryGetAttendanceTimeArgs
  >(GET_ATTENDANCE_TIME, {
    variables: { boardId: String(router.query.projectId) },
  });

  // 리더 위치
  const { data: leaderLocation } = useQuery<
    Pick<IQuery, "getLocationLeader">,
    IQueryGetLocationLeaderArgs
  >(GET_LOCATION_LEADER, {
    variables: {
      boardId: String(router.query.projectId),
    },
  });

  const onClickAttendStart = () => {
    if (!accessToken) {
      Modal.error({ content: "로그인 후 이용해주세요." });
      return;
    }
    try {
      Modal.confirm({
        icon: <ExclamationCircleOutlined />,
        content: "출석체크를 시작하시겠습니까?",
        onCancel() {
          return;
        },
        async onOk() {
          setLoading(true);
          navigator.geolocation.getCurrentPosition(async function (pos) {
            let latitude = pos.coords.latitude;
            let longitude = pos.coords.longitude;

            await client.query({
              query: CHECK_GPS,
              variables: {
                latitude,
                longitude,
                boardId: String(router.query.projectId),
              },
              context: {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              },
            });
            setLoading(false);
            Modal.success({ content: "출석이 활성화되었습니다!" });
            location.reload();
          });
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        setLoading(false);
        Modal.error({ content: error?.message });
      }
    }
  };

  const onClickAttend = () => {
    if (!accessToken) {
      Modal.error({ content: "로그인 후 이용해주세요." });
      return;
    }
    try {
      Modal.confirm({
        icon: <ExclamationCircleOutlined />,
        content: "출석체크 하시겠습니까?",
        onCancel() {
          return;
        },
        async onOk() {
          setLoading(true);
          navigator.geolocation.getCurrentPosition(async function (pos) {
            let latitude = pos.coords.latitude;
            let longitude = pos.coords.longitude;

            const result = await client.query({
              query: CHECK_GPS,
              variables: {
                latitude,
                longitude,
                boardId: String(router.query.projectId),
              },
              context: {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              },
            });
            setLoading(false);
            Modal.success({ content: "출석 체크되었습니다!" });
            location.reload();
          });
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        setLoading(false);
        Modal.error({ content: error.message });
      }
    }
  };

  const onChangeDate = () => {};
  return (
    <CurrentProjectUI
      userInfo={userInfo}
      board={board}
      data={data}
      leaderData={leaderData}
      leaderLocation={leaderLocation}
      attendanceTime={attendanceTime}
      attendanceData={attendanceData}
      attendancePercent={attendancePercent || 0}
      loading={loading}
      isLeader={leaderData?.fetchUserWithUserId.id === userInfo.id}
      onClickAttend={onClickAttend}
      onClickAttendStart={onClickAttendStart}
      onChangeDate={onChangeDate}
    />
  );
}
