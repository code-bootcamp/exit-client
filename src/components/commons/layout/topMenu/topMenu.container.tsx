import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchUserWithUserIdArgs,
} from "../../../../commons/types/generated/types";
import { isModalVisibleState, modalState, userInfoState } from "../../store";
import TopMenuUI from "./topMenu.presenter";
import { FETCH_USER_WITH_USER_ID } from "./topMenu.queries";

export default function TopMenu() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(isModalVisibleState);
  const [modal, setModal] = useRecoilState(modalState);
  const [isMiniModalVisible, setIsMiniModalVisible] = useState(false);

  const { data } = useQuery<
    Pick<IQuery, "fetchUserWithUserId">,
    IQueryFetchUserWithUserIdArgs
  >(FETCH_USER_WITH_USER_ID, {
    variables: { userId: userInfo.id },
  });

  const onClickLogin = () => {
    setIsModalVisible(true);
    setModal("login");
  };

  const onClickProfile = () => {
    setIsMiniModalVisible((prev) => !prev);
  };

  return (
    <TopMenuUI
      data={data}
      userInfo={userInfo}
      onClickProfile={onClickProfile}
      onClickLogin={onClickLogin}
      modal={modal}
      isMiniModalVisible={isMiniModalVisible}
    />
  );
}
