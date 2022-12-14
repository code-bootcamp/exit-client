import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

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
  top: 24px;

  @media ${breakPoints.tablet} {
    right: 16px;
    top: 18px;
    font-size: 1.8rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 1.6rem;
    top: 20px;
    right: 10px;
  }
`;

export const TokenDefaultMessage = styled.p`
  font-size: 1.5rem;
  color: #a5a5a5;
  position: absolute;
  bottom: -12px;
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
