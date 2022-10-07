import { ChangeEvent } from "react";
import { IQuery, ISubComment } from "../../../../commons/types/generated/types";

export interface IExitedSubCommentProps {
  subComment: Pick<
    ISubComment,
    "subComment" | "createdAt" | "updatedAt" | "user"
  >;
  commentId: string;
}

export interface IExitedSubCommentUIProps {
  subComment: string;
  el: Pick<ISubComment, "subComment" | "createdAt" | "updatedAt" | "user">;
  isEdit: boolean;
  userInfo: { id: string; nickname: string; email: string };
  onChangeSubCommentInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickEdit: () => void;
  onClickUpdateSubComment: (el: any) => () => Promise<void>;
  onClickRemoveSubComment: (el: any) => () => Promise<void>;
}
