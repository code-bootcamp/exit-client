import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

interface ITagProps {
  isSelected: boolean;
}

export const TagsWrapper = styled.ul`
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
    padding-top: 30px;
    height: 350px;
    overflow-y: scroll;
  }
  @media ${breakPoints.mobile} {
    margin-top: 20px;
    padding: 20px;
    height: 240px;
    overflow-y: scroll;
  }
`;

export const Tag = styled.li`
  height: 37px;
  padding: 3px 14px 0;
  margin-right: 20px;
  margin-bottom: 20px;
  color: ${(props: ITagProps) => (props.isSelected ? "#fff" : "#4e4e4e")};
  background-color: ${(props: ITagProps) =>
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
  width: 100%;
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
  font-size: 2.4rem;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
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
