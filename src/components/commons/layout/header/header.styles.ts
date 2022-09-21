import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.header`
  width: 100%;
`;

export const InnerWrapper = styled.div`
  width: 140rem;
  height: 100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  @media (min-width: 1680px) and (max-width: 1940px) {
    width: 160rem;
  }

  @media (max-width: 1680px) {
    width: 100vw;
    padding: 4rem;
  }
`;

export const Logo = styled.h1`
  cursor: pointer;
`;
