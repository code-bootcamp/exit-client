import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Wrapper = styled.div`
  width: 100%;
  height: 224px;
  background-color: #000;
  margin-bottom: 80px;

  @media (max-width: ${breakPoints.lg}) {
    height: 180px;
  }
`;

export const AdWrapper = styled.div`
  width: 1030px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  @media (max-width: ${breakPoints.xxl}) {
    width: 100vw;
    padding: 0 10vw;
  }
`;

export const AdText = styled.strong`
  width: 29%;
  color: #fff;
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 1.3;
  word-break: keep-all;
  position: relative;

  @media (min-width: ${breakPoints.sm}) and (max-width: ${breakPoints.xxl}) {
    width: 35%;
    font-size: 3.2rem;
    line-height: 1.2;
  }
  @media (max-width: ${breakPoints.sm}) {
    width: 35%;
    /* font-size: 2.8rem; */
    font-size: 6vw;
    line-height: 1.1;
  }
`;

export const AdImageWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;

  img {
    height: 100%;
    transition: 0.3s;
    @media (min-width: ${breakPoints.lg}) and (max-width: ${breakPoints.xl}) {
      height: 95%;
    }
    @media (min-width: ${breakPoints.sm}) and (max-width: ${breakPoints.lg}) {
      height: 80%;
    }
    @media (max-width: ${breakPoints.sm}) {
      height: 70%;
    }
  }
`;

export default function AdBanner() {
  return (
    <Wrapper>
      <AdWrapper>
        <AdText>
          엑시트하고
          <br /> AirPods Pro4 받자!
        </AdText>
        <AdImageWrapper>
          <img src="/ad.png" alt="엑시트하고 AirPods Pro4 받자!" />
        </AdImageWrapper>
      </AdWrapper>
    </Wrapper>
  );
}
