import styled from "@emotion/styled";
import { PieChart } from "react-minimal-pie-chart";
import { breakPoints } from "../../../commons/styles/media";

interface IMemberImageProps {
  src: string;
}

interface ICheckGpsButtonProps {
  isValid: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  padding: 60px 0 100px;

  @media (min-width: 481px) and (max-width: 991px) {
    padding: 100px 0;
  }

  @media (max-width: 480px) {
    padding: 80px 0;
  }
`;

export const Inner = styled.div`
  width: 160rem;
  height: 875px;
  margin: auto;

  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;

  @media (min-width: 481px) and (max-width: 991px) {
    width: 100%;
    padding: 0 4vw;
    height: 700px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 6vw;
    height: 600px;
  }
`;

export const Column = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 23.5%;

  &:nth-of-type(2) {
    width: 50%;

    @media ${breakPoints.tablet} {
      width: 48%;
    }
  }

  @media ${breakPoints.tablet} {
    width: 24%;
  }
  @media ${breakPoints.mobile} {
    width: 23%;
  }
`;

export const ProjectInfoWrapper = styled.div`
  width: 100%;
  height: 240px;
  padding: 20px 20px 0;
  border-radius: 14px;
  background-color: #fff;

  @media ${breakPoints.tablet} {
    height: 200px;
  }
  @media ${breakPoints.mobile} {
    height: 250px;
    margin-bottom: 20px;
    padding: 15px 15px;
  }
`;

export const ProjectInfoHeaderWrapper = styled.div``;

export const Title = styled.h2`
  font-size: 2.3rem;
  font-weight: 700;
  letter-spacing: -1px;
  word-break: keep-all;
  margin-bottom: 10px;
  line-height: 1.2;

  @media ${breakPoints.mobile} {
    font-size: 3vw;
  }
`;

export const Date = styled.strong`
  font-size: 14px;
  color: #777;

  @media ${breakPoints.tablet} {
    letter-spacing: -0.8px;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const ProjectMembers = styled.div`
  width: 97%;
  padding-top: 30px;
  overflow-x: auto;
  display: flex;
  overflow: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 991px) {
    display: none;
  }
`;

export const Member = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: 20px;
`;

export const ThumbWrapper = styled.div`
  position: relative;
`;

export const MemberImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
  overflow: hidden;
`;

export const Leader = styled.p`
  display: block;
  width: 45px;
  padding: 4px 12px 2px;
  color: #fff;
  font-size: 1.2rem;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3ebd5d;
  position: absolute;
  bottom: -5px;
  left: 50%;
  padding-top: 2px;
  transform: translateX(-50%);
`;

export const MemberImage = styled.img`
  width: auto;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-image: url(${(props: IMemberImageProps) => props.src || ""});
`;

export const MemberName = styled.em`
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: -0.2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000;
`;

export const ProjectBailWrapper = styled.div`
  width: 376px;
  height: 150px;
  color: #fff;
  padding: 20px;
  border-radius: 14px;
  background-color: #3ebd5d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 200px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
    align-items: center;
    padding: 15px;
  }
`;

export const BailText = styled.strong`
  font-size: 2.4rem;
  font-weight: 700;
  color: #fff;
  word-break: keep-all;

  @media ${breakPoints.mobile} {
    font-size: 2.4vw;
  }
`;

export const BailBottomWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Bail = styled.strong`
  font-size: 3.4rem;
  font-weight: 700;
  color: #fff;
  margin-right: 10px;

  @media ${breakPoints.mobile} {
    display: block;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-right: 0;
    font-size: 4.5vw;
  }
`;

export const BailIconWrapper = styled.div`
  width: 45px;
  height: 45px;

  img {
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 38%;
  }
  @media ${breakPoints.mobile} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 33%;
    width: 35px;
    height: 35px;
  }
