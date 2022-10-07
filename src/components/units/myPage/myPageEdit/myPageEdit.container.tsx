import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  isModalVisibleState,
  modalState,
  tagsState,
} from "../../../commons/store";
import { FETCH_LOGINED_USER } from "../myPage.queries";
import MyPageEditPresenter from "./myPageEdit.presenter";
import { REMOVE_USER, UPDATE_USER } from "./myPageEdit.queries";

export default function MyPageEditContainer() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(isModalVisibleState);
  const [modal, setModal] = useRecoilState(modalState);
  const [tags, setTags] = useRecoilState(tagsState);
  const resetModalState = useResetRecoilState(modalState);
  const resetSavedTagsState = useResetRecoilState(tagsState);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const { data } = useQuery(FETCH_LOGINED_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  const [fileUrl, setFileUrl] = useState("");
  const [nickname, setNickname] = useState("");
  const [userUrl, setUserUrl] = useState("");
  const [items, setItems] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordBox, setKeywordBox] = useState([]);
  const [removeUser] = useMutation(REMOVE_USER);

  // 저장된 유저 태그 받아오기
  useEffect(() => {
    const tags = data?.fetchLoginedUser.tags?.map((el: any) => el.name);
    setTags(tags);
  }, [data]);

  // 모집기술 편집(모달에서 글로벌 스테이트 편집)

  // 언마운트될 때, 글로벌스테이트 초기화
  useEffect(() => {
    return () => {
      resetSavedTagsState();
      resetModalState();
    };
  }, []);

  // 이미지파일 업로드

  const onChangeFileUrl = (fileUrl: string) => {
    const newFileUrl = fileUrl;
    setFileUrl(newFileUrl);
  };

  useEffect(() => {
    if (data?.fetchLoginedUser.userImage.url.length) {
      setFileUrl(data?.fetchLoginedUser.userImage.url);
    }
  }, [data]);
  // 인풋값입력
  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const onChangeUserUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setUserUrl(e.target.value);
  };

  //키워드 엔터입력
  let keyBox = [];
  const onPushKeywords = (event: any) => {
    if (event.key === "Enter") {
      keyBox.push(...keywordBox, keyword);
      setKeywordBox(keyBox);
      event.target.value = "";
      console.log(keywordBox.map((el) => el));
    }
  };
  const onChangeKeyword = (event: any) => {
    setKeyword(event.target.value);
  };
  const onClickDeleteKey = (event: any) => {
    const deleteKey = keywordBox.filter((el) => el !== event.target.id);
    //         const filter = items.filter((el) => el !== event.target.value);
    keyBox.push(...deleteKey);
    setKeywordBox(keyBox);
  };

  //내정보수정
  const onUpdateButton = async () => {
    // console.log(tags);
    // 이미지
    const currentProfile = JSON.stringify(fileUrl);
    const defaultProfile = JSON.stringify(data.fetchLoginedUser.userImage.url);
    const isChangedFiles = currentProfile !== defaultProfile;
    const updateUserInput: any = {
      userImage: {},
      keywords: [],
      categories: [],
      tags: [],
    };
    if (nickname) {
      updateUserInput.nickname = nickname;
    }
    if (userUrl) {
      updateUserInput.userUrl = userUrl;
    }
    if (isChangedFiles) {
      updateUserInput.userImage.url = fileUrl;
    }
    if (keywordBox) {
      updateUserInput.keywords = keywordBox;
    }
    if (items) {
      updateUserInput.categories = items;
    }
    if (tags) {
      updateUserInput.tags = tags;
    }

    await updateUser({
      variables: { updateUserInput },
      refetchQueries: [
        {
          query: FETCH_LOGINED_USER,
        },
      ],
    });

    router.push(`/myPage`);
  };

  // 관심분야
  const onClickCategori = (event: any) => {
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

  const onClickTagsEditing = () => {
    setIsModalVisible(true);
    setModal("isEditingTags");
  };

  const onClickChangePassword = () => {
    setIsModalVisible(true);
    setModal("isChangingPassword");
  };

  const onClickClose = () => {
    setIsModalVisible(false);
    resetModalState();
  };

  const onClickRemoveUser = () => {
    removeUser();
    router.push("/");
  };
  return (
    <>
      <MyPageEditPresenter
        data={data}
        fileUrl={fileUrl}
        items={items}
        keywordBox={keywordBox}
        tags={tags}
        modal={modal}
        isModalVisible={isModalVisible}
        isChangingPassword={isChangingPassword}
        setIsChangingPassword={setIsChangingPassword}
        onClickClose={onClickClose}
        onClickRemoveUser={onClickRemoveUser}
        onChangeNickname={onChangeNickname}
        onChangeUserUrl={onChangeUserUrl}
        onChangeFileUrl={onChangeFileUrl}
        onClickCategori={onClickCategori}
        onUpdateButton={onUpdateButton}
        onPushKeywords={onPushKeywords}
        onChangeKeyword={onChangeKeyword}
        onClickDeleteKey={onClickDeleteKey}
        onClickTagsEditing={onClickTagsEditing}
        onClickChangePassword={onClickChangePassword}
      />
    </>
  );
}
