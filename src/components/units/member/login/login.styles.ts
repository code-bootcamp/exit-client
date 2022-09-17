import styled from "@emotion/styled";

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const FindPasswordText = styled.p`
  font-size: 2.1rem;
  color: #777777;
  position: absolute;
  right: 20px;
  top: 24px;
  cursor: pointer;
`;

export const SocialLoginWrapper = styled.div`
  width: 100%;
  margin-top: 56px;
`;

export const SocialLoginText = styled.strong`
  font-size: 2.4rem;
  letter-spacing: -0.02;
  font-weight: 700;
`;

export const GoogleLoginLink = styled.a`
  display: block;
  width: 100%;
  height: 60px;
  font-size: 2.2rem;
  font-weight: 700;
  border: 2px solid #d7d7d7;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 17px;
  position: relative;

  :hover {
    color: #000;
  }
`;

export const KakaoLoginLink = styled(GoogleLoginLink)`
  background-color: #fee500;
  border: none;
`;

export const NaverLoginLink = styled(GoogleLoginLink)`
  background-color: #48484b;
  border: none;
  color: #fff;

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
`;

export const JoinWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const JoinInfoText = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #777;
  margin-left: 10px;
`;
export const JoinButton = styled.button`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #3ebd5d;
`;
