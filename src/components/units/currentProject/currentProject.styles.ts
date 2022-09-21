import styled from "@emotion/styled";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { PieChart } from "react-minimal-pie-chart";
import { DatePicker } from "@material-ui/pickers";

interface IMemberImageProps {
  src: string;
}

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
`;

export const Wrapper = styled.div`
  width: 160rem;
  height: 875px;
  margin: auto;
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  height: 875px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 23.5%;
  /* border: 1px solid #000; */

  &:nth-of-type(2) {
    width: 50%;
  }
`;

export const ProjectInfoWrapper = styled.div`
  width: 100%;
  height: 240px;
  padding: 20px 20px 0;
  border-radius: 14px;
  background-color: #fff;
`;

export const ProjectInfoHeaderWrapper = styled.div``;

export const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 10px !important;
`;

export const Date = styled.strong`
  font-size: 14px;
  color: #777;
`;

export const ProjectMembers = styled.div`
  width: 100%;
  overflow: hidden;
  padding-top: 30px;
`;

export const CustomSlider = styled(Slider)`
  width: 400px !important;

  .slick-list {
    width: 400px !important;
  }

  .slick-slide {
    width: 80px !important;
    margin-right: 20px !important;
  }

  /* .slick-slide > div {
    margin: 0 20px !important;
  }
  .slick-list {
    margin: 0 -20px !important;
  } */
`;

export const Member = styled.div`
  width: 80px !important;
  display: flex;
  text-align: center;
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
  bottom: -6px;
  left: 50%;
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
  width: 30px;
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
`;

export const BailText = styled.strong`
  font-size: 2.4rem;
  font-weight: 700;
  color: #fff;
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
`;

export const BailIconWrapper = styled.div`
  width: 45px;
  height: 45px;

  img {
    width: 100%;
  }
`;

export const ProgressChartWrapper = styled.div`
  width: 100%;
  height: 420px;
  background-color: #fff;
  border-radius: 14px;
  padding: 20px;
`;

export const CustomPieChart = styled(PieChart)``;

export const ProgressText = styled.strong`
  font-size: 2rem;
  font-weight: 700;
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
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 342px;
  background-color: #efefef;
  overflow: hidden;
  height: 340px;
  border-radius: 14px;
`;

export const MapTempImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const PresentMembers = styled.div`
  width: 100%;
  padding: 25px 20px;
  background: #3ebd5d;
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  /* background-color: #666; */
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
`;

export const PresentMemberList = styled.ul`
  width: 370px;
  height: 424px;
  border-radius: 14px;
  background-color: #fff;
  padding-top: 20px;
  padding: 20px;
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
`;

export const PresentAddress = styled.p`
  font-size: 1.2rem;
  color: #777777;
  margin-top: 6px;
`;

export const PresentMemberRightWrapper = styled(PresentMemberLeftWrapper)``;

export const AttendedAt = styled.span`
  font-size: 1.2rem;
  color: #3ebd5d;
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
`;

export const WelcomeMessage = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
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
  background-color: #3ebd5d;
`;

export const ChatRoomWrapper = styled.div`
  width: 100%;
  background-color: #666;
  border-radius: 14px;
  height: calc(100% - 230px);
`;
