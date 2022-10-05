import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 80px;
`;

export const Inner = styled.div`
  width: 160rem;
  margin: auto;

  @media ${breakPoints.tablet} {
    width: 100%;
    padding: 4vw;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 4vw;
  }
`;

export const Section = styled.section`
  margin-bottom: 110px;
`;

export const SectionHead = styled.div`
  width: 160rem;
  margin-bottom: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media ${breakPoints.tablet} {
    width: 70%;
  }
  @media ${breakPoints.mobile} {
    width: 60%;
  }
`;

export const Exiting = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: #3ebd5d;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 4.8rem;
  font-weight: 700;
  word-break: keep-all;
`;

export const More = styled.span`
  color: #b2b2b2;
  font-size: 2.4rem;
  font-weight: 700;
  word-break: keep-all;
  letter-spacing: -0.02em;
  cursor: pointer;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const SectionBody = styled.div``;

export const CarouselWrapper = styled.div`
  @media ${breakPoints.mobile} {
    width: 85vw;
    padding-left: 4.7vw;
    overflow: hidden;
  }
`;

export const CarouselItem = styled.article`
  width: 512px;
  height: 640px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 43.1vw;
    height: 60vw;
  }
  @media ${breakPoints.mobile} {
    width: 80vw;
    height: 105vw;
  }
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 384px;
  position: relative;
  overflow: hidden;

  @media ${breakPoints.tablet} {
    height: 60%;
  }
  @media ${breakPoints.mobile} {
    height: 60%;
  }
`;

export const IsLiked = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  right: 20px;
  top: 18px;
  color: #fff;

  @media ${breakPoints.mobile} {
    width: 28px;
    height: 28px;
  }

  img {
    width: 100%;
  }
`;

export const Countdown = styled.div`
  height: 32px;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 6px 13px;
  border-radius: 4px;
  color: #fff;
  background-color: #f85a44;
`;

export const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  padding: 0 24px 24px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 0;

  @media ${breakPoints.tablet} {
    padding: 0 15px 15px;
  }
  @media ${breakPoints.mobile} {
    padding: 0 3vw 3vw;
  }

  &:first-of-type {
    position: absolute;
    left: 0;
    top: 0;
    padding: 24px;
    @media ${breakPoints.tablet} {
      padding: 15px;
    }
    @media ${breakPoints.mobile} {
      padding: 3vw;
    }
  }
`;

export const InfoLeft = styled.div`
  display: flex;

  @media (min-width: 768px) and (max-width: 810px) {
    display: none;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

export const MemberCountWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;

  img {
    width: 100%;
  }
`;

export const InfoText = styled.em`
  color: #fff;
  font-size: 1.6rem;
  padding-left: 10px;
`;

export const LikeCountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoRight = styled.div`
  color: #fff;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
`;

export const BottomWrapper = styled.div`
  height: 256px;
  padding: 24px 24px 0;
  background-color: #f8f8f8;
  position: relative;
  border-radius: 0 0 14px 14px;

  @media ${breakPoints.tablet} {
    height: 40%;
  }
  @media ${breakPoints.mobile} {
    height: 40%;
    padding: 4vw;
  }
`;

export const ProjectTitle = styled.h3`
  width: 100%;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -1.4px;
  word-break: keep-all;
  margin-bottom: 10px;

  @media ${breakPoints.tablet} {
    font-size: 2.5rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 2.3rem;
  }
`;

export const TagsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;

export const Tag = styled.em`
  height: 30px;
  padding: 1px 5px;
  margin: 0 4px 8px 0;
  font-size: 1.8rem;
  line-height: 1;
  color: #4e4e4e;
  background-color: #ececec;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

export const BailWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  position: absolute;
  right: 24px;
  bottom: 24px;
  @media ${breakPoints.mobile} {
    right: 5vw;
    bottom: 5vw;
  }
`;

export const BailIconWrapper = styled.div`
  width: 35px;
  height: 35px;
  position: relative;
  top: -3px;

  @media ${breakPoints.tablet} {
    width: 30px;
    height: 30px;
  }
  @media ${breakPoints.tablet} {
    width: 27px;
    height: 27px;
  }

  img {
    width: 100%;
  }
`;

export const Bail = styled.strong`
  font-size: 3.4rem;
  font-weight: 700;
  margin-left: 15px;
  @media ${breakPoints.tablet} {
    font-size: 3rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 2.8rem;
  }
`;

export const CategoriesWrapper = styled.ul`
  width: 160rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Category = styled.li`
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
  cursor: pointer;

  &:nth-of-type(4n) {
    margin-right: 0;
  }

  :hover {
    color: #fff;
    background-color: #3ebd5d;
  }

  @media ${breakPoints.tablet} {
    width: 48%;
    height: 100px;
    font-size: 2.5rem;
  }

  @media ${breakPoints.mobile} {
    width: 48%;
    height: 80px;
    font-size: 2.3rem;
    margin-bottom: 17px;
  }
`;

export const ProjectBanner = styled.div`
  width: 160rem;
  height: 256px;
  background-color: #3ebd5d;
  border-radius: 14px;
  padding: 45px 70px;
  overflow: hidden;

  img {
    @media (max-width: 991px) {
      width: 80px;
      position: relative;
      top: -5px;
    }
  }

  @media ${breakPoints.tablet} {
    width: 100%;
    padding: 4vw;
    height: 200px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 160px;
    padding: 4vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProjectBannerText = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.2;
  word-break: keep-all;
  float: right;
  text-align: center;

  @media ${breakPoints.tablet} {
    font-size: 1.7rem;
  }
  @media ${breakPoints.mobile} {
    width: 80%;
    font-size: 1.7rem;
    float: none;
    margin-top: 10px;
  }
`;
