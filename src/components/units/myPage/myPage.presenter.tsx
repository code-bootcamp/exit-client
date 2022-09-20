import { getDate } from "../../../commons/libraries/utils";
import Payment from "../../../commons/payments";
import * as S from "./myPage.styles";

export default function MyPagePresenter(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.TopConainer onClick={props.onClickMoveMypageEdit}>
            <S.UserImageBox>
              {props.data?.fetchLoginedUser.userImage.url !== "null" ? (
                <S.UserImage
                  src={`${props.data?.fetchLoginedUser.userImage.url}`}
                />
              ) : (
                <S.UserImage src={`/profile_img.png`} />
              )}
            </S.UserImageBox>
            <S.UserNameBox>
              <S.UserName>{props.data?.fetchLoginedUser.nickname}</S.UserName>
              <S.UserEmail>
                {props.data?.fetchLoginedUser.email}
                <S.Angle src="/icons/angle_gray_right.png" />{" "}
              </S.UserEmail>
            </S.UserNameBox>
          </S.TopConainer>
          <S.PointContainer>
            <S.PointHeadRow>
              <S.PointTitle>사용 가능한 포인트</S.PointTitle>
              <S.PointRight>
                <S.Amount>
                  {props.data?.fetchLoginedUser.point} <S.Color>P</S.Color>{" "}
                </S.Amount>
                <S.PointToggleButton src="/icons/icon_arrow_green.png" />
              </S.PointRight>
            </S.PointHeadRow>
            <S.PointContentsRow>
              <S.PointContentsBox>
                <S.ContentsTilte>프로젝트 성공 환급금 지급</S.ContentsTilte>
                <S.ContentsSubTitle>적립</S.ContentsSubTitle>
              </S.PointContentsBox>
              <S.PointHistoryBox>
                <S.PointHistory>+ 200000 P</S.PointHistory>
                <S.PointHistoryDate> 2022.09.12</S.PointHistoryDate>
              </S.PointHistoryBox>
            </S.PointContentsRow>
            <S.PointButtonContainer>
              <S.RefundButton>환급하기</S.RefundButton>
              <S.ChargingButton>
                <Payment />
              </S.ChargingButton>
            </S.PointButtonContainer>
          </S.PointContainer>
          {/* 프로젝트들 */}
          <S.ProjectContainer>
            <S.MyProject>
              <S.ProjectTitle>나의 프로젝트</S.ProjectTitle>
              {props.myProjectData?.fetchProjectOfUser.id ? (
                <S.ProjectRow>
                  <S.ProjectColumn
                    style={{
                      backgroundImage: `url(${props.myProjectData?.fetchProjectOfUser.boardImage.url})`,
                    }}
                  >
                    <S.ProjectTop>
                      <S.LikeIcon />
                    </S.ProjectTop>
                    <S.ProjectMain>
                      <S.ProjectTitleBox>
                        <S.ProjectAdress>
                          [{props.myProjectData?.fetchProjectOfUser.address}]
                        </S.ProjectAdress>
                        <S.ProjectColumnTitle>
                          {props.myProjectData?.fetchProjectOfUser.title}
                        </S.ProjectColumnTitle>
                      </S.ProjectTitleBox>
                      <S.ProjectBottom>
                        <S.BottomLeft>
                          <S.MemberIcon />
                          {props.myProjectData?.fetchProjectOfUser.totalMember}
                          <S.LikeIcon />
                          {props.myProjectData?.fetchProjectOfUser.countLike}
                        </S.BottomLeft>
                        <S.BottomRight>
                          참여일
                          {getDate(
                            props.myProjectData?.fetchProjectOfUser.startAt
                          )}{" "}
                        </S.BottomRight>
                      </S.ProjectBottom>
                    </S.ProjectMain>
                  </S.ProjectColumn>
                </S.ProjectRow>
              ) : (
                <S.ProjectNoRow>
                  <S.NoProjectColumn>
                    진행중인 프로젝트가 없습니다
                  </S.NoProjectColumn>
                </S.ProjectNoRow>
              )}
            </S.MyProject>
            <S.LikeProject>
              <S.ProjectTitle>찜한 프로젝트</S.ProjectTitle>
              {props.likeProjectData?.fetchLikes[0] ? (
                <S.ProjectRow>
                  {props.likeProjectData?.fetchLikes.map((el: any) => (
                    <S.Key key={el.id}>
                      {el.board.boardImage?.url !== "null" ? (
                        <S.ProjectColumn
                          style={{
                            backgroundImage: `url(${"/categories/category_animal_plant.png"})`,
                          }}
                        >
                          <S.ProjectTop>
                            <S.LikeIcon />
                          </S.ProjectTop>
                          <S.ProjectMain>
                            <S.ProjectTitleBox>
                              <S.ProjectAdress>
                                [{el.board.address}]
                              </S.ProjectAdress>
                              <S.ProjectColumnTitle>
                                {el.board.title}
                              </S.ProjectColumnTitle>
                            </S.ProjectTitleBox>
                            <S.ProjectBottom>
                              <S.BottomLeft>
                                <S.MemberIcon />
                                {el.board.totalMember}
                                <S.LikeIcon />
                                {el.board.countLike}
                              </S.BottomLeft>
                              <S.BottomRight>
                                참여일
                                {getDate(el.board.startAt)}
                              </S.BottomRight>
                            </S.ProjectBottom>
                          </S.ProjectMain>
                        </S.ProjectColumn>
                      ) : (
                        <S.ProjectColumn
                          style={{
                            backgroundImage: `url(${el.board.boardImage?.url})`,
                          }}
                        >
                          <S.ProjectTop>
                            <S.LikeIcon />
                          </S.ProjectTop>
                          <S.ProjectMain>
                            <S.ProjectTitleBox>
                              <S.ProjectAdress>
                                [{el.board.address}]
                              </S.ProjectAdress>
                              <S.ProjectColumnTitle>
                                {el.board.title}
                              </S.ProjectColumnTitle>
                            </S.ProjectTitleBox>
                            <S.ProjectBottom>
                              <S.BottomLeft>
                                <S.MemberIcon />
                                {el.board.totalMember}
                                <S.LikeIcon />
                                {el.board.countLike}
                              </S.BottomLeft>
                              <S.BottomRight>
                                참여일
                                {getDate(el.board.startAt)}
                              </S.BottomRight>
                            </S.ProjectBottom>
                          </S.ProjectMain>
                        </S.ProjectColumn>
                      )}
                    </S.Key>
                  ))}
                </S.ProjectRow>
              ) : (
                <S.ProjectNoRow>
                  <S.NoProjectColumn>
                    찜한 프로젝트가 없습니다
                  </S.NoProjectColumn>
                </S.ProjectNoRow>
              )}
            </S.LikeProject>
            <S.HistoryProject>
              <S.ProjectTitle>프로젝트 히스토리</S.ProjectTitle>
              {props.endProjectData?.fetchProjectsOfUser[0] ? (
                <S.ProjectRow>
                  {props.endProjectData?.fetchProjectsOfUser.map((el) => (
                    <S.ProjectColumn
                      style={{
                        backgroundImage: `url(${"/categories/category_animal_plant.png"})`,
                      }}
                      key={el.id}
                    >
                      <S.ProjectTop>
                        <S.LikeIcon />
                      </S.ProjectTop>
                      <S.ProjectMain>
                        <S.ProjectTitleBox>
                          <S.ProjectAdress>[{el?.address}]</S.ProjectAdress>
                          <S.ProjectColumnTitle>
                            {el?.title}
                          </S.ProjectColumnTitle>
                        </S.ProjectTitleBox>
                        <S.ProjectBottom>
                          <S.BottomLeft>
                            <S.MemberIcon />
                            {el?.totalMember}
                            <S.LikeIcon />
                            {el?.countLike}
                          </S.BottomLeft>
                          <S.BottomRight>
                            참여일
                            {getDate(el.startAt)}
                          </S.BottomRight>
                        </S.ProjectBottom>
                      </S.ProjectMain>
                    </S.ProjectColumn>
                  ))}
                </S.ProjectRow>
              ) : (
                <S.ProjectNoRow>
                  <S.NoProjectColumn>
                    프로젝트 히스토리가 없습니다
                  </S.NoProjectColumn>
                </S.ProjectNoRow>
              )}
            </S.HistoryProject>
          </S.ProjectContainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
