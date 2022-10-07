import { MouseEventHandler } from "react";

export interface ISetTagProps {
  onClickClose: () => void;
}

export interface ISetTagUIProps {
  data: any;
  loading: boolean;
  selectedTags: any;
  onClickUpdateTags: () => void;
  onClickTag: MouseEventHandler<HTMLLIElement> | undefined;
  onClickClose: () => void;
}

export interface ISetTagUIItemProps {
  el: any;
  selectedTags: any;
  onClickTag: any;
}
