import * as S from "./exitedCommentList.styles";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IComment,
  IMutation,
  IMutationCreateSubCommentArgs,
  IMutationRemoveCommentArgs,
  IMutationUpdateCommentArgs,
  IQuery,
  IQueryFetchSubCommentsArgs,
  ISubComment,
} from "../../../../../commons/types/generated/types";
import { userInfoState } from "../../../../commons/store";
import {
  CREATE_SUB_COMMENT,
  FETCH_COMMENTS,
  FETCH_SUB_COMMENTS,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
} from "./exitedCommentList.queries";
import { IExitedCommentListItemUI } from "./exitedCommentList.types";
import ExitedSubComment from "../../exitedSubComment/exitedSubComment.container";

export default function ExitedCommentListItemUI(
  props: IExitedCommentListItemUI
) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isEdit, setIsEdit] = useState(false);
  const [isSubCommentsOpen, setIsSubCommentsOpen] = useState(false);
  const [isSubCommentWriting, setIsSubCommentWriting] = useState(false);
  const [comment, setComment] = useState("");
  const [subComment, setSubComment] = useState("");
  const router = useRouter();

  const { data: subComments } = useQuery<
    Pick<IQuery, "fetchSubComments">,
    IQueryFetchSubCommentsArgs
  >(FETCH_SUB_COMMENTS, {
    variables: {
      commentId: props?.el.id,
    },
  });

  const [updateComment] = useMutation<
    Pick<IMutation, "updateComment">,
    IMutationUpdateCommentArgs
  >(UPDATE_COMMENT);
  const [removeComment] = useMutation<
    Pick<IMutation, "removeComment">,
    IMutationRemoveCommentArgs
  >(REMOVE_COMMENT);
  const [createSubComment] = useMutation<
    Pick<IMutation, "createSubComment">,
    IMutationCreateSubCommentArgs
  >(CREATE_SUB_COMMENT);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onChangeCommentInput = (event: ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const onClickUpdateComment = (el: IComment) => async () => {
    if (!comment) {
      message.error("수정한 내용이 없습니다.");
      return;
    }
    try {
      Modal.confirm({
        icon: <ExclamationCircleOutlined />,
        content: "게시물을 수정하시겠습니까?",
        onCancel() {
          return;
        },
        async onOk() {
          await updateComment({
            variables: {
              updateCommentInput: {
                comment,
                boardId: String(router.query.projectId),
                commentId: el.id,
              },
            },
            refetchQueries: [
              {
                query: FETCH_COMMENTS,
                variables: { boardId: String(router.query.projectId) },
              },
            ],
          });
          message.success("댓글이 수정되었습니다.");
          setIsEdit(false);
        },
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickRemoveComment = (el: IComment) => async () => {
    try {
      Modal.confirm({
        icon: <ExclamationCircleOutlined />,
        content: "댓글을 삭제하시겠습니까?",
        onCancel() {
          return;
        },
        async onOk() {
          await removeComment({
            variables: {
              commentId: el.id,
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
          message.success("댓글이 삭제되었습니다.");
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  const onClickMoveToSubCommentWrite = () => {
    setIsSubCommentWriting((prev) => !prev);
  };

  const onChangeSubCommentInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSubComment(event.target.value);
  };

  const onClickSubCommentWrite = (commentId: string) => async () => {
    if (!subComment) {
      message.error("댓글 내용을 작성해주세요!");
      return;
    }
    try {
      Modal.confirm({
        icon: <ExclamationCircleOutlined />,
        content: "대댓글을 등록하시겠습니까?",
        onCancel() {
          return;
        },
        async onOk() {
          await createSubComment({
            variables: {
              createSubCommentInput: {
                subComment,
                commentId,
              },
            },
            refetchQueries: [
              {
                query: FETCH_SUB_COMMENTS,
                variables: {
                  commentId,
                },
              },
            ],
          });
          message.success("댓글이 등록되었습니다.");
          setSubComment("");
          setIsSubCommentWriting(false);
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.CommentUserImageWrapper>
          {props?.el.user.userImage.url !== "null" ? (
            <img src={props?.el.user.userImage.url} />
          ) : (
            <img src={"/profile_img.png"} />
          )}
        </S.CommentUserImageWrapper>
        <S.CommentContents>
          <S.UserInfo>
            <S.UserName>{props?.el.user.nickname}</S.UserName>
            <S.UserEmail>{props?.el.user.email}</S.UserEmail>
          </S.UserInfo>
          {!isEdit ? (
            <S.Comment>{props.el?.comment}</S.Comment>
          ) : (
            <S.CommentInputWrapper>
              <S.CommentEditInput
                maxLength={60}
                onChange={onChangeCommentInput}
                value={comment || props.el?.comment || ""}
              />
              <S.ConfirmButton onClick={onClickUpdateComment(props.el)}>
                <img src="/icons/icon_check.svg" alt="확인 버튼" />
              </S.ConfirmButton>
            </S.CommentInputWrapper>
          )}
        </S.CommentContents>
      </S.TopWrapper>
      <S.CommentRightWrapper>
        <S.Date>
          {moment(props?.el.updatedAt).format("YYYY-MM-DD") ||
            moment(props?.el.createdAt).format("YYYY-MM-DD")}
        </S.Date>
      </S.CommentRightWrapper>
      <S.SubCommentsHeadWrapper>
        {subComments?.fetchSubComments?.length > 0 && (
          <S.ShowSubComment
            onClick={() => setIsSubCommentsOpen((prev) => !prev)}
          >
            {isSubCommentsOpen
              ? "댓글 접기"
              : `${subComments?.fetchSubComments?.length}개의 댓글보기`}
          </S.ShowSubComment>
        )}
        {(props.leaderData?.fetchUserWithUserId.id === userInfo.id ||
          props.userBoardData?.fetchUserBoards?.filter(
            (el) => el.user.id === userInfo.id
          )?.length > 0) && (
          <S.MoveToSubCommentWrite onClick={onClickMoveToSubCommentWrite}>
            {subComments?.fetchSubComments?.length > 0 ? ` l ` : ""} 대댓글 달기
          </S.MoveToSubCommentWrite>
        )}
      </S.SubCommentsHeadWrapper>
      <S.SubCommentsBodyWrapper>
        <S.SubCommentInputWrapper isSubCommentWriting={isSubCommentWriting}>
          <S.SubCommentWrite
            onChange={onChangeSubCommentInput}
            value={subComment}
          />
          <S.SubCommentWriteButton
            onClick={onClickSubCommentWrite(props.el.id)}
          >
            <img src="/icons/icon_check.svg" alt="대댓글 작성 버튼" />
          </S.SubCommentWriteButton>
        </S.SubCommentInputWrapper>
        <S.SubCommentsWrapper isSubCommentsOpen={isSubCommentsOpen}>
          {subComments?.fetchSubComments.map(
            (
              el: Pick<
                ISubComment,
                "subComment" | "createdAt" | "updatedAt" | "user"
              >
            ) => (
              <ExitedSubComment
                key={uuidv4()}
                subComment={el}
                commentId={props.el.id}
              />
            )
          )}
        </S.SubCommentsWrapper>
      </S.SubCommentsBodyWrapper>
      {!isEdit && userInfo.email === props?.el.user.email && (
        <S.CommentIconsWrapper>
          <S.EditButton onClick={onClickEdit}>
            <img src="/icons/icon_edit.svg" alt="수정 버튼" title="댓글 수정" />
          </S.EditButton>
          <S.DeleteButton onClick={onClickRemoveComment(props.el)}>
            <img
              src="/icons/icon_delete.svg"
              alt="삭제 버튼"
              title="댓글 삭제"
            />
          </S.DeleteButton>
        </S.CommentIconsWrapper>
      )}
    </S.Wrapper>
  );
}
