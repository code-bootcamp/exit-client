import styled from "@emotion/styled";

export const Wrapper = styled.form``;
export const Container = styled.div`
  width: 376px;
  height: 650px;
  border: 1px solid red;
  border-radius: 14px;
`;
export const Header = styled.div`
  height: 7rem;
  background-color: #3ebd5d;
  opacity: 0.7;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 2rem;
`;
export const ProjectName = styled.div`
  font-weight: 600;
  color: #ffffff;
  font-size: 20px;
`;
export const Main = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #fff;
`;
export const Key = styled.div`
  width: 100%;
`;
export const Receive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ReceiveText = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  width: fit-content;
  padding: 1rem;
  background: #ececec;
  border-radius: 14px;
`;
export const Send = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const SendText = styled.div`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  width: fit-content;
  padding: 1rem;
  background: #3ebd5d;
  border-radius: 14px;
`;

export const InputContainner = styled.div`
  border: 2px solid #d7d7d7;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
`;
export const Input = styled.input`
  width: 20rem;
  height: 100%;
`;
export const Button = styled.button`
  background-color: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  border-radius: 14px;
  color: #3ebd5d;
`;
