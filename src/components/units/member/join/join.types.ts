import { ChangeEvent } from "react";
import {
  FieldValues,
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

export interface IJoinUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSendEmailToken: () => void;
  onClickJoin: (data: any) => Promise<void>;
}
