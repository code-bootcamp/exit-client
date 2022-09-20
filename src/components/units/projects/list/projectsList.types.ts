import { Dispatch, MouseEvent, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IExitingListUIProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  likedData: Pick<IQuery, "fetchLikes"> | undefined;
  searchWords: any;
  filteredBoards: any;
  filterData: any;
  onFetchMore: () => void;
  onClickProject: (
    projectId: string
  ) => (event: MouseEvent<HTMLDivElement>) => void;
  onClickFilterButton: () => void;
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}
