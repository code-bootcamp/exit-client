import { useMutation, useQuery } from "@apollo/client";
import { includes } from "lodash";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../commons/store";
import { FETCH_USER_WITH_USER_ID } from "../../exiter/userDetail/userDetail.queries";

import ProjectDetailUI from "./projectDetail.presenter";
import {
  CREATE_OR_DELETE_LIKE,
  CREATE_USER_BOARD,
  FETCH_BOARD,
  FETCH_USER_BOARDS,
  REMOVE_USER_BOARDS,
  UPDATE_USER_BOARD,
} from "./projectDetail.queries";

export default function ProjectDetailContainenr() {
  const router = useRouter();
  const [userInfo] = useRecoilState(userInfoState);
  const { data, refetch } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.projectId) },
  });
  const { data: signUpData } = useQuery(FETCH_USER_BOARDS, {
    variables: {
      boardId: String(router.query.projectId),
    },
  });
  const { data: leaderData } = useQuery(FETCH_USER_WITH_USER_ID, {
    variables: { userId: String(data?.fetchBoard.leader) },
  });
  const [createOrDeleteLike] = useMutation(CREATE_OR_DELETE_LIKE);
  const [createUserBoard] = useMutation(CREATE_USER_BOARD);
  const [updateUserBoard] = useMutation(UPDATE_USER_BOARD);
  const [removeUserBoards] = useMutation(REMOVE_USER_BOARDS);

  console.log(leaderData);
  let joined = [];
  joined.push(signUpData?.fetchUserBoards.map((el) => el.user.id));

  //찜하기
  const onClickLike = async () => {
    await createOrDeleteLike({
      variables: {
        boardId: String(router.query.projectId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.projectId) },
        },
      ],
    });
  };
  // 프젝 신청
  const onClickSignUpProject = async () => {
    await createUserBoard({
      variables: {
        createUserBoardInput: {
          userId: userInfo.id,
          boardId: String(router.query.projectId),
        },
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          fetchPolicy: "network-only",
          variables: { boardId: String(router.query.projectId) },
        },
        {
          query: FETCH_USER_BOARDS,
          variables: {
            boardId: String(router.query.projectId),
          },
        },
      ],
    });
  };
  //팀장이 지원자를 수락/취소
  const onClickSignUpUserAccept = async (event: any) => {
    await updateUserBoard({
      variables: {
        updateUserBoardInput: {
          userId: event.target.id,
          boardId: String(router.query.projectId),
          isAccepted: true,
        },
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          fetchPolicy: "network-only",
          variables: { boardId: String(router.query.projectId) },
        },
        {
          query: FETCH_USER_BOARDS,
          variables: {
            boardId: String(router.query.projectId),
          },
        },
      ],
    });
  };

  const onClickSignUpUserNoAccept = async (event: any) => {
    await removeUserBoards({
      variables: {
        userId: event.target.id,
        boardId: String(router.query.projectId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.projectId) },
        },
        {
          query: FETCH_USER_BOARDS,
          variables: {
            boardId: String(router.query.projectId),
          },
        },
      ],
      awaitRefetchQueries: true,
    });
  };

  return (
    <>
      <ProjectDetailUI
        data={data}
        onClickLike={onClickLike}
        userInfo={userInfo}
        leaderData={leaderData}
        signUpData={signUpData}
        onClickSignUpProject={onClickSignUpProject}
        onClickSignUpUserAccept={onClickSignUpUserAccept}
        onClickSignUpUserNoAccept={onClickSignUpUserNoAccept}
        joined={joined}
      />
    </>
  );
}
