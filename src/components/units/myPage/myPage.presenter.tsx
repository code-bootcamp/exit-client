import Payment from "../../../commons/payments";
import * as S from "./myPage.styles";

export default function MyPagePresenter(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.TopConainer onClick={props.onClickMoveMypageEdit}>
            <S.UserImageBox>
              <S.UserImage src="/user.png" />
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

          <S.ProjectContainer>
            <S.MyProject>
              <S.ProjectTitle>나의 프로젝트</S.ProjectTitle>
              <S.ProjectRow>
                <S.ProjectColumn>진행중인 프로젝트가 없습니다</S.ProjectColumn>
              </S.ProjectRow>
            </S.MyProject>
            <S.LikeProject>
              <S.ProjectTitle>찜한 프로젝트</S.ProjectTitle>
              <S.ProjectRow>
                <S.ProjectColumn>찜한 프로젝트가 없습니다</S.ProjectColumn>
              </S.ProjectRow>
            </S.LikeProject>
            <S.HistoryProject>
              <S.ProjectTitle>프로젝트 히스토리</S.ProjectTitle>
              <S.ProjectRow>
                <S.ProjectColumn>프로젝트 히스토리가 없습니다</S.ProjectColumn>
              </S.ProjectRow>
            </S.HistoryProject>
          </S.ProjectContainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
