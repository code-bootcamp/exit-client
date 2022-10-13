import * as S from "./searchWordsModal.styles";
import { useLayoutEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRecoilState } from "recoil";
import { searchWordsState } from "../../store";

export default function SearchWordsModalUIItem(props: any) {
  const [searchWords, setSearchWords] = useRecoilState(searchWordsState);
  const [isSelected, setIsSelected] = useState(false);

  useLayoutEffect(() => {
    if (searchWords.filter((el: any) => el.word === props.el).length > 0) {
      setIsSelected(true);
    }
  }, [searchWords]);

  const onClickItem = (searchWord: any) => () => {
    const temp = searchWords.filter((el: any) => el.word === searchWord);
    if (temp.length === 1) {
      const updatedSearchWords = searchWords.filter(
        (el: any) => el.word !== searchWord
      );
      setSearchWords(updatedSearchWords);
      setIsSelected((prev) => !prev);
      return;
    }

    const newWord = { word: props.el, filterName: props.filterName };

    setSearchWords((prev) => [...prev, newWord]);
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
