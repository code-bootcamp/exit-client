import ProjectWrite from "../../../../src/components/units/projects/write/projectWrite.container";
import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router";

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
`
export default function ProjectEditPage() {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.projectid) }

  })

  return <ProjectWrite isEdit={true} data={data}/>;
}
