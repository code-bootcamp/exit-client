import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

interface ITermCheckedProps {
  isChecked: boolean;
}

export const Form = styled.form`
  width: 100%;
  height: 630px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${breakPoints.tablet} {
    height: 455px;
  }
  @media ${breakPoints.mobile} {
    height: 335px;
  }
`;

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
  top: 20px;

  @media ${breakPoints.tablet} {
    right: 16px;
    top: 18px;
    font-size: 1.8rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 1.6rem;
    right: 10px;
  }
`;

export const TokenDefaultMessage = styled.p`
  font-size: 1.5rem;
  color: #a5a5a5;
  position: absolute;
  bottom: 5px;
  left: 6px;

  @media ${breakPoints.tablet} {
    bottom: -2px;
  }
  @media ${breakPoints.mobile} {
    bottom: -5px;
  }
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

  @media ${breakPoints.tablet} {
    margin-bottom: 35px;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 20px;
  }
`;

export const PasswordWrapper = styled(NicknameWrapper)`
  @media ${breakPoints.tablet} {
    margin-bottom: 10px;
  }

  @media ${breakPoints.mobile} {
    margin-bottom: -8px;
  }
`;

export const TermsWrapper = styled.div`
  @media ${breakPoints.mobile} {
    display: flex;
  }
`;

export const TermWrapper = styled.div`
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

  @media ${breakPoints.mobile} {
    width: 18px;
    height: 18px;
  }
`;

export const Term = styled.em`
  font-size: 2.2rem;
  color: #4e4e4e;
  padding-left: 5px;

  @media ${breakPoints.tablet} {
    font-size: 1.9rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
    padding-right: 15px;
  }
`;

export const More = styled.span`
  cursor: pointer;
  font-size: 1.6rem;
  color: #a5a5a5;
`;

export const ButtonWrapper = styled.div`
  width: 540px;
  position: absolute;
  bottom: 30px;

  @media ${breakPoints.tablet} {
    width: 47.7vw;
  }

  @media ${breakPoints.mobile} {
    width: 300px;
  }
`;
