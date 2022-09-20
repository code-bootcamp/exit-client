import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

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
  const { data: projectData } = useQuery(FETCH_PROJECT_OF_USER, {
    variables: { userId: String(router.query.userId) },
  });

  return (
    <>
      <UserDetailPresenter data={data} projectData={projectData} />
    </>
  );
}
