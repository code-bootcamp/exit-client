import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

import MyPagePresenter from "./myPage.presenter";
import {
  FETCH_LIKES,
  FETCH_LOGINED_USER,
  FETCH_POINT_HISTORIES,
  FETCH_PROJECTS_OF_USER,
  FETCH_PROJECT_OF_USER,
} from "./myPage.queries";

export default function MyPageContainer() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const { data } = useQuery(FETCH_LOGINED_USER);
  const { data: likeProjectData } = useQuery(FETCH_LIKES, {
    variables: { userId: String(data?.fetchLoginedUser.id) },
  });
  const { data: endProjectData } = useQuery(FETCH_PROJECTS_OF_USER, {
    variables: { userId: String(data?.fetchLoginedUser.id) },
  });
  const { data: pointData } = useQuery(FETCH_POINT_HISTORIES, {
    variables: { userId: String(data?.fetchLoginedUser.id) },
  });
  const { data: myProjectData } = useQuery(FETCH_PROJECT_OF_USER, {
    variables: {
      userId: String(data?.fetchLoginedUser.id),
    },
  });

  const onClickMoveMypageEdit = () => {
    router.push(`/myPage/edit`);
  };

  const onClickMoveToMyProject = (event: any) => {
    if (myProjectData.fetchProjectOfUser.isSuccess) {
      router.push(`/currentProject/${event.target.id}`);
    }
    router.push(`/exiting/${event.target.id}`);
  };

  const onClickMoveToLikeProject = (event: any) => {
    router.push(`/exiting/${event.target.id}`);
  };
  const onClickVisible = () => {
    setVisible(!visible);
    console.log(visible);
  };

  return (
    <>
      <MyPagePresenter
        data={data}
        visible={visible}
        setVisible={setVisible}
        pointData={pointData}
        myProjectData={myProjectData}
        endProjectData={endProjectData}
        likeProjectData={likeProjectData}
        onClickVisible={onClickVisible}
        onClickMoveMypageEdit={onClickMoveMypageEdit}
        onClickMoveToMyProject={onClickMoveToMyProject}
        onClickMoveToLikeProject={onClickMoveToLikeProject}
      />
    </>
  );
}
