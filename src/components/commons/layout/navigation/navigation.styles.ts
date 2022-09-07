import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const GNB = styled.ul`
  display: flex;
`;

export const NavigationItem = styled.li`
  margin-right: 80px;
  &:last-of-type {
    margin-right: 0;
  }
  @media ${breakPoints.tablet} {
    margin-right: 50px;
  }
  @media ${breakPoints.mobile} {
    margin-right: 25px;
  }
`;

export const NavigationLink = styled.a`
  font-size: 2.2rem;
  font-weight: 700;
  &:hover {
    color: #000;
  }
  @media ${breakPoints.tabletAndMobile} {
    font-size: 1.8rem;
  }
`;
