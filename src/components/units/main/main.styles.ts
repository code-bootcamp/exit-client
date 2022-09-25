import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 80px;
  padding-bottom: 50px;
`;

export const Section = styled.section``;

export const SectionInfo = styled.div`
  width: 160rem;
  margin-top: 180px;
  margin-left: 9.375vw;
  margin-bottom: 30px;
  position: relative;

  &:last-of-type {
    margin-top: 110px;
  }

  @media (max-width: 1770px) {
    width: 90vw;
    margin: 180px 0 30px;
    margin-left: 9.375vw;
    padding-right: 2rem;
  }
  @media (max-width: 480px) {
    margin-left: 7vw;
  }

  &:nth-of-type(n + 1) {
    margin-top: 20px;
  }
`;

export const Exiting = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: #3ebd5d;
  margin-bottom: 1rem;

  ::selection {
    background-color: #3ebd5d;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  width: 65%;
  font-size: 4.8rem;
  font-weight: 700;
  word-break: keep-all;

  &:last-of-type {
  }

  @media (max-width: 1600px) {
    font-size: 4.3rem;
  }
  @media (min-width: ${breakPoints.sm}) and (max-width: ${breakPoints.xxl}) {
    font-size: 3.8rem;
    width: 80%;
  }
  @media (max-width: ${breakPoints.sm}) {
    font-size: 3.4rem;
    width: 90%;
  }
  ::selection {
    background-color: #000;
  }
`;

export const ListLink = styled.div`
  width: 35%;
  margin-right: 25px;
  @media (max-width: ${breakPoints.md}) {
    width: 10%;
  }
`;

export const More = styled.span`
  color: #b2b2b2;
  font-size: 2.4rem;
  font-weight: 700;
  word-break: keep-all;
  letter-spacing: -0.02em;
  display: flex;
  justify-content: flex-end;
  position: relative;
  left: 530px;

  @media (min-width: ${breakPoints.xl}) and (max-width: ${breakPoints.xxl}) {
    font-size: 2.2rem;
  }
  @media (min-width: ${breakPoints.md}) and (max-width: ${breakPoints.xl}) {
    font-size: 2rem;
  }
  @media (max-width: ${breakPoints.md}) {
    display: none;
  }

  :hover {
    cursor: pointer;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 720px;
  overflow: hidden;
  margin-left: 9.375vw;
  margin-bottom: 110px;
  position: relative;

  @media (max-width: 768px) {
    height: 500px;
  }
  @media (max-width: 480px) {
    margin-left: 7.3vw;
  }
`;

export const ListSlider = styled(Slider)`
  height: 720px;
  overflow: hidden;

  @media (min-width: 2112px) {
    width: 100% !important;
  }

  @media (min-width: 1919px) {
    width: 2112px !important;
  }

  @media (max-width: 1400px) {
    width: 1350px !important;
  }

  @media (max-width: ${breakPoints.sm}) {
    width: 660px !important;
  }

  .slick-slide > div {
    margin: 0 16px;
    @media (max-width: 1600px) {
      margin: 0 13px;
    }
  }

  .slick-list {
    margin: 0 -16px;
    @media (max-width: 1600px) {
      margin: 0 -13px;
    }
  }
`;

// 슬라이드 아이템
export const ListItem = styled.article`
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 100px;
  cursor: pointer;
  word-break: keep-all;

  :hover .thumbImage {
    transform: scale(1.1);
  }

  @media (max-width: 1400px) {
    width: 321px !important;
  }

  @media (max-width: ${breakPoints.md}) {
    border-radius: 10px;
  }
`;

export const ThumbWrapper = styled.div`
  width: 100%;
  height: 20vw;
  overflow: hidden;
  position: relative;

  @media (min-width: 1200px) and (max-width: 1400px) {
    height: 272px;
    /* height: 180px; */
  }

  @media (max-width: 1200px) {
    height: 272px;
    /* height: 180px; */
  }
`;

export const IsLikedWrapper = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  right: 20px;
  top: 18px;
  /* transition: 0.5s; */
  color: #fff;

  img {
    width: 100%;
  }

  @media (min-width: ${breakPoints.lg}) and (max-width: ${breakPoints.xxl}) {
    width: 27px;
    height: 27px;
    right: 15px;
    top: 13px;
  }

  @media (max-width: ${breakPoints.lg}) {
    width: 23px;
    height: 23px;
    right: 13px;
    top: 13px;
  }
`;

export const Countdown = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 6px 13px;
  border-radius: 4px;
  color: #fff;
  background-color: #f85a44;
  /* transition: 0.6s; */

  position: absolute;
  top: 24px;
  left: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakPoints.xxl}) {
    padding: 5px 10px;
    font-size: 1.6rem;
    top: 15px;
    left: 15px;
  }

  /* @media (min-width: ${breakPoints.lg}) and (max-width: ${breakPoints.xxl}) {
    padding: 5px 10px;
    font-size: 1.6rem;
    top: 15px;
    left: 15px;
  }

  @media (max-width: ${breakPoints.lg}) {
    padding: 4px 9px;
    font-size: 1.4rem;
    top: 15px;
    left: 15px;
  } */
`;

export const ThumbImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ThumbImage = styled.img`
  /* width: auto; */
  width: 100%;
  height: auto;
  margin: 0 auto;
  /* transition: 0.3s; */
`;

