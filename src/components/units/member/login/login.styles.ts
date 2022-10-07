import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const FindPasswordText = styled.p`
  font-size: 2.1rem;
  color: #777777;
  position: absolute;
  right: 20px;
  top: 21px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    top: 20px;
    font-size: 1.8rem;
  }
  @media ${breakPoints.mobile} {
    top: 20px;
    right: 13px;
    font-size: 1.6rem;
  }
`;

export const SocialLoginWrapper = styled.div`
  width: 100%;
  margin-top: 56px;

  @media ${breakPoints.tablet} {
    margin-top: 40px;
  }
  @media ${breakPoints.mobile} {
    margin-top: 25px;
  }
`;

export const SocialLoginLinkWrapper = styled.div`
  width: 100%;
  @media ${breakPoints.tablet} {
    display: flex;
    justify-content: center;
  }
  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: center;
  }
`;

export const SocialLoginText = styled.strong`
  display: block;
  width: 100%;
  font-size: 2.4rem;
  letter-spacing: -0.02em;
  font-weight: 700;

  @media ${breakPoints.tablet} {
    font-size: 2rem;
    text-align: center;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const GoogleLoginLink = styled.a`
  display: block;
  width: 100%;
  height: 60px;
  margin-top: 17px;
  font-size: 2.2rem;
  font-weight: 600;
  border: 2px solid #d7d7d7;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  :hover {
    color: #000;
  }

  @media ${breakPoints.tablet} {
    width: 60px;
    height: 60px;
    font-size: 0;
    margin-right: 15px;
  }
  @media ${breakPoints.mobile} {
    width: 60px;
    height: 60px;
    font-size: 0;
    margin-right: 15px;
    margin-top: 0;
  }
`;

export const KakaoLoginLink = styled(GoogleLoginLink)`
  background-color: #fee500;
  border: none;
`;

export const NaverLoginLink = styled(GoogleLoginLink)`
  background-color: #48484b;
  border: none;
  color: #fff !important;

  :hover {
    color: #fff;
  }
`;

export const SocialLoginIconWrapper = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);

  img {
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media ${breakPoints.mobile} {
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const JoinWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media ${breakPoints.mobile} {
    margin-top: 17px;
  }
`;

export const JoinInfoText = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #777;
  margin-left: 10px;

  @media ${breakPoints.tablet} {
    font-size: 2rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 1.6rem;
  }
`;

export const JoinButton = styled.button`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #3ebd5d;

  @media ${breakPoints.tablet} {
    font-size: 2rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 1.6rem;
  }
`;
