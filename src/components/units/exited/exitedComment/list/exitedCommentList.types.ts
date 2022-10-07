import { IComment, IQuery } from "../../../../../commons/types/generated/types";

export interface IExitedCommentListProps {
  leaderData: Pick<IQuery, "fetchUserWithUserId">;
  userBoardData: Pick<IQuery, "fetchUserBoards">;
}

export interface IExitedCommentListUIProps {
  data: Pick<IQuery, "fetchComments">;
  leaderData: Pick<IQuery, "fetchUserWithUserId">;
  userBoardData: Pick<IQuery, "fetchUserBoards">;
}

export interface IExitedCommentListItemUI {
  el: IComment;
  leaderData: Pick<IQuery, "fetchUserWithUserId">;
  userBoardData: Pick<IQuery, "fetchUserBoards">;
}
