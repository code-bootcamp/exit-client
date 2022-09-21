import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationUpdateUserArgs,
} from "../../../../commons/types/generated/types";
import { isModalVisibleState } from "../../../commons/store";
import SetTagUI from "./setTag.presenter";
import { FETCH_TAGS, UPDATE_USER } from "./setTag.queries";

export default function SetTag() {
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(isModalVisibleState);
  const [selectedTags, setSelectedTags] = useState([]);
  const { data } = useQuery(FETCH_TAGS);

  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);

  const onClickTag = (el: any) => () => {
    const tags = [...selectedTags];
    const temp = tags.filter((tag: string) => tag === el);
    // 중복 체크
    if (temp.length === 1) {
      const newCategories = tags.filter((tag: string) => tag !== el);
      setSelectedTags(newCategories);
      return;
    }

    const newTags: any = [el, ...tags].slice(0, 5);
    setSelectedTags(newTags);
  };

  const onClickUpdateTags = async () => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            tags: selectedTags,
          },
        },
      });
      Modal.success({ content: "exiter가 되신 것을 환영합니다!" });
      setIsModalVisible(false);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <SetTagUI
      data={data}
      onClickUpdateTags={onClickUpdateTags}
      onClickTag={onClickTag}
      selectedTags={selectedTags}
    />
  );
}
