import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface IBannerItemProps {
  src: string | undefined;
}

export const Visual = styled.section`
  width: 100%;
  height: 520px;
  overflow: hidden;
  display: flex;
`;

export const BannerSlider = styled(Slider)`
  width: 100%;
  height: 520px;
  overflow: hidden;
`;

export const BannerItem = styled.div`
  width: 100vw;
  height: 520px;

  background-repeat: no-repeat;
  background-position: 0 center;
  background-size: cover;
  background-image: url(${(props: IBannerItemProps) => props.src});
`;

export const LargeBannerImageWrapper = styled.div`
  width: 100%;
  height: 520px;
`;

export const Inner = styled.div`
  width: 160rem;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1700px) {
    width: 94vw;
    /* padding: 0 50px; */
  }
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const BannerImageWrapper = styled.div`
  width: 620px;
  /* width: 55%; */
  margin-top: -3px;

  @media (min-width: 600px) and (max-width: 1200px) {
    width: 55%;
  }
  @media (max-width: 600px) {
    /* width: 460px; */
    width: 60%;
  }

  img {
    width: 100%;
  }
`;

export const BannerTextWrapper = styled.div`
  @media (max-width: 1700px) {
    /* font-size: 3.7rem; */
    width: 40%;
  }
`;

export const BannerTitle = styled.h2`
  font-weight: 700;
  color: #fff;
  font-size: 4.6rem;
  word-break: keep-all;
  @media (min-width: 1200px) and (max-width: 1700px) {
    font-size: 3.7rem;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    font-size: 3.2rem;
  }
  @media (min-width: 580px) and (max-width: 991px) {
    width: 200px;
    /* border: 2px solid green; */
    font-size: 2.5rem;
    /* text-align: center; */
    margin-top: 20px;
    /* text-align: center; */
  }
  @media (min-width: 400px) and (max-width: 600px) {
    /* width: 400px; */
    /* border: 2px solid green; */
    font-size: 2.5rem;
    text-align: center;
    margin-top: 20px;
  }

  @media (max-width: 400px) {
    font-size: 2.3rem;
    text-align: center;
    margin-top: 20px;
  }
`;
export const BannerSubTitle = styled.strong`
  font-weight: 700;
  font-size: 20px;
  color: #fff;
  margin-top: 15px;
  display: block;
  word-break: keep-all;

  @media (min-width: 1200px) and (max-width: 1700px) {
    font-size: 18px;
    width: 60%;
    line-height: 1.2;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
    width: 60%;
    line-height: 1.2;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    font-size: 15px;
    width: 60%;
    line-height: 1.2;
  }
  @media (min-width: 600px) and (max-width: 991px) {
    font-size: 15px;
    width: 100%;
    line-height: 1.2;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    width: 100%;
    line-height: 1.2;
    text-align: center;
  }
`;

export const BannerSubTitleGray = styled(BannerSubTitle)`
  color: #b2b2b2;
`;
