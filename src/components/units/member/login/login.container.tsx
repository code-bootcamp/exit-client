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
  isEditingTagsState,
  isModalVisibleState,
  userInfoState,
} from "../../../commons/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Modal } from "antd";

const schema = yup.object({
  email: yup.string().email("이메일 형식을 확인해주세요").required(""),
  password: yup.string().required(""),
  // .matches(
  //   /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,8}$/,
  //   "비밀번호 형식에 맞지 않습니다."
  // ),
});

export default function Login(props: any) {
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(isModalVisibleState);
  const [isEditingTags, setIsTagsEditingTags] =
    useRecoilState(isEditingTagsState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isScrollBlocked, setIsScrollBlocked] = useState(true);
  const [serverEmailErrorMessage, setServerEmailErrorMessage] = useState("");
  const [serverPasswordErrorMessage, setServerPasswordErrorMessage] =
    useState("");
  const [isClickedFindPassword, setIsClickedFindPassword] = useState(false);
  const [isClickedJoin, setIsClickedJoin] = useState(false);

  const { register, handleSubmit, watch, trigger, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

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

  useEffect(() => {
    // let isComponentMounted = true;
    isScrollBlocked
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    return () => {
      document.body.style.overflow = "auto";
      // isComponentMounted = false;
    };
  }, [isScrollBlocked]);

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
      setIsScrollBlocked(false);
      // props.setIsModalVisible?.(false);
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
    // console.log("check");
    setIsClickedJoin(true);
  };

  const onClickClose = () => {
    console.log("모달 닫기: 여기는 login 컨테이너");
    // props.setIsModalVisible?.(false);
    setIsModalVisible(false);
    setIsScrollBlocked(false);
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
      isEditingTags={isEditingTags}
    />
  );
}
