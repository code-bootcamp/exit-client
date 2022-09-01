import styled from "@emotion/styled";

export const GNB = styled.ul``;

export const NavigationItem = styled.a`
  font-size: 20px;
  font-weight: 600;
  position: relative;

  &:first-of-type {
    :hover {
      color: #000;
    }
  }

  &:last-of-type {
    margin-left: 60px;
    color: #65ba68;

    ::after {
      display: block;
      content: "▼";
      width: 15px;
      height: 15px;
      font-size: 12px;
      position: absolute;
      color: #65ba68;
      left: 50%;
      bottom: -15px;
      transform: translateX(-50%);
    }
  }
`;
