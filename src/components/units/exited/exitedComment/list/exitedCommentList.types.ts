import { IComment, IQuery } from "../../../../../commons/types/generated/types";

export interface IExitedCommentListProps {
  leaderData: Pick<IQuery, "fetchUserWithUserId"> | undefined;
  userBoardData: Pick<IQuery, "fetchUserBoards"> | undefined;
}

export interface IExitedCommentListUIProps {
  data: Pick<IQuery, "fetchComments"> | undefined;
  leaderData: Pick<IQuery, "fetchUserWithUserId"> | undefined;
  userBoardData: Pick<IQuery, "fetchUserBoards"> | undefined;
}

export interface IExitedCommentListItemUI {
  el: IComment;
  leaderData: Pick<IQuery, "fetchUserWithUserId"> | undefined;
  userBoardData: Pick<IQuery, "fetchUserBoards"> | undefined;
}
