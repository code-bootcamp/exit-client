import { MouseEventHandler } from "react";

export interface ISetTagUIProps {
  data: any;
  selectedTags: any;
  onClickUpdateTags: () => void;
  onClickTag: MouseEventHandler<HTMLLIElement> | undefined;
}

export interface ISetTagUIItemProps {
  el: any;
  selectedTags: any;
  onClickTag: any;
}
