import ResetPasswordUI from "./changePassword.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "./changePassword.queries";
import {
  IMutation,
  IMutationUpdateUserArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isModalVisibleState, userInfoState } from "../../../commons/store";
import { IChangePasswordProps } from "./changePassword.types";
import ChangePasswordUI from "./changePassword.presenter";
import { Modal } from "antd";

const schema = yup.object({
  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
      "비밀번호 형식에 맞지 않습니다."
    ),
  checkedPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호를 입력해주세요"),
});

export default function ChangePassword(props: IChangePasswordProps) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(isModalVisibleState);
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

  const onClickChangePassword = async (data: any) => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            password: data.password,
          },
        },
      });
      Modal.success({ content: "비밀번호가 변경되었습니다." });
      setIsModalVisible(false);
      props.setIsChangingPassword?.(false);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <ChangePasswordUI
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      onClickChangePassword={onClickChangePassword}
      password={password}
      checkedPassword={checkedPassword}
      onClickClose={props.onClickClose}
    />
  );
}
