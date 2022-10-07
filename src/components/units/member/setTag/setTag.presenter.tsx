import * as S from "./setTag.styles";
import Modal01 from "../../../commons/modal/01";
import { ISetTagUIProps } from "./setTag.types";
import { v4 as uuidv4 } from "uuid";
import SetTagUIItem from "./setTag.presenterItem";
import Button01 from "../../../commons/buttons/01";
import Spinner01 from "../../../commons/spinners/01";

export default function SetTagUI(props: ISetTagUIProps) {
  return (
    <>
      {props.loading && <Spinner01 />}
      <Modal01 modalTitle="기술 스택" eventHandler={props.onClickClose}>
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
        <S.ButtonWrapper>
          <Button01
            text="가입완료"
            type="button"
            isValid={props.selectedTags.length}
            disabled={!props.selectedTags.length}
            eventHandler={props.onClickUpdateTags}
          />
        </S.ButtonWrapper>
      </Modal01>
    </>
  );
}
