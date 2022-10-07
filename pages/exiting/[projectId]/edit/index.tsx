import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import WriteContainer from "../../../../src/components/units/exiting/write/projectWrite.container";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      title
      description
      keywords {
        id
        name
      }
      bail
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
export default function ProjectEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.projectId) },
  });

  return <WriteContainer isEdit={true} data={data} />;
}
