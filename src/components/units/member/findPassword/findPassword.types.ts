import { FieldValues, FormState, UseFormRegister } from "react-hook-form";

export interface IFindPasswordProps {
  onClickClose: () => void;
}
export interface IFindPasswordUIProps {
  time: { min: string; sec: string };
  watch: any;
  email: string;
  token: string;
  isStarted: boolean;
  formState: FormState<FieldValues>;
  findPasswordStep: number;
  onClickClose: () => void;
  register: UseFormRegister<FieldValues>;
  onClickSendNumber: () => void;
}
