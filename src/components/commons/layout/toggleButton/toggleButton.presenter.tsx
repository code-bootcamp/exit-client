import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { breakPoints } from "../../../../commons/styles/media";

const ImgContainer = styled.div`
  position: fixed;
  bottom: 5rem;
  right: 10rem;
  z-index: 100;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    right: 6rem;
  }
`;
const WriteButton = styled.img`
  cursor: pointer;
  width: 8rem;
  margin-right: 1rem;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 6rem;
  }
`;

export default function ToggleButtonUI() {
  const router = useRouter();

  const [buttonView, setbuttonView] = useState(true);

  const onClickMoveToWrite = () => {
    router.push(`/exiting/write`);
  };

  return (
    <>
      {buttonView ? (
        <ImgContainer>
          <WriteButton
            onClick={onClickMoveToWrite}
            src={"/write_button.png"}
          ></WriteButton>
        </ImgContainer>
      ) : (
        ""
      )}
    </>
  );
}