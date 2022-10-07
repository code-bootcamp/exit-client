import { useQuery } from "@apollo/client";
import { FETCH_LOGINED_USER } from "../../../units/member/login/login.queries";
import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
  UserImage,
  UploadTrue,
  UploadFalse,
} from "./Uploads.styles";

export default function Uploads01UI(props: any) {
  return (
    <>
      <UploadFalse>
        {props.fileUrl ? (
          <UploadImage onClick={props.onClickUpload} src={`${props.fileUrl}`} />
        ) : (
          <UploadButton
            type="button"
            onClick={props.onClickUpload}
          ></UploadButton>
        )}
      </UploadFalse>

      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
