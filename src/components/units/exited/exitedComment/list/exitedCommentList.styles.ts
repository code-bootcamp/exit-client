import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

interface ISubCommentsBodyWrapperProps {
  isSubCommentsOpen: boolean;
}

interface ISubCommentInputWrapperProps {
  isSubCommentWriting?: boolean;
}

export const Wrapper = styled.div`
  padding: 30px;
  border-bottom: 2px solid #f0f0f0;
  overflow: hidden;
  position: relative;

  :last-of-type {
    border-bottom: none;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
`;

export const CommentUserImageWrapper = styled.div`
  background-color: yellow;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: -8px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 991px) {
    display: none;
  }
`;

export const CommentContents = styled.div`
  width: 100%;
  margin-left: 15px;

  @media (max-width: 991px) {
    margin-left: 0;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const UserName = styled.p`
  font-size: 3rem;
  font-weight: 600;

  @media ${breakPoints.tablet} {
    font-size: 2.4rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 2rem;
  }
`;

export const UserEmail = styled.p`
  font-size: 2.4rem;
  color: #777;
  margin-left: 10px;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const Comment = styled.p`
  font-weight: 500;
  font-size: 2.4rem;
  margin-top: 12px;

  @media ${breakPoints.tablet} {
    font-size: 2rem;
    width: 85%;
  }
  @media ${breakPoints.mobile} {
    font-size: 1.7rem;
    width: 85%;
  }
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  align-self: center;
`;

export const CommentEditInput = styled.input`
  width: 80rem;
  height: 40px;
  font-size: 2.2rem;
  padding-left: 10px;

  @media ${breakPoints.tablet} {
    width: 100%;
    font-size: 2rem;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 1.6rem;
  }
`;

export const ConfirmButton = styled.button`
  width: 30px;
  height: 30px;
  opacity: 0.3;
  padding-top: 5px;
  margin-left: 10px;

  img {
    width: 100%;
    height: 100%;
    color: #dcdcdc;
  }
`;

export const CommentRightWrapper = styled.div`
  position: absolute;
  top: 28px;
  right: 28px;
`;

export const Date = styled.span`
  color: #777;
  font-size: 2.4rem;

  @media ${breakPoints.tablet} {
    font-size: 2rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 1.6rem;
  }
`;

export const CommentIconsWrapper = styled.ul`
  position: absolute;
  right: 20px;
  top: 65px;
  opacity: 0.3;

  @media ${breakPoints.tablet} {
    top: 60px;
  }
  @media ${breakPoints.mobile} {
    top: 55px;
  }
`;

export const EditButton = styled.button`
  width: 30px;
  height: 30px;
  opacity: 0.9;

  @media ${breakPoints.mobile} {
    margin-right: -5px;
    width: 28px;
  }
`;
export const DeleteButton = styled(EditButton)``;

export const SubCommentsHeadWrapper = styled.div`
  padding-left: 60px;
  margin-top: 30px;
  font-size: 1.8rem;
  color: #777777;

  @media (max-width: 991px) {
    padding-left: 0;
  }
`;

export const ShowSubComment = styled.span`
  font-size: 1.8rem;
  color: #777777;
  cursor: pointer;

  @media (max-width: 991px) {
    font-size: 1.6rem;
  }
`;

export const MoveToSubCommentWrite = styled.button`
  font-size: 1.8rem;
  color: #777777;
  cursor: pointer;

  @media (max-width: 991px) {
    font-size: 1.6rem;
  }
`;

export const SubCommentsBodyWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const SubCommentInputWrapper = styled.div`
  display: ${(props: ISubCommentInputWrapperProps) =>
    props.isSubCommentWriting ? "flex" : "none"};
  align-self: center;
  margin-left: 60px;

  @media ${breakPoints.mobile} {
    margin-left: 15px;
  }
`;

export const SubCommentWrite = styled.input`
  width: 80rem;
  height: 40px;
  font-size: 2.2rem;
  padding-left: 10px;
  font-size: 1.6rem;
  margin-bottom: 10px;

  @media ${breakPoints.tablet} {
    width: 100%;
    font-size: 1.9rem;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const SubCommentWriteButton = styled.button`
  width: 30px;
  height: 30px;
  opacity: 0.3;
  padding-top: 5px;
  margin-left: 10px;

  img {
    width: 100%;
    height: 100%;
    color: #dcdcdc;
  }
`;

export const SubCommentsWrapper = styled.div`
  margin-top: 30px;
  display: ${(props: ISubCommentsBodyWrapperProps) =>
    props.isSubCommentsOpen ? "block" : "none"};
`;
