import { IQuery } from "../../../../commons/types/generated/types";

export interface ITopMenuUIProps {
  data: Pick<IQuery, "fetchUserWithUserId"> | undefined;
  userInfo: { id: string; nickname: string; email: string };
  onClickLogin: () => void;
  onClickProfile: () => void;
  isMiniModalVisible: boolean;
}
