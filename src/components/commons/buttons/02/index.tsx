import styled from "@emotion/styled";

interface IButton02Props {
  text: string;
  isValid?: boolean;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
  eventHandler?: () => void;
  backgroundColor: string;
}

interface IButton02UIProps {
  disabled?: boolean;
}

const Button02UI = styled.button`
  width: 49%;
  height: 80px;
  font-size: 3.6rem;
  font-weight: 700;
  border: none;
  border-radius: 15px;
  color: #fff;
  cursor: ${(props: IButton02UIProps) =>
    props.disabled ? "default" : "pointer"};
  &:focus {
    outline: none;
  }
`;

export default function Button02(props: IButton02Props) {
  return (
    <Button02UI
      type={props.type}
      onClick={props.eventHandler}
      disabled={props.disabled}
      style={{
        backgroundColor: props.backgroundColor,
      }}
    >
      {props.text}
    </Button02UI>
  );
}
