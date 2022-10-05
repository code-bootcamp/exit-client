import { IBoard, IQuery } from "../../../commons/types/generated/types";

export interface IMainUIProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  likesData: Pick<IQuery, "fetchLikes"> | undefined;
  userInfo: { id: string; email: string; nickname: string };
  categoryData1: Pick<IQuery, "fetchBoards"> | undefined;
  categoryData2: Pick<IQuery, "fetchBoards"> | undefined;
}

export interface IMainUIPresenterItemProps {
  el: IBoard;
  likesData: Pick<IQuery, "fetchLikes"> | undefined;
}