export const ThumbInfoWrapper = styled.div`
  width: 100%;
  padding: 0 24px 24px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  transition: 0.5s;

  @media (max-width: ${breakPoints.xxl}) {
    padding: 0 13px 13px;
  }
`;

export const ThumbInfoLeft = styled.div`
  display: flex;
`;

export const MemberCountWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;

  /* @media (max-width: ${breakPoints.xl}) {
    width: 16px;
    height: 16px;
  } */
`;

export const MemberCountIcon = styled.img`
  width: 100%;
`;

export const MemberCount = styled.em`
  color: #fff;
  font-size: 1.6rem;
  padding-left: 10px;

  @media (max-width: ${breakPoints.xl}) {
    /* font-size: 1.4rem; */
  }
`;

export const LikeCountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LikeCountIcon = styled(MemberCountIcon)``;
export const LikeCount = styled(MemberCount)``;

export const ThumbInfoRight = styled.div`
  color: #fff;
  font-size: 1.6rem;
  display: flex;
  align-items: center;

  @media (max-width: 1500px) {
    display: none;
  }
`;

export const ContentsWrapper = styled.div`
  height: 13.5417vw;
  padding: 24px;
  background-color: #f8f8f8;
  position: relative;
  border-radius: 0 0 14px 14px;

  @media (max-width: 1600px) {
    padding: 15px;
  }
  /* @media (max-width: ${breakPoints.lg}) {
    padding: 10px;
    height: 110px;
  } */

  @media (max-width: 1400px) {
    height: 184px;
  }
`;

export const ProjectTitle = styled.h3`
  width: 100%;
  padding-top: 2px;
  font-size: 1.4583vw;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -1.4px;
  overflow: hidden;
  margin-bottom: 10px;
  /* word-break: keep-all; */

  @media (min-width: 1447px) and (max-width: 1600px) {
    font-size: 2.2rem;
  }
  @media (max-width: 1446px) {
    font-size: 2rem;
  }
`;

export const TagsWrapper = styled.div`
  width: 100%;
  /* height: 144px; */
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
`;

export const Tag = styled.em`
  height: 1.5625vw;
  height: 30px;
  padding: 1px 5px;
  margin: 0 0.2604vw 0.4167vw 0;
  line-height: 1;
  font-size: 1.8rem;
  color: #4e4e4e;
  background-color: #ececec;
  border-radius: 4px;
  display: flex;
  align-items: center;
  transition: 0.3s;

  @media (max-width: 1910px) {
    height: 24px;
    font-size: 1.4rem;
    padding: 0.5px 5px;
    margin: 0 5px 5px 0;
  }

  @media (max-width: 1600px) {
    height: 20px;
    font-size: 1.3rem;
    padding: 0.5px 5px;
    margin: 0 5px 5px 0;
  }
`;

export const BailWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  position: absolute;
  right: 1.0417vw;
  bottom: 1.0417vw;

  @media (max-width: ${breakPoints.xxl}) {
    right: 15px;
    bottom: 10px;
  }
`;

export const BailIconWrapper = styled.div`
  width: 1.6667vw;
  height: 1.6667vw;
  position: relative;
  top: -3px;

  @media (max-width: 1600px) {
    width: 25px;
    height: 25px;
  }

  img {
    width: 100%;
  }
`;

export const Bail = styled.strong`
  font-size: 3.4rem;
  font-weight: 700;
  margin-left: 0.5208vw;

  @media (min-width: 1400px) and (max-width: 1600px) {
    font-size: 2.2vw;
  }
  @media (max-width: 1400px) {
    font-size: 2.6rem;
  }
`;

export const CategoriesWrapper = styled.ul`
  width: 100%;
  margin-left: 9.375vw;
  margin-top: 30px;

  @media (max-width: ${breakPoints.xxl}) {
    width: 80vw;
    padding: 0;
    margin-left: 9.375vw;
  }
`;

export const Inner = styled.div`
  width: 83.3333vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

export const Category = styled.li`
  cursor: pointer;
  width: 23%;
  height: 128px;
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 30px;
  background-color: #f8f8f8;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  &:nth-of-type(4n) {
    margin-right: 0;
  }

  :hover {
    color: #fff;
    background-color: #3ebd5d;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    height: 100px;
    font-size: 2.2rem;
  }

  @media (max-width: 992px) {
    width: 48%;
    height: 80px;
    font-size: 2rem;
    margin-bottom: 17px;
  }
`;

export const CustomBanner = styled.div`
  width: 83.3333vw;
  height: 256px;
  margin-left: 9.375vw;
  background-color: #3ebd5d;
  border-radius: 14px;
  padding: 45px 70px;
  overflow: hidden;

  @media (max-width: ${breakPoints.xxl}) {
    width: 80vw;
    float: left;
    height: 200px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 80vw;
    height: 170px;
    padding: 25px 55px;
  }

  @media (max-width: 576px) and (max-width: 991px) {
    width: 80vw;
    height: 140px;
    padding: 15px 25px;
  }
  @media (max-width: 576px) {
    font-size: 1.7rem;
    width: 80vw;
    height: 120px;
    padding: 15px 25px;
  }

  img {
    @media (max-width: 991px) {
      /* width: 15%; */
      width: 80px;
      position: relative;
      top: -5px;
    }
  }
`;

export const CustomText = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 2.4rem;
  float: right;
  @media (min-width: 576px) and (max-width: 991px) {
    font-size: 1.7rem;
  }
  @media (max-width: 576px) {
    font-size: 1.7rem;
    float: none;
    margin-top: 5px;
  }
`;
