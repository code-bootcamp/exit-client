import Input01 from "../../../commons/inputs/01";
import Modal02 from "../../../commons/modal/02";
import { ILoginUIProps } from "./login.types";
import * as S from "./login.styles";
import Button01 from "../../../commons/buttons/01";
import { FindPassword } from "../findPassword/findPassword.container";
import Join from "../join/join.container";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <>
      {props.isClickedFindPassword && (
        <FindPassword onClickClose={props.onClickClose} />
      )}
      {props.isClickedJoin && <Join onClickClose={props.onClickClose} />}
      {!props.isClickedFindPassword &&
        !props.isClickedJoin &&
        !props.isEditingTags && (
          <Modal02
            modalFor="로그인"
            modalTitle="exit에 오신 것을 환영합니다."
            eventHandler={props.onClickClose}
          >
            <form onSubmit={props.handleSubmit(props.onClickLogin)}>
              <Input01
                type="text"
                placeholder="아이디를 입력해주세요."
                register={props.register("email")}
                maxLength={25}
                errorMessage={
                  props.password !== "" &&
                  (props.formState.errors.email?.message ||
                    props.serverEmailErrorMessage)
                }
              />
              <S.PasswordWrapper>
                <Input01
                  type="password"
                  placeholder="비밀번호를 입력 해주세요"
                  register={props.register("password")}
                  maxLength={15}
                  errorMessage={
                    props.password !== "" &&
                    (props.formState.errors.password?.message ||
                      props.serverPasswordErrorMessage)
                  }
                />
                <S.FindPasswordText onClick={props.onClickFindPassword}>
                  비밀번호 찾기
                </S.FindPasswordText>
                <Button01
                  text="로그인"
                  type="submit"
                  isValid={props.formState.isValid}
                />
              </S.PasswordWrapper>
            </form>
            <S.SocialLoginWrapper>
              <S.SocialLoginText>
                복잡한 절차 없이 간편하게 로그인 할 수 있어요.
              </S.SocialLoginText>
              <S.GoogleLoginLink href="https://teamserver05.shop/login/google">
                구글 로그인
                <S.SocialLoginIconWrapper>
                  <img
                    src="/icons/socialLogin/icon_google.png"
                    alt="구글 로그인"
                  />
                </S.SocialLoginIconWrapper>
              </S.GoogleLoginLink>
              <S.KakaoLoginLink href="https://teamserver05.shop/login/kakao">
                카카오 로그인
                <S.SocialLoginIconWrapper>
                  <img
                    src="/icons/socialLogin/icon_kakao.png"
                    alt="카카오 로그인"
                  />
                </S.SocialLoginIconWrapper>
              </S.KakaoLoginLink>
              <S.NaverLoginLink href="https://teamserver05.shop/login/naver">
                네이버 로그인
                <S.SocialLoginIconWrapper>
                  <img
                    src="/icons/socialLogin/icon_naver.png"
                    alt="네이버 로그인"
                  />
                </S.SocialLoginIconWrapper>
              </S.NaverLoginLink>
            </S.SocialLoginWrapper>
            <S.JoinWrapper>
              <S.JoinInfoText>회원이 아니십니까?</S.JoinInfoText>
              <S.JoinButton type="button" onClick={props.onClickJoin}>
                가입하기
              </S.JoinButton>
            </S.JoinWrapper>
          </Modal02>
        )}
    </>
  );
}
