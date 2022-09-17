import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import MainUI from "./main.presenter";
import { FETCH_BOARDS } from "./main.queries";

export default function Main() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  // return <MainUI data={data} />;
  return <div>메인 보수 작업 예정</div>;
}
