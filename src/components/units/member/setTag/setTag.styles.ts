import styled from "@emotion/styled";

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
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
