import * as S from "./searchWordsModal.styles";
import { v4 as uuidv4 } from "uuid";
import SearchWordsModalUIItem from "./searchWordsModal.presenterItem";
import { ISearchWordsModalUIProps } from "./searchWordsModal.types";
import Modal01 from "../01";

export default function SearchWordsModalUI(props: ISearchWordsModalUIProps) {
  return (
    <Modal01
      modalFor="프로젝트 리스트"
      modalTitle="기술 / 분야 검색 필터"
      eventHandler={props.onClickClose}
    >
      <S.FilterItems>
        {props.categoriesData?.map((el: any) => (
          <SearchWordsModalUIItem
            el={el}
            filterName="categoryName"
            key={uuidv4()}
          />
        ))}
        {props.tagsData?.map((el: any) => (
          <SearchWordsModalUIItem el={el} filterName="tagName" key={uuidv4()} />
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
    </Modal01>
  );
}
