import { ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import { IBoard, IQuery } from "../../../commons/types/generated/types";

export interface ISearchUIProps {
  likesData: Pick<IQuery, "fetchLikes">;
  isSearching: boolean;
  searchKeyword: string;
  savedSearchKeyword: string;
  onChangeSearchKeywords: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyPressEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  handleSearchByRecentSearchWord: (event: MouseEvent<HTMLLIElement>) => void;
  searchResults: IBoard[];
  recentSearchKeywords: string[];
}

export interface ISearchUIPresenterItemProps {
  el: IBoard;
  likesData: Pick<IQuery, "fetchLikes">;
}
