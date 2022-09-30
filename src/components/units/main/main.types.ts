import { IBoard, IQuery } from "../../../commons/types/generated/types";

export interface IMainUIProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  categoryData1: Pick<IQuery, "fetchBoards"> | undefined;
  categoryData2: Pick<IQuery, "fetchBoards"> | undefined;
}

export interface IMainUIPresenterItemProps {
  el: IBoard;
  likedBoards: Pick<IQuery, "fetchLikes"> | undefined;
}
