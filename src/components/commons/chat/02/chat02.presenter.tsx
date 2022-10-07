import { v4 as uuidv4 } from "uuid";
import { Fragment, LegacyRef } from "react";
import * as S from "./chat02.styles";
import { IQuery } from "../../../../commons/types/generated/types";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../store";

export interface IFormValueChat {
  contents?: string;
}

interface IPropsLiveChatUI {
  msgData: string[];
  userId?: string;
  onClickClose: any;
  register: UseFormRegister<{ contents: string }>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  data: Pick<IQuery, "fetchLogs">;
  onClickSubmit: (data: IFormValueChat) => void;
  onKeyDown?: any;
  messagesEndRef?: LegacyRef<HTMLDivElement>;
}
export default function ChatOneFormUI(props: IPropsLiveChatUI) {
  const [userInfo] = useRecoilState(userInfoState);
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.Container>
        <S.Header>
          <S.ProjectName>환영합니다 exit 채팅입니다</S.ProjectName>
          <S.Icon
            src={"/icons/icon_close.png"}
            onClick={props.onClickClose}
          ></S.Icon>
        </S.Header>
        <S.Main>
          {props.data?.fetchLogs.map((el: any) => (
            <S.Key key={uuidv4()}>
              {el.user.id !== userInfo.id ? (
                <S.Receive>
                  <S.Receiver>{el.user.nickname}</S.Receiver>
                  <S.ReceiveText ref={props.messagesEndRef}>
                    {el.message}
                  </S.ReceiveText>
                </S.Receive>
              ) : (
                <S.Send>
                  <S.SendText>{`${el.message}`}</S.SendText>
                </S.Send>
              )}
            </S.Key>
          ))}
          {props.msgData?.map((el: any) => (
            <S.Key key={uuidv4()}>
              {el[0] === userInfo.nickname ? (
                <S.Send>
                  <S.SendText>{el[1]}</S.SendText>
                </S.Send>
              ) : (
                <S.Receive>
                  <S.Receiver>{el[0]}</S.Receiver>
                  <S.ReceiveText ref={props.messagesEndRef}>
                    {el[1]}
                  </S.ReceiveText>
                </S.Receive>
              )}
            </S.Key>
          ))}
          <S.InputContainner>
            <S.Input
              placeholder="메세지를 입력해주세요."
              onKeyDown={props.onKeyDown}
              type="text"
              {...props.register("contents", { required: true })}
            />
            <S.Button>전송</S.Button>
          </S.InputContainner>
        </S.Main>
      </S.Container>
    </S.Wrapper>
  );
}
