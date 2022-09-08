import * as S from "./topMenu.styles";

export default function TopMenuUI() {
  return (
    <S.IconWrapper>
      <S.TopMenuButton src="/icons/search-icon.png" />
      <S.TopMenuButton src="/icons/face-icon.png" />
    </S.IconWrapper>
  );
}
