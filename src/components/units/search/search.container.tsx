import Inko from "inko";
import { message } from "antd";
import { useApolloClient, useQuery } from "@apollo/client";
import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { FETCH_BOARDS, FETCH_LIKES } from "./search.queries";
import SearchUI from "./search.presenter";
import {
  IQuery,
  IQueryFetchLikesArgs,
} from "../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../commons/store";

export default function Search() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearchKeywords, setRecentSearchKeywords] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [savedSearchKeyword, setSavedSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const savedRecentSearchKeywords = JSON.parse(
      localStorage.getItem("recentSearchKeywords") || "[]"
    );
    setRecentSearchKeywords(savedRecentSearchKeywords);
  }, []);

  const { data: likesData } = useQuery<
    Pick<IQuery, "fetchLikes">,
    IQueryFetchLikesArgs
  >(FETCH_LIKES, {
    variables: { userId: userInfo.id },
  });

  const client = useApolloClient();
  const inko = new Inko();

  const onChangeSearchKeywords = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearch = async () => {
    if (!searchKeyword) {
      message.error("검색어를 입력해주세요.");
      return;
    }

    if (!isSearching) setIsSearching(true);

    const result = await client.query({
      query: FETCH_BOARDS,
      variables: {
        search: searchKeyword,
      },
    });
    setSearchResults(result?.data?.fetchBoards);

    let tempKeyword = "";

    if (
      result?.data?.fetchBoards?.[0]?.title.includes(inko.en2ko(searchKeyword))
    ) {
      tempKeyword = inko.en2ko(searchKeyword);
    } else if (
      result?.data?.fetchBoards?.[0]?.title.includes(inko.ko2en(searchKeyword))
    ) {
      tempKeyword = inko.ko2en(searchKeyword);
    } else {
      tempKeyword = searchKeyword;
    }
    setSearchKeyword(tempKeyword);
    setSavedSearchKeyword(tempKeyword);

    const temp = recentSearchKeywords?.filter(
      (el: string) => el !== tempKeyword
    );

    const updatedRecentSearchWords = [tempKeyword, ...temp].slice(0, 10);
    localStorage.setItem(
      "recentSearchKeywords",
      JSON.stringify(updatedRecentSearchWords)
    );
    setRecentSearchKeywords(updatedRecentSearchWords);
  };

  const handleSearchByRecentSearchWord = async (
    event: MouseEvent<HTMLLIElement>
  ) => {
    if (
      !(event.target instanceof HTMLLIElement) ||
      event.target.innerText === ""
    )
      return;

    if (!isSearching) setIsSearching(true);

    const result = await client.query({
      query: FETCH_BOARDS,
      variables: {
        search: event.target.innerText,
      },
    });
    setSearchResults(result?.data?.fetchBoards);

    let tempKeyword = event.target.innerText;
    setSearchKeyword(tempKeyword);
    setSavedSearchKeyword(tempKeyword);

    const temp = recentSearchKeywords?.filter(
      (el: string) => el !== tempKeyword
    );

    const updatedRecentSearchWords = [tempKeyword, ...temp].slice(0, 10);
    localStorage.setItem(
      "recentSearchKeywords",
      JSON.stringify(updatedRecentSearchWords)
    );
    setRecentSearchKeywords(updatedRecentSearchWords);
  };

  const onKeyPressEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchUI
      likesData={likesData}
      isSearching={isSearching}
      searchKeyword={searchKeyword}
      savedSearchKeyword={savedSearchKeyword}
      onChangeSearchKeywords={onChangeSearchKeywords}
      onKeyPressEnter={onKeyPressEnter}
      handleSearch={handleSearch}
      handleSearchByRecentSearchWord={handleSearchByRecentSearchWord}
      searchResults={searchResults}
      recentSearchKeywords={recentSearchKeywords}
    />
  );
}
