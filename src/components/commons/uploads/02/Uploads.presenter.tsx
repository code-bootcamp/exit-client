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

export default function UploadsWriteUI(props: any) {
  const { data } = useQuery(FETCH_LOGINED_USER);
  return (
    <>
      {props.fileUrl ? (
        <UploadImage onClick={props.onClickUpload} src={`${props.fileUrl}`} />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          프로젝트 이미지 업로드
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
