import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import { breakPoints } from "../../../../commons/styles/media";

interface IRandomProjectImageWrapperProps {
  src: string;
}

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 60px;
`;

export const InnerWrapper = styled.div`
  width: 160rem;
  margin: auto;
  overflow: auto;

  @media ${breakPoints.tablet} {
    width: 100%;
    padding: 4vw;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 4vw;
  }
`;

export const ListFilterWrapper = styled.div`
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
`;

export const ListFilter = styled.em``;

export const FilterButton = styled.button`
  width: 47px;
  height: 37px;
  background-color: #ececec;
  border-radius: 4px;
  margin-right: 10px;
  display: flex;
  justify-content: center;

  img {
    width: 90%;
    padding-top: 3px;
  }
`;

export const FilterItem = styled.em`
  display: block;
  height: 35px;
  padding: 3px 14px 0;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  font-size: 2.2rem;
  color: #4e4e4e;
  background-color: #ececec;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomInfiniteScroll = styled(InfiniteScroll)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media ${breakPoints.tablet} {
    justify-content: space-between;
  }

  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-content: center;
  }
`;

export const Project = styled.div`
  width: 32%;
  height: 640px;
  margin-right: 30px;
  margin-bottom: 60px;
  border-radius: 18px;
  overflow: hidden;
  background-color: #f8f8f8;
  position: relative;
  cursor: pointer;

  &:nth-of-type(3n) {
    margin-right: 0;
  }

  @media ${breakPoints.tablet} {
    width: 48%;
    height: 60vw;
    margin-right: 0;
  }
  @media ${breakPoints.mobile} {
    width: 80vw;
    height: 105vw;
    margin: auto;
    margin-bottom: 40px;
  }
`;

export const ThumbWrapper = styled.div`
  position: relative;
  height: 384px;

  @media ${breakPoints.tablet} {
    height: 35vw;
  }
  @media ${breakPoints.mobile} {
    height: 60%;
  }
`;

export const IsLikedWrapper = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  right: 20px;
  top: 18px;
  color: #fff;

  img {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

export const ThumbImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  padding: 0 24px 13px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    padding: 0 18px 15px;
  }
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 6px;

  img {
    width: 100%;
  }
`;

export const InfoLeftWrapper = styled.div`
  display: flex;
`;

export const Count = styled.em`
  font-size: 1.6rem;
  color: #fff;
  padding-top: 2px;

  &:first-of-type {
    margin-right: 16px;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -0.9px;
  margin-bottom: 15px;
  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 2.3rem;
  }
`;

export const ContentsWrapper = styled.div`
  padding: 30px 24px;
  @media (max-width: 480px) {
    padding: 20px 18px;
  }
`;

export const TagsWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) and (max-width: 900px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export const InfoRightWrapper = styled.div``;

export const Period = styled.em`
  color: #fff;
  font-size: 16px;
`;

export const Tag = styled.li`
  display: block;
  height: 30px;
  padding: 2px 10px;
  font-size: 1.8rem;
  color: #4e4e4e;
  background-color: #ececec;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  margin-bottom: 5px;
`;

export const BailWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 13px;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    right: 18px;
    bottom: 10px;
  }
`;

export const BailIconWrapper = styled.div`
  width: 44px;
  position: relative;
  top: -3px;
  margin-right: 10px;
  img {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 30px;
  }
`;

export const Bail = styled.strong`
  font-size: 3.4rem;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
`;

export const RandomProjectWrapper = styled.div`
  width: 100%;
  height: 480px;
  overflow: hidden;
  position: relative;
  background-color: #000;
  margin-bottom: 80px;
  color: #fff;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }

  @media ${breakPoints.tablet} {
    height: 350px;
  }
  @media ${breakPoints.mobile} {
    height: 60vw;
  }
`;

export const RandomProjectImageWrapper = styled.div`
  width: 40%;
  height: 480px;

  background-repeat: no-repeat;
  background-size: 100% 110%;
  background-position: 0 center;
  background-image: ${(props: IRandomProjectImageWrapperProps) =>
    `url(${props.src})`};

  @media ${breakPoints.tablet} {
    width: 50%;
    height: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 60%;
    height: 100%;
  }
`;

export const Gradient = styled.div`
  width: 200px;
  height: 480px;
  position: absolute;
  top: 0;
  left: 500px;

  img {
    height: 100%;
  }

  @media ${breakPoints.tablet} {
    left: 26.0417vw;
    height: 480px;
  }
  @media ${breakPoints.mobile} {
    left: 30vw;
    height: 100%;
  }
`;

export const RandomProjectTextWrapper = styled.div`
  width: 64%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 160px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;

  @media ${breakPoints.tablet} {
    width: 50%;
    height: 100%;
    padding-left: 0;
  }
  @media ${breakPoints.mobile} {
    width: 45%;
    height: 100%;
    padding-left: 0;
  }
`;

export const RandomProjectTitle = styled.h3`
  font-size: 4.8rem;
  color: #fff;
  font-weight: 700;
  word-break: keep-all;

  @media ${breakPoints.tablet} {
    width: 90%;
    font-size: 3.6rem;
  }
  @media ${breakPoints.mobile} {
    width: 90%;
    font-size: 5.5vw;
  }
`;

export const RandomProjectDescription = styled.p`
  width: 90%;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.2;
  color: #fff;
  margin: 20px 0 40px;
  /* height: 70px; */
  overflow: hidden;
  word-break: keep-all;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media ${breakPoints.tablet} {
    width: 80%;
    font-size: 1.8rem;
    line-height: 1.2;
    height: auto;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 2.6vw;
    margin: 2.5vw 0 5vw;
    height: auto;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;

export const RandomProjectBailWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 0;

  @media ${breakPoints.tablet} {
    margin: 0 auto;
  }
  @media (max-width: 576px) {
    margin-top: 9vw;
  }
`;

export const RandomProjectBail = styled.em`
  font-size: 4rem;
  color: #fff;
  font-weight: 700;
  padding-left: 10px;
  display: block;

  @media ${breakPoints.tablet} {
    font-size: 3.5rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 6vw;
  }
`;

export const RandomProjectBailIcon = styled.div`
  width: 44px;
  height: 44px;
  position: relative;
  top: -5px;

  img {
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    width: 38px;
    height: 38px;
  }
  @media ${breakPoints.mobile} {
    width: 7.5vw;
    height: 7.5vw;
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

export const SectionTitle = styled.h2`
  width: 100%;
  font-size: 4.8rem;
  font-weight: 700;
  word-break: keep-all;
  margin-bottom: 30px;

  @media ${breakPoints.tablet} {
    width: 80%;
  }
  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const NoResultWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #777;
  border-radius: 14px;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 70px;
`;
