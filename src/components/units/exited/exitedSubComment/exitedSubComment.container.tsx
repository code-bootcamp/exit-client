import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationRemoveSubCommentArgs,
  IMutationUpdateSubCommentArgs,
} from "../../../../commons/types/generated/types";
import { userInfoState } from "../../../commons/store";
import ExitedSubCommentUI from "./exitedSubComment.presenter";
import {
  FETCH_SUB_COMMENTS,
  REMOVE_SUB_COMMENT,
  UPDATE_SUB_COMMENT,
} from "./exitedSubComment.queries";
import { IExitedSubCommentProps } from "./exitedSubComment.types";

export default function ExitedSubComment(props: IExitedSubCommentProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [subComment, setSubComment] = useState("");

  const [updateSubComment] = useMutation<
    Pick<IMutation, "updateSubComment">,
    IMutationUpdateSubCommentArgs
  >(UPDATE_SUB_COMMENT);
  const [removeSubComment] = useMutation<
    Pick<IMutation, "removeSubComment">,
    IMutationRemoveSubCommentArgs
  >(REMOVE_SUB_COMMENT);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onChangeSubCommentInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSubComment(event.target.value);
  };

  const onClickUpdateSubComment = (el: any) => async () => {
    if (!subComment) {
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
          await updateSubComment({
            variables: {
              updateSubCommentInput: {
                subComment,
                subCommentId: el.id,
                commentId: props.commentId,
              },
            },
            refetchQueries: [
              {
                query: FETCH_SUB_COMMENTS,
                variables: { commentId: props.commentId },
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

  const onClickRemoveSubComment = (el: any) => async () => {
    try {
      Modal.confirm({
        icon: <ExclamationCircleOutlined />,
        content: "댓글을 삭제하시겠습니까?",
        onCancel() {
          return;
        },
        async onOk() {
          await removeSubComment({
            variables: {
              subCommentId: el.id,
              commentId: props.commentId,
            },
            refetchQueries: [
              {
                query: FETCH_SUB_COMMENTS,
                variables: { commentId: props.commentId },
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

  return (
    <ExitedSubCommentUI
      subComment={subComment}
      el={props.subComment}
      isEdit={isEdit}
      userInfo={userInfo}
      onChangeSubCommentInput={onChangeSubCommentInput}
      onClickEdit={onClickEdit}
      onClickUpdateSubComment={onClickUpdateSubComment}
      onClickRemoveSubComment={onClickRemoveSubComment}
    />
  );
}
