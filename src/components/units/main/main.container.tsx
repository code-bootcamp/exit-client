import { useQuery } from "@apollo/client";
import { getAddress } from "../../../commons/libraries/getAddress";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import MainUI from "./main.presenter";
import { FETCH_BOARDS } from "./main.queries";

export default function Main() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    {
      variables: {
        isSuccess: false,
        status: false,
      },
    }
  );

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
      categoryData1={categoryData1}
      categoryData2={categoryData2}
    />
  );
}
