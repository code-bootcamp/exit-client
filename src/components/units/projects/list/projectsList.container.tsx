import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProjectsListUI from "./projectsList.presenter";
import { FETCH_BOARDS } from "./projectsList.queries";

export default function ProjectsList(){
    const router = useRouter()

    const { data, fetchMore } = useQuery(FETCH_BOARDS)

    const onFetchMore = () => {
        if(!data) return

        fetchMore({
            variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
            updateQuery: (prev, { fetchMoreResult }) => {
                // 현재 페이지가 없을 경우
                if (!fetchMoreResult.fetchBoards)
                  return {
                    fetchBoards: [...prev.fetchBoards],
                  };
        
                return {
                  fetchBoards: [
                    ...prev.fetchBoards,
                    ...fetchMoreResult.fetchBoards,
                  ],
                };
              },
        })
    }

    return<ProjectsListUI
        data={data}
        onFetchMore={onFetchMore}
    />

};
