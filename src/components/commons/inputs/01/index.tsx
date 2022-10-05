import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

interface IInput01Props {
  register: any;
  type?: string;
  readOnly?: boolean;
  placeholder?: string;
  errorMessage?: string | any;
  maxLength?: number;
}

const Input01Wrapper = styled.div`
  position: relative;
`;

const Input01UI = styled.input`
  width: 100%;
  height: 60px;
  padding: 20px;
  border: 2px solid #d7d7d7;
  border-radius: 14px;
  font-size: 2.1rem;
  margin-bottom: 30px;
  -webkit-box-shadow: 0 0 0 1000px white inset;
  box-shadow: 0 0 0 1000px white inset;

  &:focus {
    outline: none;
    border-color: #d7d7d7;
  }

  &::placeholder {
    color: #c1c1c1;
    font-size: 2.1rem;
    @media ${breakPoints.tablet} {
      font-size: 1.8rem;
    }
    @media ${breakPoints.mobile} {
      font-size: 1.6rem;
    }
  }

  @media ${breakPoints.tablet} {
    height: 55px;
    padding: 17px;
    margin-bottom: 20px;
    border-radius: 12px;
    font-size: 1.8rem;
  }
  @media ${breakPoints.mobile} {
    height: 55px;
    font-size: 1.6rem;
    border-radius: 9px;
    padding: 13px;
    margin-bottom: 15px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #f85a44;
  position: absolute;
  bottom: 7px;
  left: 6px;

  @media ${breakPoints.tablet} {
    font-size: 1.4rem;
    bottom: 2px;
  }
  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
    bottom: 0;
  }
`;

export default function Input01(props: IInput01Props) {
  return (
    <Input01Wrapper>
      <Input01UI
        type={props.type}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        {...props.register}
      />
      {props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
    </Input01Wrapper>
  );
}
