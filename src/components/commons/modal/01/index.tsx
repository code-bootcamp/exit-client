import styled from "@emotion/styled";
import { ReactNode, useEffect } from "react";
import { breakPoints } from "../../../../commons/styles/media";
import Text01 from "../../texts/01";

interface IModal01Props {
  children: ReactNode;
  modalFor?: string;
  modalTitle?: string;
  eventHandler: any;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.74);
  color: #fff;
`;

const ModalWrapper = styled.div`
  width: 600px;
  height: 830px;
  padding: 30px;
  background-color: #fff;
  border-radius: 14px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media ${breakPoints.tablet} {
    width: 55vw;
    height: 650px;
  }
  @media ${breakPoints.mobile} {
    width: 360px;
    height: 500px;
  }
`;

const ModalFor = styled.em`
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
  color: #777777;
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -0.02em;

  @media ${breakPoints.mobile} {
    margin-bottom: 30px;
  }
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

export default function Modal01(props: IModal01Props) {
  useEffect(() => {
    let isComponentMounted = true;
    document.body.style.overflow = "hidden";

    return () => {
      isComponentMounted = false;
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <Wrapper>
      <Background onClick={props.eventHandler} />
      <ModalWrapper>
        <ModalFor>{props.modalFor}</ModalFor>
        <Text01 contents={props.modalTitle} />
        <div>{props.children}</div>
        <Close onClick={props.eventHandler}>
          <img src="/icons/icon_close.png" />
        </Close>
      </ModalWrapper>
    </Wrapper>
  );
}
