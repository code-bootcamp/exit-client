import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  padding: 30px;
  border-top: 2px solid #f0f0f0;
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
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: -8px;
  margin-left: 30px;

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
    width: 85%;
    font-size: 2rem;
  }
  @media ${breakPoints.mobile} {
    width: 85%;
    font-size: 1.7rem;
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

  @media ${breakPoints.tablet} {
    width: 50px;
  }
`;

export const CommentRightWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
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
  right: 0;
  top: 65px;
  opacity: 0.3;

  @media ${breakPoints.tablet} {
    top: 60px;
  }
  @media ${breakPoints.mobile} {
    top: 54px;
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
