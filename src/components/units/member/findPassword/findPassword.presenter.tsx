import { tokenToString } from "typescript";
import Button01 from "../../../commons/buttons/01";
import Input01 from "../../../commons/inputs/01";
import Modal02 from "../../../commons/modal/02";
import * as S from "./findPassword.styles";

const BUTTON_TEXT = ["인증번호 전송", "인증번호 다시 전송", "이메일 인증"];

export const FindPasswordUI = (props: any) => {
  return (
    <Modal02
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
                  register={props.register("token")}
                  placeholder="발급 받은 인증번호를 입력해주세요."
                  errorMessage={
                    props.token?.length > 0 &&
                    props.formState.errors?.token?.message
                  }
                  maxLength={6}
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
            </>
          )}
        </div>
        <Button01
          text={BUTTON_TEXT[props.findPasswordStep]}
          type="button"
          isValid={/^[a-z0-9+-.]+@[a-z0-9-]+\.[a-z0-9-.]+$/.test(
            props.watch("email")
          )}
          isAgain={props.findPasswordStep === 1}
          eventHandler={props.onClickSendNumber}
        />
      </S.Form>

      {/* <S.EmailAuthWrapper>
        이메일 입력 <S.EmailInput type="text" {...props.register("email")} />
        <S.Button
          type="button"
          onClick={props.onClickSendNumber}
          disabled={
            !/^[a-z0-9+-.]+@[a-z0-9-]+\.[a-z0-9-.]+$/.test(props.watch("email"))
          }
        >
          {props.isStarted ? "재전송" : "인증번호 전송"}
        </S.Button>
      </S.EmailAuthWrapper>
      <div>
        인증번호
        <input
          type="text"
          {...props.register("token")}
          maxLength={6}
          disabled={/^\d{6}$/.test(props.watch("token"))}
        />
        <span>{props.time}</span>
        <S.Button disabled={false}>확인</S.Button>
      </div>
      <div>
        새로운 비밀번호 <input type="text" minLength={8} maxLength={16} />
      </div>
      <div>
        비밀번호 확인 <input type="text" minLength={8} maxLength={16} />
      </div> */}
    </Modal02>
  );
};
