import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const FilterItems = styled.ul`
  width: 100%;
  height: 540px;
  padding: 27px;
  border-radius: 14px;
  background-color: #f8f8f8;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  @media ${breakPoints.tablet} {
    height: 330px;
  }
  @media ${breakPoints.mobile} {
    padding: 20px;
    height: 210px;
  }
`;

export const FilterItem = styled.li`
  height: 37px;
  padding: 3px 14px 0;
  margin-right: 20px;
  margin-bottom: 20px;
  color: ${(props: IFilterItemProps) =>
    props.isSelected ? "#fff" : "#4e4e4e"};
  background-color: ${(props: IFilterItemProps) =>
    props.isSelected ? "#3EBD5D" : "#ececec"};
  font-size: 2.2rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    height: auto;
    padding: 6px 10px;
    font-size: 1.9rem;
  }
  @media ${breakPoints.mobile} {
    height: auto;
    padding: 6px 8px;
    font-size: 1.7rem;
    margin-bottom: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 540px;
  position: absolute;
  left: 30px;
  bottom: 30px;

  @media ${breakPoints.tablet} {
    width: 48.6vw;
  }

  @media ${breakPoints.mobile} {
    width: 300px;
  }
`;

export const ResetButton = styled.button`
  width: 265px;
  height: 70px;
  font-size: 2.3rem;
  font-weight: 700;
  color: #fff;
  border-radius: 14px;
  background-color: #000;

  @media ${breakPoints.tablet} {
    width: 48.5%;
  }
  @media ${breakPoints.mobile} {
    width: 48.5%;
  }
`;

export const CompleteButton = styled(ResetButton)`
  background-color: #3ebd5d;
`;
