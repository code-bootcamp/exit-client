import ExitedListUI from "./ExitedList.presenter";
import { useApolloClient, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchLikesArgs,
} from "../../../../commons/types/generated/types";
import { userInfoState } from "../../../commons/store";
import ExitingListUI from "./ExitedList.presenter";
import {
  FETCH_BOARD,
  FETCH_BOARDS,
  FETCH_BOARDS_BY_LIKES,
  FETCH_CATEGORIES_TAGS,
  FETCH_LIKES,
} from "./ExitedList.queries";

export default function ExitedList() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [searchWords, setSearchWords] = useState([]);
  const [filteredBoards, setFilteredBoards] = useState([]);

  const router = useRouter();
  const client = useApolloClient();

  const { data: fetchBoardsByLikes } = useQuery(FETCH_BOARDS_BY_LIKES, {
    variables: {
      isSuccess: true,
      status: true,
    },
  });

  // 마운트될 때
  useEffect(() => {
    sessionStorage.removeItem("searchWords");
    return () => {
      sessionStorage.removeItem("searchWords");
    };
  }, []);

  // 모달 여닫은 후
  useEffect(() => {
    // 세션스토리지에서 검색어 찾아오기
    const searchWords: any = JSON.parse(
      sessionStorage.getItem("searchWords") || "[]"
    );
    setSearchWords(searchWords);
    // 검색어가 없다면
    if (searchWords === []) {
      setFilteredBoards([]);
    }
  }, [isModalVisible]);

  // 검색어에 변화가 있다면
  useEffect(() => {
    async function FetchBoardsWithSearchModal() {
      // 사용할 검색어가 있다면
      if (searchWords.length > 0) {
        console.log(searchWords);
        const result = await Promise.all(
          searchWords.map((el: any) => {
            if (el.filterName === "categoryName") {
              return client.query({
                query: FETCH_BOARDS,
                variables: {
                  categoryName: el.word,
                  isSuccess: true,
                },
              });
            } else if (el.filterName === "tagName") {
              return client.query({
                query: FETCH_BOARDS,
                variables: {
                  tagName: el.word,
                  isSuccess: true,
                },
              });
            }
          })
        );

        const filteredBoardIDs = result
          .map((el: any) => el.data.fetchBoards.map((el: any) => el.id))
          .filter((el) => el.length > 0)
          .reduce((prev, cur) => {
            return [...prev, ...cur];
          }, [])
          .reduce((prev: any, cur: any) => {
            return prev.includes(cur) ? prev : [...prev, cur];
          }, []);

        const tempFilteredBoards = await Promise.all(
          filteredBoardIDs.map((el: any) => {
            return client.query({
              query: FETCH_BOARD,
              variables: {
                boardId: el,
              },
            });
          })
        );

        const filteredBoards: any = tempFilteredBoards.map(
          (el) => el.data.fetchBoard
        );

        if (filteredBoards) {
          setFilteredBoards(filteredBoards);
        } else {
          setFilteredBoards([]);
        }
        // 사용할 검색어가 없다면
      } else {
        setFilteredBoards([]);
      }
    }
    FetchBoardsWithSearchModal();
  }, [searchWords]);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { isSuccess: true }, // 성공여부: true
  });

  const { data: likedData } = useQuery<
    Pick<IQuery, "fetchLikes">,
    IQueryFetchLikesArgs
  >(FETCH_LIKES, {
    variables: {
      userId: userInfo.id,
    },
  });

  const { data: filterData } = useQuery(FETCH_CATEGORIES_TAGS);

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoards.length / 10) + 1,
        isSuccess: true,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
    if (!data && !filteredBoards) return;
    if (filteredBoards) {
    }
  };

  const onClickProject =
    (projectId: string) => (event: MouseEvent<HTMLDivElement>) => {
      router.push(`/exited/${projectId}`);
    };

  const onClickFilterButton = () => {
    console.log("test");
    // 모달이 열린 적 있다면
    if (!hasBeenOpened) {
      setHasBeenOpened(false);
    }
    setIsModalVisible(true);
  };

  return (
    <ExitedListUI
      data={data}
      likedData={likedData}
      filterData={filterData}
      filteredBoards={filteredBoards}
      fetchBoardsByLikes={fetchBoardsByLikes}
      onFetchMore={onFetchMore}
      onClickProject={onClickProject}
      onClickFilterButton={onClickFilterButton}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      searchWords={searchWords}
    />
  );
}
