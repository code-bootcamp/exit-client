import { categoriesImgSources } from "../../../../commons/libraries/utils";
import * as S from "./exitedProjectDetail.styles";
import { IExitedProjectDetailUIProps } from "./exitedProjectDetail.types";
import moment from "moment";
import ExitedCommentList from "../exitedComment/list/exitedCommentList.container";

export default function ExitedProjectDetailUI(
  props: IExitedProjectDetailUIProps
) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ProjectImageBox>
          {props.data?.fetchBoard.boardImage.url !== "null" ? (
            <S.ProjectImage src={props.data?.fetchBoard.boardImage.url} />
          ) : (
            <S.ProjectImage
              src={
                categoriesImgSources[
                  props.data.fetchBoard.categories[0]?.name
                ] || "/noImage.png"
              }
            />
          )}
        </S.ProjectImageBox>
        <S.ProjectTitleContainer>
          <S.ProjectTitle>{props.data?.fetchBoard.title}</S.ProjectTitle>
          <S.ProjectText>{props.data?.fetchBoard.description}</S.ProjectText>
        </S.ProjectTitleContainer>
        <S.MainContainer>
          <S.ProjectInfoBox>
            <S.BoxTitle>진행기간</S.BoxTitle>
            <S.PeriodWrapper>
              <S.Period>
                {moment(props.data?.fetchBoard.startAt).format("YYYY.MM.DD")} ~{" "}
                {moment(props.data?.fetchBoard.endAt).format("YYYY.MM.DD")}
                <span> [완료]</span>
              </S.Period>
            </S.PeriodWrapper>
          </S.ProjectInfoBox>
          <S.ProjectMemberBox>
            <S.BoxTitle>프로젝트 멤버</S.BoxTitle>
            <S.ProjectMembersWrapper>
              {props.leaderData && (
                <S.ProjectMember>
                  <S.UserImageWrapper>
                    {props.leaderData?.fetchUserWithUserId?.userImage?.url !==
                    "null" ? (
                      <S.UserImage
                        src={`${props.leaderData?.fetchUserWithUserId?.userImage?.url}`}
                      />
                    ) : (
                      <S.UserImage src={`/profile_img.png`} />
                    )}
                    <S.Leader>팀장</S.Leader>
                  </S.UserImageWrapper>
                </S.ProjectMember>
              )}
              {props.userBoardData?.fetchUserBoards?.map((el: any, i: any) => (
                <S.ProjectMember>
                  <S.UserImageWrapper key={i}>
                    {el.user.userImage?.url !== "null" ? (
                      <S.UserImage src={`${el.user.userImage?.url}`} />
                    ) : (
                      <S.UserImage src={`/profile_img.png`} />
                    )}
                  </S.UserImageWrapper>
                </S.ProjectMember>
              ))}
            </S.ProjectMembersWrapper>
            <S.MemberCountWrapper>
              <S.MemberCount>
                {props.data?.fetchBoard.countMember} /{" "}
                {props.data?.fetchBoard.totalMember}
              </S.MemberCount>
              <S.MemberIconWrapper>
                <img src="/icons/icon_member_black.png" alt="" />
              </S.MemberIconWrapper>
            </S.MemberCountWrapper>
          </S.ProjectMemberBox>
          <S.ProjectLikeBox onClick={props.onClickLike}>
            <S.BoxTitle>받은관심</S.BoxTitle>
            <S.LikeCountIconWrapper>
              <S.LikeCount>{props.data?.fetchBoard.countLike || 0}</S.LikeCount>
              <S.LikeIcon src="/icons/icon_heart_pink.png" />
            </S.LikeCountIconWrapper>
          </S.ProjectLikeBox>
          <S.CommentInputWrapper>
            <S.CommentInput
              onChange={props.onChangeComment}
              value={props.comment}
            />
            <S.CommentButton onClick={props.onClickSubmit}>
              등록
            </S.CommentButton>
          </S.CommentInputWrapper>
          <S.CommentsWrapper>
            <ExitedCommentList />
          </S.CommentsWrapper>
        </S.MainContainer>
      </S.Container>
    </S.Wrapper>
  );
}
