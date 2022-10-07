import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IExitedProjectDetailProps {
  data: Pick<IQuery, "fetchBoard">;
}

export interface IExitedProjectDetailUIProps {
  data: Pick<IQuery, "fetchBoard">;
  onClickLike: any;
  leaderData: Pick<IQuery, "fetchUserWithUserId">;
  userBoardData: Pick<IQuery, "fetchUserBoards">;
  likedData: Pick<IQuery, "fetchLikes">;
  onClickSubmit: () => void;
  onChangeComment: (event: ChangeEvent<HTMLInputElement>) => void;
  comment: string;
}
