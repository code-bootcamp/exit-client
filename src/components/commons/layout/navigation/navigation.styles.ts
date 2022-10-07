import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const GNB = styled.ul`
  display: flex;
`;

export const NavigationItem = styled.li`
  margin-right: 70px;
  &:last-of-type {
    margin-right: 0;
  }

  @media ${breakPoints.tablet} {
    margin-right: 40px;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const NavigationLink = styled.a`
  font-size: 2.2rem;
  font-weight: 700;
  transition: 0.1s;
  &:hover {
    color: #3ebd5d !important;
  }
`;
