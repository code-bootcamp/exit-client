import { IQuery } from "../../../commons/types/generated/types";

export interface ICurrentProjectUIProps {
  userInfo: { nickname: string; id: string; email: string };
  data: Pick<IQuery, "fetchUserBoards">;
  leaderLocation: Pick<IQuery, "getLocationLeader">;
  attendanceData: Pick<IQuery, "fetchAttendance">;
  leaderData: Pick<IQuery, "fetchUserWithUserId">;
  board: Pick<IQuery, "fetchBoard">;
  attendancePercent: number;
  // attendanceTime: Pick<IQuery, "getAttendanceTime">;
  attendanceTime: any;
  loading: boolean;
  isLeader: boolean;
  onClickAttendStart: () => void;
  onClickAttend: () => void;
  onChangeDate: () => void;
}
