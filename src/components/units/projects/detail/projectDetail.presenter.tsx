import {
  categoriesImgSources,
  getDate,
} from "../../../../commons/libraries/utils";
import * as S from "./projectDetail.styles";

export default function ProjectDetailUI(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.TopContainer>
            {/* 이미지 없을경우  */}
            <S.ProjectImageBox>
              {props.data?.fetchBoard.boardImage.url === "null" ? (
                <S.ProjectImage
                  src={`${
                    categoriesImgSources[
                      props.data?.fetchBoard.categories?.[0]?.name
                    ]
                  }`}
                />
              ) : (
                <S.ProjectImage
                  src={`${props.data?.fetchBoard.boardImage.url}`}
                />
              )}
            </S.ProjectImageBox>

            <S.ProjectTitleContainer>
              <S.ProjectTitle>{props.data?.fetchBoard.title}</S.ProjectTitle>
              <S.ProjectText>
                {props.data?.fetchBoard.description}
              </S.ProjectText>
            </S.ProjectTitleContainer>
            <S.ProjectKeywordBox>
              {props.data?.fetchBoard.keywords.map((el: any) => (
                <S.Key key={el.id}>
                  <S.ProjectKeyword>{el.name}</S.ProjectKeyword>
                </S.Key>
              ))}
            </S.ProjectKeywordBox>
          </S.TopContainer>
          <S.MainContainer>
            <S.ProjectInfoTitle>프로젝트 정보</S.ProjectInfoTitle>
            <S.ProjectInfoBox>
              <S.BoxTitle>모집현황</S.BoxTitle>
              <S.BoxContents>
                {props.data?.fetchBoard.countMember} /{" "}
                {props.data?.fetchBoard.totalMember}
                <S.Icon src="/icons/member_icon.png" />
              </S.BoxContents>
            </S.ProjectInfoBox>
            <S.ProjectInfoBox>
              <S.BoxTitle onClick={props.onClickLike}>받은 관심</S.BoxTitle>
              <S.BoxContents>
                {props.data?.fetchBoard.countLike}
                <S.Icon src="/icons/heart_icon.png" />
              </S.BoxContents>
            </S.ProjectInfoBox>
            {/* 로그인한사람이 팀장일시 신청자 목록 */}
            {props.data?.fetchBoard.leader === props.userInfo.id ? (
              <S.UserSignUpList>
                {props.signUpData?.fetchUserBoards.map((el) => (
                  <S.UserSignUpContainer key={el.user.id}>
                    <S.SignUpTop>
                      <S.SignUpImageBox>
                        {el.user.userImage?.url !== "" ? (
                          <S.SignUpImage src={`${el.user.userImage?.url}`} />
                        ) : (
                          <S.SignUpImage src={`/profile_img.png`} />
                        )}
                      </S.SignUpImageBox>
                      <S.SignUpUserNameBox>
                        <S.SignUpUserName>{el.user.nickname}</S.SignUpUserName>
                        <S.ProjectKeywordBox>
                          {el.user.keywords.map((e) => (
                            <S.Key key={e.id}>
                              <S.SignUpUserKeyword>
                                #{e.name}
                              </S.SignUpUserKeyword>
                            </S.Key>
                          ))}
                        </S.ProjectKeywordBox>
                      </S.SignUpUserNameBox>
                    </S.SignUpTop>
                    <S.SignUpMain>
                      <S.SignUpInfoBox>
                        <S.SignUpInfoTitle>관심분야</S.SignUpInfoTitle>
                        <S.SignUpInfoTagBox>
                          {el.user.categories.map((e) => (
                            <S.Key key={e.id}>
                              <S.Tag>{e.name}</S.Tag>
                            </S.Key>
                          ))}
                        </S.SignUpInfoTagBox>
                      </S.SignUpInfoBox>
                      <S.SignUpInfoBox>
                        <S.SignUpInfoTitle>기술스택</S.SignUpInfoTitle>
                        <S.SignUpInfoTagBox>
                          {el.user.tags.map((e) => (
                            <S.Key key={e.id}>
                              <S.Tag>{e.name}</S.Tag>{" "}
                            </S.Key>
                          ))}
                        </S.SignUpInfoTagBox>
                      </S.SignUpInfoBox>
                      <S.SignUpButtonBox>
                        <S.UserDetailButton>정보 더보기</S.UserDetailButton>
                        {el.isAccepted ? (
                          <S.UserButtonNoAccept
                            id={el.user.id}
                            onClick={props.onClickSignUpUserNoAccept}
                          >
                            취소
                          </S.UserButtonNoAccept>
                        ) : (
                          <S.UserButtonAccept
                            id={el.user.id}
                            onClick={props.onClickSignUpUserAccept}
                          >
                            수락
                          </S.UserButtonAccept>
                        )}
                      </S.SignUpButtonBox>
                    </S.SignUpMain>
                  </S.UserSignUpContainer>
                ))}
              </S.UserSignUpList>
            ) : (
              ""
            )}
            <S.ProjectInfoBox>
              <S.BoxTitle>1인당 보석금</S.BoxTitle>
              <S.BoxContents>
                {props.data?.fetchBoard.bail}
                <S.Icon src="/icons/money_icon.png" />
              </S.BoxContents>
            </S.ProjectInfoBox>
            <S.ProjectInfoDoubleBox>
              <S.DoubleBox>
                <S.BoxTitle>모집 분야</S.BoxTitle>
                <S.BoxColorContents>
                  {props.data?.fetchBoard.categories[0]?.name}
                </S.BoxColorContents>
              </S.DoubleBox>
              <S.DoubleBox>
                <S.BoxTitle>모집 장소</S.BoxTitle>
                <S.BoxColorContents>
                  {props.data?.fetchBoard.address}
                </S.BoxColorContents>
              </S.DoubleBox>
            </S.ProjectInfoDoubleBox>
            <S.ProjectInfoSkillBox>
              <S.SkillTitle>모집기술</S.SkillTitle>
              <S.SkillTagBox>
                {props.data?.fetchBoard.tags.map((el: any) => (
                  <S.Key key={el.id}>
                    <S.Tag>{el.name}</S.Tag>
                  </S.Key>
                ))}
              </S.SkillTagBox>
            </S.ProjectInfoSkillBox>
            <S.ProjectInfoBox>
              <S.BoxTitle>모임 빈도</S.BoxTitle>
              <S.BoxColorContents>
                주 {props.data?.fetchBoard.frequency}회
              </S.BoxColorContents>
            </S.ProjectInfoBox>
            <S.ProjectInfoBox>
              <S.BoxTitle>진행 기간</S.BoxTitle>
              <S.BoxColorContents>
                {getDate(props.data?.fetchBoard.startAt)} ~{" "}
                {getDate(props.data?.fetchBoard.endAt)}
              </S.BoxColorContents>
            </S.ProjectInfoBox>
            {/* 팀장정보, 팀장일시 안보이게 */}
            {props.data?.fetchBoard.leader === props.userInfo.id ? (
              <S.ProjectLeaderButton>
                <S.ProjectJoinButton onClick={props.onClickStart}>
                  프로젝트 시작하기
                </S.ProjectJoinButton>
                <S.ProjectButtonBox>
                  <S.ProjectDeleteButton onClick={props.onClickDeleteProject}>
                    삭제
                  </S.ProjectDeleteButton>
                  <S.ProjectUpdateButton onClick={props.onClickMoveToUpdate}>
                    수정
                  </S.ProjectUpdateButton>
                </S.ProjectButtonBox>
              </S.ProjectLeaderButton>
            ) : (
              <S.ProjectLeaderContainer>
                <S.LeaderWapper>
                  <S.LeaderInfoContainer>
                    <S.LeaderImageBox>
                      {!!props.leaderData?.fetchUserWithUserId.userImage.url ? (
                        <S.LeaderImage
                          src={`${props.leaderData?.fetchUserWithUserId.userImage.url}`}
                        />
                      ) : (
                        <S.LeaderImage src="/profile_img.png" />
                      )}
                    </S.LeaderImageBox>
                    <S.LeaderInfoBox>
                      <S.LeaderName>
                        {props.leaderData?.fetchUserWithUserId.nickname}
                      </S.LeaderName>
                      <S.LeaderKeywordBox>
                        {props.leaderData?.fetchUserWithUserId.keywords.map(
                          (el: any) => (
                            <S.Key key={el.id}>
                              <S.LeaderKeyword>{el.name}</S.LeaderKeyword>
                            </S.Key>
                          )
                        )}
                      </S.LeaderKeywordBox>
                    </S.LeaderInfoBox>
                  </S.LeaderInfoContainer>
                  <S.LeaderChatButton>팀장에게 채팅하기</S.LeaderChatButton>
                </S.LeaderWapper>
                {props.joined.flat().includes(props.userInfo.id) ? (
                  <S.ProjectJoinCancleButton
                    id={`${props.userInfo.id}`}
                    onClick={props.onClickSignUpUserNoAccept}
                  >
                    프로젝트 참여 취소하기
                  </S.ProjectJoinCancleButton>
                ) : (
                  <S.ProjectJoinButton
                    id={`${props.userInfo.id}`}
                    onClick={props.onClickSignUpProject}
                  >
                    프로젝트 참여 신청하기
                  </S.ProjectJoinButton>
                )}
              </S.ProjectLeaderContainer>
            )}
          </S.MainContainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
