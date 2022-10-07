import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

interface IButton01Props {
  text: string;
  isValid?: boolean;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
  eventHandler?: () => void;
}

interface IButton01UIProps {
  disabled?: boolean;
}

const Button01UI = styled.button`
  width: 100%;
  height: 80px;
  font-size: 3.6rem;
  font-weight: 700;
  border: none;
  border-radius: 15px;
  color: #fff;
  cursor: ${(props: IButton01UIProps) =>
    props.disabled ? "default" : "pointer"};
  &:focus {
    outline: none;
  }

  @media ${breakPoints.tablet} {
    font-size: 3.2rem;
    height: 65px;
    border-radius: 13px;
  }
  @media ${breakPoints.mobile} {
    font-size: 2.8rem;
    height: 55px;
    border-radius: 9px;
  }
`;

export default function Button01(props: IButton01Props) {
  return (
    <Button01UI
      type={props.type}
      onClick={props.eventHandler}
      disabled={props.disabled}
      style={{
        backgroundColor: props.isValid ? "#3EBD5D" : "#b2b2b2",
      }}
    >
      {props.text}
    </Button01UI>
  );
}
