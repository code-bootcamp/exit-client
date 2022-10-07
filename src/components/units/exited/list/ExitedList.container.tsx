import ExitedListUI from "./ExitedList.presenter";
import { useApolloClient, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsByLikesArgs,
  IQueryFetchLikesArgs,
} from "../../../../commons/types/generated/types";
import {
  isModalVisibleState,
  modalState,
  searchWordsState,
  userInfoState,
} from "../../../commons/store";
import {
  FETCH_BOARD,
  FETCH_BOARDS,
  FETCH_BOARDS_BY_LIKES,
  FETCH_CATEGORIES_TAGS,
  FETCH_LIKES,
} from "./ExitedList.queries";

export default function ExitedList() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [modal, setModal] = useRecoilState(modalState);
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(isModalVisibleState);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [savedSearchWords, setSavedSearchWords] =
    useRecoilState(searchWordsState);
  const [searchWords, setSearchWords] = useState([]);
  const [filteredBoards, setFilteredBoards] = useState([]);
  const resetSavedSearchWords = useResetRecoilState(searchWordsState);

  const router = useRouter();
  const client = useApolloClient();

  const { data: fetchBoardsByLikes } = useQuery<
    Pick<IQuery, "fetchBoardsByLikes">,
    IQueryFetchBoardsByLikesArgs
  >(FETCH_BOARDS_BY_LIKES, {
    variables: {
      isSuccess: true,
    },
  });

  // 모달 여닫은 후
  useEffect(() => {
    if (!hasBeenOpened) {
      resetSavedSearchWords();
      setHasBeenOpened((prev) => !prev);
      return;
    }
    setSearchWords(savedSearchWords);
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
    fetchPolicy: "network-only",
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
  };

  const onClickProject = (projectId: string) => () => {
    router.push(`/exited/${projectId}`);
  };

  const onClickFilterButton = () => {
    setIsModalVisible(true);
    setModal("searchWords");
  };

  return (
    <ExitedListUI
      data={data}
      fetchBoardsByLikes={fetchBoardsByLikes?.fetchBoardsByLikes}
      userInfo={userInfo}
      likedData={likedData}
      filterData={filterData}
      filteredBoards={filteredBoards}
      onFetchMore={onFetchMore}
      onClickProject={onClickProject}
      onClickFilterButton={onClickFilterButton}
      modal={modal}
      isModalVisible={isModalVisible}
      searchWords={searchWords}
    />
  );
}
