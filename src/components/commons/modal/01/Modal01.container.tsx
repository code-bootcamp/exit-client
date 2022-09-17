import { useEffect, useState } from "react";
import Modal01UI from "./Modal01.presenter";
import { IModal01Props } from "./Modal01.types";

export default function Modal01(props: any) {
  const [isScrollBlocked, setIsScrollBlocked] = useState(true);
  const [isErased, setIsErased] = useState(false);

  useEffect(() => {
    isScrollBlocked
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isScrollBlocked]);

  const onClickResetSearchWords = () => {
    setIsErased(true);
  };

  const onClickCompleteSearchWords = () => {
    // const searchWords = JSON.parse(
    //   sessionStorage.getItem("searchWords") || "[]"
    // );
    // console.log(searchWords);
    props.setIsModalVisible?.(false);
  };

  const onClickClose = () => {
    props.setIsModalVisible?.(false);
  };

  return (
    <Modal01UI
      modalFor={props.modalFor}
      modalTitle={props.modalTitle}
      categoriesData={props.modalData?.fetchCategories.map(
        (el: any) => el.name
      )}
      tagsData={props.modalData?.fetchTags.map((el: any) => el.name)}
      isErased={isErased}
      setIsErased={setIsErased}
      onClickResetSearchWords={onClickResetSearchWords}
      onClickCompleteSearchWords={onClickCompleteSearchWords}
      onClickClose={onClickClose}
    />
  );
}
