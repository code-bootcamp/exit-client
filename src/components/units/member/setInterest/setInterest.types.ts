import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface ISetInterestProps {
  onClickClose: () => void;
}

export interface ISetInterestUIProps {
  data: any;
  selectedCategories: any;
  isClickedSelectTags: boolean;
  onClickClose: () => void;
  onClickCategory: MouseEventHandler<HTMLDivElement> | undefined;
  setSelectedCategories: Dispatch<SetStateAction<never[]>>;
  onClickUpdateCategories: () => void;
}

export interface ISetInterestUIItemProps {
  el: any;
  selectedCategories: any;
  onClickCategory: any;
}
