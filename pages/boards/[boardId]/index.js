import { useRouter } from "next/router";
import Head from "next/head";
import { gql, GraphQLClient } from "graphql-request";

export default function BoardsDetailPage(props) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meta property="og:title" content={props?.fetchBoard.title} />
        <meta property="og:description" content={props?.fetchBoard.contents} />
        <meta property="og:image" content={props?.fetchBoard.images?.[0]} />
      </Head>
      <div>
        안녕하세요! 게시글 상세페이지 입니다!!!, 게시글 ID는
        {router.query.boardId}입니다!!!
      </div>
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

export const getServerSideProps = async (context) => {
  console.log("aaa");
  // 여기서 fetchBoard 요청하기
  const graphQLClient = new GraphQLClient(
    "https://backend08.codebootcamp.co.kr/graphql"
  );
  const result = await graphQLClient.request(FETCH_BOARD, {
    boardId: context.query.boardId,
  });

  return {
    props: {
      fetchBoard: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
