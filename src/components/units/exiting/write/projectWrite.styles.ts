import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  background-color: #d7d7d7;
  padding: 10.54%;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 14px;
  padding: 10.54%;
`;

export const WriteTitle = styled.h1`
  font-weight: 700;
  font-size: 2.98vw;
  margin-bottom: 4.2vw;
  text-align: left;
`;

export const ImageBox = styled.div`
  height: 24vw;
  margin-bottom: 2rem;
`;

export const ProjectInputContainer = styled.div`
  width: 100%;
`;

export const ProjectTitle = styled.input`
  margin-bottom: 1.6vw;
  width: 100%;
  height: 4.8vw;
  padding: 2rem;
  border: 1px #d7d7d7 solid;
  font-weight: 500;
  font-size: 1.52vw;
  border-radius: 14px;
`;

export const ProjectContents = styled.textarea`
  margin-bottom: 1.6vw;
  width: 100%;
  padding: 2rem;
  height: 28vw;
  border: 1px #d7d7d7 solid;
  border-radius: 14px;
  font-weight: 500;
  font-size: 1.52vw;
`;

export const ProjectKeyword = styled.input`
  margin-bottom: 1.6vw;
  width: 100%;
  padding: 2rem;
  height: 4.8vw;
  border: 1px #d7d7d7 solid;
  border-radius: 14px;
  font-weight: 500;
  font-size: 1.52vw;
`;

export const ProjectSetting = styled.div``;
export const SettingTitle = styled.h2`
  margin-top: 6.2vw;
  font-weight: 700;
  font-size: 2.98vw;
  margin-bottom: 4.6vw;
`;

export const SetBox = styled.div`
  width: 100%;
  margin-bottom: 7.4vw;
`;

export const SetMiniTitle = styled.div`
  font-weight: 500;
  font-size: 1.36vw;
  margin-bottom: 0.4vw;
  color: #777777;
`;

export const SetTitle = styled.div`
  font-weight: 700;
  font-size: 2.32vw;
`;

export const RadioBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.6vw;
`;

export const Key = styled.div`
  font-weight: 400;
  font-size: 1.4vw;
  color: #4e4e4e;
  width: 15.2vw;
  margin-bottom: 1.18vw;
`;

export const MoneyWrapper = styled.div`
  margin-top: 3vw;
  display: flex;
  justify-content: right;
`;

export const MoneyInput = styled.select`
  height: 4vw;
  width: 18vw;
  font-weight: 700;
  font-size: 2.14vw;
  border: 2px solid #d7d7d7;
  border-radius: 14px;
  padding-left: 1.4vw;
  background: url("/icons/money_icon.png") no-repeat 90% 54%;
  background-size: 2.5vw;

  // 화살표 지우기
  /* -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; */
`;

export const MoneyOption = styled.option`
  font-size: 1.8vw;
`;

export const SetRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: 700;
  font-size: 2vw;
  margin-bottom: 1.8vw;
`;

export const SetTitleBox = styled.div``;
export const TextColor = styled.p`
  margin-top: 0.2vw;
  margin-bottom: 1.2vw;
`;

export const InputRadio = styled.input`
  appearance: none;
  width: 1.28vw;
  height: 1.28vw;
  border-radius: 100%;
  margin-right: 0.8vw;
  border: 2px solid #d7d7d7;

  vertical-align: middle;

  :checked {
    appearance: none;
    width: 1.28vw;
    height: 1.28vw;
    border-radius: 100%;
    margin-right: 0.8vw;
    background-color: #3ebd5d;
    vertical-align: middle;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vw;
`;

export const WriteButton = styled.button`
  width: 28vw;
  height: 5.2vw;
  font-weight: 700;
  font-size: 2.38vw;
  color: #ffffff;
  background: #3ebd5d;
  border-radius: 14px;
`;

export const TagsHeaderWrapper = styled.div`
  display: flex;
`;

export const TagButton = styled.button`
  width: 9.4vw;
  height: 2.4vw;
  font-size: 1.36vw;
  color: #fff;
  border-radius: 4px;
  background-color: #4e4e4e;
  margin-left: 1.2vw;
  margin-top: 0.1vw;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 1.4vw;
`;

export const Tag = styled.span`
  // 반응형 크기 보류
  background: #ececec;
  color: #4e4e4e;
  font-size: 1.4vw;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4vw 0.8vw;
  margin-right: 0.8vw;
`;
