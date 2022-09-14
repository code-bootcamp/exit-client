import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import UserListPresenter from "./userList.presenter";
import { FETCH_USERS } from "./userList.queries";

export default function UserListContainer() {
  const { data } = useQuery(FETCH_USERS);
  const router = useRouter();

  const onClickMoveToDetail = (event: any) => {
    router.push(`/exiter/${event.target.id}`);
  };
  return (
    <>
      <UserListPresenter
        data={data}
        onClickMoveToDetail={onClickMoveToDetail}
      />
    </>
  );
}
