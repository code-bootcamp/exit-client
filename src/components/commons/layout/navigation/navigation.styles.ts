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
  @media (max-width: ${breakPoints.lg}) {
    margin-right: 40px;
  }
  @media (max-width: ${breakPoints.md}) {
    margin-right: 20px;
  }
`;

export const NavigationLink = styled.a`
  font-size: 2.2rem;
  font-weight: 700;
  &:hover {
    color: #000;
  }
  @media (max-width: ${breakPoints.md}) {
    font-size: 1.8rem;
  }
`;
