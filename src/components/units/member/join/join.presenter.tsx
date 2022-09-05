import * as S from "./join.styles";
import { IJoinUIProps } from "./join.types";

export default function JoinUI(props: IJoinUIProps) {
  return (
    <S.Wrapper>
      <S.Inner>
        <form onSubmit={props.handleSubmit(props.onClickJoin)}>
          이메일: <input type="text" onChange={props.onChangeEmail} />
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
          <button>가입하기 버튼</button>
        </form>
      </S.Inner>
    </S.Wrapper>
  );
}
