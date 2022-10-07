import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
`;
export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #3ebd5d;
  display: flex;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
`;

export const Contents = styled.div`
  width: 70%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.div``;
export const HeadText = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`;
export const SubText = styled.h2`
  font-weight: 400;
  font-size: 16px;
  color: #f0f0f0;
  white-space: nowrap;
`;
export const ImageContainer = styled.div`
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const Image = styled.img``;
