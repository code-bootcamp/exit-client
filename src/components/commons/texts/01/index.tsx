import { ReactNode } from "react";
import styled from "@emotion/styled";

interface IText01Props {
  contents: string | undefined;
}

const Text01UI = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

export default function Text01(props: IText01Props) {
  return <Text01UI>{props.contents}</Text01UI>;
}
