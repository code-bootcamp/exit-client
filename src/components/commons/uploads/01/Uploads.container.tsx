import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import Uploads01UI from "./Uploads.presenter";
import { UPLOAD_FILE } from "./Uploads01.queries";

export default function Uploads01(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
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
