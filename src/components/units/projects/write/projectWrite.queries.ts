import { gql } from "@apollo/client"

export const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: createBoardInput!) {
        createBoard(createBoardInput: $createBoardInput {
            
        })
    }
`