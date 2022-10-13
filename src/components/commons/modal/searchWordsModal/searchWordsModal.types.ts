export interface ISearchWordsModalProps {
  modalData: any;
}

export interface ISearchWordsModalUIProps {
  categoriesData: string[];
  tagsData: string[];
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
