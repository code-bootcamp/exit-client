import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Inner = styled.div`
  width: calc(100%-160px);
  margin: 190px 0 0 160px;
  position: relative;
`;

export const Section = styled.section``;

export const SectionInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ListTitle = styled.h2`
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;
  word-break: keep-all;

  @media (max-width: ${breakPoints.lg}) {
  }
  @media (min-width: ${breakPoints.sm}) and (max-width: ${breakPoints.md}) {
    font-size: 4.5rem;
  }
  @media (max-width: ${breakPoints.sm}) {
    font-size: 4rem;
  }

  &:last-of-type {
    margin-top: 10rem;
  }

  ::selection {
    background-color: #000;
  }

  ::after {
    content: "exiting";
    display: block;
    font-size: 2.8rem;
    width: 100px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    border-radius: 10px;
    background-color: #46b657;
    color: white;
    position: absolute;
    left: 0;
    top: -60px;

    @media (min-width: ${breakPoints.sm}) and (max-width: ${breakPoints.md}) {
      font-size: 2.4rem;
      width: 90px;
      height: 43px;
      line-height: 43px;
    }
    @media (max-width: ${breakPoints.sm}) {
      font-size: 2rem;
      width: 80px;
      height: 40px;
      line-height: 40px;
    }
  }
`;

export const More = styled.a`
  display: block;
  font-size: 2.8rem;
  color: #808080;
  word-break: keep-all;
  margin-left: 70px;
  margin-top: 65px;
  position: relative;

  @media (min-width: "1060px") and (max-width: ${breakPoints.xl}) {
    width: 300px;
    font-size: 2.6rem;
    margin-left: 40px;
    background-color: green;
  }

  @media (max-width: ${breakPoints.lg}) {
    font-size: 0;
  }

  :hover {
    cursor: pointer;
    color: #808080;
  }

  &::after {
    content: "";
    display: block;
    width: 2rem;
    height: 2rem;
    background: url("/icons/thin-angle-right-icon.png") center center no-repeat;
    position: absolute;
    right: -3rem;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: ${breakPoints.xl}) {
      right: 2rem;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  margin-left: 150px;
  overflow: hidden;
`;

export const ListSlider = styled(Slider)`
  width: 100%;

  .slick-slide > div {
    margin: 0 20px;
  }
  .slick-list {
    margin: 0 -20px;
  }
`;

export const ListItem = styled.article`
  border: 2px solid #b1b1b1;
  /* height: 650px; */
  border-radius: 2rem;
  padding: 0.5rem;
  :hover .thumbImage {
    transform: scale(1.1);
  }

  /* @media (max-width: ${breakPoints.xxl}) {
    height: 550px;
  }
  @media (min-width: ${breakPoints.sm}) and (max-width: ${breakPoints.md}) {
    height: 500px;
  }
  @media (max-width: ${breakPoints.sm}) {
    height: 400px;
  } */
`;

export const ThumbWrapper = styled.div`
  width: 98% !important;
  height: 35vh;
  margin: 2px auto 0;
  border-radius: 1.8rem;
  overflow: hidden;
  position: relative;

  @media (max-width: ${breakPoints.xxl}) {
    height: 30vh;
  }
  @media (min-width: ${breakPoints.sm}) and (max-width: ${breakPoints.md}) {
    height: 28vh;
  }
  @media (max-width: ${breakPoints.sm}) {
    height: 26vh;
  }
`;

export const ThumbImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: contain;
`;

export const ThumbImage = styled.img`
  /* width: auto; */
  width: 100%;
  height: 100%;
  margin: 0 auto;
  transition: 0.3s;
`;

export const Count = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  padding: 0.8rem 1rem 0.4rem;
  border-radius: 2.9rem;
  background-color: #fff;
  position: absolute;
  left: 10px;
  top: 10px;
  display: flex;
  align-items: center;
`;

export const CountIcon = styled.img`
  width: auto;
  height: 17px;
  margin-top: -3px;
  padding-right: 0.7rem;
`;

export const Current = styled.strong`
  color: #65ba68;
`;
export const Total = styled.p`
  color: #b3b3b3;
`;

export const Like = styled.div`
  color: #f85a44;
  background-color: #fff;
  padding: 0.6rem 1.6rem 0.2rem;
  font-size: 2.8rem;
  font-weight: 800;
  border-radius: 57px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;
`;

export const LikeIcon = styled.img`
  width: 2.3rem;
  padding-right: 4px;
  margin-top: -5px;
`;

export const ContentsWrapper = styled.div`
  margin-top: 20px;
  padding: 0 1rem 2rem;
  position: relative;
`;

export const ProjectTitle = styled.h3`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 2.8rem;
  font-weight: 700;
  color: #000;
  @media (max-width: ${breakPoints.lg}) {
    font-size: 2.5rem;
  }
  @media (min-width: ${breakPoints.sm}) and (max-width: ${breakPoints.md}) {
    font-size: 2.2rem;
  }
  @media (max-width: ${breakPoints.sm}) {
    font-size: 2rem;
  }
`;

export const ProjectLeader = styled.p`
  font-size: 1.8rem;
  margin-top: 10px;
  margin-bottom: 22px;
  color: #6c6c6c;

  @media (max-width: ${breakPoints.lg}) {
    font-size: 1.6rem;
  }
  @media (min-width: ${breakPoints.sm}) and (max-width: ${breakPoints.md}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${breakPoints.sm}) {
    font-size: 1.4;
  }
`;

export const CategoriesWrapper = styled.div``;

