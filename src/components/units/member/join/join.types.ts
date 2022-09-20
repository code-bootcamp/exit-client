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
  time: { min: string; sec: string };
  email: string;
  token: string;
  password: string;
  password2: string;
  joinStep: number;
  isStarted: boolean;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  isEmailDuplicated: boolean | null;
  onClickSendEmailToken: () => void;
  onClickJoin: (data: any) => Promise<void>;
  onClickClose: () => void;
  onClickCheckToken: () => void;
  serverEmailErrorMessage: string;
  serverTokenErrorMessage: string;
}

export interface IJoinUIUserInfoItemProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickJoin: (data: any) => Promise<void>;
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
}
