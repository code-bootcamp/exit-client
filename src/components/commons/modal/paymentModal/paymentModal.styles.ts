import styled from "@emotion/styled";

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

export const Wrapper = styled.div`
  width: 690px;
  height: 844px;
  background: #ffffff;
  border-radius: 14px;
  border: 1px solid;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const Container = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #777777;
  padding: 3rem;
`;
export const Header = styled.div`
  display: flex;
  margin-bottom: 9rem;
  justify-content: center;
`;
export const MiniTitle = styled.div``;
export const CloseButton = styled.img`
  position: relative;
  left: 580px;
  width: 4rem;
  cursor: pointer;
`;
export const Main = styled.div``;
export const MyPointBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #f8f8f8;
  border-radius: 14px;
  background: #f8f8f8;
  height: 8rem;
  margin-bottom: 4rem;
`;
export const MyPointTitle = styled.div`
  font-weight: 600;
  font-size: 36px;
  color: #696969;
`;
export const MyPoint = styled.div`
  font-weight: 500;
  font-size: 36px;
  color: #3ebd5d;
`;
export const SelectPointBox = styled.div``;
export const SeleteTitle = styled.div`
  margin-bottom: 2rem;
`;
export const SelectMoneyBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Money = styled.button`
  background-color: black;
  color: #fff;
  border-radius: 14px;
  font-weight: 400;
  font-size: 36px;
  width: 310px;
  height: 70px;
  margin-bottom: 1rem;
  :hover {
    background-color: #3ebd5d;
  }
`;
export const SelectButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;
export const ResetButton = styled.button`
  font-weight: 400;
  width: 310px;
  height: 70px;
  border-radius: 14px;
  color: #fff;
  background-color: black;
  font-size: 24px;
  margin-right: 1rem;
`;
export const PaymentButton = styled.button`
  font-weight: 400;
  width: 310px;
  height: 70px;
  border-radius: 14px;
  color: #fff;
  background-color: #3ebd5d;
  font-size: 24px;
`;
