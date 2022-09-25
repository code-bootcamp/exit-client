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

  return <MainUI data={data} />;
}
