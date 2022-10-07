import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IExitedProjectDetailProps {
  data: Pick<IQuery, "fetchBoard"> | undefined;
}

export interface IExitedProjectDetailUIProps {
  data: Pick<IQuery, "fetchBoard"> | undefined;
  onClickLike: any;
  leaderData: Pick<IQuery, "fetchUserWithUserId"> | undefined;
  userBoardData: Pick<IQuery, "fetchUserBoards"> | undefined;
  likedData: Pick<IQuery, "fetchLikes"> | undefined;
  onClickSubmit: () => void;
  onChangeComment: (event: ChangeEvent<HTMLInputElement>) => void;
  comment: string;
}
