import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.footer`
  width: 100%;
  background-color: #f4f4f4;
`;

export const Inner = styled.div`
  width: 160rem;
  padding: 10rem 0;
  background-color: #f4f4f4;
  margin: auto;
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;

  @media ${breakPoints.tablet} {
    width: 83.3333vw;
    padding: 10vw 0;
  }
  @media ${breakPoints.mobile} {
    width: 83.3333vw;
    padding: 10vw 0;
    flex-direction: column;
  }
`;

export const LogoWrapper = styled.div``;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media ${breakPoints.mobile} {
  }
`;

export const Link = styled.div`
  color: #000;
  font-size: 2.2rem;
  font-weight: 700;
  color: #777;

  &:last-of-type {
    margin-right: 0;
  }

  @media ${breakPoints.tablet} {
    margin-right: 3rem;
    font-size: 2rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 1.7rem;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  margin-right: 3rem;
  margin-bottom: 10px;
  width: 100%;

  color: #777;

  strong {
    display: block;
    width: 75px;
    font-size: 2.2rem;
    color: #777;
    font-weight: 700;
    margin-right: 20px;

    @media ${breakPoints.tablet} {
      font-size: 2rem;
    }
    @media ${breakPoints.mobile} {
      font-size: 1.7rem;
    }
    @media (max-width: 500px) {
      display: none;
    }
  }

  @media ${breakPoints.tablet} {
    font-size: 2rem;
    letter-spacing: -0.8px;
  }
  @media ${breakPoints.mobile} {
    font-size: 1.7rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${breakPoints.tablet} {
    width: 70%;
  }
  @media ${breakPoints.mobile} {
    margin-top: 8vw;
  }
`;

export const CopyRight = styled.p`
  font-size: 2.2rem;
  color: #777;
  margin-top: 40px;

  @media ${breakPoints.tablet} {
    font-size: 2rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 1.7rem;
  }
`;
