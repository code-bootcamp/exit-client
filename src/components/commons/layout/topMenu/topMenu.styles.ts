import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

interface ITopMenuButtonProps {
  src: string;
}

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TopMenuButton = styled.button`
  width: 2rem;
  height: 20px;
  margin-top: 1px;
  background-repeat: no-repeat;
  background-position: center center;
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

export const UserImageWrapper = styled.div`
  img {
    @media (max-width: ${breakPoints.sm}) {
      width: 30px;
      height: 30px;
    }
  }
`;
