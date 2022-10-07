import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

interface IText01Props {
  contents: string | undefined;
}

const Text01UI = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
  word-break: keep-all;

  @media ${breakPoints.tablet} {
    width: 65%;
  }
  @media ${breakPoints.mobile} {
    width: 80%;
    font-size: 3.2rem;
  }
`;

export default function Text01(props: IText01Props) {
  return <Text01UI>{props.contents}</Text01UI>;
}
