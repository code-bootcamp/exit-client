import { gql, useQuery } from "@apollo/client";
import { AntdTreeNodeAttribute } from "antd/lib/tree";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchTagArgs,
} from "../../../../commons/types/generated/types";
import { isModalVisibleState } from "../../store";
import Modal02 from "../02";
import * as S from "./writeTagsModal.styles";
import WriteTagsModalItem from "./writeTagsModal.TagItem";

interface IWriteTagsModalProps {
  onClickClose: () => void;
  setIsEditingTags: any;
}

export const FETCH_TAGS = gql`
  query fetchTags {
    fetchTags {
      id
      name
    }
  }
`;

export default function WriteTagsModal(props: IWriteTagsModalProps) {
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(isModalVisibleState);
  const [selectedTags, setSelectedTags] = useState([]);
  const { data } = useQuery<Pick<IQuery, "fetchTags">, IQueryFetchTagArgs>(
    FETCH_TAGS
  );

  useEffect(() => {
    const selectedTags = JSON.parse(
      sessionStorage.getItem("selectedTags") || "[]"
    );
    setSelectedTags(selectedTags);

    return () => {
      setIsModalVisible(false);
    };
  }, []);

  const onClickTag = (el: any) => () => {
    const tags = [...selectedTags];
    const temp = tags.filter((tag: string) => tag === el);
    // 중복 체크
    if (temp.length === 1) {
      const newCategories = tags.filter((tag: string) => tag !== el);
      setSelectedTags(newCategories);
      return;
    }

    const newTags: any = [el, ...tags].slice(0, 5);
    setSelectedTags(newTags);
  };

  const onClickReset = () => {
    setSelectedTags([]);
  };

  const onClickComplete = () => {
    sessionStorage.setItem("selectedTags", JSON.stringify(selectedTags));
    setIsModalVisible(false);
    props?.setIsEditingTags?.(false);
  };

  return (
    <Modal02
      modalFor="모집기술 선택"
      modalTitle="기술 스택"
      eventHandler={props.onClickClose}
    >
      <S.TagsWrapper>
        {data?.fetchTags.map((el) => (
          <WriteTagsModalItem
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
    </Modal02>
  );
}
