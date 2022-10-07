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

  @media (max-width: 991px) {
    width: 100%;
    padding: 4vw;
  }
`;

export const Logo = styled.h1`
  cursor: pointer;
`;
