import styled from "@emotion/styled";
import { ThreeDots } from "react-loader-spinner";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
`;

export default function Spinner01() {
  return (
    <Wrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#666"
        ariaLabel="three-dots-loading"
      />
    </Wrapper>
  );
}
