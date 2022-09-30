import * as S from "./join.styles";
import Button01 from "../../../commons/buttons/01";
import Input01 from "../../../commons/inputs/01";
import Modal02 from "../../../commons/modal/02";
import { IJoinUIProps } from "./join.types";

import Text01 from "../../../commons/texts/01";
import SetInterest from "../setInterest/setInterest.container";

export default function JoinUI(props: IJoinUIProps) {
  return (
    <>
      {props.joinStep < 3 && (
        <form onSubmit={props.handleSubmit(props.onClickJoin)}>
          {props.joinStep < 2 && (
            <Modal02 modalTitle="회원가입" eventHandler={props.onClickClose}>
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
              {props.joinStep === 1 && (
                <S.TokenInputWrapper>
                  <Input01
                    maxLength={6}
                    type="text"
                    placeholder="발급 받은 인증번호를 입력해주세요"
                    register={props.register("token")}
                    readOnly={!props.isStarted}
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
                  eventHandler={
                    props.isStarted
                      ? props.onClickCheckToken
                      : props.onClickSendEmailToken
                  }
                  disabled={props.isStarted && props?.token.length !== 6}
                  isValid={
                    props.isStarted
                      ? /^[a-z0-9+-.]+@[a-z0-9-]+\.[a-z0-9-.]+$/.test(
                          props.email
                        ) && props.token?.length === 6
                      : true
                  }
                />
              )}
            </Modal02>
          )}
          {props.joinStep === 2 && (
            <Modal02 eventHandler={props.onClickClose}>
              <S.NicknameWrapper>
                <Text01 contents="닉네임" />
                <Input01
                  placeholder="닉네임을 지어주세요."
                  register={props.register("nickname")}
                  errorMessage={props.formState?.errors?.nickname?.message}
                  maxLength={10}
                />
              </S.NicknameWrapper>
              <S.PasswordWrapper>
                <Text01 contents="비밀번호 설정" />
                <Input01
                  type="password"
                  maxLength={15}
                  placeholder="비밀번호 입력"
                  register={props.register("password")}
                  errorMessage={
                    props.password !== "" &&
                    props.formState?.errors?.password?.message
                  }
                />
                <Input01
                  type="password"
                  maxLength={15}
                  placeholder="비밀번호 확인"
                  register={props.register("password2")}
                  errorMessage={
                    props.password2 !== "" &&
                    props.formState.errors?.checkedPassword?.message
                  }
                />
              </S.PasswordWrapper>
              <S.TermsWrapper>
                <S.TermWraper>
                  <S.TermChecked
                    onClick={props.onClickTerm(0)}
                    isChecked={props.isTermsChecked[0]}
                  />
                  <S.Term>
                    <span>약관동의</span>
                  </S.Term>
                </S.TermWraper>
                <S.TermWraper>
                  <S.TermChecked
                    onClick={props.onClickTerm(1)}
                    isChecked={props.isTermsChecked[1]}
                  />
                  <S.Term>
                    <span>만 14세 이상입니까?</span>
                  </S.Term>
                </S.TermWraper>
              </S.TermsWrapper>
              <Button01
                text="관심분야 선택하기"
                type="submit"
                isValid={props.formState.isValid}
              />
            </Modal02>
          )}
        </form>
      )}
      {props.joinStep === 3 && (
        <SetInterest onClickClose={props.onClickClose} />
      )}
    </>
  );
}
