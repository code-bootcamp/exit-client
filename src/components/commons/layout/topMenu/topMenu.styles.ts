import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

interface ITopMenuButtonProps {
  src: string;
}

export const IconWrapper = styled.div``;

export const TopMenuButton = styled.button`
  width: 2rem;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center center;
  /* background-size: contain; */
  background-image: url(${(props: ITopMenuButtonProps) => props.src});

  &:first-of-type {
    margin-right: 30px;
    @media (max-width: ${breakPoints.xxl}) {
      margin-right: 25px;
    }
    @media (max-width: ${breakPoints.lg}) {
      margin-right: 10px;
    }
  }
`;
