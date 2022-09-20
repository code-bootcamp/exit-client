import styled from "@emotion/styled";

interface ISelectProps {
  isSelected: boolean;
}

export const InterestWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 170px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  width: 30%;
  margin-bottom: 24px;
  margin-right: 20px;
  /* background-color: yellow; */
  &:nth-of-type(3n) {
    margin-right: 0;
  }
`;

export const Select = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: ${(props: ISelectProps) =>
    props.isSelected ? "none" : "2px solid #d7d7d7"};
  margin-right: 10px;
  background-color: ${(props: ISelectProps) =>
    props.isSelected ? "#3EBD5D" : "none"};
`;

export const Category = styled.em`
  color: #4e4e4e;
  font-size: 2.1rem;
`;
