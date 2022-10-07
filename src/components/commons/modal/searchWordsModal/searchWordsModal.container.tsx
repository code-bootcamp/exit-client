import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { isModalVisibleState, modalState, searchWordsState } from "../../store";
import { ISearchWordsModalProps } from "./searchWordsModal.types";
import SearchWordsModalUI from "./searchWordsModal.presenter";

export default function SearchWordsModal(props: ISearchWordsModalProps) {
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(isModalVisibleState);
  const [isScrollBlocked, setIsScrollBlocked] = useState(true);
  const [searchWords, setSearchWords] = useRecoilState(searchWordsState);
  const [prevSearchWords, setPrevSearchWords] = useState([]);
  const [isErased, setIsErased] = useState(false);
  const resetSearchWordsState = useResetRecoilState(searchWordsState);
  const resetModalState = useResetRecoilState(modalState);

  useEffect(() => {
    setPrevSearchWords(searchWords);
  }, []);

  useEffect(() => {
    isScrollBlocked
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isScrollBlocked]);

  const onClickResetSearchWords = () => {
    resetSearchWordsState();
  };

  const onClickCompleteSearchWords = () => {
    setIsModalVisible(false);
    resetModalState();
  };

  const onClickClose = () => {
    setIsModalVisible(false);
    resetModalState();
    setSearchWords(prevSearchWords);
  };

  return (
    <SearchWordsModalUI
      categoriesData={props.modalData?.fetchCategories.map(
        (el: any) => el.name
      )}
      tagsData={props.modalData?.fetchTags.map((el: any) => el.name)}
      onClickResetSearchWords={onClickResetSearchWords}
      onClickCompleteSearchWords={onClickCompleteSearchWords}
      onClickClose={onClickClose}
    />
  );
}
