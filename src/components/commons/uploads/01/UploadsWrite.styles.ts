import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const UploadImage = styled.img`
  width: 100%;
  height: 24vw;
  border-radius: 14px;
  cursor: pointer;
`;

export const UploadButton = styled.button`
  border-radius: 14px;
  outline: none;
  cursor: pointer;
  width: 100%;
  height: 24vw;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;

// export const UploadTrue = styled.div`
//   width: 20rem;
//   height: 20rem;
// `;
// export const UploadFalse = styled.div`
//   width: 20rem;
//   height: 20rem;
// `;

export const Label = styled.span`
  font-size: 3.68vw;
  font-weight: bold;
`;
