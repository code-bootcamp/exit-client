import { IBoard, IQuery } from "../../../commons/types/generated/types";

export interface IMainUIProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
}

export interface IMainUISliderItem {
  el: IBoard;
  likedBoards: Pick<IQuery, "fetchLikes"> | undefined;
}
