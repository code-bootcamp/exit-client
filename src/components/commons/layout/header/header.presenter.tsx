import Link from "next/link";
import Navigation from "../navigation/navigation.container";
import TopMenu from "../topMenu/topMenu.containter";
import * as S from "./header.styles";

export default function HeaderUI() {
  return (
    <>
      <S.Wrapper>
        <S.Inner>
          <S.Logo>
            <Link href="/">
              <a style={{ display: "block" }}>
                <img src="/logo.svg" alt="exit" />
              </a>
            </Link>
          </S.Logo>
          <Navigation />
          <TopMenu />
        </S.Inner>
      </S.Wrapper>
    </>
  );
}
