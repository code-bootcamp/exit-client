import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
  Label,
} from "./UploadsWrite.styles";

export default function UploadsWriteUI(props: any) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage onClick={props.onClickUpload} src={`${props.fileUrl}`} />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <Label>프로젝트 이미지 업로드</Label>
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
