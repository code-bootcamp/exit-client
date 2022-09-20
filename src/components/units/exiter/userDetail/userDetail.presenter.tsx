import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./userDetail.styles";
export default function UserDetailPresenter(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.DetailTopContainer>
            <S.DetailUserImageBox>
              {props.data?.fetchUserWithUserId.userImage.url !== "null" ? (
                <S.UserImage
                  src={`${props.data?.fetchUserWithUserId.userImage.url}`}
                />
              ) : (
                <S.UserImage src={`/profile_img.png`} />
              )}
            </S.DetailUserImageBox>
            <S.UserNickname>
              {props.data?.fetchUserWithUserId.nickname}
            </S.UserNickname>
            <S.UserKeywordsBox>
              {props.data?.fetchUserWithUserId.keywords.map((el: any) => (
                <S.Keys key={el.id}>
                  <S.Keywords>#{el.name}</S.Keywords>
                </S.Keys>
              ))}
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
                {props.data?.fetchUserWithUserId.categories.map((el: any) => (
                  <S.Keys key={el.id}>
                    <S.Units>{el.name}</S.Units>
                  </S.Keys>
                ))}
              </S.UnitsBox>
            </S.TableContents>
            <S.TableContents>
              <S.Title>기술 스택</S.Title>
              <S.UnitsBox>
                {props.data?.fetchUserWithUserId.tags.map((el: any) => (
                  <S.Keys key={el.id}>
                    <S.Units>{el.name}</S.Units>
                  </S.Keys>
                ))}
              </S.UnitsBox>
            </S.TableContents>
            <S.TableContents>
              <S.Title>포트폴리오 링크</S.Title>
              <S.Text>{props.data?.fetchUserWithUserId.userUrl}</S.Text>
            </S.TableContents>
            <S.TableContents>
              {/* 유저프로젝트 디테일 */}
              <S.Title>진행중인 프로젝트</S.Title>
              <S.ProjectRow>
                {props.projectData?.fetchProjectOfUser ? (
                  <S.ProjectExist>
                    {props.projectData?.fetchProjectOfUser.boardImage.url !==
                    "null" ? (
                      <S.ProjectColumn
                        style={{
                          backgroundImage: `url(${props.projectData?.fetchProjectOfUser.boardImage.url})`,
                        }}
                      >
                        <S.LikeBox>
                          <S.MyLike src="/icons/icon_heart_off.png" />
                        </S.LikeBox>
                        <S.Project>
                          <S.ProjectTitleBox>
                            <S.Place>
                              [{props.projectData?.fetchProjectOfUser.address}]
                            </S.Place>
                            <S.ProjectTitle>
                              {props.projectData?.fetchProjectOfUser.title}
                            </S.ProjectTitle>
                          </S.ProjectTitleBox>
                          <S.ProjectInfo>
                            <S.InfoLeft>
                              <S.MemberIcon src="/icons/icon_member_count.png" />
                              <S.MemberNum>
                                {
                                  props.projectData?.fetchProjectOfUser
                                    .totalMember
                                }
                              </S.MemberNum>
                              <S.LikeIcon src="/icons/icon_heart_off.png" />{" "}
                              <S.LikeNum>
                                {
                                  props.projectData?.fetchProjectOfUser
                                    .countLike
                                }
                              </S.LikeNum>
                            </S.InfoLeft>
                            <S.InfoRight>
                              <S.JoinDate>
                                시작일{" "}
                                {getDate(
                                  props.projectData?.fetchProjectOfUser.startAt
                                )}
                              </S.JoinDate>
                            </S.InfoRight>
                          </S.ProjectInfo>
                        </S.Project>
                      </S.ProjectColumn>
                    ) : (
                      <S.ProjectColumn
                        style={{
                          backgroundImage: `url(${"/categories/category_animal_plant.png"})`,
                        }}
                      >
                        <S.LikeBox>
                          <S.MyLike src="/icons/icon_heart_off.png" />
                        </S.LikeBox>
                        <S.Project>
                          <S.ProjectTitleBox>
                            <S.Place>
                              [{props.projectData?.fetchProjectOfUser.address}]
                            </S.Place>
                            <S.ProjectTitle>
                              {props.projectData?.fetchProjectOfUser.title}
                            </S.ProjectTitle>
                          </S.ProjectTitleBox>
                          <S.ProjectInfo>
                            <S.InfoLeft>
                              <S.MemberIcon src="/icons/icon_member_count.png" />
                              <S.MemberNum>
                                {
                                  props.projectData?.fetchProjectOfUser
                                    .totalMember
                                }
                              </S.MemberNum>
                              <S.LikeIcon src="/icons/icon_heart_off.png" />{" "}
                              <S.LikeNum>
                                {
                                  props.projectData?.fetchProjectOfUser
                                    .countLike
                                }
                              </S.LikeNum>
                            </S.InfoLeft>
                            <S.InfoRight>
                              <S.JoinDate>
                                시작일{" "}
                                {getDate(
                                  props.projectData?.fetchProjectOfUser.startAt
                                )}
                              </S.JoinDate>
                            </S.InfoRight>
                          </S.ProjectInfo>
                        </S.Project>
                      </S.ProjectColumn>
                    )}
                  </S.ProjectExist>
                ) : (
                  <S.ProjectColumnNodata>
                    <S.NodataText>진행중인 프로젝트가 없습니다.</S.NodataText>
                  </S.ProjectColumnNodata>
                )}
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
