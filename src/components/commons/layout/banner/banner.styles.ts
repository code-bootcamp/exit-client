import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { breakPoints } from "../../../../commons/styles/media";

export const Visual = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: black;

  @media (max-width: ${breakPoints.md}) {
    height: 400px;
  }
  @media ${breakPoints.sm} {
    height: 300px;
  }
`;

export const BannerSlider = styled(Slider)`
  width: 100%;
  overflow: hidden;
`;

export const BannerItem = styled.div`
  width: 100%;
`;

export const BannerImage = styled.img`
  width: 100%;
  margin-top: -3px;
`;
