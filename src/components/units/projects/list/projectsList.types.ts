import { Dispatch, MouseEvent, SetStateAction } from "react";
import {
  IBoard,
  IQuery,
  IUser,
} from "../../../../commons/types/generated/types";

export interface IExitingListUIProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  userData: IUser;
  randomData: IBoard;

  filterData: any;
  filteredBoards: any;
  likedData: Pick<IQuery, "fetchLikes"> | undefined;
  searchWords: any;
  onFetchMore: () => void;
  onClickProject: (
    projectId: string
  ) => (event: MouseEvent<HTMLDivElement>) => void;
  onClickFilterButton: () => void;
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}
