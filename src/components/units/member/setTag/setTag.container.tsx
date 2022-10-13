import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationUpdateUserArgs,
} from "../../../../commons/types/generated/types";
import { isModalVisibleState } from "../../../commons/store";
import SetTagUI from "./setTag.presenter";
import { FETCH_TAGS, UPDATE_USER } from "./setTag.queries";
import { ISetTagProps } from "./setTag.types";

export default function SetTag(props: ISetTagProps) {
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(isModalVisibleState);
  const [selectedTags, setSelectedTags] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data } = useQuery(FETCH_TAGS);

  // spinner
  useEffect(() => {
    if (!data) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [data]);

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
      setLoading(true);
      await updateUser({
        variables: {
          updateUserInput: {
            tags: selectedTags,
          },
        },
      });
      Modal.success({ content: "exiter가 되신 것을 환영합니다!" });
      setLoading(false);
      setIsModalVisible(false);
    } catch (error) {
      if (error instanceof Error) {
        setLoading(false);
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <SetTagUI
      data={data}
      loading={loading}
      onClickUpdateTags={onClickUpdateTags}
      onClickTag={onClickTag}
      onClickClose={props.onClickClose}
      selectedTags={selectedTags}
    />
  );
}
