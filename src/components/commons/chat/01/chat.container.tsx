import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { io, Socket } from "socket.io-client";
import { userInfoState } from "../../store";
import ChatFormUI from "./chat.presenter";
import { FETCH_LOGS } from "./chat.queries";

const url = "https://teamserver05.shop/chat";

export default function ChatContainer(props: any) {
  const socket: Socket = io(url, { transports: ["websocket"] });
  const [userInfo] = useRecoilState(userInfoState);

  const router = useRouter();
  const [room, setRoom] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [msgData, setMsgData] = useState<string[]>([]);
  const { data, refetch } = useQuery(FETCH_LOGS, { variables: { room } });
  // const { data: connectionRoom } = useQuery(CONNECTION_ROOM, {
  //   variables: { hostNickname: nickname },
  // });
  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const { register, handleSubmit, resetField } = useForm({
    mode: "onChange",
    defaultValues: {
      contents: "",
    },
  });

  useEffect(() => {
    socket.on(room, (data) => {
      setMsgData((prev: string[]) => [...prev, data]);
    });
  }, [room]);

  useEffect(() => {
    setRoom(props.roomCode);
    return messagesEndRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [props.data]);

  const onClickSubmit = async (data: any) => {
    const message = await data.contents;
    socket.emit("send", room, userInfo.nickname, message);
    resetField("contents");
    // refetch();
    await delay(100);
    return messagesEndRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  // enter press
  const onKeyDown = (event: KeyboardEvent) => (data: any) => {
    if (event.key === "Enter") {
      onClickSubmit(data);
    }
  };

  return (
    <ChatFormUI
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onKeyDown={onKeyDown}
      register={register}
      msgData={msgData}
      data={data}
      messagesEndRef={messagesEndRef}
    />
  );
}
