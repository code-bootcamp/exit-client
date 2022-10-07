import { useMutation, useQuery } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationCreateCommentArgs,
  IMutationCreateOrDeleteLikeArgs,
  IQuery,
  IQueryFetchLikesArgs,
  IQueryFetchUserBoardsArgs,
  IQueryFetchUserWithUserIdArgs,
} from "../../../../commons/types/generated/types";
import { userInfoState } from "../../../commons/store";
import ExitedProjectDetailUI from "./exitedProjectDetail.presenter";
import {
  CREATE_COMMENT,
  CREATE_OR_DELETE_LIKE,
  FETCH_BOARD,
  FETCH_COMMENTS,
  FETCH_LIKES,
  FETCH_USER_BOARDS,
  FETCH_USER_WITH_USER_ID,
} from "./exitedProjectDetail.queries";
import { IExitedProjectDetailProps } from "./exitedProjectDetail.types";

export default function ExitedProjectDetail(props: IExitedProjectDetailProps) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [comment, setComment] = useState("");
  const router = useRouter();

  const { data: leaderData } = useQuery<
    Pick<IQuery, "fetchUserWithUserId">,
    IQueryFetchUserWithUserIdArgs
  >(FETCH_USER_WITH_USER_ID, {
    variables: { userId: String(props.data?.fetchBoard.leader) },
  });

  const { data: userBoardData } = useQuery<
    Pick<IQuery, "fetchUserBoards">,
    IQueryFetchUserBoardsArgs
  >(FETCH_USER_BOARDS, {
    variables: { boardId: String(router.query.projectId) },
  });

  const { data: likedData } = useQuery<
    Pick<IQuery, "fetchLikes">,
    IQueryFetchLikesArgs
  >(FETCH_LIKES, {
    variables: {
      userId: userInfo.id,
    },
  });

  const [createOrDeleteLike] = useMutation<
    Pick<IMutation, "createOrDeleteLike">,
    IMutationCreateOrDeleteLikeArgs
  >(CREATE_OR_DELETE_LIKE);

  const [createComment] = useMutation<
    Pick<IMutation, "createComment">,
    IMutationCreateCommentArgs
  >(CREATE_COMMENT);

  const onClickLike = async () => {
    try {
      await createOrDeleteLike({
        variables: {
          boardId: String(router.query.projectId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: String(router.query.projectId) },
          },
          { query: FETCH_LIKES, variables: { userId: userInfo.id } },
        ],
      });
    } catch (error) {}
  };

  const onChangeComment = (event: ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const onClickSubmit = async () => {
    if (!userInfo.email) {
      message.error("로그인 후 이용가능합니다.");
      setComment("");
      return;
    }

    if (!comment) {
      message.error("댓글 내용을 입력해주세요.");
      return;
    }

    try {
      await createComment({
        variables: {
          createCommentInput: {
            boardId: String(router.query.projectId),
            comment,
          },
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId: String(router.query.projectId),
            },
          },
        ],
      });
      setComment("");
      Modal.success({ content: "댓글이 등록되었습니다." });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <ExitedProjectDetailUI
      data={props.data}
      comment={comment}
      userBoardData={userBoardData}
      leaderData={leaderData}
      likedData={likedData}
      onClickLike={onClickLike}
      onChangeComment={onChangeComment}
      onClickSubmit={onClickSubmit}
    />
  );
}
