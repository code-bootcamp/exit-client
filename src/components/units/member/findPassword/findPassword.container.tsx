import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FindPasswordUI } from "./findPassword.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import { IFindPasswordProps } from "./findPassword.types";

const schema = yup.object({
  email: yup.string().required().email("이메일 형식이 적합하지 않습니다."),
  token: yup
    .string()
    .required()
    .matches(/^\d{6}$/, "발급받은 인증번호(숫자 6자리)를 입력해주세요."),
  // password: yup
  //   .string()
  //   .required()
  //   .min(8, "비밀번호는 최소 8자리 이상 입력해주세요.")
  //   .max(16, "비밀번호는 최대 16자리로 입력해주세요."),
  // // .matches(
  // //   /^[a-zA-Z0-9]{8,16}$/,
  // //   "8~16자 영문 소문자, 숫자, 특수문자를 사용해주세요."
  // // )
  // passwordCheck: yup
  //   .string()
  //   .required()
  //   .min(8, "비밀번호는 최소 8자리 이상 입력해주세요.")
  //   .max(16, "비밀번호는 최대 16자리로  입력해주세요.")
  //   .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
});

const defaultTime = { min: "3", sec: "00" };
export const FindPassword = (props: IFindPasswordProps) => {
  const [findPasswordStep, setFindPasswordStep] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [time, setTime] = useState(defaultTime);
  const [serverTokenErrorMessage, setServerTokenErrorMessage] = useState("");

  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const email = watch("email");
  const token = watch("token");

  const getDebounce = _.debounce((value) => {
    console.log("디바운싱 확인");
    // mutation 실행(검증: check)
  }, 1000);

  useEffect(() => {
    if (token !== undefined && token.length === 6) {
      getDebounce(token);
    }
  }, [token]);

  const onClickSendNumber = () => {
    setFindPasswordStep(1);

    // mutation 실행(인증번호 받기)

    if (isStarted === false) {
      console.log("start");
      setIsStarted(true);

      let time = 10;
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
        }
      }, 1000);
    }
  };

  return (
    <FindPasswordUI
      time={time}
      email={email}
      token={token}
      watch={watch}
      isStarted={isStarted}
      formState={formState}
      register={register}
      findPasswordStep={findPasswordStep}
      onClickSendNumber={onClickSendNumber}
      onClickClose={props.onClickClose}
    />
  );
};
