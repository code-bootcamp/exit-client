import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FindPasswordUI } from "./findPassword.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import { IFindPasswordProps } from "./findPassword.types";
import { useMutation } from "@apollo/client";
import {
  CHECK_EMAIL_DUPLICATE,
  CHECK_EMAIL_TOKEN,
  SEND_EMAIL_TOKEN,
  SEND_NEW_PASSWORD,
} from "./findPassword.queries";
import {
  IMutation,
  IMutationCheckEmailDuplicateArgs,
  IMutationCheckEmailTokenArgs,
  IMutationSendEmailTokenArgs,
} from "../../../../commons/types/generated/types";
import { message, Modal } from "antd";

const schema = yup.object({
  email: yup.string().required().email("이메일 형식이 적합하지 않습니다."),
  emailToken: yup.string().required().max(6, "6자리 인증번호를 입력해주세요."),
});

const defaultTime = { min: "3", sec: "00" };
export const FindPassword = (props: IFindPasswordProps) => {
  const [findPasswordStep, setFindPasswordStep] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [time, setTime] = useState(defaultTime);
  const [serverEmailTokenErrorMessage, setServerEmailTokenErrorMessage] =
    useState("");

  const [checkEmailDuplicate] = useMutation<
    Pick<IMutation, "checkEmailDuplicate">,
    IMutationCheckEmailDuplicateArgs
  >(CHECK_EMAIL_DUPLICATE);
  const [sendEmailToken] = useMutation<
    Pick<IMutation, "sendEmailToken">,
    IMutationSendEmailTokenArgs
  >(SEND_EMAIL_TOKEN);
  const [checkEmailToken] = useMutation<
    Pick<IMutation, "checkEmailToken">,
    IMutationCheckEmailTokenArgs
  >(CHECK_EMAIL_TOKEN);
  const [sendNewPassword] = useMutation<
    Pick<IMutation, "sendNewPassword">,
    IMutationSendEmailTokenArgs
  >(SEND_NEW_PASSWORD);

  const { register, formState, watch, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const email = watch("email");
  const emailToken = watch("emailToken");

  useEffect(() => {
    if (emailToken?.length < 6) {
      setServerEmailTokenErrorMessage("");
    }
  }, [emailToken]);

  // 인증번호 받기
  const onClickSendNumber = async () => {
    try {
      await checkEmailDuplicate({
        variables: { email },
      });
      message.error("가입되지 않은 이메일 입니다.");
      return;
    } catch (error) {}
    await sendEmailToken({
      variables: { email },
    });
    // 로컬 타이머
    setFindPasswordStep(1);
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
          setTime(defaultTime); // 시간 초기화
          setIsStarted(false); // 타이머 비활성화
          clearInterval(timer); // 타이머 초기화
          setValue("emailToken", ""); // input 비우기
        }
      }, 1000);
    }
  };

  // 이메일 인증하기
  const onClickCheckEmailToken = async () => {
    try {
      // 인증번호 확인
      await checkEmailToken({
        variables: { email, emailToken },
      });
      // 비밀번호 재설정 하기
      await sendNewPassword({
        variables: { email },
      });
      Modal.success({
        content:
          "임시 비밀번호가 발급되었습니다. 새로운 이메일로 로그인해주세요.",
      });
      location.reload();
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("인증")) {
          setServerEmailTokenErrorMessage(error.message);
        }
      }
    }
  };

  return (
    <FindPasswordUI
      time={time}
      email={email}
      emailToken={emailToken}
      watch={watch}
      isStarted={isStarted}
      formState={formState}
      register={register}
      findPasswordStep={findPasswordStep}
      serverEmailTokenErrorMessage={serverEmailTokenErrorMessage}
      onClickSendNumber={onClickSendNumber}
      onClickClose={props.onClickClose}
      onClickCheckEmailToken={onClickCheckEmailToken}
    />
  );
};
