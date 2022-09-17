import styled from "@emotion/styled";

export const Form = styled.form`
  width: 100%;
  height: 610px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
