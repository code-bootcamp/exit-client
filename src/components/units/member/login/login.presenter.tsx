import { ILoginUIProps } from "./login.types";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      아이디: <input type="text" {...props.register("email")} />
      비밀번호: <input type="password" {...props.register("password")} />
      <button>로그인</button>
    </form>
  );
}
