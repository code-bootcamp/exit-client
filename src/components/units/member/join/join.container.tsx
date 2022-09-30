import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import JoinUI from "./join.presenter";
import { useApolloClient, useMutation } from "@apollo/client";
import {
  CHECK_EMAIL_DUPLICATE,
  CHECK_EMAIL_TOKEN,
  CREATE_USER,
  FETCH_LOGINED_USER,
  LOGIN,
  SEND_EMAIL_TOKEN,
} from "./join.queries";
import {
  IMutation,
  IMutationCheckEmailDuplicateArgs,
  IMutationCheckEmailTokenArgs,
  IMutationCreateUserArgs,
  IMutationLoginArgs,
} from "../../../../commons/types/generated/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IJoinProps } from "./join.types";
import { message, Modal } from "antd";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useRecoilState } from "recoil";
import useCleanUp from "../../../commons/hooks/useCleanUp";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식을 확인해주세요")
    .required("이메일을 입력해주세요"),
  password: yup.string().required("비밀번호를 입력해주세요."),
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

const defaultTime = { min: "3", sec: "00" };
const defaultTermsStatus = [false, false];
export default function Join(props: IJoinProps) {
  const [startDate, setStartDate] = useState(new Date());
  const [joinStep, setJoinStep] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [time, setTime] = useState(defaultTime);
  const [userInfo, setUserInfo] = useState(userInfoState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isEmailDuplicated, setIsEmailDuplicated] = useState(null);
  const [isTermsChecked, setIsTermsChecked] = useState(defaultTermsStatus);
  const [serverEmailErrorMessage, setServerEmailErrorMessage] = useState("");
  const [serverTokenErrorMessage, setServerTokenErrorMessage] = useState("");
  const [checkEmailDuplicate] = useMutation<
    Pick<IMutation, "checkEmailDuplicate">,
    IMutationCheckEmailDuplicateArgs
  >(CHECK_EMAIL_DUPLICATE);
  const [sendEmailToken] = useMutation(SEND_EMAIL_TOKEN);
  const [checkEmailToken] = useMutation<
    Pick<IMutation, "checkEmailToken">,
    IMutationCheckEmailTokenArgs
  >(CHECK_EMAIL_TOKEN);
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  useCleanUp();

  const router = useRouter();
  const client = useApolloClient();
  const { register, handleSubmit, watch, setValue, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [login] = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(
    LOGIN
  );

  const email = watch("email");
  const token = watch("token");
  const password = watch("password");
  const password2 = watch("password2");

  useEffect(() => {
    if (email === "") {
      setServerEmailErrorMessage("");
      return;
    }
  }, [email]);

  useEffect(() => {
    if (token === "" || token?.length < 6) {
      setServerTokenErrorMessage("");
    }
  }, [token]);

  // 이메일인증 버튼 클릭시
  const onClickSendEmailToken = async () => {
    if (joinStep === 0) {
      // 이메일 중복 확인
      try {
        const result = await checkEmailDuplicate({
          variables: { email },
        });
        setJoinStep(1);
      } catch (error) {
        if (error instanceof Error) {
          setServerEmailErrorMessage(error.message);
          return;
        }
      }
    }

    try {
      // 가입용 이메일 토큰 전송
      await sendEmailToken({
        variables: { email },
      });

      if (isStarted === false) {
        setIsStarted(true);

        let time = 180;
        let timer: any = null;

        timer = setInterval(function () {
          if (time > 0) {
            time = time - 1;
            let updatedMin = String(Math.floor(time / 60));
            let updatedSec = String(time % 60).padStart(2, "0");
            setTime({ min: updatedMin, sec: updatedSec });
          } else {
            setIsStarted(false); // 타이머 비활성화
            clearInterval(timer); // 타이머 초기화
            setTime(defaultTime); // 시간 초기화
            setValue("token", ""); // input 비우기
          }
        }, 1000);
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("이메일")) {
          setServerEmailErrorMessage(error.message);
        } else if (error.message.includes("인증")) {
          setServerTokenErrorMessage(error.message);
        }
      }
    }
  };

  const onClickCheckToken = async () => {
    try {
      await checkEmailToken({
        variables: {
          email,
          emailToken: token,
        },
      });
      Modal.success({ content: "인증 성공" });
      setJoinStep(2);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("인증")) {
          setServerTokenErrorMessage(error.message);
        }
      }
    }
  };

  const onClickTerm = (target: number) => () => {
    const newTermsStatus = [...isTermsChecked];
    newTermsStatus[target] = !newTermsStatus[target];

    setIsTermsChecked(newTermsStatus);
  };

  const onClickJoin = async (data: any) => {
    const { password2, token, ...createUserInput } = data;
    if (!isTermsChecked.every((el) => el)) {
      message.warning("약관에 전부 동의해주세요.");
      return;
    }
    try {
      await createUser({
        variables: {
          createUserInput,
        },
      });

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
      setJoinStep(3);
    } catch (error) {
      if (error instanceof Error) {
        // Modal.error({ content: error.message });
        console.log(error.message);
      }
    }
  };
  return (
    <JoinUI
      time={time}
      email={email}
      token={token}
      password={password}
      password2={password2}
      joinStep={joinStep}
      isStarted={isStarted}
      isTermsChecked={isTermsChecked}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      isEmailDuplicated={isEmailDuplicated}
      onClickCheckToken={onClickCheckToken}
      onClickSendEmailToken={onClickSendEmailToken}
      onClickJoin={onClickJoin}
      onClickClose={props.onClickClose}
      onClickTerm={onClickTerm}
      serverEmailErrorMessage={serverEmailErrorMessage}
      serverTokenErrorMessage={serverTokenErrorMessage}
    />
  );
}
