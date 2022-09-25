import styled from "@emotion/styled";

interface ITermCheckedProps {
  isChecked: boolean;
}

export const TokenInputWrapper = styled.div`
  position: relative;
`;

export const Timer = styled.div`
  display: flex;
  font-size: 2.1rem;
  font-weight: 500;
  color: #777;
  position: absolute;
  right: 24px;
  top: 24px;
`;

export const TokenDefaultMessage = styled.p`
  font-size: 1.5rem;
  color: #a5a5a5;
  position: absolute;
  bottom: 5px;
  left: 6px;
`;

export const Minute = styled.span`
  display: block;
  width: 23px;
  color: #777;
  text-align: right;
`;

export const Second = styled(Minute)`
  color: #777;
  text-align: left;
`;

export const NicknameWrapper = styled.div`
  margin-bottom: 50px;
`;

export const PasswordWrapper = styled(NicknameWrapper)``;

export const TermsWrapper = styled.div``;

export const TermWraper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
`;

export const TermChecked = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: ${(props: ITermCheckedProps) =>
    props.isChecked ? "none" : "2px solid #d7d7d7"};
  background-color: ${(props: ITermCheckedProps) =>
    props.isChecked ? "#3EBD5D" : "transparent"};
`;

export const Term = styled.em`
  font-size: 2.2rem;
  color: #4e4e4e;
  padding-left: 5px;
`;

export const More = styled.span`
  cursor: pointer;
  font-size: 1.6rem;
  color: #a5a5a5;
`;
