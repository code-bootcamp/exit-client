import styled from "@emotion/styled";
import { style } from "@mui/system";

export const Wrapper = styled.div`
  width: 100%;
`;
export const Container = styled.section`
  margin: auto;
  width: 160rem;
  padding: 7.2rem 16rem;
`;
export const TopConainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10rem;
  cursor: pointer;
  width: 50rem;
`;
export const UserImageBox = styled.div`
  width: 10rem;
  height: 10rem;
  margin-right: 3.7rem;
`;
export const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10rem;
`;
export const UserNameBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserName = styled.p`
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 7px;
  letter-spacing: -0.02em;
`;
export const UserEmail = styled.span`
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -0.02em;
  color: #777777;
`;
export const Angle = styled.img`
  width: 2.5rem;
  margin-left: 2rem;
`;
export const PointContainer = styled.div`
  background: #f8f8f8;
  border-radius: 14px;
`;
export const PointHeadRow = styled.div`
  width: 100%;
  height: 128px;
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #f0f0f0;
`;
export const PointTitle = styled.p`
  font-weight: 700;
  font-size: 40px;
`;
export const PointRight = styled.div`
  display: flex;
  align-items: center;
`;
export const Amount = styled.div`
  font-weight: 700;
  font-size: 40px;
  display: flex;
`;
export const Color = styled.p`
  margin-left: 1rem;
  /* margin-right: 10rem; */
  color: #3ebd5d;
`;

export const PointToggleButton = styled.img`
  width: 4rem;
  height: 3rem;
`;
export const PointContentsRow = styled.div`
  display: flex;
  /* border: 1px solid red; */
  padding: 0 4rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #f0f0f0;
  height: 12.8rem;
`;
export const PointContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ContentsTilte = styled.p`
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 1rem;
`;
export const ContentsSubTitle = styled.span`
  font-weight: 400;
  font-size: 24px;
  color: #777777;
`;
export const PointHistoryBox = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 14.5rem; */
`;
export const PointHistory = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 1rem;
  color: #3770f6;
  display: flex;
  justify-content: flex-end;
`;
export const PointHistoryDate = styled.span`
  font-weight: 400;
  font-size: 24px;
  text-align: right;
  color: #777777;
`;
export const PointButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7.2rem 0;
`;
export const RefundButton = styled.button`
  width: 523px;
  height: 100px;
  background: #000000;
  border-radius: 14px;
  color: #ffffff;
  font-weight: 700;
  font-size: 40px;
  margin-right: 1rem;
`;
export const ChargingButton = styled.div`
  width: 523px;
  height: 100px;
  background: #3ebd5d;
  border-radius: 14px;
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProjectContainer = styled.div`
  margin-top: 10rem;
`;
export const MyProject = styled.div``;
export const ProjectTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 3rem;
`;
export const Key = styled.div`
  /* display: flex; */

  /* flex-direction: column; */
`;
export const ProjectRow = styled.div`
  margin-bottom: 10rem;
  border-radius: 14px;
  display: flex;
  flex-wrap: wrap;
  /* border: 1px red solid; */
`;
export const ProjectNoRow = styled.div`
  height: 376px;
  margin-bottom: 10rem;
  background: #f8f8f8;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NoProjectColumn = styled.p`
  font-weight: 700;
  font-size: 36px;
  color: #b2b2b2;
`;
export const LikeProject = styled.div``;
export const HistoryProject = styled.div``;

export const ProjectColumn = styled.div`
  width: 376px;
  height: 376px;
  border-radius: 14px;
  margin-bottom: 2rem;
  padding: 2rem;
  margin-right: 2rem;
  background-repeat: no-repeat center;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;
export const ProjectTop = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ProjectMain = styled.div``;
export const LikeIcon = styled.img``;
export const ProjectTitleBox = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;
export const ProjectAdress = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
`;
export const ProjectBottom = styled.div`
  font-weight: 700;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
`;
export const ProjectColumnTitle = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
`;
export const BottomLeft = styled.div`
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
`;
export const MemberIcon = styled.img``;
export const BottomRight = styled.div`
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
`;
