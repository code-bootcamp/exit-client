import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";
import ExitedProjectDetail from "../../../src/components/units/exited/detail/exitedProjectDetail.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      title
      leader
      description
      keywords {
        id
        name
      }
      bail
      countLike
      totalMember
      categories {
        id
        name
      }
      address
      tags {
        id
        name
      }
      frequency
      startAt
      endAt
      closedAt
      boardImage {
        url
        id
      }
    }
  }
`;

export default function ExitedProjectPage() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.projectId) },
    }
  );

  return <ExitedProjectDetail data={data} />;
}
