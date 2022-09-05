import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import JoinUI from "./join.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER, SEND_EMAIL_TOKEN } from "./join.queries";
import {
  IMutation,
  IMutationCreateUserArgs,
  IMutationSendEmailTokenArgs,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식을 확인해주세요")
    .required("이메일을 입력해주세요"),
  emailToken: yup.string().required("이메일 인증번호를 입력해주세요"),
  // .max(6, "이메일 인증번호는 6글자입니다"),
  password: yup.string().required("비밀번호를 입력해주세요. (+ 추가설명)"),
  // .matches(
  //   /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,8}$/,
  //   "비밀번호 형식에 맞지 않습니다."
  // ),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  nickname: yup
    .string()
    .min(2, "닉네임은 최소 2글자 이상으로 입력해주세요")
    .max(10, "닉네임은 최대 10글자로 입력해주세요"),
});

export default function Join() {
  const [email, setEmail] = useState("");
  const [sendEmailToken] = useMutation<
    Pick<IMutation, "sendEmailToken">,
    IMutationSendEmailTokenArgs
  >(SEND_EMAIL_TOKEN);
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const router = useRouter();
  const { register, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setValue("email", event.target.value);
  };

  const onClickSendEmailToken = () => {
    if (formState.errors.email) return;
    try {
      sendEmailToken({
        variables: {
          email,
        },
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickJoin = async (data: any) => {
    const { emailToken, password2, ...createUserInput } = data;
    try {
      await createUser({
        variables: {
          createUserInput,
          emailToken,
        },
      });
      alert("가입이 완료되었습니다");
      router.push("/");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <JoinUI
      register={register}
      handleSubmit={handleSubmit}
      onChangeEmail={onChangeEmail}
      onClickSendEmailToken={onClickSendEmailToken}
      onClickJoin={onClickJoin}
    />
  );
}
