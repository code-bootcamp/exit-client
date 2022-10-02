import * as S from "./writeTagsModal.styles";

export default function WriteTagsModalItem(props: any) {
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
