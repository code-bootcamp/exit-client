import Modal01 from "../../../commons/modal/01";
import SetInterestUIItem from "./setInterest.presenterItem";
import * as S from "./setInterest.styles";
import { ISetInterestUIProps } from "./setInterest.types";
import { v4 as uuidv4 } from "uuid";
import Button01 from "../../../commons/buttons/01";
import SetTag from "../setTag/setTag.container";
import Spinner01 from "../../../commons/spinners/01";

export default function SetInterestUI(props: ISetInterestUIProps) {
  return (
    <>
      {props.loading && <Spinner01 />}
      {!props.isClickedSelectTags && (
        <Modal01 modalTitle="관심분야" eventHandler={props.onClickClose}>
          <S.InterestWrapper>
            {props.data?.fetchCategories
              ?.filter((el: any) => el !== "")
              .map((el: any) => (
                <SetInterestUIItem
                  key={uuidv4()}
                  el={el}
                  onClickCategory={props.onClickCategory}
                  selectedCategories={props.selectedCategories}
                />
              ))}
          </S.InterestWrapper>
          <S.ButtonWrapper>
            <Button01
              text="나의 기술 스택 선택가기"
              type="button"
              isValid={props.selectedCategories.length}
              disabled={!props.selectedCategories.length}
              eventHandler={props.onClickUpdateCategories}
            />
          </S.ButtonWrapper>
        </Modal01>
      )}
      {props.isClickedSelectTags && (
        <SetTag onClickClose={props.onClickClose} />
      )}
    </>
  );
}
