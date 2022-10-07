import { IBoard, IQuery } from "../../../commons/types/generated/types";

export interface IMainUIProps {
  data: Pick<IQuery, "fetchBoards">;
  likesData: Pick<IQuery, "fetchLikes">;
  userInfo: { id: string; email: string; nickname: string };
  categoryData1: Pick<IQuery, "fetchBoards">;
  categoryData2: Pick<IQuery, "fetchBoards">;
}

export interface IMainUIPresenterItemProps {
  el: IBoard;
  likesData: Pick<IQuery, "fetchLikes">;
}
