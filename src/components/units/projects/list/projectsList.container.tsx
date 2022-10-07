import { useApolloClient, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchLikesArgs,
} from "../../../../commons/types/generated/types";
import {
  isModalVisibleState,
  modalState,
  searchWordsState,
  userInfoState,
} from "../../../commons/store";
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
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(isModalVisibleState);
  const [modal, setModal] = useRecoilState(modalState);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [savedSearchWords, setSavedSearchWords] =
    useRecoilState(searchWordsState);
  const [searchWords, setSearchWords] = useState([]);
  const [filteredBoards, setFilteredBoards] = useState([]);
  const resetSavedSearchWords = useResetRecoilState(searchWordsState);

  const router = useRouter();
  const client = useApolloClient();

  // 모달 여닫은 후
  useEffect(() => {
    if (!hasBeenOpened) {
      resetSavedSearchWords();
      setHasBeenOpened((prev) => !prev);
      return;
    }
    // recoil state에서 검색어 찾아오기
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

        const filteredBoards = tempFilteredBoards.map(
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

  const { data: userData } = useQuery(FETCH_USER_WITH_NICKNAME, {
    variables: {
      nickname: userInfo.nickname,
    },
  });

  const { data: randomData } = useQuery(FETCH_BOARD_RANDOM, {
    variables: {
      categoryId:
        userData?.fetchUserWithNickname?.categories?.[
          Math.floor(
            Math.random() * userData?.fetchUserWithNickname?.categories.length
          )
        ]?.id,
    },
  });

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { isSuccess: false, status: false }, // 성공여부 false, 모집마감 false
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
  };

  const onClickProject = (projectId: string) => () => {
    router.push(`/exiting/${projectId}`);
  };

  const onClickFilterButton = () => {
    setModal("searchWords");
    setIsModalVisible(true);
  };

  return (
    <ExitingListUI
      data={data}
      userInfo={userInfo}
      userData={userData}
      likedData={likedData}
      randomData={randomData?.fetchBoardRandom}
      isModalVisible={isModalVisible}
      modal={modal}
      searchWords={searchWords}
      filterData={filterData}
      filteredBoards={filteredBoards}
      onFetchMore={onFetchMore}
      onClickProject={onClickProject}
      onClickFilterButton={onClickFilterButton}
    />
  );
}
