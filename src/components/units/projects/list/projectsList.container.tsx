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
import ExitingListUI from "./projectsList.presenter";
import {
  FETCH_BOARD,
  FETCH_BOARDS,
  FETCH_BOARD_RANDOM,
  FETCH_CATEGORIES_TAGS,
  FETCH_LIKES,
  FETCH_USER_WITH_NICKNAME,
} from "./projectsList.queries";

export default function ExitingList() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [searchWords, setSearchWords] = useState([]);
  const [filteredBoards, setFilteredBoards] = useState([]);

  const router = useRouter();
  const client = useApolloClient();

  // 마운트될 때
  useEffect(() => {
    sessionStorage.removeItem("searchWords");
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
        const result = await Promise.all(
          searchWords.map((el: any) => {
            if (el.filterName === "categoryName") {
              return client.query({
                query: FETCH_BOARDS,
                variables: {
                  categoryName: el.word,
                  isSuccess: false,
                  status: false,
                },
              });
            } else if (el.filterName === "tagName") {
              return client.query({
                query: FETCH_BOARDS,
                variables: {
                  tagName: el.word,
                  isSuccess: false,
                  status: false,
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
          // console.log(filteredBoards);
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

  const { data: userData } = useQuery(FETCH_USER_WITH_NICKNAME, {
    variables: {
      nickname: userInfo.nickname,
    },
  });

  const { data: randomData } = useQuery(FETCH_BOARD_RANDOM, {
    variables: {
      categoryId: userData?.fetchUserWithNickname?.categories?.[0]?.id,
    },
  });

  // console.log(randomData);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { isSuccess: false, status: false }, // 성공여부 false, 모집마감 false
  });

  // console.log(data);

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
        isSuccess: false,
        status: false,
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
      router.push(`/exiting/${projectId}`);
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
    <ExitingListUI
      data={data}
      likedData={likedData}
      searchWords={searchWords}
      filteredBoards={filteredBoards}
      filterData={filterData}
      onFetchMore={onFetchMore}
      isModalVisible={isModalVisible}
      onClickProject={onClickProject}
      onClickFilterButton={onClickFilterButton}
      setIsModalVisible={setIsModalVisible}
      userData={userData}
      randomData={randomData}
    />
  );
}
