export interface IModal01Props {
  modalFor: string;
  modalTitle: string;
  modalData: any;
  setIsModalVisible: any;
}

export interface IModal01UIProps {
  modalFor: string;
  modalTitle: string;
  categoriesData: string[];
  tagsData: string[];
  onClickResetSearchWords: () => void;
}

export interface IModal01UIItemProps {
  el: string;
  filterName: string;
}

export interface IFilterItemProps {
  isSelected: boolean;
}
