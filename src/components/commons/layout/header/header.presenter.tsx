import Navigation from "../navigation/navigation.container";
import TopMenu from "../topMenu/topMenu.containter";
import * as S from "./header.styles";

export default function HeaderUI() {
  return (
    <>
      <S.Wrapper>
        <S.Logo>
          <img src="/tempBanner.png" alt="exit" />
        </S.Logo>
        <Navigation />
        <TopMenu />
      </S.Wrapper>
    </>
  );
}
