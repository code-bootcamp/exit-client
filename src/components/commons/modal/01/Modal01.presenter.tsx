import * as S from "./Modal01.styles";
import { v4 as uuidv4 } from "uuid";
import Modal01UIItem from "./Modal01.presenterItem";
import { IModal01UIProps } from "./Modal01.types";

export default function Modal01UI(props: any) {
  return (
    <S.Background>
      <S.SearchModalWrapper>
        <S.ModalFor>{props.modalFor}</S.ModalFor>
        <S.ModalTitle>{props.modalTitle}</S.ModalTitle>
        <S.FilterItems>
          {props.categoriesData?.map((el: any) => (
            <Modal01UIItem
              el={el}
              filterName="categoryName"
              key={uuidv4()}
              isErased={props.isErased}
              setIsErased={props.setIsErased}
            />
          ))}
          {props.tagsData?.map((el: any) => (
            <Modal01UIItem
              el={el}
              filterName="tagName"
              key={uuidv4()}
              isErased={props.isErased}
              setIsErased={props.setIsErased}
            />
          ))}
        </S.FilterItems>
        <S.ButtonWrapper>
          <S.ResetButton onClick={props.onClickResetSearchWords}>
            선택 초기화
          </S.ResetButton>
          <S.CompleteButton onClick={props.onClickCompleteSearchWords}>
            선택 완료
          </S.CompleteButton>
        </S.ButtonWrapper>
        <S.Close onClick={props.onClickClose}>
          <img src="/icons/icon_close.png" />
        </S.Close>
      </S.SearchModalWrapper>
    </S.Background>
  );
}
