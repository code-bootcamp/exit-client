import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

interface ISelectProps {
  isSelected: boolean;
}

export const InterestWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px;

  @media ${breakPoints.tablet} {
    justify-content: space-between;
    padding-top: 10px;
    height: 350px;
    overflow-y: scroll;
  }
  @media ${breakPoints.mobile} {
    margin-top: 30px;
    width: 108%;
    padding: 0 10px;
    justify-content: space-between;
    padding-top: 10px;
    height: 270px;
    overflow-y: scroll;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  margin-bottom: 24px;
  margin-right: 20px;

  &:nth-of-type(3n) {
    margin-right: 0;
    @media ${breakPoints.tablet} {
      margin-right: 20px;
    }
    @media ${breakPoints.mobile} {
      margin-right: 10px;
    }
  }

  @media ${breakPoints.tablet} {
    width: 44%;
  }

  @media ${breakPoints.mobile} {
    width: 45%;
    margin-right: 10px;
  }
`;

export const Select = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  margin-top: -2px;
  border: ${(props: ISelectProps) =>
    props.isSelected ? "none" : "2px solid #d7d7d7"};
  margin-right: 10px;
  background-color: ${(props: ISelectProps) =>
    props.isSelected ? "#3EBD5D" : "none"};

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    width: 18px;
    height: 18px;
  }
`;

export const Category = styled.em`
  color: #4e4e4e;
  font-size: 2.1rem;

  @media ${breakPoints.tablet} {
    font-size: 1.9rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.6rem;
    letter-spacing: -1px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 540px;
  position: absolute;
  left: 30px;
  bottom: 30px;

  @media ${breakPoints.tablet} {
    width: 48.6vw;
  }

  @media ${breakPoints.mobile} {
    width: 300px;
  }
`;
