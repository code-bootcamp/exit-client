import * as S from "./resetPassword.styles";

import Button01 from "../../../commons/buttons/01";
import Input01 from "../../../commons/inputs/01";
import Modal02 from "../../../commons/modal/02";
import { IResetPasswordUIProps } from "./resetPassword.types";

export default function ResetPasswordUI(props: IResetPasswordUIProps) {
  // console.log(props.formState.errors?.password?.message);
  // console.log(props.password);
  return (
    <Modal02 modalFor="비밀번호 찾기" modalTitle="비밀번호 재설정">
      <form onSubmit={props.handleSubmit(props.onClickResetPassword)}>
        <Input01
          type="password"
          placeholder="비밀번호 입력"
          register={props.register("password")}
          errorMessage={
            props.password !== "" && props.formState.errors?.password?.message
          }
        />
        <Input01
          type="password"
          placeholder="비밀번호 확인"
          register={props.register("checkedPassword")}
          errorMessage={
            props?.checkedPassword !== "" &&
            props.formState.errors?.checkedPassword?.message
          }
        />
        <S.TokenInfoWrapper>
          {props.checkedPassword === "" && (
            <S.TokenDefaultMessage>
              ※ 8~16자 영문 소문자, 숫자, 특수문자를 사용하세요.
            </S.TokenDefaultMessage>
          )}
        </S.TokenInfoWrapper>
        <Button01
          type="button"
          text="비밀번호 재설정"
          isValid={props.formState.isValid}
        />
      </form>
    </Modal02>
  );
}
