import * as S from "./projectsList.styles"
import InfiniteScroll from "react-infinite-scroller"
// import { v4 as uuidv4 } from "uuid"

export default function ProjectsListUI(props: any) {
    return(
        <InfiniteScroll
        pageStart={0}
        loadMore={props.onFetchMore}
        hasMore={true || false}
      >
    <S.Wrapper>
        {props.data ? (
            props.data?.fetchBoards.map((el) => (
                <S.ItemCard
                    key={el.id}
                    id={el.id}
                >
                <S.ItemImage/>
                <S.DetailWrapper>
                    {/* <S.BoardItem el={el} key={uuidv4()}/> */}
                    <S.BoardTitle>{el.title}</S.BoardTitle>
                    <S.BoardTags>{el.Tags}</S.BoardTags>
                    <S.ProjectDuration>{el.startAd}</S.ProjectDuration>
                </S.DetailWrapper>
                </S.ItemCard>
            ))
        ) : (
            <></>
        )}
    </S.Wrapper>
    </InfiniteScroll>
    )
}