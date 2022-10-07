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
    @media (min-width: 481px) and (max-width: 767px) {
      width: 35px;
      height: 35px;
      margin-top: 2px;
    }
    @media (max-width: 480px) {
      width: 30px;
      height: 30px;
      margin-top: 5px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin-right: 5px;
  }
  @media (max-width: 480px) {
    margin-right: 0;
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

  @media ${breakPoints.mobile} {
    padding: 5px 10px;
    font-size: 1.5rem;
  }
`;

export const MiniModalWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 60px;
  right: 0;
`;
