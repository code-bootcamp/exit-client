import { gql } from "@apollo/client"

export const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            id
            title
            totalMember
            description
        #     keywords {
        #         id
        #         name
        #         users
        #         boards
        #     }
        #     bail

        #     address
        #     tags
        #     frequency
        #     closedAt
        #     startAt
        #     endAt
        }
    }
`

export const UPLOAD_BOARD_IMAGE = gql`
    mutation uploadBoardImage($image: [Upload!]!) {
     uploadBoardImage(image: $image) 
}
`