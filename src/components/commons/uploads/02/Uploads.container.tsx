import { useMutation } from "@apollo/client";
import { message } from "antd";
import { ChangeEvent, useRef } from "react";
import Uploads01UI from "./Uploads.presenter";
import { UPLOAD_USER_IMAGE } from "./Uploads.queries";

export default function Uploads01(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadUserImage] = useMutation(UPLOAD_USER_IMAGE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const result = await uploadUserImage({ variables: { image: file } });
      props.onChangeFileUrl(result.data.uploadUserImage);
    } catch (error) {
      alert(error);
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
