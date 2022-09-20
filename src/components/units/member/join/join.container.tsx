import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import JoinUI from "./join.presenter";
import _ from "lodash";
import { useMutation } from "@apollo/client";
import {
  CHECK_EMAIL_DUPLICATE,
  CHECK_EMAIL_TOKEN,
  CREATE_USER,
  SEND_SIGNUP_EMAIL_TOKEN,
} from "./join.queries";
import {
  IMutation,
  IMutationCheckEmailDuplicateArgs,
  IMutationCheckEmailTokenArgs,
  IMutationCreateUserArgs,
  IMutationSendSignupEmailTokenArgs,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IJoinProps } from "./join.types";
import { Modal } from "antd";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식을 확인해주세요")
    .required("이메일을 입력해주세요"),
  token: yup.string().required("이메일 인증번호를 입력해주세요"),
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

const defaultTime = { min: "3", sec: "00" };
export default function Join(props: IJoinProps) {
  const [joinStep, setJoinStep] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [time, setTime] = useState(defaultTime);
  const [serverEmailErrorMessage, setServerEmailErrorMessage] = useState("");
  const [serverTokenErrorMessage, setServerTokenErrorMessage] = useState("");
  const [checkEmailDuplicate] = useMutation<
    Pick<IMutation, "checkEmailDuplicate">,
    IMutationCheckEmailDuplicateArgs
  >(CHECK_EMAIL_DUPLICATE);
  const [sendSignupEmailToken] = useMutation<
    Pick<IMutation, "sendSignupEmailToken">,
    IMutationSendSignupEmailTokenArgs
  >(SEND_SIGNUP_EMAIL_TOKEN);
  const [checkEmailToken] = useMutation<
    Pick<IMutation, "checkEmailToken">,
    IMutationCheckEmailTokenArgs
  >(CHECK_EMAIL_TOKEN);
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const router = useRouter();
  const { register, handleSubmit, watch, setValue, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const email = watch("email");
  const token = watch("token");

  const getDebounce = _.debounce(async (emailToken: string) => {
    console.log("디바운싱 확인");
    // mutation 실행(토큰 검증)
    try {
      await checkEmailToken({
        variables: {
          email,
          emailToken,
        },
      });
      Modal.success({ content: "인증 성공" });
      setJoinStep(2);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("인증번호")) {
          setServerTokenErrorMessage(error.message);
        }
      }
    }
  }, 1000);

  useEffect(() => {
    if (email === "") {
      setServerEmailErrorMessage("");
    }
  }, [email]);

  useEffect(() => {
    if (token === "") {
      setServerTokenErrorMessage("");
    }

    if (token !== undefined && token.length === 6) {
      getDebounce(token);
    }
  }, [token]);

  const onClickSendEmailToken = async () => {
    // if (formState.errors.email) return;
    try {
      if (joinStep === 0) {
        // 이메일 중복 확인
        await checkEmailDuplicate({
          variables: { email },
        });
      }

      setJoinStep(1);
      // 가입용 이메일 토큰 전송
      await sendSignupEmailToken({
        variables: {
          email,
        },
      });

      if (isStarted === false) {
        console.log("start");
        setIsStarted(true);

        let time = 30;
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
        } else if (error.message.includes("인증번호")) {
          // 확인 필요
          setServerTokenErrorMessage(error.message);
        }
      }
    }
  };

  const onClickCheckToken = async () => {
    console.log("test");
    await checkEmailToken({
      variables: {
        email,
        emailToken: token,
      },
    });
    Modal.success({ content: "인증 성공" });
    setJoinStep(2);
  };

  const onClickJoin = async (data: any) => {
    const { emailToken, password2, ...createUserInput } = data;
    console.log(data);
    // try {
    //   await createUser({
    //     variables: {
    //       createUserInput,
    //       emailToken,
    //     },
    //   });
    //   alert("가입이 완료되었습니다");
    //   router.push("/");
    // } catch (error) {
    //   if (error instanceof Error) {
    //   }
    // }
  };
  return (
    <JoinUI
      time={time}
      email={email}
      token={token}
      joinStep={joinStep}
      isStarted={isStarted}
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      onClickCheckToken={onClickCheckToken}
      onClickSendEmailToken={onClickSendEmailToken}
      onClickJoin={onClickJoin}
      onClickClose={props.onClickClose}
      serverEmailErrorMessage={serverEmailErrorMessage}
      serverTokenErrorMessage={serverTokenErrorMessage}
    />
  );
}
