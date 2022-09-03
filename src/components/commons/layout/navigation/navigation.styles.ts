import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const GNB = styled.ul``;

export const NavigationItem = styled.a`
  font-size: 20px;
  font-weight: 600;
  position: relative;

  &:first-of-type {
    :hover {
      color: #000;
    }
  }

  &:last-of-type {
    margin-left: 60px;
    color: #65ba68;

    @media ${breakPoints.tablet} {
      /* width: 80rem; */
    }

    @media ${breakPoints.mobile} {
      margin-left: 30px;
    }

    ::after {
      display: block;
      content: "▼";
      width: 15px;
      height: 15px;
      font-size: 12px;
      position: absolute;
      color: #65ba68;
      left: 50%;
      bottom: -15px;
      transform: translateX(-50%);
    }
  }
`;
