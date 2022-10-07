import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { breakPoints } from "../../../../commons/styles/media";

interface IBannerItemProps {
  src: string;
}

interface IBannerDescriptionProps {
  descriptionColor: string;
}

export const Visual = styled.section`
  width: 100%;
  height: 520px;
  display: flex;

  @media (min-width: 992px) and (max-width: 1600px) {
    width: 160rem;
  }
  @media ${breakPoints.tablet} {
    height: 350px;
  }
  @media ${breakPoints.mobile} {
    height: 60vw;
  }
`;

export const BannerSlider = styled(Slider)`
  width: 100%;
  overflow: hidden;
  height: 520px;
  margin: auto;

  @media ${breakPoints.tablet} {
    height: 350px;
  }
  @media ${breakPoints.mobile} {
    height: 60vw;
  }
`;

export const BannerItem = styled.div`
  width: 100%;
  height: 520px;
  background-repeat: no-repeat;
  background-position: 0 center;
  background-size: cover;
  background-image: ${(props: IBannerItemProps) => `url(${props.src})`};

  @media ${breakPoints.tablet} {
    height: 350px;
    background-position: -105px center;
    background-size: auto 100%;
  }
  @media ${breakPoints.mobile} {
    height: 60vw;
    background-position: -6.6vw center;
    background-size: auto 100%;
  }
`;

export const Inner = styled.div`
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${breakPoints.tablet} {
    width: 90vw;
  }
  @media ${breakPoints.mobile} {
    width: 93vw;
  }
`;

export const BannerTextWrapper = styled.div`
  width: 41%;
  word-break: keep-all;

  @media ${breakPoints.tablet} {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const BannerTitle = styled.h2`
  font-size: 4.6rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.8px;
  color: #fff;
  white-space: pre-wrap;
  word-break: keep-all;

  @media ${breakPoints.tablet} {
    text-align: right;
    font-size: 3.2rem;
    line-height: 1.1;
  }
`;

export const BannerDescription = styled.strong`
  display: block;
  margin-top: 15px;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.2;
  word-break: keep-all;

  span {
    color: ${(props: IBannerDescriptionProps) => props.descriptionColor};
    @media ${breakPoints.tablet} {
      display: block;
      width: 101%;
    }
  }

  @media ${breakPoints.tablet} {
    text-align: right;
    font-size: 1.8rem;
  }
`;
