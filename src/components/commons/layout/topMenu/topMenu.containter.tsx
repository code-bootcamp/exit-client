import { useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";
import TopMenuUI from "./topMenu.presenter";
import { LOGOUT } from "./topMenu.queries";

export default function TopMenu() {
  const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT);

  const onClickLogout = async () => {
    try {
      await logout();
      location.reload();
    } catch (error) {}
  };

  return <TopMenuUI onClickLogout={onClickLogout} />;
}
