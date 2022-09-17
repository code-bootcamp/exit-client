import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IExitingListUIProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  likedData: Pick<IQuery, "fetchLikes"> | undefined;
  filterData: any;
  filteredBoards: any;
  onFetchMore: () => void;
  onClickProject: (
    projectId: string
  ) => (event: MouseEvent<HTMLDivElement>) => void;
  onClickFilterButton: () => void;
}
