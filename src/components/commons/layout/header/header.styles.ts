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

  @media ${breakPoints.largeWeb} {
    width: 160rem;
  }

  @media ${breakPoints.smallWeb} {
    width: 100vw;
    padding: 4rem;
  }

  @media ${breakPoints.tabletAndMobile} {
    height: 60px;
  }
`;

export const Logo = styled.h1``;
