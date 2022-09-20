import * as yup from "yup";
import * as S from "./join.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Input01 from "../../../commons/inputs/01";
import Modal02 from "../../../commons/modal/02";
import Text01 from "../../../commons/texts/01";
import { IJoinUIUserInfoItemProps } from "./join.types";
import Button01 from "../../../commons/buttons/01";

const schema = yup.object({
  // nickname: yup
  //   .string()
  //   .min(2, "닉네임은 최소 2글자 이상으로 입력해주세요")
  //   .max(10, "닉네임은 최대 10글자로 입력해주세요"),
  // password: yup.string().required("비밀번호를 입력해주세요. (+ 추가설명)"),
  // // .matches(
  // //   /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,8}$/,
  // //   "비밀번호 형식에 맞지 않습니다."
  // // ),
  // checkedPassword: yup
  //   .string()
  //   .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  // term1: yup.boolean().oneOf([yup.ref("term1"), null], "약관에 동의해주세요."),
  // term2: yup.boolean().oneOf([yup.ref("term2"), null], "약관에 동의해주세요."),
});

export default function JoinUIUserInfoItem(props: IJoinUIUserInfoItemProps) {
  // const { register, handleSubmit, watch, setValue, formState } = useForm({
  //   resolver: yupResolver(schema),
  //   mode: "onChange",
  // });

  // const nickname = watch("nickname");

  return (
    <Modal02>
      <form onSubmit={props.handleSubmit(props.onClickJoin)}>
        <S.NicknameWrapper>
          <Text01 contents="닉네임" />
          <Input01
            placeholder="닉네임을 지어주세요."
            {...register("nickname")}
          />
        </S.NicknameWrapper>
        <S.PasswordWrapper>
          <Text01 contents="비밀번호 설정" />
          <Input01
            // type="password"
            maxLength={15}
            placeholder="비밀번호 입력"
            {...register("password")}
            errorMessage={formState.errors?.password?.message}
          />
          <Input01
            // type="password"
            maxLength={15}
            placeholder="비밀번호 확인"
            {...register("password2")}
            errorMessage={formState.errors?.checkedPassword?.message}
          />
        </S.PasswordWrapper>
        <S.TermsWrapper>
          <S.TermWraper>
            {/* <S.Radio type="checkbox" id="term1" register={register("term1")} /> */}
            <S.Term htmlFor="term1">
              <span>약관동의</span>
            </S.Term>
          </S.TermWraper>
          <S.TermWraper>
            {/* <S.Radio type="checkbox" id="term2" register={register("term2")} /> */}
            <S.Term htmlFor="term2">
              <span>만 14세 이상입니까?</span>
            </S.Term>
          </S.TermWraper>
        </S.TermsWrapper>
        {/* <Button01 type="button" text="관심분야 선택하기" /> */}
        <Button01 text="관심분야 선택하기" />
      </form>
    </Modal02>
    // <Modal02>
    //
    //
    //

    // </Modal02>
  );
}
