import { Dispatch, MouseEvent, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IExitedListUIProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  likedData: Pick<IQuery, "fetchLikes"> | undefined;
  filterData: any;
  filteredBoards: any;
  isModalVisible: boolean;
  searchWords: any;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  onFetchMore: () => void;
  onClickProject: (
    projectId: string
  ) => (event: MouseEvent<HTMLDivElement>) => void;
  onClickFilterButton: () => void;
}
