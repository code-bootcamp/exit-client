import styled from "@emotion/styled";
import { IFilterItemProps } from "./Modal01.types";

// 준휘님,, 이렇게 펼쳐놓고 가시면,,
// 제가 코드가 사라지는 매직-! 을 보여줄 수 있어용
// 조.심.하.시.라.구.욧
// 그럼 이만..(스르륵)

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.74);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  color: #fff;
`;

export const SearchModalWrapper = styled.div`
  width: 620px;
  height: 850px;
  padding: 30px;
  background-color: #fff;
  border-radius: 14px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalFor = styled.em`
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
  color: #777777;
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -0.02em;
`;

export const ModalTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

export const FilterItems = styled.ul`
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

export const FilterItem = styled.li`
  height: 37px;
  padding: 3px 14px 0;
  margin-right: 20px;
  margin-bottom: 20px;
  color: red;
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
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ResetButton = styled.button`
  width: 265px;
  height: 70px;
  font-size: 2.3rem;
  font-weight: 700;
  color: #fff;
  border-radius: 14px;
  background-color: #000;
`;

export const CompleteButton = styled(ResetButton)`
  background-color: #3ebd5d;
`;

export const Close = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;

  img {
    width: 100%;
  }
`;
