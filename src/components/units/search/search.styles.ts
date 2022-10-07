import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 200px;

  @media ${breakPoints.mobile} {
    margin-top: 80px;
    margin-bottom: 100px;
  }
`;

export const Inner = styled.div`
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

export const SearchBar = styled.div`
  width: 100%;
  height: 100px;
  padding-left: 34px;
  border: 2px solid #d7d7d7;
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakPoints.tablet} {
    height: 80px;
  }
  @media ${breakPoints.mobile} {
    height: 50px;
    border-radius: 10px;
    padding-left: 20px;
  }
`;

export const SearchInput = styled.input`
  width: 80%;
  font-size: 3.4rem;
  border: none;

  ::placeholder {
    font-size: 3.4rem;
    font-weight: 500;
    color: #c1c1c1;
    @media ${breakPoints.tablet} {
      font-size: 3rem;
    }
    @media ${breakPoints.mobile} {
      font-size: 2.3rem;
    }
  }

  :focus {
    outline: none;
  }

  @media ${breakPoints.tablet} {
    font-size: 3rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 2.3rem;
  }
`;

export const SearchButton = styled.button`
  width: 80px;

  img {
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    width: 70px;
  }
  @media ${breakPoints.mobile} {
    width: 50px;
  }
`;

export const RecentSearchWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const RecentSearchTitle = styled.strong`
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const RecentSearchKeywords = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const RecentSearchKeyword = styled.li`
  padding: 4px 14px;
  font-size: 2.4rem;
  color: #4e4e4e;
  background-color: #ececec;
  border-radius: 4px;
  margin-right: 20px;
  margin-bottom: 10px;
  cursor: pointer;

  :hover {
    color: #fff;
    background-color: #3ebd5d;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const SearchResultsWrapper = styled.div`
  width: 100%;
  margin-top: 30px;

  @media ${breakPoints.mobile} {
    margin-top: 20px;
  }
`;

export const SearchResultTopWrapper = styled.div``;

export const SearchResultsDescription = styled.h3`
  font-size: 3.6rem;
  font-weight: 700;

  span {
    color: #3ebd5d;
  }

  @media ${breakPoints.mobile} {
    font-size: 2.7rem;
  }
`;

export const ExitingProjects = styled.section`
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

export const SectionTitle = styled.h4`
  margin-top: 112px;
  margin-bottom: 32px;
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media ${breakPoints.mobile} {
    margin-top: 60px;
    font-size: 3.5rem;
  }
`;

export const ExitedProjects = styled(ExitingProjects)``;

export const SearchResultBodyWrapper = styled.div``;

export const Project = styled.article`
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

export const TopWrapper = styled.div`
  width: 100%;
  height: 384px;
  position: relative;
  overflow: hidden;

  @media ${breakPoints.tablet} {
    height: 35vw;
  }
  @media ${breakPoints.mobile} {
    height: 60%;
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

export const IsLiked = styled.div`
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
  padding: 30px 24px;
  @media (max-width: 480px) {
    padding: 20px 18px;
  }
`;

export const ProjectTitle = styled.h3`
  width: 100%;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.9px;
  margin-bottom: 15px;
  word-break: keep-all;

  @media (min-width: 481px) and (max-width: 767px) {
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 2.3rem;
  }
`;

export const TagsWrapper = styled.div`
  width: 100%;

  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;

  @media (min-width: 768px) and (max-width: 900px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export const Tag = styled.em`
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
