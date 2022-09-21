import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IComment,
  IMutation,
  IMutationRemoveCommentArgs,
  IMutationUpdateCommentArgs,
} from "../../../../../commons/types/generated/types";
import { userInfoState } from "../../../../commons/store";
import {
  FETCH_COMMENTS,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
} from "./exitedCommentList.queries";
import * as S from "./exitedCommentList.styles";
import { IExitedCommentListItemUI } from "./exitedCommentList.types";

export default function ExitedCommentListItemUI(
  props: IExitedCommentListItemUI
) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isEdit, setIsEdit] = useState(false);
  const [comment, setComment] = useState("");
  const router = useRouter();

  const [updateComment] = useMutation<
    Pick<IMutation, "updateComment">,
    IMutationUpdateCommentArgs
  >(UPDATE_COMMENT);
  const [removeComment] = useMutation<
    Pick<IMutation, "removeComment">,
    IMutationRemoveCommentArgs
  >(REMOVE_COMMENT);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onChangeCommentInput = (event: ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const onClickUpdateComment = (el: IComment) => async () => {
    if (!comment) {
      Modal.error({ content: "수정한 내용이 없습니다" });
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
          Modal.success({ content: "댓글이 수정되었습니다." });
        },
      });

      setIsEdit(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickRemoveComment = (el: IComment) => async () => {
    try {
      Modal.confirm({
        icon: <ExclamationCircleOutlined />,
        content: "게시물을 삭제하시겠습니까?",
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
          Modal.success({ content: "댓글이 삭제되었습니다." });
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <S.CommentWrapper>
      <S.CommentUserImageWrapper>
        <img src="/profile_img.png" />
      </S.CommentUserImageWrapper>
      <S.CommentContents>
        <S.UserInfo>
          <S.UserName>메로나</S.UserName>
          <S.UserEmail>juju@naver.com</S.UserEmail>
        </S.UserInfo>
        {!isEdit ? (
          <S.Comment>{props.el?.comment}</S.Comment>
        ) : (
          <S.CommentInputWrapper>
            <S.CommentEditInput
              onChange={onChangeCommentInput}
              value={comment || props.el?.comment || ""}
            />
            <S.ConfirmButton onClick={onClickUpdateComment(props.el)}>
              <img src="/icons/icon_check.svg" alt="확인 버튼" />
            </S.ConfirmButton>
          </S.CommentInputWrapper>
        )}
      </S.CommentContents>
      <S.CommentRightWrapper>
        <S.Date>2022.09.12.</S.Date>
      </S.CommentRightWrapper>
      {!isEdit && (
        <S.CommentIConsWrapper>
          <S.EditButton onClick={onClickEdit}>
            <img src="/icons/icon_edit.svg" alt="수정 버튼" />
          </S.EditButton>
          <S.DeleteButton onClick={onClickRemoveComment(props.el)}>
            <img src="/icons/icon_delete.svg" alt="삭제 버튼" />
          </S.DeleteButton>
        </S.CommentIConsWrapper>
      )}
    </S.CommentWrapper>
  );
}
