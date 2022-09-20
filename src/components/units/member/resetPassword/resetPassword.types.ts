import {
  FieldValue,
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IResetPasswordProps {
  email: string;
  register: UseFormRegister<FieldValues>;
}

export interface IResetPasswordUIProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  email?: string;
  password: string;
  checkedPassword: string;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  onClickResetPassword: (data: any) => void;
}
