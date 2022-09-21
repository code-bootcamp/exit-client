import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchCommentsArgs,
} from "../../../../../commons/types/generated/types";
import ExitedCommentListUI from "./exitedCommentList.presenter";
import { FETCH_COMMENTS } from "./exitedCommentList.queries";

export default function ExitedCommentList() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchComments">,
    IQueryFetchCommentsArgs
  >(FETCH_COMMENTS, {
    variables: { boardId: String(router.query.projectId) },
  });

  return <ExitedCommentListUI data={data} />;
}
