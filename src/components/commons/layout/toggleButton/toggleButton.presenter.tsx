import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import ChatContainer from "../../chat/01/chat.container";
import ChatContainerOne from "../../chat/02/chat02.container";

import { userInfoState } from "../../store";
import { CREATE_ROOM } from "./toggleButton.queries";

const ImgContainer = styled.div`
  position: fixed;
  bottom: 5rem;
  right: 10rem;
  z-index: 100;
`;
const WriteButton = styled.img`
  cursor: pointer;
  width: 8rem;
  margin-right: 1rem;
`;
const ChatButton = styled.img`
  width: 8rem;
  cursor: pointer;
`;

export default function ToggleButtonUI() {
  const router = useRouter();
  const [userInfo] = useRecoilState(userInfoState);
  const [chatView, setChatView] = useState(false);
  const [buttonView, setbuttonView] = useState(true);
  const [createRoom] = useMutation(CREATE_ROOM, {
    variables: { nickname: String(userInfo.nickname) },
  });

  const onClickMoveToWrite = () => {
    router.push(`/exiting/write`);
  };
  const onClickChatButton = () => {
    setChatView(true);
    //채팅방생성해야됨
  };

  return (
    <>
      {buttonView ? (
        <ImgContainer>
          <WriteButton
            onClick={onClickMoveToWrite}
            src={"/write_button.png"}
          ></WriteButton>
          {/* <ChatButton
            onClick={onClickChatButton}
            src={"/chat_button.png"}
          ></ChatButton> */}
        </ImgContainer>
      ) : (
        ""
      )}

      {chatView ? <ChatContainerOne /> : ""}
    </>
  );
}
