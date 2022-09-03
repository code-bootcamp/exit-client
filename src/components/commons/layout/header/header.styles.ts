import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.header`
  width: 100%;
`;

export const InnerWrapper = styled.div`
  width: 120rem;
  height: 100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  @media ${breakPoints.tablet} {
    width: 70rem;
  }

  @media ${breakPoints.mobile} {
    width: 40rem;
  }
`;

export const Logo = styled.h1``;
