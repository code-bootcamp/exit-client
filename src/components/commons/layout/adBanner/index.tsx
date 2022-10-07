import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Wrapper = styled.div`
  width: 100%;
  height: 224px;
  background-color: #000;
  margin-bottom: 80px;
`;

export const AdWrapper = styled.div`
  width: 160rem;
  padding: 0 30rem;
  height: 100%;
  background-color: #000;
  margin: auto;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;

  @media ${breakPoints.tablet} {
    width: 80vw;
    padding: 0;
    margin-left: 9.375vw;
  }

  @media ${breakPoints.mobile} {
    width: 80vw;
    padding: 0;
    margin-left: 9.375vw;
  }
`;

export const AdText = styled.strong`
  color: #fff;
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 1.2;
  word-break: keep-all;
  position: relative;

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
    @media ${breakPoints.tablet} {
      height: 70%;
    }
    @media ${breakPoints.mobile} {
      height: 65%;
    }
  }

  @media (max-width: 420px) {
    margin-left: -8vw;
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
