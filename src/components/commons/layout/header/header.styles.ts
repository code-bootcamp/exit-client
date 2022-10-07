import styled from "@emotion/styled";

export const Wrapper = styled.header`
  width: 100%;
  position: relative;
  z-index: 100;
`;

export const Inner = styled.div`
  width: 160rem;
  height: 100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (min-width: 480px) and (max-width: 991px) {
    width: 100%;
    padding: 4vw;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    padding: 3vw 4vw;
  }
`;

export const Logo = styled.h1`
  cursor: pointer;

  @media (max-width: 480px) {
    width: 60px;

    img {
      width: 100%;
    }
  }
`;
