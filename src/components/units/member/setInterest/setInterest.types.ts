import { MouseEventHandler } from "react";

export interface ISetInterestProps {
  onClickClose: () => void;
}

export interface ISetInterestUIProps {
  data: any;
  loading: boolean;
  selectedCategories: any;
  isClickedSelectTags: boolean;
  onClickClose: () => void;
  onClickCategory: MouseEventHandler<HTMLDivElement>;
  onClickUpdateCategories: () => void;
}

export interface ISetInterestUIItemProps {
  el: any;
  selectedCategories: any;
  onClickCategory: any;
}
