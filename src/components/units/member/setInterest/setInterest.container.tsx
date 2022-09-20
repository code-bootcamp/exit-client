import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationUpdateUserArgs,
} from "../../../../commons/types/generated/types";
import { isModalVisibleState } from "../../../commons/store";
import SetInterestUI from "./setInterest.presenter";
import { FETCH_CATEGORIES, UPDATE_USER } from "./setInterest.queries";
import { ISetInterestProps } from "./setInterest.types";

export default function SetInterest(props: ISetInterestProps) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isClickedSelectTags, setIsClickedSelectTags] = useState(false);
  const { data } = useQuery(FETCH_CATEGORIES);
  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);

  const onClickCategory = (el: any) => () => {
    const categories = [...selectedCategories];
    const temp = categories.filter((category: string) => category === el.name);
    // 중복시
    if (temp.length === 1) {
      const newCategories = categories.filter(
        (category: string) => category !== el.name
      );
      setSelectedCategories(newCategories);
      return;
    }

    const { __typename, id, name } = el;
    const newCategories: any = [name, ...categories].slice(0, 5);

    setSelectedCategories(newCategories);
  };

  const onClickUpdateCategories = async () => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            categories: selectedCategories,
          },
        },
      });
      setIsClickedSelectTags(true);
    } catch (error) {}
  };

  return (
    <SetInterestUI
      data={data}
      onClickClose={props.onClickClose}
      onClickCategory={onClickCategory}
      selectedCategories={selectedCategories}
      setSelectedCategories={setSelectedCategories}
      onClickUpdateCategories={onClickUpdateCategories}
      isClickedSelectTags={isClickedSelectTags}
    />
  );
}
