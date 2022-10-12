import { IAttendance, IQuery } from "../../../commons/types/generated/types";

export interface ICurrentProjectUIProps {
  userInfo: { nickname: string; id: string; email: string };
  data: Pick<IQuery, "fetchUserBoards">;
  leaderLocation: Pick<IQuery, "getLocationLeader">;
  attendanceData: Pick<IQuery, "fetchAttendance">;
  todaysAttendance: IAttendance[];
  leaderData: Pick<IQuery, "fetchUserWithUserId">;
  board: Pick<IQuery, "fetchBoard">;
  attendancePercent: number;
  // attendanceTime: Pick<IQuery, "getAttendanceTime">;
  loading: boolean;
  isLeader: boolean;
  onClickAttendStart: () => void;
  onClickAttend: () => void;
  onChangeDate: () => void;
}

export interface ICurrentProjectUIItemProps {
  lat: number;
  lng: number;
}
