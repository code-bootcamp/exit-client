import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_PROJECTS_OF_USER } from "../../myPage/myPage.queries";

import UserDetailPresenter from "./userDetail.presenter";
import {
  FETCH_PROJECT_OF_USER,
  FETCH_USER_WITH_USER_ID,
} from "./userDetail.queries";

export default function UserDetailContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_WITH_USER_ID, {
    variables: { userId: String(router.query.userId) },
  });
  const [visible, setVisible] = useState(false);

  const { data: projectData } = useQuery(FETCH_PROJECT_OF_USER, {
    variables: { userId: String(router.query.userId) },
  });

  const { data: projectsData } = useQuery(FETCH_PROJECTS_OF_USER, {
    variables: { userId: String(router.query.userId) },
  });
  const onClickMoveToDetail = (event) => {
    router.push(`/exiting/${event.target.id}`);
  };
  const onClcikVisible = () => {
    setVisible(true);
  };

  return (
    <>
      <UserDetailPresenter
        data={data}
        onClcikVisible={onClcikVisible}
        onClickMoveToDetail={onClickMoveToDetail}
        projectData={projectData}
        projectsData={projectsData}
        visible={visible}
        setVisible={setVisible}
      />
    </>
  );
}
