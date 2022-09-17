import * as S from "./Modal01.styles";
import { useEffect, useState } from "react";
import { IModal01UIItemProps } from "./Modal01.types";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { searchWordsState } from "../../store";

export default function Modal01UIItem(props: any) {
  const [searchWords, setSearchWords] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  // 마운트
  useEffect(() => {
    const initialSearchWords = JSON.parse(
      sessionStorage.getItem("searchWords") || "[]"
    );
    setSearchWords(initialSearchWords);
    if (
      initialSearchWords.filter((el: any) => el.word === props.el).length > 0
    ) {
      setIsSelected(true);
    }
  }, []);

  // 언마운트
  useEffect(() => {
    if (props.isErased) {
      setIsSelected(false);
      props.setIsErased(false);
      sessionStorage.setItem("searchWords", []);
      // sessionStorage.remove("searchWords");
    }
  }, [props.isErased]);

  const onClickItem = (searchWord: any) => () => {
    const searchWords = JSON.parse(
      sessionStorage.getItem("searchWords") || "[]"
    );
    // console.log(searchWords);
    if (searchWords.length > 0) {
      const temp = searchWords.filter((el: any) => el.word === searchWord);
      if (temp.length === 1) {
        sessionStorage.setItem(
          "searchWords",
          JSON.stringify(
            searchWords.filter((el: any) => el.word !== searchWord)
          )
        );
        setIsSelected((prev) => !prev);
        return;
      }
    }

    const newWord = { word: props.el, filterName: props.filterName };
    searchWords.push(newWord);
    sessionStorage.setItem("searchWords", JSON.stringify(searchWords));

    setIsSelected((prev) => !prev);
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
