import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ILoginUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickLogin: (data: any) => Promise<void>;
  onClickJoin: () => void;
  onClickClose: () => void;
  onClickFindPassword: () => void;
  isClickedFindPassword: boolean;
  isClickedJoin: boolean;
  password: string;
  formState: FormState<FieldValues>;
  serverEmailErrorMessage: string;
  serverPasswordErrorMessage: string;
}
