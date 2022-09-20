import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { IMutation } from "../../../../commons/types/generated/types";
import { isModalVisibleState } from "../../store";
import TopMenuUI from "./topMenu.presenter";
import { LOGOUT } from "./topMenu.queries";

export default function TopMenu() {
  const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(isModalVisibleState);

  const onClickLogout = async () => {
    try {
      await logout();
      location.reload();
    } catch (error) {}
  };

  const onClickLogin = () => {
    setIsModalVisible(true);
  };

  return (
    <TopMenuUI onClickLogin={onClickLogin} onClickLogout={onClickLogout} />
  );
}
