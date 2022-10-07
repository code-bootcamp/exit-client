import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { getAddress } from "../../../commons/libraries/getAddress";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchLikesArgs,
} from "../../../commons/types/generated/types";
import { userInfoState } from "../../commons/store";
import MainUI from "./main.presenter";
import { FETCH_BOARDS, FETCH_LIKES } from "./main.queries";

export default function Main() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    {
      variables: {
        isSuccess: false,
        status: false,
      },
    }
  );

  const { data: likesData } = useQuery<
    Pick<IQuery, "fetchLikes">,
    IQueryFetchLikesArgs
  >(FETCH_LIKES, {
    variables: { userId: userInfo.id },
  });

  const { data: categoryData1 } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      categoryName: "공유서비스",
      isSuccess: false,
      status: false,
    },
  });

  const { data: categoryData2 } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      categoryName: "여행",
      isSuccess: false,
      status: false,
    },
  });

  return (
    <MainUI
      data={data}
      likesData={likesData}
      userInfo={userInfo}
      categoryData1={categoryData1}
      categoryData2={categoryData2}
    />
  );
}
