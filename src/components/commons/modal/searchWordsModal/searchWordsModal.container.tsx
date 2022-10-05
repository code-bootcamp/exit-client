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
  const [isErased, setIsErased] = useState(false);
  const resetSearchWordsState = useResetRecoilState(searchWordsState);
  const resetModalState = useResetRecoilState(modalState);

  useEffect(() => {
    isScrollBlocked
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isScrollBlocked]);

  const onClickResetSearchWords = () => {
    // setIsErased(true);
    // resetModalState();
    resetSearchWordsState();
  };

  const onClickCompleteSearchWords = () => {
    // const searchWords = JSON.parse(
    //   sessionStorage.getItem("searchWords") || "[]"
    // );
    // console.log(searchWords);
    // props.setIsModalVisible?.(false);
    setIsModalVisible(false);
    resetModalState();
  };

  const onClickClose = () => {
    // props.setIsModalVisible?.(false);
    setIsModalVisible(false);
    resetModalState();
  };

  return (
    <SearchWordsModalUI
      categoriesData={props.modalData?.fetchCategories.map(
        (el: any) => el.name
      )}
      tagsData={props.modalData?.fetchTags.map((el: any) => el.name)}
      isErased={isErased}
      setIsErased={setIsErased}
      onClickResetSearchWords={onClickResetSearchWords}
      onClickCompleteSearchWords={onClickCompleteSearchWords}
      onClickClose={onClickClose}
      // recoilSearchWords={recoilSearchWords}
    />
  );
}
