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
  @media (max-width: 767px) {
    margin-right: 30px;
  }
  @media (max-width: 480px) {
    margin-right: 3.5vw;
  }
`;

export const NavigationLink = styled.a`
  font-size: 2.2rem;
  font-weight: 700;
  &:hover {
    color: #3ebd5d !important;
  }

  @media ${breakPoints.tablet} {
    font-size: 2rem;
  }
  @media (max-width: 767px) {
    font-size: 1.9rem;
  }
  @media (max-width: 480px) {
    font-size: 3.5vw;
  }
`;
