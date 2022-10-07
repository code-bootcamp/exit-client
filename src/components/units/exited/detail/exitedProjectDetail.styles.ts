import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  padding: 7rem 0;
`;

export const Inner = styled.div`
  width: 132.8rem;
  margin: auto;
  padding: 13.6rem;
  background-color: #fff;
  border-radius: 14px;

  @media ${breakPoints.tablet} {
    width: 80%;
    padding: 7.0833vw;
  }
  @media ${breakPoints.mobile} {
    width: 80%;
    padding: 7.0833vw;
  }
`;

export const ProjectImageWrapper = styled.div`
  height: 500px;
  width: 100%;
  border-radius: 14px;
  margin-bottom: 4rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${breakPoints.tablet} {
    height: 26.0417vw;
    margin-bottom: 2.0833vw;
    border-radius: 10px;
  }
  @media ${breakPoints.mobile} {
    height: 26.0417vw;
    margin-bottom: 2.0833vw;
    border-radius: 10px;
  }
`;

export const ProjectTitleWrapper = styled.div`
  border-radius: 14px;
  background: #f8f8f8;
  padding: 3rem;
  margin-bottom: 4rem;

  @media ${breakPoints.tablet} {
    padding: 2rem;
    margin-bottom: 2.0833vw;
    border-radius: 10px;
  }
  @media ${breakPoints.mobile} {
    padding: 2rem;
    margin-bottom: 2.0833vw;
    border-radius: 10px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  margin-bottom: 2rem;
  word-break: keep-all;

  @media ${breakPoints.tablet} {
    font-size: 3vw;
    line-height: 1.6;
    margin-bottom: 1.0417vw;
  }
  @media ${breakPoints.mobile} {
    font-size: 2.2rem;
    line-height: 1.2;
    margin-bottom: 1.0417vw;
  }
`;

export const Description = styled.span`
  font-weight: 500;
  font-size: 24px;

  @media ${breakPoints.tablet} {
    font-size: 2.3vw;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.7rem;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export const ProjectInfoTitle = styled.div`
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 2rem;
`;

export const ProjectInfoBox = styled.div`
  height: 100px;
  background: #f8f8f8;
  border-radius: 14px;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;

  @media ${breakPoints.tablet} {
    height: auto;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 2.0833vw;
  }

  @media ${breakPoints.mobile} {
    height: auto;
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 2.0833vw;
    justify-content: center;
  }
`;

export const BoxTitle = styled.div`
  font-weight: 700;
  font-size: 40px;

  @media ${breakPoints.tablet} {
    font-size: 2.6vw;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const PeriodWrapper = styled.div``;

export const Period = styled.p`
  font-size: 3.6rem;
  font-weight: 700;

  span {
    color: #3ebd5d;
    font-weight: 700;
    font-size: 3.6rem;

    @media ${breakPoints.tablet} {
      font-size: 2.4vw;
    }
    @media ${breakPoints.mobile} {
      font-size: 2rem;
    }
  }

  @media ${breakPoints.tablet} {
    font-size: 2.4vw;
  }
  @media ${breakPoints.mobile} {
    font-size: 2rem;
    letter-spacing: -1px;
  }
`;

export const ProjectMemberBox = styled.div`
  width: 100%;
  background: #f8f8f8;
  border-radius: 14px;
  padding: 3rem;
  position: relative;

  @media ${breakPoints.tablet} {
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 2.0833vw;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const ProjectMembersWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  position: relative;

  @media ${breakPoints.tablet} {
    margin-top: 2vw;
  }
`;

export const ProjectMember = styled.div`
  width: 120px;
  position: relative;

  @media ${breakPoints.tablet} {
    width: 65px;
    margin-right: 10px;
  }
  @media ${breakPoints.mobile} {
    width: 65px;
    margin-right: 10px;
  }
`;

export const UserImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #000;

  img {
    width: 100%;
    height: 100%;
  }

  @media ${breakPoints.tablet} {
    width: 8vw;
    height: 8vw;
    border: 2px solid #000;
  }
  @media ${breakPoints.mobile} {
    width: 80px;
    height: 80px;
    border: 2px solid #000;
  }
`;

export const UserImage = styled.img``;

export const Leader = styled.p`
  font-size: 1.6rem;
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: #000;
  position: absolute;
  bottom: -10px;
  left: 30%;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const MemberCountWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 30px;
  top: 25px;

  @media ${breakPoints.tablet} {
    top: 20px;
    right: 20px;
  }
`;
export const MemberCountImageWrapper = styled.div``;
export const MemberCount = styled.p`
  font-size: 3.5rem;
  font-weight: 700;

  @media ${breakPoints.tablet} {
    font-size: 2.6vw;
  }
  @media ${breakPoints.mobile} {
    font-size: 3.5vw;
  }
`;

export const MemberIconWrapper = styled.div`
  width: 30px;
  margin-top: -8px;
  img {
    width: 90%;
    margin-left: 10px;
  }

  @media ${breakPoints.tablet} {
    width: 24px;
  }
  @media ${breakPoints.mobile} {
    width: 20px;
  }
`;

export const ProjectLikeBox = styled(ProjectInfoBox)`
  margin-top: 4rem;
  display: flex;
  cursor: pointer;

  @media (max-width: 991px) {
    margin-top: 2.0833vw;
  }
`;

export const LikeCountIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LikeCount = styled.p`
  font-size: 3.6rem;
  font-weight: 700;
  margin-right: 10px;

  @media ${breakPoints.tablet} {
    font-size: 2.6vw;
  }
  @media ${breakPoints.mobile} {
    font-size: 2rem;
  }
`;

export const LikeIcon = styled.img`
  width: 35px;
  height: 35px;

  @media ${breakPoints.tablet} {
    width: 24px;
    height: 24px;
  }
  @media ${breakPoints.mobile} {
    width: 17px;
    height: 17px;
  }
`;

export const TagsWrapper = styled.div`
  border-radius: 14px;
  background: #f8f8f8;
  padding: 3rem;
  margin-bottom: 4rem;

  @media ${breakPoints.tablet} {
    padding: 2rem;
    margin-bottom: 2.0833vw;
    border-radius: 10px;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Tags = styled.ul`
  display: flex;
  margin-top: 26px;
`;

export const Tag = styled.li`
  color: #4e4e4e;
  background-color: #ececec;
  font-size: 2.4rem;
  padding: 4px 14px;
  border-radius: 4px;
  margin-right: 12px;
  margin-bottom: 16px;

  @media ${breakPoints.tablet} {
    font-size: 1.8rem;
    height: auto;
  }
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CommentInput = styled.input`
  width: 81%;
  height: 70px;
  border: 2px solid #d7d7d7;
  padding-left: 20px;
  border-radius: 14px;
  font-size: 2.2rem;

  @media ${breakPoints.tablet} {
    width: 80%;
    height: 6vw;
    border-radius: 10px;
    font-size: 2rem;
  }

  @media ${breakPoints.mobile} {
    width: 80%;
    height: 40px;
    border-radius: 8px;
    font-size: 1.6rem;
    padding-left: 15px;
  }
`;

export const CommentButton = styled.button`
  width: 180px;
  height: 70px;
  color: #fff;
  background-color: #3ebd5d;
  border-radius: 14px;
  font-size: 2.4rem;
  font-weight: 700;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 18%;
    height: 6vw;
    border-radius: 10px;
    font-size: 2.6vw;
  }
  @media ${breakPoints.mobile} {
    width: 18%;
    height: 40px;
    border-radius: 8px;
    font-size: 1.6rem;
  }
`;

export const CommentsWrapper = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 14px;
  margin-top: 10px;
`;
