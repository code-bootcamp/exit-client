import { ChangeEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IJoinDataProps {
  email: string;
  password: string;
  password2: string;
  nickname: string;
  emailToken: string;
}

export interface IJoinProps {
  onClickClose: () => void;
}

export interface IJoinUIProps {
  email: string;
  token: string;
  time: { min: string; sec: string };
  joinStep: number;
  isStarted: boolean;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickSendEmailToken: () => void;
  onClickJoin: (data: any) => Promise<void>;
  onClickClose: () => void;
  onClickCheckToken: () => void;
  formState: FormState<FieldValues>;
  serverEmailErrorMessage: string;
  serverTokenErrorMessage: string;
}

export interface IJoinUIUserInfoItemProps {}
