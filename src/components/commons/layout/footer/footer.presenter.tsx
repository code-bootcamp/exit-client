import * as S from "./footer.styles";

export default function FooterUI() {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.LeftWrapper>
          <h1>
            <img src="/logo.svg" />
          </h1>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.LinkWrapper>
            <S.Link>이용약관</S.Link>
            <S.Link>고객문의</S.Link>
            <S.Link>개인정보 처리 방침</S.Link>
          </S.LinkWrapper>
          <S.Info>
            <strong>(주)I6</strong>
            서울특별시 구로구 디지털로 지밸리 비즈프라자
          </S.Info>
          <S.Info>
            <strong>E-Mail</strong> i6.project.exit@gmail.com
          </S.Info>
          <S.CopyRight>COPYRIGHT © I6. ALL RIGHT RESERVED.</S.CopyRight>
        </S.RightWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
