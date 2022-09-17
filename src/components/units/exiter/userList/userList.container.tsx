import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import UserListPresenter from "./userList.presenter";
import { FETCH_USERS } from "./userList.queries";

export default function UserListContainer() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USERS);

  const onFetchMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUsers.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUsers)
          return {
            fetchUsers: [...prev.fetchUsers],
          };

        return {
          fetchUsers: [...prev.fetchUsers, ...fetchMoreResult.fetchUsers],
        };
      },
    });
  };

  const onClickMoveToDetail = (event: any) => {
    router.push(`/exiter/${event.target.id}`);
  };
  return (
    <>
      <UserListPresenter
        data={data}
        onFetchMore={onFetchMore}
        onClickMoveToDetail={onClickMoveToDetail}
      />
    </>
  );
}
