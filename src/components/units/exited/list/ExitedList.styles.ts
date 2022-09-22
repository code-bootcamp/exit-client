import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
`;
export const InnerWrapper = styled.div`
  width: 160rem;
  margin: auto;
  overflow: auto;
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
    /* width: 100%; */
    /* height: 100%; */
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
  /* justify-content: space-between; */
`;

export const FilteredBoardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
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
`;

export const ThumbWrapper = styled.div`
  position: relative;
  height: 384px;
  background-color: #000;
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
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
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
`;

export const ContentsWrapper = styled.div`
  padding: 30px 24px;
`;

export const TagsWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
`;

export const BailIconWrapper = styled.div`
  width: 44px;
  position: relative;
  top: -3px;
  margin-right: 10px;
  img {
    width: 100%;
  }
`;

export const Bail = styled.strong`
  font-size: 3.4rem;
  font-weight: 700;
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

  ::selection {
    background-color: #000;
  }
`;

export const RandomProjectWrapper = styled.div`
  width: 100%;
  height: 480px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(250deg, #000000 90.52%, rgba(0, 0, 0, 0) 100%);
  background-color: gray;
  margin-bottom: 80px;
  /* padding-top: 110px; */
`;

export const RandomProjectImageWrapper = styled.div`
  width: 50%;
  height: 480px;
  background-repeat: no-repeat;
  background-size: 80% 100%;
  background-image: url(${(props: any) => props.src});
`;

export const RandomProjectTextWrapper = styled.div`
  width: 50%;
`;
export const RandomProjectTitle = styled.h3`
  font-size: 4.8rem;
  color: #fff;
  font-weight: 700;
`;

export const RandomProjectDescription = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: #fff;
  margin: 20px 0;
  width: 730px;
  word-break: keep-all;
`;

export const RandomProjectBailWrapper = styled.div`
  display: flex;
`;

export const RandomProjectBail = styled.em`
  font-size: 4rem;
  color: #fff;
  font-weight: 700;
  padding-left: 10px;
`;

export const RandomProjectBailIcon = styled.div`
  width: 44px;
  height: 44px;
  position: relative;
  top: -5px;

  img {
    width: 100%;
  }
`;
