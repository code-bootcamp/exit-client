import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const TokenInfoWrapper = styled.div`
  position: relative;
`;

export const TokenDefaultMessage = styled.p`
  font-size: 1.5rem;
  color: #a5a5a5;
  position: absolute;
  bottom: 5px;
  left: 6px;

  @media ${breakPoints.tablet} {
    bottom: 0;
  }

  @media ${breakPoints.mobile} {
    bottom: -4px;
    font-size: 1.4rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 540px;
  position: absolute;
  left: 30px;
  bottom: 30px;

  @media ${breakPoints.tablet} {
    width: 48.6vw;
  }

  @media ${breakPoints.mobile} {
    width: 300px;
  }
`;
