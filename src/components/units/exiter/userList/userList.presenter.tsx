import { useQuery } from "@apollo/client";
import { FETCH_USER_RANDOM } from "./userList.queries";
import * as S from "./userList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { FETCH_PROJECT_OF_USER } from "../userDetail/userDetail.queries";

export default function UserListPresenter(props: any) {
  const { data } = useQuery(FETCH_USER_RANDOM);
  const { data: projectData } = useQuery(FETCH_PROJECT_OF_USER, {
    variables: { userId: String(data?.fetchUserRandom.id) },
  });

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.TopContainer>
            <S.SubTitle>Today exiter</S.SubTitle>
            <S.TopTitle>오늘의 엑시터를 소개합니다</S.TopTitle>
            <S.RandomUserContainer>
              <S.RandomUserImageBox>
                {data?.fetchUserRandom.userImage.url !== "null" ? (
                  <S.RandomUserImage
                    src={`${data?.fetchUserRandom.userImage.url}`}
                  />
                ) : (
                  <S.RandomUserImage src="/noImage.png" />
                )}
              </S.RandomUserImageBox>
              <S.RandomUserInfoContainer>
                <S.RandomUserHead>
                  <S.InfoTitle>
                    <S.TitleHead>exiter,</S.TitleHead>
                    <S.HeadUserNickname>
                      {data?.fetchUserRandom.nickname}님
                    </S.HeadUserNickname>
                  </S.InfoTitle>
                  <S.InfoKeywordContainer>
                    {data?.fetchUserRandom.keywords.map(
                      (el: any, index: any) => (
                        <S.InfoKeywordBox key={el.id}>
                          {index < 3 ? (
                            <S.InfoKeyword>#{el.name} </S.InfoKeyword>
                          ) : (
                            ""
                          )}
                        </S.InfoKeywordBox>
                      )
                    )}
                  </S.InfoKeywordContainer>
                </S.RandomUserHead>
                <S.UserInfoLabel>
                  <S.MyInfoTitle>저의 기술스택은</S.MyInfoTitle>{" "}
                  {data?.fetchUserRandom.tags[0] ? (
                    <S.MyInfoContents>
                      {data?.fetchUserRandom.tags.map((el: any, index: any) =>
                        index !== 0 ? `, ${el.name}` : el.name
                      )}
                      입니다
                    </S.MyInfoContents>
                  ) : (
                    <S.MyInfoContents>준비중 입니다.</S.MyInfoContents>
                  )}
                </S.UserInfoLabel>
                <S.UserInfoLabel>
                  <S.MyInfoTitle>저의 관심 분야는</S.MyInfoTitle>{" "}
                  {data?.fetchUserRandom.categories[0] ? (
                    <S.MyInfoContents>
                      {data?.fetchUserRandom.categories.map(
                        (el: any, index: any) =>
                          index !== 0 ? `, ${el.name}` : el.name
                      )}
                      입니다.
                    </S.MyInfoContents>
                  ) : (
                    <S.MyInfoContents>찾고 있습니다.</S.MyInfoContents>
                  )}
                </S.UserInfoLabel>
                <S.UserInfoLabel>
                  <S.MyInfoTitle>현재 참여중인 프로젝트는</S.MyInfoTitle>{" "}
                  {projectData?.fetchProjectOfUser.title ? (
                    <S.MyInfoContents>
                      " {projectData?.fetchProjectOfUser.title} " 입니다.
                    </S.MyInfoContents>
                  ) : (
                    <S.MyInfoContents>없습니다.</S.MyInfoContents>
                  )}
                </S.UserInfoLabel>
                <S.ButtonBox>
                  <S.UserChatButton>1:1 채팅하기</S.UserChatButton>
                </S.ButtonBox>
              </S.RandomUserInfoContainer>
            </S.RandomUserContainer>
          </S.TopContainer>
          {/* 유저리스트 */}
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onFetchMore}
            hasMore={true || false}
          >
            <S.MainContainer>
              <S.MainTitle>프로젝트를 함께할 엑시터들을 찾아보세요</S.MainTitle>
              <S.UserListRow>
                {props.data?.fetchUsers.map((el: any) => (
                  <S.UserListColumn key={el.id}>
                    <S.UserColumnHead>
                      <S.UserImageBox>
                        {el.userImage.url !== "null" ? (
                          <S.UserImage src={`${el.userImage.url}`} />
                        ) : (
                          <S.UserImage src="/profile_img.png" />
                        )}
                      </S.UserImageBox>
                      <S.UserHeadBox>
                        <S.UserNickname>{el.nickname}</S.UserNickname>

                        <S.Key>
                          {el.keywords.map((el: any, index: any) => (
                            <S.UserKeywords>
                              {index < 3 ? (
                                <S.Keyword key={el.id}>#{el.name}</S.Keyword>
                              ) : (
                                ""
                              )}
                            </S.UserKeywords>
                          ))}
                        </S.Key>
                      </S.UserHeadBox>
                    </S.UserColumnHead>
                    <S.UserColumnInfo>
                      <S.UserLabelTitle>관심분야</S.UserLabelTitle>
                      <S.UserLabelBox>
                        {el.categories.map((el: any, index: any) => (
                          <S.Key key={el.id}>
                            {index > 1 ? (
                              <S.UserLabelContents>
                                +{el.name.slice(0, 0)}
                              </S.UserLabelContents>
                            ) : (
                              <S.UserLabelContents>
                                #{el.name}
                              </S.UserLabelContents>
                            )}
                          </S.Key>
                        ))}
                      </S.UserLabelBox>
                    </S.UserColumnInfo>
                    <S.UserColumnInfo>
                      <S.UserLabelTitle>기술스택</S.UserLabelTitle>

                      <S.UserLabelBox>
                        {el.tags.map((el: any, index: any) => (
                          <S.Key key={el.id}>
                            {index > 1 ? (
                              <S.UserLabelContents>
                                +{el.name.slice(0, 0)}
                              </S.UserLabelContents>
                            ) : (
                              <S.UserLabelContents>
                                {el.name.length > 6
                                  ? `${el.name.slice(0, 6)}...`
                                  : `${el.name}`}
                              </S.UserLabelContents>
                            )}
                          </S.Key>
                        ))}
                      </S.UserLabelBox>
                    </S.UserColumnInfo>
                    <S.UserColumnButton
                      id={el.id}
                      onClick={props.onClickMoveToDetail}
                    >
                      정보 더보기
                    </S.UserColumnButton>
                  </S.UserListColumn>
                ))}
              </S.UserListRow>
            </S.MainContainer>
          </InfiniteScroll>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

//    랜덤 정보 호출
//           {data?.fetchUserRandom.nickname}
// {
//   props.data?.fetchUsers.map((el: any) => (
//     <S.Row key={el.id}>
//       <div>id : {el.id}///</div>
//       <div id={el.id}>이메일 : {el.email}///</div>
//       <div>닉네임 : {el.nickname}///</div>
//       <div>포인트 : {el.point}</div>
//     </S.Row>
//   ));
// }
// </>
