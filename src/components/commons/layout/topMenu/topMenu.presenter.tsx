import { useRecoilState } from "recoil";
import Login from "../../../units/member/login/login.container";
import { isModalVisibleState } from "../../store";
import * as S from "./topMenu.styles";
import { ITopMenuUIProps } from "./topMenu.types";

export default function TopMenuUI(props: ITopMenuUIProps) {
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(isModalVisibleState);

  console.log(props.data?.fetchUserWithUserId);
  return (
    <S.IconWrapper>
      {isModalVisible && <Login />}
      {!props.userInfo?.id && (
        <S.LoginButton onClick={props.onClickLogin}>로그인</S.LoginButton>
      )}
      <S.UserImageWrapper>
        {props.userInfo?.id &&
          (props.data?.fetchUserWithUserId.userImage.url !== "null" ? (
            <S.UserImage src={props.data?.fetchUserWithUserId.userImage.url} />
          ) : (
            <S.UserImage src="/profile_img.png" />
          ))}
      </S.UserImageWrapper>
    </S.IconWrapper>
  );
}
