import Button01 from "../../../commons/buttons/01";
import Input01 from "../../../commons/inputs/01";
import Modal01 from "../../../commons/modal/01";
import Login from "../login/login.container";
import ResetPassword from "../changePassword/changePassword.container";
import * as S from "./findPassword.styles";
import { IFindPasswordUIProps } from "./findPassword.types";

export const FindPasswordUI = (props: IFindPasswordUIProps) => {
  return (
    <>
      <Modal01
        modalFor={
          props.findPasswordStep < 2 ? "비밀번호 찾기" : "비밀번호 재설정"
        }
        modalTitle="비밀번호 찾기"
        eventHandler={props.onClickClose}
      >
        <S.Form>
          <div>
            <Input01
              type="text"
              placeholder="등록된 이메일을 입력해주세요"
              register={props.register("email")}
              readOnly={props.findPasswordStep > 0}
            />
            {props.findPasswordStep === 1 && (
              <>
                <S.TokenInputWrapper>
                  <Input01
                    type="text"
                    register={props.register("emailToken")}
                    placeholder="발급 받은 인증번호를 입력해주세요."
                    readOnly={!props.isStarted}
                    errorMessage={
                      props.emailToken !== "" &&
                      (props.formState?.errors.token?.message ||
                        props.serverEmailTokenErrorMessage)
                    }
                    maxLength={6}
                  />
                  <S.Timer>
                    <S.Minute>{props.time.min} </S.Minute>:
                    <S.Second>{props.time.sec}</S.Second>
                  </S.Timer>
                  {props.emailToken?.length === 0 && (
                    <S.TokenDefaultMessage>
                      ※ 시간 안에 인증번호를 정확히 입력해주세요.
                    </S.TokenDefaultMessage>
                  )}
                </S.TokenInputWrapper>
              </>
            )}
          </div>
          {props.findPasswordStep === 0 && (
            <Button01
              type="button"
              text="인증번호 전송"
              eventHandler={props.onClickSendNumber}
              disabled={
                !/^[a-z0-9+-.]+@[a-z0-9-]+\.[a-z0-9-.]+$/.test(
                  props.watch("email")
                )
              }
              isValid={/^[a-z0-9+-.]+@[a-z0-9-]+\.[a-z0-9-.]+$/.test(
                props.watch("email")
              )}
            />
          )}
          {props.findPasswordStep === 1 && (
            <Button01
              type="button"
              text={props.isStarted ? "이메일 인증" : "인증번호 다시 전송"}
              eventHandler={
                props.isStarted
                  ? props.onClickCheckEmailToken
                  : props.onClickSendNumber
              }
              disabled={props.isStarted && props?.emailToken.length !== 6}
              isValid={props.isStarted ? props.emailToken?.length === 6 : true}
            />
          )}
        </S.Form>
      </Modal01>
    </>
  );
};
