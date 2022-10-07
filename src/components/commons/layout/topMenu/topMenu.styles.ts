import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Search = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  margin-right: 10px;

  img {
    width: 100%;
    @media ${breakPoints.mobile} {
      width: 35px;
      height: 35px;
      margin-top: 2px;
    }
  }

  @media ${breakPoints.mobile} {
    margin-right: 5px;
  }
`;

export const UserImageWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
  }
`;

export const UserImage = styled.img`
  width: 100%;
`;

export const LoginButton = styled.button`
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  background-color: #3ebd5d;
  border-radius: 4px;
  padding: 5px 18px;
`;

export const MiniModalWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 60px;
  right: 0;
`;
