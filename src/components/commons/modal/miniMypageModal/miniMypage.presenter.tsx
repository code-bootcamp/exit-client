import * as S from "./miniMypage.styles";

export default function MiniMypageUI(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <S.MyInfoBox>
              {props.data?.fetchLoginedUser.userImage.url !== "null" ? (
                <S.MyImage src={props.data?.fetchLoginedUser.userImage.url} />
              ) : (
                <S.MyImage src={"/profile_img.png"} />
              )}
              <S.MyTitle>
                <S.MyName>{props.data?.fetchLoginedUser.nickname}</S.MyName>
                <S.Mypage onClick={props.onClickMypage}>마이페이지 </S.Mypage>
              </S.MyTitle>
            </S.MyInfoBox>
          </S.Header>
          <S.Main>
            <S.MyPointContainer>
              <S.Point>{props.data?.fetchLoginedUser.point}</S.Point>
              <S.Charge onClick={props.onClickMypage}>충전</S.Charge>
            </S.MyPointContainer>
            <S.MyProjectContainer>
              <S.MyProjectTitle>내 모임</S.MyProjectTitle>
              <S.MyProjectPage>
                {props.myProject?.fetchProjectOfUser.title}
              </S.MyProjectPage>
            </S.MyProjectContainer>
            <S.MyProjectContainer>
              <S.MyProjectTitle>신규 채팅</S.MyProjectTitle>
              <S.MyProjectPage>
                신규 알림이 없습니다(아마 채팅하려나?)
              </S.MyProjectPage>
            </S.MyProjectContainer>
            <S.Logout onClick={props.onClickLogout}>로그아웃</S.Logout>
          </S.Main>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
