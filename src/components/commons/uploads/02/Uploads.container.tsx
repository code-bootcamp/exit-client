import { useMutation } from "@apollo/client";
import { message } from "antd";
import { ChangeEvent, useRef } from "react";
import Uploads01UI from "./Uploads.presenter";
import { UPLOAD_USER_IMAGE } from "./Uploads.queries";
import { checkValidationImage } from "./Uploads01.validation";

export default function Uploads01(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_USER_IMAGE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      message.error("실패");
    }
  };

  return (
    <>
      <Uploads01UI
        fileRef={fileRef}
        fileUrl={props.fileUrl}
        defaultFileUrl={props.defaultFileUrl}
        onClickUpload={onClickUpload}
        onChangeFile={onChangeFile}
      />
    </>
  );
}
