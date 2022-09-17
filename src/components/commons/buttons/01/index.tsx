import styled from "@emotion/styled";

interface IButton01Props {
  text: string;
  isValid?: boolean;
  isAgain?: boolean;
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
  margin-top: 20px;
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
`;

export default function Button01(props: IButton01Props) {
  return (
    <Button01UI
      type={props.type}
      onClick={props.eventHandler}
      disabled={props.disabled}
      style={{
        backgroundColor: props.isValid
          ? props.disabled
            ? "#b2b2b2"
            : "#3EBD5D"
          : "#b2b2b2",
        // backgroundColor: props.isValid
        //   ? (props.disabled && props.isValid && "#b2b2b2") ||
        //     (!props.disabled && props.isValid && "#000") ||
        //     (!props.disabled && "#3EBD5D")
        //   : "#b2b2b2",
      }}
    >
      {props.text}
    </Button01UI>
  );
}
