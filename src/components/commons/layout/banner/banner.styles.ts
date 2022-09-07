import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  background-color: #000;

  @media ${breakPoints.tablet} {
    height: 400px;
  }
  @media ${breakPoints.mobile} {
    height: 300px;
  }
`;

export const BannerSlider = styled(Slider)`
  width: 100%;
`;

export const BannerItem = styled.div`
  width: 100%;
`;

export const BannerImage = styled.img`
  width: 100%;
  margin-top: -3px;
`;

// export const ListSlider = styled(Slider)`
//   width: 100%;
//   overflow: hidden;
//   height: 430px;
//   .slick-slide {
//     margin: 0 2rem;

//     @media ${breakPoints.mobile} {
//       height: 380px;
//       margin: 0 0.5rem;
//     }
//   }
// `;

// export const ListItem = styled.div`
//   width: 52rem;
//   border-radius: 2rem;
//   overflow: hidden;
//   position: relative;

//   :hover #background {
//     display: block;
//   }

//   :hover #thumbnail {
//     transform: scale(1.1);
//   }
// `;
