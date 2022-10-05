import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

interface ITagProps {
  isSelected: boolean;
}

export const TagsWrapper = styled.ul`
  width: 100%;
  height: 500px;
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
    height: 390px;
  }
  @media ${breakPoints.mobile} {
    height: 280px;
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

  @media ${breakPoints.mobile} {
    height: auto;
    padding: 5px 8px;
    font-size: 1.7rem;
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
