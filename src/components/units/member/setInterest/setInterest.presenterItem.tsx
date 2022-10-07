import * as S from "./setInterest.styles";
import { ISetInterestUIItemProps } from "./setInterest.types";

export default function SetInterestUIItem(props: ISetInterestUIItemProps) {
  return (
    <>
      <S.CategoryWrapper>
        <S.Select
          isSelected={
            props.selectedCategories.filter(
              (category: any) => category === props.el.name
            ).length > 0
          }
          onClick={props.onClickCategory(props.el)}
        />
        <S.Category>{props.el?.name}</S.Category>
      </S.CategoryWrapper>
    </>
  );
}
