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
            <S.UserChatButtonBox>
              <S.ChatLine></S.ChatLine>
              <S.UserChatButton>1:1 채팅하기</S.UserChatButton>
              <S.ChatLine></S.ChatLine>
            </S.UserChatButtonBox>
          </S.DetailTopContainer>
          <S.DetailMainContainer>
            <S.TableContents>
              <S.Title>관심 분야</S.Title>
              <S.UnitsBox>
                <S.Units>O2O</S.Units>
                <S.Units>소셜네트워크</S.Units>
                <S.Units>이커머스</S.Units>
              </S.UnitsBox>
            </S.TableContents>
            <S.TableContents>
              <S.Title>기술 스택</S.Title>
              <S.UnitsBox>
                <S.Units>Vue</S.Units>
                <S.Units>Phino</S.Units>
                <S.Units>Figma</S.Units>
              </S.UnitsBox>
            </S.TableContents>
            <S.TableContents>
              <S.Title>포트폴리오 링크</S.Title>
              <S.Text>https://github.com/Mollote</S.Text>
            </S.TableContents>
            <S.TableContents>
              <S.Title>진행중인 프로젝트</S.Title>
              <S.ProjectRow>
                <S.ProjectColumn>
                  <S.LikeBox>
                    <S.MyLike src="/icons/icon_heart_off.png" />
                  </S.LikeBox>
                  <S.Project>
                    <S.ProjectTitleBox>
                      <S.Place>[경기도] </S.Place>
                      <S.ProjectTitle> MEET 대학교 카풀서비스</S.ProjectTitle>
                    </S.ProjectTitleBox>
                    <S.ProjectInfo>
                      <S.InfoLeft>
                        <S.MemberIcon />
                        <S.MemberNum>5</S.MemberNum>
                        <S.LikeIcon src="/icons/icon_heart_off.png" />{" "}
                        <S.LikeNum>274</S.LikeNum>
                      </S.InfoLeft>
                      <S.InfoRight>
                        <S.JoinDate>참여일 2022.09.10</S.JoinDate>
                      </S.InfoRight>
                    </S.ProjectInfo>
                  </S.Project>
                </S.ProjectColumn>
              </S.ProjectRow>
            </S.TableContents>
            <S.TableContents>
              <S.Title>
                {props.data?.fetchUserWithUserId.nickname}님의 히스토리입니다
              </S.Title>
              <S.ProjectRow>
                <S.ProjectColumn>
                  <S.LikeBox>
                    <S.MyLike src="/icons/icon_heart_off.png" />
                  </S.LikeBox>
                  <S.Project>
                    <S.ProjectTitleBox>
                      <S.Place>[경기도] </S.Place>
                      <S.ProjectTitle> MEET 대학교 카풀서비스</S.ProjectTitle>
                    </S.ProjectTitleBox>
                    <S.ProjectInfo>
                      <S.InfoLeft>
                        <S.MemberIcon />
                        <S.MemberNum>5</S.MemberNum>
                        <S.LikeIcon src="/icons/icon_heart_off.png" />{" "}
                        <S.LikeNum>274</S.LikeNum>
                      </S.InfoLeft>
                      <S.InfoRight>
                        <S.JoinDate>참여일 2022.09.10</S.JoinDate>
                      </S.InfoRight>
                    </S.ProjectInfo>
                  </S.Project>
                </S.ProjectColumn>
                <S.ProjectColumn>
                  <S.LikeBox>
                    <S.MyLike src="/icons/icon_heart_off.png" />
                  </S.LikeBox>
                  <S.Project>
                    <S.ProjectTitleBox>
                      <S.Place>[경기도] </S.Place>
                      <S.ProjectTitle> MEET 대학교 카풀서비스</S.ProjectTitle>
                    </S.ProjectTitleBox>
                    <S.ProjectInfo>
                      <S.InfoLeft>
                        <S.MemberIcon />
                        <S.MemberNum>5</S.MemberNum>
                        <S.LikeIcon src="/icons/icon_heart_off.png" />{" "}
                        <S.LikeNum>274</S.LikeNum>
                      </S.InfoLeft>
                      <S.InfoRight>
                        <S.JoinDate>참여일 2022.09.10</S.JoinDate>
                      </S.InfoRight>
                    </S.ProjectInfo>
                  </S.Project>
                </S.ProjectColumn>
              </S.ProjectRow>
            </S.TableContents>
          </S.DetailMainContainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
