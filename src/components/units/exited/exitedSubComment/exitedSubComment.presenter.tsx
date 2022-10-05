import * as S from "./exitedSubComment.styles";
import moment from "moment";
import { IExitedSubCommentUIProps } from "./exitedSubComment.types";

export default function ExitedSubCommentUI(props: IExitedSubCommentUIProps) {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.CommentUserImageWrapper>
          {props?.el.user.userImage.url !== "null" ? (
            <img src={props?.el.user.userImage.url} />
          ) : (
            <img src={"/profile_img.png"} />
          )}
        </S.CommentUserImageWrapper>
        <S.CommentContents>
          <S.UserInfo>
            <S.UserName>{props.el?.user.nickname}</S.UserName>
            <S.UserEmail>{props?.el?.user.email}</S.UserEmail>
          </S.UserInfo>
          {!props.isEdit ? (
            <S.Comment>{props.el?.subComment}</S.Comment>
          ) : (
            <S.CommentInputWrapper>
              <S.CommentEditInput
                maxLength={60}
                onChange={props.onChangeSubCommentInput}
                value={props.subComment || props.el?.subComment || ""}
              />
              <S.ConfirmButton
                onClick={props.onClickUpdateSubComment(props.el)}
              >
                <img src="/icons/icon_check.svg" alt="확인 버튼" />
              </S.ConfirmButton>
            </S.CommentInputWrapper>
          )}
        </S.CommentContents>
        <S.CommentRightWrapper>
          <S.Date>
            {moment(props.el?.updatedAt).format("YYYY-MM-DD") ||
              moment(props.el?.createdAt).format("YYYY-MM-DD")}
          </S.Date>
        </S.CommentRightWrapper>
        {!props.isEdit && props.userInfo.email === props?.el.user.email && (
          <S.CommentIconsWrapper>
            <S.EditButton onClick={props.onClickEdit}>
              <img
                src="/icons/icon_edit.svg"
                alt="수정 버튼"
                title="댓글 수정"
              />
            </S.EditButton>
            <S.DeleteButton onClick={props.onClickRemoveSubComment(props.el)}>
              <img
                src="/icons/icon_delete.svg"
                alt="삭제 버튼"
                title="댓글 삭제"
              />
            </S.DeleteButton>
          </S.CommentIconsWrapper>
        )}
      </S.TopWrapper>
    </S.Wrapper>
  );
}
