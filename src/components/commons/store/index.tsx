import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    id: "",
    nickname: "",
  },
});

export const isModalVisibleState = atom({
  key: "isModalVisibleState",
  default: false,
});

export const modalState = atom({
  key: "modalState",
  default: "",
});

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const searchWordsState = atom({
  key: "searchWordsState",
  default: [],
});

export const tagsState = atom({
  key: "tagsState",
  default: [],
});

export const isEditingTagsState = atom({
  key: "isEditingTagsState",
  default: false,
});
