import { useRecoilState } from "recoil";
import Login from "../../../units/member/login/login.container";
import { userInfoState } from "../../store";
import * as S from "./topMenu.styles";
import { ITopMenuUIProps } from "./topMenu.types";

export default function TopMenuUI(props: ITopMenuUIProps) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  return (
    <>
      <S.IconWrapper>
        <S.TopMenuButton src="/icons/icon_search.png" />
        {/* {userInfo.nickname}님 */}
        {/* <S.TopMenuButton src="/icons/face-icon.png" /> */}
        {/* {userInfo.nickname && (
        <button
          onClick={props.onClickLogout}
          style={{ border: "1px solid black" }}
        >
          로그아웃
        </button>
      )} */}

        <button onClick={props.onClickLogin}>로그인</button>
        {props.isModalVisible && (
          <Login setIsModalVisible={props.setIsModalVisible} />
        )}

        {/* <S.UserImageWrapper>
        <img src="/user_image.png" />
      </S.UserImageWrapper> */}
      </S.IconWrapper>
    </>
  );
}
