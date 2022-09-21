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
    @media (max-width: 1400px) {
      margin-right: 25px;
    }
  }
`;

export const UserImageWrapper = styled.div`
  width: 45px;
  height: 45px;
  cursor: pointer;
`;

export const UserImage = styled.img`
  width: 100%;
`;

export const LoginButton = styled.button`
  font-size: 2rem;
`;
