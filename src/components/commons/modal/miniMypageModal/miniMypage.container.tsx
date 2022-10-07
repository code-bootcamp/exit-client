import { useMutation, useQuery } from "@apollo/client";
import { Router } from "@material-ui/icons";
import { useRouter } from "next/router";
import MiniMypageUI from "./miniMypage.presenter";
import {
  FETCH_LOGINED_USER,
  FETCH_PROJECT_OF_USER,
  LOGOUT,
} from "./miniMypage.queries";

export default function MiniMypageContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_LOGINED_USER);
  const { data: myProject } = useQuery(FETCH_PROJECT_OF_USER, {
    variables: { userId: String(data?.fetchLoginedUser.id) },
  });
  const [logout] = useMutation(LOGOUT);
  const onClickLogout = () => {
    logout();
    // router.push("/");
    location.reload();
  };
  const onClickMypage = () => {
    router.push("/myPage");
  };

  return (
    <>
      <MiniMypageUI
        data={data}
        myProject={myProject}
        onClickLogout={onClickLogout}
        onClickMypage={onClickMypage}
      />
    </>
  );
}
