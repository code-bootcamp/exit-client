import * as S from "./currentProject.styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { PieChart } from "react-minimal-pie-chart";
import { ICurrentProjectUIProps } from "./currentProject.types";
import Map from "../../commons/map";
import moment from "moment";
import "moment/locale/ko";
import { getAddress } from "../../../commons/libraries/getAddress";
import ChatContainer from "../../commons/chat/01/chat.container";
import Spinner01 from "../../commons/spinners/01";

export default function CurrentProjectUI(props: ICurrentProjectUIProps) {
  return (
    <>
      {props.loading && <Spinner01 />}
      <S.Background>
        <S.Wrapper>
          <S.Column>
            <S.ProjectInfoWrapper>
              <S.ProjectInfoHeaderWrapper>
                <S.Title>{props.board?.fetchBoard?.title}</S.Title>
                <S.Date>
                  {moment(props.board?.fetchBoard?.startAt).format(
                    "YYYY.MM.DD"
                  )}{" "}
                  ~{" "}
                  {moment(props.board?.fetchBoard?.endAt).format("YYYY.MM.DD")}
                </S.Date>
              </S.ProjectInfoHeaderWrapper>
              <S.ProjectMembers>
                <S.Member>
                  <S.ThumbWrapper>
                    <S.MemberImageWrapper>
                      {props.leaderData?.fetchUserWithUserId?.userImage?.url !==
                      "null" ? (
                        <S.MemberImage
                          src={
                            props.leaderData?.fetchUserWithUserId?.userImage
                              ?.url
                          }
                        />
                      ) : (
                        <S.MemberImage src="/profile_img.png" />
                      )}
                    </S.MemberImageWrapper>
                    {props.leaderData?.fetchUserWithUserId?.nickname && (
                      <S.Leader>팀장</S.Leader>
                    )}
                  </S.ThumbWrapper>
                  <S.MemberName>
                    {props.leaderData?.fetchUserWithUserId?.nickname}
                  </S.MemberName>
                </S.Member>
                {props.data?.fetchUserBoards.map((el: any, index: number) => (
                  <S.Member key={index}>
                    <S.ThumbWrapper>
                      <S.MemberImageWrapper>
                        {el.user.userImage.url.includes(
                          "https://storage.googleapis.com/backend-server"
                        ) || el.user.userImage.url.includes("https") ? (
                          <S.MemberImage src={el.user.userImage.url} />
                        ) : (
                          <S.MemberImage src="/profile_img.png" />
                        )}
                      </S.MemberImageWrapper>
                    </S.ThumbWrapper>
                    <S.MemberName>{el.user.nickname}</S.MemberName>
                  </S.Member>
                ))}
              </S.ProjectMembers>
            </S.ProjectInfoWrapper>
            <S.ProjectBailWrapper>
              <S.BailText>1인당 보석금</S.BailText>
              <S.BailBottomWrapper>
                <S.Bail>
                  {Number(props.board?.fetchBoard?.bail).toLocaleString()}
                </S.Bail>
                <S.BailIconWrapper>
                  <img src="/icons/icon_bail2.png" />
                </S.BailIconWrapper>
              </S.BailBottomWrapper>
            </S.ProjectBailWrapper>
            <S.ProgressChartWrapper>
              <S.ProgressText>전체 모임 진행율</S.ProgressText>
              <S.ProgressChart>
                <PieChart
                  data={[
                    {
                      value: Number(props.attendancePercent),
                      color: "#3EBD5D",
                      name: "progress",
                    },
                  ]}
                  reveal={Number(props.attendancePercent)}
                  lineWidth={24}
                  background="#F8F8F8"
                  startAngle={268}
                  lengthAngle={360}
                  rounded
                  animate
                  label={({ dataEntry }) => dataEntry.value + "%"}
                  labelStyle={{
                    fontSize: "26px",
                    fontWeight: "900",
                    fill: "#3EBD5D",
                  }}
                  labelPosition={0}
                />
              </S.ProgressChart>
              <S.ProgressPercent>{props.attendancePercent}%</S.ProgressPercent>
            </S.ProgressChartWrapper>
          </S.Column>
          <S.Column>
            <S.MapWrapper>
              <S.MiniInfo>
                <S.Address>{props.board?.fetchBoard?.address}</S.Address>
                <S.Frequency>
                  주 {props.board?.fetchBoard?.frequency}회
                </S.Frequency>
              </S.MiniInfo>
              {props?.attendanceData?.fetchAttendance.filter(
                (el: any) =>
                  moment(el.attendedAt).format("YYYY-MM-DD") ===
                  moment().format("YYYY-MM-DD")
              )?.length === 0 && <S.MapTempImage src="/map_temp.png" />}
              {props?.attendanceData?.fetchAttendance.filter(
                (el: any) =>
                  moment(el.attendedAt).format("YYYY-MM-DD") ===
                  moment().format("YYYY-MM-DD")
              )?.length > 0 && (
                <Map
                  lat={props.leaderLocation?.getLocationLeader?.split(",")[0]}
                  lng={props.leaderLocation?.getLocationLeader?.split(",")[1]}
                />
              )}
            </S.MapWrapper>
            <S.PresentMembers>
              <S.PresentMembersText>출석한 exiter</S.PresentMembersText>
            </S.PresentMembers>
            <S.AttendanceDataWrapper>
              <S.CalendarWrapper>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <CalendarPicker
                    disabled={true}
                    onChange={props.onChangeDate}
                  />
                </LocalizationProvider>
              </S.CalendarWrapper>
              <S.PresentMemberList>
                {props.attendanceData?.fetchAttendance
                  ?.filter(
                    (el: any) =>
                      moment(el.attendedAt).format("YYYY-MM-DD") ===
                      moment().format("YYYY-MM-DD")
                  )
                  .map((el, i) => (
                    <S.PresentMember key={i}>
                      <S.PresentMemberLeftWrapper>
                        <S.PresentMemberName>{el.nickname}</S.PresentMemberName>
                        <S.PresentAddress>
                          {/* {getAddress(el.latitude, el.longitude)} */}
                        </S.PresentAddress>
                      </S.PresentMemberLeftWrapper>
                      <S.PresentMemberRightWrapper>
                        <S.AttendedAt>
                          {moment(el.attendedAt).format("HH:mm")}
                        </S.AttendedAt>
                      </S.PresentMemberRightWrapper>
                    </S.PresentMember>
                  ))}
              </S.PresentMemberList>
            </S.AttendanceDataWrapper>
          </S.Column>
          <S.Column>
            <S.WelcomeMessageWrapper>
              <S.WelcomeMessage>
                안녕하세요{" "}
                {props.userInfo.nickname && (
                  <S.UserName>{props.userInfo.nickname}</S.UserName>
                )}
                {props.userInfo.nickname && "님"}
              </S.WelcomeMessage>
              <S.CheckGpsButton
                onClick={
                  props.isLeader
                    ? props?.onClickAttendStart
                    : props?.onClickAttend
                }
                isValid={
                  props.isLeader
                    ? props.attendanceData?.fetchAttendance.filter(
                        (el) =>
                          moment(el.attendedAt).format("YYYY-MM-DD") ===
                          moment().format("YYYY-MM-DD")
                      ).length === 0
                    : props.attendanceData?.fetchAttendance?.filter(
                        (el) =>
                          moment(el.attendedAt).format("YYYY-MM-DD") ===
                            moment().format("YYYY-MM-DD") &&
                          el.userId === props.userInfo.id
                      ).length === 0
                }
                disabled={
                  props.isLeader
                    ? props.attendanceData?.fetchAttendance.filter(
                        (el) =>
                          moment(el.attendedAt).format("YYYY-MM-DD") ===
                          moment().format("YYYY-MM-DD")
                      ).length > 0
                    : props.attendanceData?.fetchAttendance?.filter(
                        (el) =>
                          moment(el.attendedAt).format("YYYY-MM-DD") ===
                            moment().format("YYYY-MM-DD") &&
                          el.userId === props.userInfo.id
                      ).length > 0
                }
              >
                출석체크 하기
              </S.CheckGpsButton>
            </S.WelcomeMessageWrapper>
            <S.ChatRoomWrapper>
              <ChatContainer roomCode={props.board?.fetchBoard.id} />
            </S.ChatRoomWrapper>
          </S.Column>
        </S.Wrapper>
      </S.Background>
    </>
  );
}
