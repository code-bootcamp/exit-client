import * as S from "./userDetail.styles";
export default function UserDetailPresenter(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.DetailTopContainer>
            <S.DetailUserImageBox>
              <S.UserImage src="/randomUser.png" />
            </S.DetailUserImageBox>
            <S.UserNickname>
              {props.data?.fetchUserWithUserId.nickname}
            </S.UserNickname>
            <S.UserKeywordsBox>
              <S.Keywords>#비오는날엔 쉬고싶은</S.Keywords>
              <S.Keywords>#ENFP</S.Keywords>
              <S.Keywords>#무료한 직장인</S.Keywords>
            </S.UserKeywordsBox>
            <S.UserChatButton>1:1 채팅하기</S.UserChatButton>
          </S.DetailTopContainer>
          <S.DetailMainContainer>
            {/* <S.TableContents>
              <S.Title>관심 분야</S.Title>
              <S.Units>O2O</S.Units>
              <S.Units>소셜네트워크</S.Units>
              <S.Units>이커머스</S.Units>
            </S.TableContents>
            <S.TableContents>
              <S.Title>기술 스택</S.Title>
              <S.Units>Vue</S.Units>
              <S.Units>Phino</S.Units>
              <S.Units>Figma</S.Units>
            </S.TableContents>
            <S.TableContents>
              <S.Title>포트폴리오 링크</S.Title>
              <S.Text>https://github.com/Mollote</S.Text>
            </S.TableContents> */}
          </S.DetailMainContainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
