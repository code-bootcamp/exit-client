import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FETCH_LOGINED_USER } from "../myPage.queries";
import MyPageEditPresenter from "./myPageEdit.presenter";
import { UPDATE_USER } from "./myPageEdit.queries";

const initialInputs = { nickname: "" };
export default function MyPageEditContainer() {
  const router = useRouter();
  const [inputs, setInputs] = useState(initialInputs);
  const { data } = useQuery(FETCH_LOGINED_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  const [fileUrl, setFileUrl] = useState("");
  const [items, setItems] = useState([]);

  // 이미지파일 업로드
  const onChangeFileUrl = (fileUrl: string) => {
    setFileUrl(fileUrl);
  };
  useEffect(() => {
    if (fileUrl) {
      setFileUrl(fileUrl);
    }
  }, [fileUrl]);
  // 인풋값입력
  const onChangeInputs = (event: any) => {
    const _inputs = {
      ...inputs,
      [event.target.id]: event.target.value,
    };
    setInputs(_inputs);
    console.log(inputs);
  };

  const onUpdateButton = async (data: any) => {
    const currentFiles = JSON.stringify(fileUrl);
    // const defaultFiles = JSON.stringify(data?.fetchLoginedUser.userImage.url);
    // const isChangedFile = currentFiles !== defaultFiles;

    const updateUserInput: any = {};
    if (inputs.nickname) updateUserInput.nickname = inputs.nickname;
    // if (isChangedFile) updateUserInput.image = fileUrl;

    const result = await updateUser({
      variables: {
        updateUserInput,
      },
    });
    router.push(`/myPage`);
  };

  //관심분야
  const onChangeCategori = (event: any) => {
    if (items.includes(event.target.id)) {
      const filter = items.filter((el) => el !== event.target.id);
      setItems(filter);
    } else {
      setItems([...items, event.target.id]);
    }
  };
  useEffect(() => {
    if (items.length > 5) {
      const filter = items;
      filter.shift();
      setItems(filter);
      console.log(items);
      return;
    }
  }, [items]);

  const onClickCategori = (event: any) => {};

  return (
    <>
      <MyPageEditPresenter
        data={data}
        onUpdateButton={onUpdateButton}
        onChangeInputs={onChangeInputs}
        onClickCategori={onClickCategori}
        onChangeCategori={onChangeCategori}
        items={items}
      />
    </>
  );
}
