import { useQuery } from "@apollo/client";
import { FETCH_LOGINED_USER } from "../../../units/member/login/login.queries";
import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
  UserImage,
  UploadTrue,
  UploadFalse,
} from "./Uploads01.styles";

export default function Uploads01UI(props: any) {
  const { data } = useQuery(FETCH_LOGINED_USER);
  return (
    <>
      {data?.fetchLoginedUser.userImage?.url !== "null" ? (
        <UploadFalse>
          {props.fileUrl ? (
            <UploadImage
              onClick={props.onClickUpload}
              src={`${props.fileUrl}`}
            />
          ) : (
            <UploadButton type="button" onClick={props.onClickUpload}>
              <UserImage
                src={`${data?.fetchLoginedUser.userImage?.url}`}
              ></UserImage>
            </UploadButton>
          )}
        </UploadFalse>
      ) : (
        <UploadTrue>
          {props.fileUrl ? (
            <UploadImage
              onClick={props.onClickUpload}
              src={`${props.fileUrl}`}
            />
          ) : (
            <UploadButton type="button" onClick={props.onClickUpload}>
              <UserImage src="/profile_img.png"></UserImage>
            </UploadButton>
          )}
        </UploadTrue>
      )}
      {/* {props.fileUrl ? (
        <UploadImage onClick={props.onClickUpload} src={`${props.fileUrl}`} />
      ) : (
        <UploadButton type="button" onClick={props.onClickUpload}>
          <UserImage src="/profile_img.png"></UserImage>
        </UploadButton>
      )} */}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
