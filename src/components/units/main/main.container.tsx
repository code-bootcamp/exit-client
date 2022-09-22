import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchCategoryArgs,
} from "../../../commons/types/generated/types";
import MainUI from "./main.presenter";
import { FETCH_BOARDS, FETCH_CATEGORIES } from "./main.queries";

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

  return <MainUI data={data} />;
}
