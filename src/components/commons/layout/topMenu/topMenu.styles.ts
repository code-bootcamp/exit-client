import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

interface ITopMenuButtonProps {
  src: string;
}

export const IconWrapper = styled.div``;

// export const SearchIcon = styled(FiSearch)`
//   font-size: 20px;
//   margin-right: 20px;
//   cursor: pointer;
// `;

// export const AvatarIcon = styled(MdFaceUnlock)`
//   font-size: 20px;
//   cursor: pointer;
// `;

export const TopMenuButton = styled.button`
  width: 2rem;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center center;
  /* background-size: contain; */
  background-image: url(${(props: ITopMenuButtonProps) => props.src});

  &:first-of-type {
    margin-right: 30px;
    @media ${breakPoints.tabletAndMobile} {
      margin-right: 25px;
    }
    @media ${breakPoints.tabletAndMobile} {
      margin-right: 10px;
    }
  }
`;
