import styled from "@emotion/styled";

export const Wrapper = styled.form``;
export const Container = styled.div`
  width: 376px;
  height: 650px;
  /* border: 1px solid red; */
  border-radius: 14px;
  position: fixed;
  bottom: 76px;
  right: 200px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1));
`;
export const Header = styled.div`
  height: 7rem;
  background-color: #3ebd5d;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  opacity: 0.7;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;
export const Icon = styled.img`
  width: 1.5rem;
  cursor: pointer;
`;
export const ProjectName = styled.div`
  font-weight: 600;
  color: #ffffff;
  font-size: 20px;
`;
export const Main = styled.div`
  width: 100%;
  height: 60rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #fff;
  overflow-y: scroll;
  padding: 2rem;
  border-bottom-right-radius: 14px;
  border-bottom-left-radius: 14px;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Key = styled.div`
  width: 100%;
`;
export const Receiver = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #777777;
`;
export const Receive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
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
  margin: 0.6rem;
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
  padding-left: 1.5rem;
  display: flex;
  height: 5rem;
  border-radius: 14px;
  justify-content: space-between;
  margin-top: 2rem;
`;
export const Input = styled.input`
  width: 25rem;
  height: 100%;
  height: 100%;
  font-weight: 400;
  font-size: 16px;
  border: none;
`;
export const Button = styled.button`
  background-color: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  color: #3ebd5d;
`;
