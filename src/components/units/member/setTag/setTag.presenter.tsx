import * as S from "./setTag.styles";
import Modal02 from "../../../commons/modal/02";
import { ISetTagUIProps } from "./setTag.types";
import { v4 as uuidv4 } from "uuid";
import SetTagUIItem from "./setTag.presenterItem";
import Button01 from "../../../commons/buttons/01";

export default function SetTagUI(props: ISetTagUIProps) {
  return (
    <Modal02 modalTitle="기술 스택">
      <S.TagsWrapper>
        {props.data?.fetchTags?.map((el: any) => (
          <SetTagUIItem
            key={uuidv4()}
            el={el.name}
            onClickTag={props.onClickTag}
            selectedTags={props.selectedTags}
          />
        ))}
      </S.TagsWrapper>
      <Button01
        text="가입완료"
        type="button"
        isValid={props.selectedTags.length}
        disabled={!props.selectedTags.length}
        eventHandler={props.onClickUpdateTags}
      />
    </Modal02>
  );
}
