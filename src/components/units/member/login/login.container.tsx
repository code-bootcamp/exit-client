import * as yup from "yup";
import _ from "lodash";
import LoginUI from "./login.presenter";
import { useApolloClient, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_LOGINED_USER, LOGIN } from "./login.queries";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  isModalVisibleState,
  modalState,
  userInfoState,
} from "../../../commons/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import useCleanUp from "../../../commons/hooks/useCleanUp";

const schema = yup.object({
  email: yup.string().email("이메일 형식을 확인해주세요").required(""),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .matches(
      /^[A-Za-z0-9\d@$!%*#?&]{6,14}$/,
      "비밀번호 형식(영문, 숫자, 특수문자(@$!%*#?&) 중 6~14자)"
    ),
});

export default function Login() {
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(isModalVisibleState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [serverEmailErrorMessage, setServerEmailErrorMessage] = useState("");
  const [serverPasswordErrorMessage, setServerPasswordErrorMessage] =
    useState("");
  const [isClickedFindPassword, setIsClickedFindPassword] = useState(false);
  const [isClickedJoin, setIsClickedJoin] = useState(false);

  const { register, handleSubmit, watch, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useCleanUp();

  const email = watch("email");
  const password = watch("password");

  useEffect(() => {
    let isComponentMounted = true;
    if (email === "") {
      setServerEmailErrorMessage("");
    } else if (password === "") {
      setServerPasswordErrorMessage("");
    }
    return () => {
      isComponentMounted = false;
    };
  }, [email, password]);

  const client = useApolloClient();
  const router = useRouter();
  const [login] = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(
    LOGIN
  );

  const onClickLogin = async (data: any) => {
    try {
      const result = await login({
        variables: {
          ...data,
        },
      });
      const accessToken = result.data?.login;
      if (!accessToken) {
        Modal.error({ content: "접근 권한이 없습니다." }); // accessToken 부존재
        return;
      }
      setAccessToken(accessToken);

      const resultUserInfo = await client.query({
        query: FETCH_LOGINED_USER,
        context: {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      });
      const { __type, ...userInfo } = resultUserInfo?.data.fetchLoginedUser;
      setUserInfo(userInfo);
      router.push("/");
      setIsModalVisible(false);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("이메일")) {
          setServerEmailErrorMessage(error.message);
        } else if (error.message.includes("비밀번호")) {
          setServerPasswordErrorMessage(error.message);
        }
      }
    }
  };

  const onClickFindPassword = () => {
    setIsClickedFindPassword(true);
  };

  const onClickJoin = () => {
    setIsClickedJoin(true);
  };

  const onClickClose = () => {
    setIsModalVisible(false);
  };

  return (
    <LoginUI
      email={email}
      password={password}
      formState={formState}
      register={register}
      handleSubmit={handleSubmit}
      onClickLogin={onClickLogin}
      onClickJoin={onClickJoin}
      onClickClose={onClickClose}
      onClickFindPassword={onClickFindPassword}
      serverEmailErrorMessage={serverEmailErrorMessage}
      serverPasswordErrorMessage={serverPasswordErrorMessage}
      isClickedFindPassword={isClickedFindPassword}
      isClickedJoin={isClickedJoin}
    />
  );
}
