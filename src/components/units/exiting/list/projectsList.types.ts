import {
  IBoard,
  IQuery,
  IUser,
} from "../../../../commons/types/generated/types";

export interface IExitingListUIProps {
  data: Pick<IQuery, "fetchBoards">;
  userInfo: { id: string; nickname: string; email: string };
  userData: IUser;
  randomData: IBoard;
  filterData: any;
  filteredBoards: IBoard[];
  likedData: Pick<IQuery, "fetchLikes">;
  searchWords: any;
  modal: string;
  onFetchMore: () => void;
  onClickProject: (projectId: string) => () => void;
  onClickFilterButton: () => void;
  isModalVisible: boolean;
}
