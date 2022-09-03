import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.footer`
  width: 100%;
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
`;

export const Link = styled.div`
  color: #000;
  /* font-size: 1.6rem; */
  margin-right: 7rem;

  &:last-of-type {
    margin-right: 0;
  }

  @media ${breakPoints.mobile} {
    margin-right: 3rem;
  }
`;

export const Info = styled.div`
  /* font-size: 1.6rem; */
`;

export const RightWrapper = styled.div`
  display: flex;
  /* height: 100px; */
  flex-direction: column;
  justify-content: space-between;
  /* background-color: yellow; */
`;

export const CopyRight = styled.p`
  /* font-size: 1.6rem; */
`;
