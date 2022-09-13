import { gql } from "@apollo/client"

export const FETCH_BOARDS = gql`
  query fetchBoards($isSuccess: Boolean, $status: Boolean, $page: Float, $tagName: String, $categoryName: String, $keywordName: String) {
    fetchBoards(isSuccess: $isSuccess, status: $status, page: $page, tagName: $tagName, categoryName: $categoryName, keywordName: $keywordName) {
      id
      title
      leader
      totalMember
      countMember
      countLike
      description
      bail
      status
      categories {
        name
      }
      boardImage {
        url
      }
      # 모집마감일
    }
  }
`;