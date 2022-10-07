import * as S from "./miniBanner.styles";

export default function MiniBannerPresenter(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.Container onClick={props.onClickMoveToProjects}>
          <S.Contents>
            <S.Title>
              <S.HeadText>직장인도 평범한 일상으로부터, exit</S.HeadText>
              <S.SubText>프로젝트 보러가기 {">"} </S.SubText>
            </S.Title>
            <S.ImageContainer>
              <S.Image src="/miniBanner/miniBannerImage.png" />
            </S.ImageContainer>
          </S.Contents>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
