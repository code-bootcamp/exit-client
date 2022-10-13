import * as S from "./tagsModal.styles";
import { v4 as uuidv4 } from "uuid";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchTagArgs,
} from "../../../../commons/types/generated/types";
import { isModalVisibleState, modalState, tagsState } from "../../store";
import Modal01 from "../01";
import TagsModalItem from "./tagsModal.TagItem";

interface ItagsModalProps {
  onClickClose: () => void;
}

export const FETCH_TAGS = gql`
  query fetchTags {
    fetchTags {
      id
      name
    }
  }
`;

export default function TagsModal(props: ItagsModalProps) {
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(isModalVisibleState);
  const [modal, setModal] = useRecoilState(modalState);
  const [tags, setTags] = useRecoilState(tagsState);
  const resetModalState = useResetRecoilState(modalState);
  const [selectedTags, setSelectedTags] = useState([]);
  const { data } = useQuery<Pick<IQuery, "fetchTags">, IQueryFetchTagArgs>(
    FETCH_TAGS
  );

  useEffect(() => {
    const selectedTags = tags;
    setSelectedTags(selectedTags);

    return () => {
      setIsModalVisible(false);
      resetModalState();
    };
  }, []);

  const onClickTag = (el: any) => () => {
    const tempTags = [...selectedTags];

    const temp = tempTags.filter((tag: string) => tag === el);
    // 중복 체크
    if (temp.length === 1) {
      const newCategories = tempTags.filter((tag: string) => tag !== el);
      setSelectedTags(newCategories);
      return;
    }

    const newTags: any = [el, ...tempTags].slice(0, 5);
    setSelectedTags(newTags);
  };

  const onClickReset = () => {
    setSelectedTags([]);
  };

  const onClickComplete = () => {
    setTags(selectedTags);
    setIsModalVisible(false);
    resetModalState();
  };

  return (
    <Modal01
      modalFor="모집기술 선택"
      modalTitle="기술 스택"
      eventHandler={props.onClickClose}
    >
      <S.TagsWrapper>
        {data?.fetchTags.map((el) => (
          <TagsModalItem
            key={uuidv4()}
            el={el}
            onClickTag={onClickTag}
            selectedTags={selectedTags}
          />
        ))}
      </S.TagsWrapper>
      <S.ButtonWrapper>
        <S.ResetButton onClick={onClickReset}>선택 초기화</S.ResetButton>
        <S.CompleteButton onClick={onClickComplete}>선택 완료</S.CompleteButton>
      </S.ButtonWrapper>
    </Modal01>
  );
}
