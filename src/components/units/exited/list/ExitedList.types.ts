import { IBoard, IQuery } from "../../../../commons/types/generated/types";

export interface IExitedListUIProps {
  data: Pick<IQuery, "fetchBoards">;
  fetchBoardsByLikes: IBoard[];
  userInfo: { id: string; email: string; nickname: string };
  likedData: Pick<IQuery, "fetchLikes">;
  filterData: any;
  filteredBoards: IBoard[];
  isModalVisible: boolean;
  searchWords: any;
  modal: string;
  onFetchMore: () => void;
  onClickProject: (projectId: string) => () => void;
  onClickFilterButton: () => void;
}
