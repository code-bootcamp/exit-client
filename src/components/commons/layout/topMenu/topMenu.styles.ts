import styled from "@emotion/styled";

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
    width: 130%;
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
