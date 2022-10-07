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
      <S.Inner>
        <S.ProjectImageWrapper>
          {props.data?.fetchBoard.boardImage.url.includes(
            "https://storage.googleapis.com/backend-server"
          ) || props.data?.fetchBoard.boardImage.url.includes("https") ? (
            <img src={props.data?.fetchBoard.boardImage.url} />
          ) : props.data?.fetchBoard.categories?.[0]?.name ? (
            <img
              src={
                categoriesImgSources[
                  props.data?.fetchBoard?.categories?.[0]?.name
                ]
              }
            />
          ) : (
            <img src="/noImage.png" />
          )}
        </S.ProjectImageWrapper>
        <S.ProjectTitleWrapper>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <S.Description>{props.data?.fetchBoard.description}</S.Description>
        </S.ProjectTitleWrapper>
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
        {props.data?.fetchBoard.tags?.length > 0 && (
          <S.TagsWrapper>
            <S.BoxTitle>기술스택</S.BoxTitle>
            <S.Tags>
              {props.data?.fetchBoard.tags.map((el) => (
                <S.Tag>{el.name}</S.Tag>
              ))}
            </S.Tags>
          </S.TagsWrapper>
        )}
        <S.CommentInputWrapper>
          <S.CommentInput
            maxLength={60}
            onChange={props.onChangeComment}
            value={props.comment}
          />
          <S.CommentButton onClick={props.onClickSubmit}>등록</S.CommentButton>
        </S.CommentInputWrapper>
        <S.CommentsWrapper>
          <ExitedCommentList
            leaderData={props.leaderData}
            userBoardData={props.userBoardData}
          />
        </S.CommentsWrapper>
      </S.Inner>
    </S.Wrapper>
  );
}
