import * as S from "./topMenu.styles";

export default function TopMenuUI() {
  return (
    <S.IconWrapper>
      <S.TopMenuButton src="/search-icon.png" />
      <S.TopMenuButton src="/face-icon.png" />
    </S.IconWrapper>
  );
}
