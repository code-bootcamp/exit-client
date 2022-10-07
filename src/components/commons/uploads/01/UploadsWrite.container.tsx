import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import UploadsWrite01UI from "./UploadsWrite.presenter";
import { UPLOAD_USER_IMAGE } from "./UploadsWrite.queries";

export default function UploadWrite(props: any) {
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
      <UploadsWrite01UI
        fileRef={fileRef}
        fileUrl={props.fileUrl}
        defaultFileUrl={props.defaultFileUrl}
        onClickUpload={onClickUpload}
        onChangeFile={onChangeFile}
      />
    </>
  );
}
