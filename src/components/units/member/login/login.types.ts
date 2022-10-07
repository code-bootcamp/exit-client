import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ILoginUIProps {
  email: string;
  password: string;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickLogin: (data: any) => Promise<void>;
  onClickJoin: () => void;
  onClickClose: () => void;
  onClickFindPassword: () => void;
  serverEmailErrorMessage: string;
  serverPasswordErrorMessage: string;
  isClickedFindPassword: boolean;
  isClickedJoin: boolean;
}
