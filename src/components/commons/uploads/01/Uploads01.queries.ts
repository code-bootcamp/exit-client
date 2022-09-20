import { gql } from "@apollo/client";

export const UPLOAD_USER_IMAGE = gql`
  mutation uploadUserImage($image: [Upload!]!) {
    uploadUserImage(image: $image)
  }
`;
