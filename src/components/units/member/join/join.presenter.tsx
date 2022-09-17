import * as S from "./Join.styles";
import Button01 from "../../../commons/buttons/01";
import Input01 from "../../../commons/inputs/01";
import Modal02 from "../../../commons/modal/02";
import { IJoinUIProps } from "./Join.types";
import JoinUIItem from "./Join.presenterUserInfoItem";
import JoinUIUserInfoItem from "./Join.presenterUserInfoItem";

const BUTTON_TEXT = [
  "인증번호 전송",
  "인증번호 다시 전송",
  "이메일 인증",
  "관심분야 선택하기",
  "나의 기술 스택 선택하기",
];

export default function JoinUI(props: IJoinUIProps) {
  return (
    <>
      {props.joinStep < 2 && (
        <Modal02 modalTitle="회원가입" eventHandler={props.onClickClose}>
          <form onSubmit={props.handleSubmit(props.onClickJoin)}>
            <Input01
              type="text"
              placeholder="이메일을 입력해주세요."
              register={props.register("email")}
              readOnly={props.joinStep > 0}
              errorMessage={
                props.email !== "" &&
                (props.formState?.errors.email?.message ||
                  props.serverEmailErrorMessage)
              }
            />
            {props.joinStep > 0 && (
              <S.TokenInputWrapper>
                <Input01
                  maxLength={6}
                  type="text"
                  placeholder="발급 받은 인증번호를 입력해주세요"
                  register={props.register("token")}
                  errorMessage={
                    props.token !== "" &&
                    (props.formState?.errors.token?.message ||
                      props.serverTokenErrorMessage)
                  }
                />
                <S.Timer>
                  <S.Minute>{props.time.min} </S.Minute>:
                  <S.Second>{props.time.sec}</S.Second>
                </S.Timer>
                {props.token?.length === 0 && (
                  <S.TokenDefaultMessage>
                    ※ 시간안에 인증번호를 정확히 입력해주세요.
                  </S.TokenDefaultMessage>
                )}
              </S.TokenInputWrapper>
            )}
            {/* 이메일: <input type="text" onChange={props.onChangeEmail} />
        <button type="button" onClick={props.onClickSendEmailToken}>
          인증번호 전송
        </button>
        인증번호:
        <input type="text" {...props.register("emailToken")} maxLength={6} />
        <br />
        비밀번호:
        <input
          type="password"
          {...props.register("password")}
          minLength={2}
          maxLength={15}
        />
        <br />
        비밀번호 확인:
        <input
          type="password"
          {...props.register("password2")}
          minLength={2}
          maxLength={15}
        />
        <br />
        닉네임:
        <input
          type="text"
          {...props.register("nickname")}
          minLength={2}
          maxLength={10}
        />
 */}

            {props.joinStep === 0 && (
              <Button01
                type="button"
                eventHandler={props.onClickSendEmailToken}
                text="이메일 인증"
                isValid={/^[a-z0-9+-.]+@[a-z0-9-]+\.[a-z0-9-.]+$/.test(
                  props.email
                )}
              />
            )}
            {props.joinStep === 1 && (
              <Button01
                type="button"
                text={props.isStarted ? "이메일 인증" : "인증번호 다시 전송"}
                // disabled={
                //   props.isStarted
                //     ? !/^[a-z0-9+-.]+@[a-z0-9-]+\.[a-z0-9-.]+$/.test(
                //         props.email
                //       ) && props.token?.length < 6
                //     : true
                // }
                eventHandler={
                  // props.isStarted
                  //   ? props.onClickSendEmailToken
                  //   : props.onClickTest
                  props.isStarted
                    ? props.onClickSendEmailToken
                    : props.onClickCheckToken
                }
                isValid={
                  props.isStarted
                    ? /^[a-z0-9+-.]+@[a-z0-9-]+\.[a-z0-9-.]+$/.test(
                        props.email
                      ) && props.token?.length > 5
                    : true
                }
              />
            )}
          </form>
        </Modal02>
      )}
      {props.joinStep === 2 && (
        <JoinUIUserInfoItem
          handleSubmit={props.handleSubmit}
          register={props.register}
          onClickClose={props.onClickClose}
          onClickJoin={props.onClickJoin}
        />
      )}
    </>
  );
}
