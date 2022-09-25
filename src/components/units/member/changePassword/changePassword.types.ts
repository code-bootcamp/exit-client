import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IChangePasswordProps {
  onClickClose: () => void;
  setIsChangingPassword: any;
}

export interface IChangePasswordUIProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  email?: string;
  password: string;
  checkedPassword: string;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  onClickChangePassword: (data: any) => void;
  onClickClose: () => void;
}
