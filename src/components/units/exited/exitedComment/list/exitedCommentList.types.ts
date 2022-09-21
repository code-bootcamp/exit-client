import { IComment, IQuery } from "../../../../../commons/types/generated/types";

export interface IExitedCommentListUIProps {
  data: Pick<IQuery, "fetchComments"> | undefined;
}

export interface IExitedCommentListItemUI {
  el: IComment;
}
