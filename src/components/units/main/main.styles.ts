import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  padding: 6rem 0 10rem;
`;

export const Inner = styled.div`
  width: 120rem;
  margin: auto;
  @media ${breakPoints.tablet} {
    width: 70rem;
  }

  @media ${breakPoints.mobile} {
    width: 40rem;
  }
`;

export const ListTitle = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 3rem;

  &:last-of-type {
    margin-top: 10rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 3.3rem;
  }
`;

export const ListSliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const ListSlider = styled(Slider)`
  width: 100%;
  overflow: hidden;
  height: 430px;
  .slick-slide {
    margin: 0 2rem;

    @media ${breakPoints.mobile} {
      height: 380px;
      margin: 0 0.5rem;
    }
  }
`;

export const ListItem = styled.div`
  width: 52rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  :hover #background {
    display: block;
  }

  :hover #thumbnail {
    transform: scale(1.1);
  }
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  height: 247px;
  overflow: hidden;
`;

export const Background = styled.div`
  width: 100%;
  height: 247px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, #000 90%);
  opacity: 0.5;
  position: absolute;
  bottom: 0;
  left: 0;
  display: none;

  @media ${breakPoints.tablet} {
    height: 330px;
  }

  @media ${breakPoints.mobile} {
    height: 220px;
  }
`;

export const ImageWrapper = styled.div`
  height: 247px;
  overflow: hidden;

  @media ${breakPoints.tablet} {
    height: 17rem;
  }

  @media ${breakPoints.mobile} {
    height: 13rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  transition: 0.3s;

  @media ${breakPoints.tablet} {
    height: 180px;
  }
`;

export const Status = styled.div`
  width: 9rem;
  padding: 1rem 1.5rem;
  color: #fff;
  background-color: #000;
  border-radius: 1.5rem;
  text-align: center;
  position: absolute;
  left: 10px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Like = styled.div`
  font-size: 2.5rem;
  font-weight: 300;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const ContentsWrapper = styled.div`
  padding: 2rem 1rem;
  background-color: #000;
`;

export const ItemTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
  @media ${breakPoints.tablet} {
    font-size: 1.7rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
  }
`;

export const ItemWriter = styled.strong`
  font-size: 1.6rem;
  color: #fff;
  @media ${breakPoints.tablet} {
    font-size: 1.5rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.4rem;
  }
`;

export const IconWrapper = styled.ul`
  display: flex;
  margin-top: 2rem;
`;

export const Icon = styled.li`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

export const Date = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

export const PremiumListItem = styled.div`
  width: 52rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  :hover #background {
    display: block;
  }

  :hover #thumbnail {
    transform: scale(1.1);
  }
`;

export const PremiumBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export const Notice = styled.strong`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  display: block;

  @media ${breakPoints.tablet} {
    font-size: 2rem;
    width: 14rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.6rem;
  }
`;

export const Button = styled.button`
  font-size: 2rem;
  font-weight: 700;
  background-color: #fff;
  padding: 2rem 4rem;
  border-radius: 10px;
  margin-top: 3rem;

  @media ${breakPoints.tablet} {
    font-size: 1.6rem;
    padding: 1.5rem 3rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
    padding: 1.2rem 2rem;
  }
`;
