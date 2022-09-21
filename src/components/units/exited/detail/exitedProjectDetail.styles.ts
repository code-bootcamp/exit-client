import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  padding: 7rem 0;
`;

export const Container = styled.div`
  width: 132.8rem;
  margin: auto;
  padding: 13.6rem;
  background-color: #fff;
  border-radius: 14px;
`;

export const TopContainer = styled.div`
  margin-bottom: 12rem;
`;
export const ProjectImageBox = styled.div`
  height: 500px;
  width: 100%;
  border-radius: 14px;
  margin-bottom: 4rem;
  overflow: hidden;
`;
export const ProjectImage = styled.img`
  width: 100%;
  height: auto;

  border-radius: 14px;
`;
export const ProjectTitleContainer = styled.div`
  border-radius: 14px;
  background: #f8f8f8;
  padding: 3rem;
  margin-bottom: 2rem;
`;

export const ProjectTitle = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  margin-bottom: 2rem;
`;

export const ProjectText = styled.span`
  font-weight: 500;
  font-size: 24px;
`;

export const MainContainer = styled.div``;

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
`;

export const BoxTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
`;

export const PeriodWrapper = styled.div``;

export const Period = styled.p`
  font-size: 3.6rem;
  font-weight: 700;

  span {
    color: #3ebd5d;
    font-weight: 700;
    font-size: 3.6rem;
  }
`;

export const ProjectMemberBox = styled.div`
  width: 100%;
  background: #f8f8f8;
  border-radius: 14px;
  padding: 3rem;
  position: relative;
`;

export const ProjectMembersWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  padding-bottom: 10px;
  position: relative;
`;

export const ProjectMember = styled.div`
  width: 120px;
`;

export const UserImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #000;
  /* overflow: hidden; */
  position: relative;

  img {
    width: 100%;
    height: 100%;
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
`;

export const MemberCountWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 30px;
  top: 25px;
`;
export const MemberCountImageWrapper = styled.div``;
export const MemberCount = styled.p`
  font-size: 3.5rem;
`;

export const MemberIconWrapper = styled.p`
  width: 30px;

  img {
    width: 90%;
    margin-left: 10px;
  }
`;

export const ProjectLikeBox = styled(ProjectInfoBox)`
  margin-top: 4rem;
  display: flex;
  cursor: pointer;
`;

export const LikeCountIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LikeCount = styled.p`
  font-size: 3.6rem;
  font-weight: 700;
  margin-right: 10px;
`;

export const LikeIcon = styled.img`
  width: 35px;
  height: 35px;
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

  ::placeholder {
    color: #c1c1c1;
    font-size: 2.2rem;
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
`;

export const CommentsWrapper = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 14px;
  margin-top: 10px;
`;
