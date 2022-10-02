import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Wrapper = styled.div`
  width: 100%;
  height: 224px;
  background-color: #000;
  margin-bottom: 80px;
`;

export const AdWrapper = styled.div`
  width: 103rem;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;

  @media (min-width: 992px) and (max-width: 1200px) {
    margin-left: 9.375vw;
  }

  @media ${breakPoints.tablet} {
    width: 80vw;
  }
  @media ${breakPoints.mobile} {
    width: 80vw;
  }
`;

export const AdText = styled.strong`
  color: #fff;
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 1.2;
  word-break: keep-all;

  @media ${breakPoints.mobile} {
    font-size: 3rem;
  }
`;

export const AdImageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  img {
    height: 90%;
    transition: 0.3s;
    @media ${breakPoints.tablet} {
      height: 20vw;
    }
    @media ${breakPoints.mobile} {
      height: 25vw;
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
