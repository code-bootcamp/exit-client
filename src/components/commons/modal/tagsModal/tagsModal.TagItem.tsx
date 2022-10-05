import * as S from "./tagsModal.styles";

export default function TagsModalItem(props: any) {
  return (
    <>
      <S.Tag
        isSelected={
          props.selectedTags?.filter((tag: any) => tag === props.el.name)
            .length > 0
        }
        onClick={props.onClickTag(props.el.name)}
      >
        {props.el.name}
      </S.Tag>
    </>
  );
}