export const StrongText = styled.strong`
  font-size: 1.8rem;
  font-weight: 500;
  color: #6c6c6c;
  word-break: keep-all;

  @media (max-width: ${breakPoints.lg}) {
    font-size: 1.7rem;
  }
  @media (min-width: ${breakPoints.sm}) and (max-width: ${breakPoints.md}) {
    font-size: 1.6rem;
  }
  @media (max-width: ${breakPoints.sm}) {
    font-size: 1.5rem;
  }
`;

export const Categories = styled.ul`
  width: 100%;
  display: flex;
  margin-top: 10px;
`;

export const Category = styled.li`
  color: #000;
  height: 32px;
  line-height: 32px;
  padding: 0 1.4rem;
  text-align: center;
  font-size: 1.8rem;
  background-color: #eaeaea;
  border-radius: 40px;
  margin-right: 10px;

  @media (max-width: ${breakPoints.lg}) {
    font-size: 1.7rem;
    padding: 0 1.3rem;
  }
  @media (min-width: ${breakPoints.sm}) and (max-width: ${breakPoints.md}) {
    font-size: 1.6rem;
    padding: 0 1.2rem;
  }
  @media (max-width: ${breakPoints.sm}) {
    font-size: 1.5rem;
    padding: 0 1.1rem;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const DueDateWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const DueDate = styled.em`
  font-size: 1.8rem;
  padding: 0 1rem;
  color: #6c6c6c;

  @media (max-width: ${breakPoints.lg}) {
    font-size: 0;
    padding: 0 0.6rem;
  }
`;

export const CountDown = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: #f85a44;
`;

export const BailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const BailText = styled.strong`
  font-size: 1.8rem;
  font-weight: 500;
  color: #6c6c6c;
  word-break: keep-all;

  @media (min-width: ${breakPoints.lg}) and (max-width: ${breakPoints.xxl}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${breakPoints.lg}) {
    display: none;
  }
`;

export const Bail = styled.strong`
  font-size: 3.2rem;
  font-weight: 600;
  padding-left: 1rem;
  position: relative;
  bottom: -3px;
  @media (max-width: ${breakPoints.lg}) {
    font-size: 2.6rem;
    padding: 0 0.8rem;
  }
  @media (min-width: ${breakPoints.sm}) and (max-width: ${breakPoints.md}) {
    font-size: 2.4rem;
    padding: 0 0.6rem;
  }
  @media (max-width: ${breakPoints.sm}) {
    font-size: 2.2rem;
    padding: 0 0.4rem;
  }
`;

export const BailIcon = styled.img``;

// export const ThumbnailWrapper = styled.div`
//   width: 49rem;
//   position: relative;
//   height: 247px;
//   overflow: hidden;
// `;

// export const Background = styled.div`
//   width: 100%;
//   height: 247px;
//   background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, #000 90%);
//   opacity: 0.5;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   display: none;

//   @media ${breakPoints.tablet} {
//     height: 330px;
//   }

//   @media ${breakPoints.mobile} {
//     height: 220px;
//   }
// `;

// export const ImageWrapper = styled.div`
//   width: 100%;
//   /* height: 247px; */
//   overflow: hidden;

//   /* @media ${breakPoints.tablet} {
//     height: 17rem;
//   }

//   @media ${breakPoints.mobile} {
//     height: 13rem;
//   } */
// `;

// export const Image = styled.img`
//   width: 100%;
//   width: 36rem;
//   /* height: auto; */
//   transition: 0.3s;

//   @media ${breakPoints.tablet} {
//     height: 180px;
//   }
// `;

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

// export const ContentsWrapper = styled.div`
//   padding: 2rem 1rem;
//   /* background-color: #000; */
// `;

// export const ItemTitle = styled.h3`
//   font-size: 2rem;
//   margin-bottom: 1rem;
//   color: #fff;
//   @media ${breakPoints.tablet} {
//     font-size: 1.7rem;
//   }

//   @media ${breakPoints.mobile} {
//     font-size: 1.5rem;
//   }
// `;

// export const ItemWriter = styled.strong`
//   font-size: 1.6rem;
//   color: #fff;
//   @media ${breakPoints.tablet} {
//     font-size: 1.5rem;
//   }

//   @media ${breakPoints.mobile} {
//     font-size: 1.4rem;
//   }
// `;

// export const IconWrapper = styled.ul`
//   display: flex;
//   margin-top: 2rem;
// `;

// export const Icon = styled.li`
//   width: 2rem;
//   height: 2rem;
//   margin-right: 1rem;
// `;

// export const Date = styled.p`
//   font-size: 14px;
//   font-weight: 300;
// `;

// export const PremiumListItem = styled.div`
//   width: 52rem;
//   border-radius: 2rem;
//   overflow: hidden;
//   position: relative;

//   :hover #thumbnail {
//     transform: scale(1.1);
//   }
// `;

// export const PremiumBackground = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.4);
//   position: absolute;
//   left: 0;
//   top: 0;
//   z-index: 999;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   pointer-events: none;
// `;

// export const Notice = styled.strong`
//   font-size: 2.5rem;
//   font-weight: 700;
//   color: #fff;
//   display: block;

//   @media ${breakPoints.tablet} {
//     font-size: 2rem;
//     width: 14rem;
//   }

//   @media ${breakPoints.mobile} {
//     font-size: 1.6rem;
//   }
// `;

// export const Button = styled.button`
//   font-size: 2rem;
//   font-weight: 700;
//   background-color: #fff;
//   padding: 2rem 4rem;
//   border-radius: 10px;
//   margin-top: 3rem;

//   @media ${breakPoints.tablet} {
//     font-size: 1.6rem;
//     padding: 1.5rem 3rem;
//   }

//   @media ${breakPoints.mobile} {
//     font-size: 1.5rem;
//     padding: 1.2rem 2rem;
//   }
// `;
