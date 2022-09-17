import * as S from "./projectDetail.styles";

export default function ProjectDetailUI() {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.TopContainer>
            <S.ProjectImageBox>
              <S.ProjectImage src="/example/ex1.png" />
            </S.ProjectImageBox>
            <S.ProjectTitleContainer>
              <S.ProjectTitle>MEET 대학교 카풀서비스</S.ProjectTitle>
              <S.ProjectText>
                SCS(Smart Charging Solution)는 개인 맞춤형 충전정보 및
                자동예약/해지 서비스가 적용된 전기차 충전운영 통합 솔루션 플랫폼
                서비스를 준비중인 예비창업 팀입니다.
              </S.ProjectText>
            </S.ProjectTitleContainer>
            <S.ProjectKeywordBox>
              <S.ProjectKeyword>#비오는날은 쉬고싶은</S.ProjectKeyword>
              <S.ProjectKeyword>#ENFP</S.ProjectKeyword>
            </S.ProjectKeywordBox>
          </S.TopContainer>
          <S.MainContainer>
            <S.ProjectInfoTitle>프로젝트 정보</S.ProjectInfoTitle>
            <S.ProjectInfoBox>
              <S.BoxTitle>모집현황</S.BoxTitle>
              <S.BoxContents>
                3 / 5<S.MemberIcon />
              </S.BoxContents>
            </S.ProjectInfoBox>
            <S.ProjectInfoBox>
              <S.BoxTitle>받은 관심</S.BoxTitle>
              <S.BoxContents>
                274
                <S.LikeIcon />
              </S.BoxContents>
            </S.ProjectInfoBox>
            {/* 팀장일시 신청자 목록 */}
            <S.UserSignUpList>
              <S.UserSignUpContainer>
                <S.SignUpTop>
                  <S.SignUpImageBox>
                    <S.SignUpImage src="/user.png" />
                  </S.SignUpImageBox>
                  <S.SignUpUserNameBox>
                    <S.SignUpUserName>우기공주</S.SignUpUserName>
                    <S.SignUpUserKeyword>
                      #비오는날에 쉬고싶은
                    </S.SignUpUserKeyword>
                  </S.SignUpUserNameBox>
                </S.SignUpTop>
                <S.SignUpMain>
                  <S.SignUpInfoBox>
                    <S.SignUpInfoTitle>관심분야</S.SignUpInfoTitle>
                    <S.SignUpInfoTagBox>
                      <S.Tag>건강 / 스포츠</S.Tag> <S.Tag>동물 / 식물</S.Tag>
                    </S.SignUpInfoTagBox>
                  </S.SignUpInfoBox>
                  <S.SignUpInfoBox>
                    <S.SignUpInfoTitle>기술스택</S.SignUpInfoTitle>
                    <S.SignUpInfoTagBox>
                      <S.Tag>건강 / 스포츠</S.Tag> <S.Tag>동물 / 식물</S.Tag>
                    </S.SignUpInfoTagBox>
                  </S.SignUpInfoBox>
                  <S.SignUpButtonBox>
                    <S.UserDetailButton>정보 더보기</S.UserDetailButton>
                    <S.UserButtonAccept>수락</S.UserButtonAccept>
                  </S.SignUpButtonBox>
                </S.SignUpMain>
              </S.UserSignUpContainer>
            </S.UserSignUpList>
            {/*  */}
            <S.ProjectInfoBox>
              <S.BoxTitle>1인당 보석금</S.BoxTitle>
              <S.BoxContents>
                200000 <S.MoneyIcon />
              </S.BoxContents>
            </S.ProjectInfoBox>
            <S.ProjectInfoDoubleBox>
              <S.DoubleBox>
                <S.BoxTitle>모집 분야</S.BoxTitle>
                <S.BoxColorContents>공유서비스</S.BoxColorContents>
              </S.DoubleBox>
              <S.DoubleBox>
                <S.BoxTitle>모집 장소</S.BoxTitle>
                <S.BoxColorContents>서울특별</S.BoxColorContents>
              </S.DoubleBox>
            </S.ProjectInfoDoubleBox>
            <S.ProjectInfoSkillBox>
              <S.SkillTitle>모집기술</S.SkillTitle>
              <S.SkillTagBox>
                <S.Tag>Vue</S.Tag> <S.Tag>Phino</S.Tag>
              </S.SkillTagBox>
            </S.ProjectInfoSkillBox>
            <S.ProjectInfoBox>
              <S.BoxTitle>모임 빈도</S.BoxTitle>
              <S.BoxColorContents>주 2회</S.BoxColorContents>
            </S.ProjectInfoBox>
            <S.ProjectInfoBox>
              <S.BoxTitle>진행 기간</S.BoxTitle>
              <S.BoxColorContents>2022.08.24 ~ 2022.10.22</S.BoxColorContents>
            </S.ProjectInfoBox>
            <S.ProjectLeaderContainer>
              <S.LeaderInfoContainer>
                <S.LeaderImageBox>
                  <S.LeaderImage src="/user.png" />
                </S.LeaderImageBox>
                <S.LeaderInfoBox>
                  <S.LeaderName>우기공주</S.LeaderName>
                  <S.LeaderKeywordBox>
                    <S.LeaderKeyword>#비오는날엔 쉬고싶은</S.LeaderKeyword>
                    <S.LeaderKeyword>#ENFP</S.LeaderKeyword>
                  </S.LeaderKeywordBox>
                </S.LeaderInfoBox>
              </S.LeaderInfoContainer>
              <S.LeaderChatButton>팀장에게 채팅하기</S.LeaderChatButton>
            </S.ProjectLeaderContainer>
            <S.ProjectJoinButton>프로젝트 참여 신청하기</S.ProjectJoinButton>
          </S.MainContainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
