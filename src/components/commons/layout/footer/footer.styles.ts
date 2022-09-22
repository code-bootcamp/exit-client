import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
// import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.footer`
  width: 100%;
  background-color: #f4f4f4;
`;

export const InnerWrapper = styled.div`
  width: 120rem;
  padding: 10rem 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  @media ${breakPoints.tablet} {
    width: 70rem;
    font-size: 1.5rem;
  }

  @media ${breakPoints.mobile} {
    width: 40rem;
    font-size: 1.4rem;
  }
`;

export const LeftWrapper = styled.div``;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Link = styled.div`
  color: #000;
  font-size: 2.2rem;
  font-weight: 700;
  margin-right: 3rem;
  color: #777;

  &:last-of-type {
    margin-right: 0;
  }

  @media ${breakPoints.mobile} {
    margin-right: 3rem;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  margin-right: 3rem;
  width: 100%;

  color: #777;

  strong {
    display: block;
    width: 75px;
    font-size: 2.2rem;
    color: #777;
    font-weight: 700;
    margin-right: 20px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CopyRight = styled.p`
  font-size: 2.2rem;
  color: #777;
  margin-top: 40px;
`;
