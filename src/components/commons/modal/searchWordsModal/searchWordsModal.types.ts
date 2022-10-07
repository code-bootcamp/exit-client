import { Dispatch, SetStateAction } from "react";

export interface ISearchWordsModalProps {
  // modalFor: string;
  // modalTitle: string;
  modalData: any;
  // setIsModalVisible: any;
}

export interface ISearchWordsModalUIProps {
  // modalFor: string;
  // modalTitle: string;
  categoriesData: string[];
  tagsData: string[];
  isErased: boolean;
  setIsErased: Dispatch<SetStateAction<boolean>>;
  onClickResetSearchWords: () => void;
  onClickCompleteSearchWords: () => void;
  onClickClose: () => void;
}

export interface ISearchWordsModalUIItemProps {
  el: string;
  filterName: string;
}

export interface IFilterItemProps {
  isSelected: boolean;
}
