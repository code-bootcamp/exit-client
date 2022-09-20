import { v4 as uuidv4 } from "uuid";
import { Fragment, LegacyRef } from "react";
import * as S from "./chat.styles";
import { IQuery } from "../../../../commons/types/generated/types";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormValueChat {
  contents?: string;
}

interface IPropsLiveChatUI {
  msgData: string[];
  userId?: string;
  register: UseFormRegister<{ contents: string }>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  data: Pick<IQuery, "fetchLogs">;
  onClickSubmit: (data: IFormValueChat) => void;
  onKeyDown?: any;
  messagesEndRef?: LegacyRef<HTMLDivElement>;
}
export default function ChatFormUI(props: IPropsLiveChatUI) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.Container>
        <S.Header>
          <S.ProjectName>취준생을 위한 exit 프로젝트</S.ProjectName>
        </S.Header>
        <S.Main>
          {props.data?.fetchLogs.map((el: any) => (
            <S.Key key={uuidv4()}>
              <S.Receive>
                <S.ReceiveText ref={props.messagesEndRef}>
                  {el.message}
                </S.ReceiveText>
              </S.Receive>
              <S.Send></S.Send>
            </S.Key>
          ))}
          {props.msgData?.map((el: any) => (
            <S.Key key={uuidv4()}>
              <S.Receive>
                <S.ReceiveText ref={props.messagesEndRef}></S.ReceiveText>
              </S.Receive>
              <S.Send>
                <S.SendText>{el}</S.SendText>
              </S.Send>
            </S.Key>
          ))}
        </S.Main>
        <S.InputContainner>
          <S.Input
            placeholder="궁금한 점을 물어보세요! 실시간으로 답변해드립니다!"
            onKeyDown={props.onKeyDown}
            type="text"
            {...props.register("contents", { required: true })}
          />
          <S.Button>전송</S.Button>
        </S.InputContainner>
      </S.Container>
    </S.Wrapper>
  );
}
