import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MyPagePresenter from "./myPage.presenter";
import { FETCH_LOGINED_USER, FETCH_POINT_HISTORIES } from "./myPage.queries";

export default function MyPageContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_LOGINED_USER);
  const { data: pointData } = useQuery(FETCH_POINT_HISTORIES, {
    variables: { userId: String(data?.fetchLoginedUser.id) },
  });

  const onClickMoveMypageEdit = () => {
    router.push(`/myPage/edit`);
  };

  return (
    <>
      <MyPagePresenter
        data={data}
        pointData={pointData}
        onClickMoveMypageEdit={onClickMoveMypageEdit}
      />
    </>
  );
}
