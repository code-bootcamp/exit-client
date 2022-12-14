import * as S from "./setTag.styles";
import { ISetTagUIItemProps } from "./setTag.types";
import { v4 as uuidv4 } from "uuid";

export default function SetTagUIItem(props: ISetTagUIItemProps) {
  return (
    <S.Tag
      key={uuidv4()}
      isSelected={
        props.selectedTags?.filter((tag: any) => tag === props.el).length > 0
      }
      onClick={props.onClickTag(props.el)}
    >
      {props.el}
    </S.Tag>
  );
}
