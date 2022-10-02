import {
  IAttendance,
  IBoard,
  IQuery,
} from "../../../commons/types/generated/types";

export interface ICurrentProjectUIProps {
  leaderLocation: Pick<IQuery, "getLocationLeader"> | undefined;
  userInfo: { nickname: string; id: string; email: string };
  date: any;
  data: any;
  leaderData: any;
  board: any;
  setDate: any;
  minDay: any;
  maxDay: any;
  onChangeDate: any;
  attendancePercent: number;
  selectedDayAttendence: IAttendance[];
  onClickAttend: () => void;
  loading: boolean;
}
