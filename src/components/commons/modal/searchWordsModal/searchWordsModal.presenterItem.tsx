import * as S from "./searchWordsModal.styles";
import { memo, useCallback, useEffect, useLayoutEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { searchWordsState } from "../../store";

export default function SearchWordsModalUIItem(props: any) {
  // const [searchWords, setSearchWords] = useState([]);
  const [searchWords, setSearchWords] = useRecoilState(searchWordsState);
  const [isSelected, setIsSelected] = useState(false);
  // const [recoilSearchWords, setRecoilSearchWords] =
  //   useRecoilState(searchWordsState);

  // 마운트
  // useEffect(() => {
  //   // const initialSearchWords = JSON.parse(
  //   //   sessionStorage.getItem("searchWords") || "[]"
  //   // );
  //   // setSearchWords(initialSearchWords);
  //   // if (
  //   //   initialSearchWords.filter((el: any) => el.word === props.el).length > 0
  //   // ) {
  //   //   setIsSelected(true);
  //   // }
  //   if (searchWords.filter((el: any) => el.word === props.el).length > 0) {
  //     setIsSelected(true);
  //   }
  // }, [searchWords]);

  useLayoutEffect(() => {
    if (searchWords.filter((el: any) => el.word === props.el).length > 0) {
      setIsSelected(true);
    }
  }, [searchWords]);

  // 검색어 삭제
  useEffect(() => {
    if (props.isErased) {
      setIsSelected(false);
      props.setIsErased(false);
      sessionStorage.setItem("searchWords", []);
    }
  }, [props.isErased]);

  const onClickItem = (searchWord: any) => () => {
    // const searchWords = JSON.parse(
    //   sessionStorage.getItem("searchWords") || "[]"
    // );
    // if (searchWords.length > 0) {
    //   const temp = searchWords.filter((el: any) => el.word === searchWord);
    //   if (temp.length === 1) {
    //     sessionStorage.setItem(
    //       "searchWords",
    //       JSON.stringify(
    //         searchWords.filter((el: any) => el.word !== searchWord)
    //       )
    //     );
    //     setIsSelected((prev) => !prev);
    //     return;
    //   }
    // }
    // const newWord = { word: props.el, filterName: props.filterName };
    // searchWords.push(newWord);
    // sessionStorage.setItem("searchWords", JSON.stringify(searchWords));
    // setIsSelected((prev) => !prev);

    // if (searchWords.length > 0) {
    const temp = searchWords.filter((el: any) => el.word === searchWord);
    if (temp.length === 1) {
      // sessionStorage.setItem(
      //   "searchWords",
      //   JSON.stringify(
      //     searchWords.filter((el: any) => el.word !== searchWord)
      //   )
      // );
      const updatedSearchWords = searchWords.filter(
        (el: any) => el.word !== searchWord
      );
      setSearchWords(updatedSearchWords);
      setIsSelected((prev) => !prev);
      return;
    }
    // }
    const newWord = { word: props.el, filterName: props.filterName };
    // searchWords.push(newWord);
    // sessionStorage.setItem("searchWords", JSON.stringify(searchWords));
    setSearchWords((prev) => [...prev, newWord]);
    // setIsSelected((prev) => !prev);
  };

  return (
    <S.FilterItem
      key={uuidv4()}
      onClick={onClickItem(props.el)}
      isSelected={isSelected}
    >
      {props.el}
    </S.FilterItem>
  );
}
