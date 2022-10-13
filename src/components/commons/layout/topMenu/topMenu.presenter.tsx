import * as S from "./topMenu.styles";
import Link from "next/link";
import Login from "../../../units/member/login/login.container";
import MiniMypageContainer from "../../modal/miniMypageModal/miniMypage.container";
import { useRecoilState } from "recoil";
import { isModalVisibleState } from "../../store";
import { ITopMenuUIProps } from "./topMenu.types";

export default function TopMenuUI(props: ITopMenuUIProps) {
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(isModalVisibleState);
  return (
    <S.Wrapper>
      {isModalVisible && props.modal === "login" && <Login />}
      {props.isMiniModalVisible && (
        <S.MiniModalWrapper>
          <MiniMypageContainer />
        </S.MiniModalWrapper>
      )}
      <Link href="/search">
        <S.Search>
          <img src="/icons/icon_search.png" alt="검색" />
        </S.Search>
      </Link>
      {!props.userInfo?.id && (
        <S.LoginButton onClick={props.onClickLogin}>Log in</S.LoginButton>
      )}
      {props.userInfo?.id && (
        <S.UserImageWrapper onClick={props.onClickProfile}>
          {props.data?.fetchUserWithUserId.userImage.url.includes(
            "https://storage.googleapis.com/backend-server"
          ) ? (
            <S.UserImage src={props.data?.fetchUserWithUserId.userImage.url} />
          ) : (
            <S.UserImage src="/profile_img.png" />
          )}
        </S.UserImageWrapper>
      )}
    </S.Wrapper>
  );
}
