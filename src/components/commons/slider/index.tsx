import { ReactNode } from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ICarouselProps {
  children: any;
}

const CustomCarousel = styled(Slider)`
  width: 100%;
  overflow: hidden;

  .slick-slide > div {
    margin: 0 16px;
  }

  .slick-list {
    margin: 0 -16px;
  }
`;

export default function Carousel(props: ICarouselProps) {
  const settings = {
    dots: false,
    infinite: props.children?.length > 4,
    autoplay: true,
    autoplaySpeed: 2200,
    dragging: false,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
    variableWidth: true,
    // slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          infinite: false,
        },
      },
    ],
  };

  return <CustomCarousel {...settings}>{props.children}</CustomCarousel>;
}