`;

export const ProgressChartWrapper = styled.div`
  width: 100%;
  height: 420px;
  background-color: #fff;
  border-radius: 14px;
  padding: 20px;

  @media ${breakPoints.tablet} {
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  @media ${breakPoints.mobile} {
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px;
  }
`;

export const CustomPieChart = styled(PieChart)``;

export const ProgressText = styled.strong`
  font-size: 2rem;
  font-weight: 700;
  word-break: keep-all;
  display: block;
  line-height: 1.2;

  @media ${breakPoints.mobile} {
    font-size: 2.6vw;
  }
`;

export const ProgressChart = styled.div`
  margin-top: 10px;
  position: relative;
  ::after {
    content: "";
    display: block;
    background-color: #fff;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    left: 48%;
    top: 14px;
  }

  @media (max-width: 991px) {
    display: none;
  }
`;

export const ProgressPercent = styled.em`
  display: none;
  @media ${breakPoints.tablet} {
    display: block;
    font-size: 70px;
    font-weight: 800;
    letter-spacing: -1px;
    color: #3ebd5d;
  }
  @media ${breakPoints.mobile} {
    display: block;
    font-weight: 800;
    letter-spacing: -1px;
    color: #3ebd5d;
    padding-top: 50px;
    font-size: 6.5vw;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 342px;
  background-color: #efefef;
  overflow: hidden;
  height: 340px;
  border-radius: 14px;
  position: relative;
`;

export const MiniInfo = styled.div`
  display: flex;
  position: absolute;
  z-index: 10;
  right: 20px;
  top: 20px;
`;

export const Address = styled.p`
  color: #fff;
  height: 40px;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 1.8rem;
  background: rgba(0, 0, 0, 0.5);
  margin-right: 10px;
  display: flex;
  align-items: center;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const Frequency = styled(Address)``;

export const MapTempImage = styled.img`
  width: 100%;
  height: 100%;
  visibility: none;
`;

export const PresentMembers = styled.div`
  width: 100%;
  padding: 25px 20px;
  background: #3ebd5d;
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const PresentMembersText = styled.h4`
  height: 30px;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
`;

export const AttendanceDataWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 424px;
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
`;

export const CalendarWrapper = styled.div`
  width: 400px;
  height: 424px;
  border-radius: 14px;
  background-color: #fff;
  display: flex;
  justify-content: content;
  align-items: center;
  padding: 20px 20px 0;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const PresentMemberList = styled.ul`
  width: 370px;
  height: 424px;
  border-radius: 14px;
  background-color: #fff;
  padding: 5px 20px 20px;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 405px;
    margin-top: 20px;
    overflow-y: scroll;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 405px;
    margin-top: 20px;
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const PresentMember = styled.li`
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PresentMemberLeftWrapper = styled.div``;

export const PresentMemberName = styled.strong`
  font-size: 1.8rem;
  font-weight: 600;
  padding-top: 10px;
  display: block;

  @media ${breakPoints.mobile} {
    font-size: 2.3vw;
  }
`;

export const PresentAddress = styled.p`
  font-size: 1.2rem;
  color: #777777;
  margin-top: 6px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const PresentMemberRightWrapper = styled(PresentMemberLeftWrapper)``;

export const AttendedAt = styled.span`
  font-size: 1.2rem;
  color: #3ebd5d;

  @media ${breakPoints.mobile} {
    display: block;
    font-size: 1rem;
    margin-top: 10px;
  }
`;

export const WelcomeMessageWrapper = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px;
  background-color: #fff;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    padding: 15px;
  }
`;

export const WelcomeMessage = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.2;
  word-break: keep-all;

  @media ${breakPoints.tablet} {
    width: 80%;
  }
  @media ${breakPoints.mobile} {
    width: 80%;
    font-size: 2.7vw;
  }
`;

export const UserName = styled.span`
  color: #3ebd5d;
`;

export const CheckGpsButton = styled.button`
  width: 100%;
  height: 60px;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 14px;
  background-color: ${(props: ICheckGpsButtonProps) =>
    props.isValid ? "#3ebd5d" : "#B2B2B2"};
  color: #fff;

  span {
    color: #fff;

    @media ${breakPoints.mobile} {
      display: block;
    }
  }

  :disabled {
    cursor: default;
  }

  @media ${breakPoints.mobile} {
    font-size: 2.2vw;
    word-break: keep-all;
    line-height: 1.3;
    border-radius: 10px;
  }
`;

export const ChatRoomWrapper = styled.div`
  width: 100%;
  border-radius: 14px;
  height: calc(100% - 230px);
  border-radius: 4px;

  @media ${breakPoints.tablet} {
    height: 465px;
    overflow-y: scroll;
    margin-bottom: 10px;
  }
  @media ${breakPoints.mobile} {
    height: 480px;
    overflow-y: scroll;
  }
`;
