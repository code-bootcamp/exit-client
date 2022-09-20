import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 8rem;
  font-size: 1.5rem;
`;

export const Container = styled.section`
  width: 160rem;
  margin: auto;
`;

export const TopContainer = styled.div``;
export const TopTitle = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: -0.02em;
  margin-bottom: 3rem;
`;
export const SubTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.01em;
  color: #3ebd5d;
  margin-bottom: 1rem;
`;

export const RandomUserContainer = styled.div`
  height: 48rem;
  width: 160rem;
  display: flex;
`;
export const RandomUserImageBox = styled.div`
  width: 512px;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-right: 2.5rem;
`;
export const RandomUserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
`;

export const RandomUserInfoContainer = styled.div`
  width: 1056px;
  padding: 4.3rem 4.7rem;
  background: #f8f8f8;
  border-radius: 14px;
`;
export const RandomUserHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.2rem;
`;
export const InfoTitle = styled.div`
  display: flex;
`;
export const InfoKeywordContainer = styled.div`
  display: flex;
`;
export const TitleHead = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: -0.02em;
  margin-right: 1rem;
  color: #3ebd5d;
`;
export const HeadUserNickname = styled.div`
  font-weight: 700;
  font-size: 36px;
  color: #000000;
`;
export const InfoKeywordBox = styled.div`
  display: flex;
`;
export const InfoKeyword = styled.p`
  width: fit-content;
  height: 40px;
  background: #ffffff;
  font-weight: 400;
  font-size: 18px;
  color: #4e4e4e;
  border-radius: 100px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;
export const ButtonBox = styled.div`
  display: flex;
  height: 15rem;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const UserChatButton = styled.button`
  width: 240px;
  height: 50px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  background-color: #000;
  text-align: center;
  color: #ffffff;
  border-radius: 14px;
  :hover {
    background-color: #3ebd5d;
  }
`;

export const UserInfoLabel = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;
export const MyInfoTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */
  letter-spacing: -0.01em;
  margin-right: 2rem;
  color: #000000;
`;
export const MyInfoContents = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  letter-spacing: -0.01em;

  color: #777777;
`;

export const MainContainer = styled.section`
  margin-top: 8rem;
`;
export const MainTitle = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
`;
export const UserListRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
export const UserListColumn = styled.div`
  background: #f8f8f8;
  /* width: 38rem; */
  width: 24%;
  height: 38rem;
  padding: 3rem;
  margin-bottom: 2rem;
  margin-right: 1.33%;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  justify-content: space-between;
  &:nth-of-type(4n) {
    margin-right: 0;
  }
`;

export const UserColumnHead = styled.div`
  display: flex;
`;
export const UserImageBox = styled.div`
  margin-right: 1rem;
  width: 6rem;
  height: 6rem;
`;
export const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100px;
`;
export const UserHeadBox = styled.div`
  margin-bottom: 3rem;
`;
export const UserNickname = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 0.5rem;
`;
export const UserKeywords = styled.div`
  display: flex;
`;
export const Keyword = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  color: #4e4e4e;
  background-color: #ffffff;
  padding: 0.4rem 1rem;
  border-radius: 10rem;
  margin-right: 1rem;
`;

export const UserColumnInfo = styled.div``;
export const UserLabelBox = styled.div`
  display: flex;
`;
export const UserLabelTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.02em;
  margin-bottom: 0.8rem;
`;

export const UserLabelContents = styled.div`
  margin-bottom: 2rem;
  margin-right: 0.5rem;
  background-color: #ffffff;
  width: fit-content;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #4e4e4e;
`;
export const UserColumnButton = styled.button`
  width: 320px;
  height: 50px;
  background: #000000;
  border-radius: 14px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  text-align: center;
  :hover {
    background-color: #3ebd5d;
  }
`;
