import ResetPasswordUI from "./resetPassword.presenter";
import { IResetPasswordProps } from "./resetPassword.types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "./resetPassword.queries";
import {
  IMutation,
  IMutationUpdateUserArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../commons/store";

const schema = yup.object({
  password: yup.string().required("비밀번호를 입력해주세요. (+ 추가설명)"),
  // .matches(
  //   /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,8}$/,
  //   "비밀번호 형식에 맞지 않습니다."
  // ),
  checkedPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호를 입력해주세요"),
});

export default function ResetPassword(props: IResetPasswordProps) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const router = useRouter();

  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);

  const password = watch("password");
  const checkedPassword = watch("checkedPassword");

  const onClickResetPassword = async (data: any) => {
    // console.log("비밀번호 재설정 체크");
    await updateUser({
      variables: {
        updateUserInput: {
          password: data.password,
        },
      },
    });
  };

  return (
    <ResetPasswordUI
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      onClickResetPassword={onClickResetPassword}
      password={password}
      checkedPassword={checkedPassword}
    />
  );
}
