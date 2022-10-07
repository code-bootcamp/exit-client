import { v4 as uuidv4 } from "uuid";
import SearchUIPresenterItem from "./search.presenterItem";
import * as S from "./search.styles";
import { ISearchUIProps } from "./search.types";

export default function SearchUI(props: ISearchUIProps) {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.SearchBar>
          <S.SearchInput
            placeholder="검색"
            value={props.searchKeyword}
            onChange={props.onChangeSearchKeywords}
            onKeyPress={props.onKeyPressEnter}
          />
          <S.SearchButton onClick={props.handleSearch}>
            <img src="/icons/icon_search.png" alt="검색 버튼" />
          </S.SearchButton>
        </S.SearchBar>
        {!props.isSearching && (
          <S.RecentSearchWrapper>
            <S.RecentSearchTitle>최근 검색어</S.RecentSearchTitle>
            <S.RecentSearchKeywords>
              {props.recentSearchKeywords?.map((el) => (
                <S.RecentSearchKeyword
                  onClick={props.handleSearchByRecentSearchWord}
                  key={uuidv4()}
                >
                  {el}
                </S.RecentSearchKeyword>
              ))}
            </S.RecentSearchKeywords>
          </S.RecentSearchWrapper>
        )}
        {props.isSearching && (
          <S.SearchResultsWrapper>
            <S.SearchResultTopWrapper>
              <S.SearchResultsDescription>
                &#34;{props.savedSearchKeyword}&#34;에 대한 검색 결과{" "}
                <span>{props.searchResults.length}</span>개
              </S.SearchResultsDescription>
            </S.SearchResultTopWrapper>
            {props?.searchResults?.length > 0 && (
              <S.SearchResultBodyWrapper>
                {props.searchResults.filter((el) => !el.isSuccess && !el.status)
                  .length > 0 && (
                  <>
                    <S.SectionTitle>진행중인 프로젝트</S.SectionTitle>
                    <S.ExitingProjects>
                      {props.searchResults
                        .filter((el) => !el.isSuccess)
                        .map((el) => (
                          <SearchUIPresenterItem
                            key={uuidv4()}
                            el={el}
                            likesData={props.likesData}
                          />
                        ))}
                    </S.ExitingProjects>
                  </>
                )}
                {props.searchResults.filter((el) => el.isSuccess).length >
                  0 && (
                  <>
                    <S.SectionTitle>완료된 프로젝트</S.SectionTitle>
                    <S.ExitingProjects>
                      {props.searchResults
                        .filter((el) => el.isSuccess)
                        .map((el) => (
                          <SearchUIPresenterItem
                            key={uuidv4()}
                            el={el}
                            likesData={props.likesData}
                          />
                        ))}
                    </S.ExitingProjects>
                  </>
                )}
              </S.SearchResultBodyWrapper>
            )}
          </S.SearchResultsWrapper>
        )}
      </S.Inner>
    </S.Wrapper>
  );
}
