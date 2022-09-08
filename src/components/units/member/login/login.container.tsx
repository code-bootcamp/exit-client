import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import LoginUI from "./login.presenter";
import { useApolloClient, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_LOGINED_USER, LOGIN } from "./login.queries";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useRouter } from "next/router";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식을 확인해주세요")
    .required("이메일을 입력해주세요"),
  password: yup.string().required("비밀번호를 입력해주세요. (+ 추가설명)"),
  // .matches(
  //   /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,8}$/,
  //   "비밀번호 형식에 맞지 않습니다."
  // ),
});

export default function Login() {
  const client = useApolloClient();
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [login] = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(
    LOGIN
  );

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data: any) => {
    try {
      const result = await login({
        variables: {
          ...data,
        },
      });
      const accessToken = result.data?.login;
      if (!accessToken) {
        alert("accessToken이 없습니다!");
        return;
      }
      setAccessToken(accessToken);
      // localStorage.setItem("accessToken", accessToken);

      const resultUserInfo = await client.query({
        query: FETCH_LOGINED_USER,
        context: {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      });
      const { __type, ...userInfo } = resultUserInfo?.data.fetchLoginedUser;
      setUserInfo(userInfo);
      alert("로그인 성공");
      router.push("/");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  console.log(userInfo);
  return (
    <LoginUI
      register={register}
      handleSubmit={handleSubmit}
      onClickLogin={onClickLogin}
    />
  );
}
