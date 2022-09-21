import { IQuery } from "../../../../commons/types/generated/types";

export interface ITopMenuUIProps {
  data: Pick<IQuery, "fetchUserWithUserId"> | undefined;
  onClickLogin: () => void;
  userInfo: { id: string; nickname: string; email: string };
}
