import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
`;
export const Container = styled.section`
  background-color: #fff;
  width: 132rem;
  padding: 7.2rem 13.6rem;
  display: flex;
  flex-direction: column;
`;
export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserImageBox = styled.div`
  width: 20rem;
  height: 20rem;
`;
export const UserImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/profile_img.png");
  background-repeat: no-repeat center;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const UserEditImage = styled.img`
  width: 7rem;
`;
export const User = styled.div`
  width: 20rem;
  height: 20rem;
`;
export const UserNameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4.8rem;
`;
export const UserNickname = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;
export const UserEmail = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.02em;
  color: #777777;
  display: flex;
`;

export const MainContainer = styled.div``;
export const UserInfo = styled.div`
  margin-top: 10rem;
`;
export const KeywordBox = styled.div`
  display: flex;
`;
export const Keyword = styled.div`
  width: fit-content;
  background: #ececec;
  border-radius: 100px;
  padding: 5.5px 20px;
  font-weight: 400;
  font-size: 24px;
  margin-top: 2rem;
  margin-right: 1.4rem;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 1.7rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 7rem;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  padding: 2rem;
`;
export const CategoriTable = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const CategoryBox = styled.div`
  width: 20rem;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: #4e4e4e;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

export const Category = styled.div``;
export const SelectInput = styled.input`
  margin-right: 1rem;
`;
export const SkillButton = styled.button`
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  background: #4e4e4e;
  width: 165px;
  height: 37px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2.4rem;
  margin-bottom: 1.7rem;
`;
export const SkillBox = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid; */
`;
export const TagBox = styled.div``;
export const Tag = styled.div`
  padding: 4px 14px;
  width: 71px;
  height: 37px;
  background: #ececec;
  border-radius: 4px;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #4e4e4e;
`;

export const UdpateButton = styled.button`
  width: 100%;
  height: 10rem;
  color: white;
  background: #b2b2b2;
  border-radius: 14px;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 12.8rem;
  margin-top: 10rem;
  :hover {
    background: #3ebd5d;
  }
`;
export const Line = styled.div`
  border: 1px solid #f0f0f0;
  margin-bottom: 12.8rem;
  width: 100%;
`;
export const ChangePassword = styled.button`
  width: 100%;
  height: 10rem;
  color: white;
  background: #000000;
  border-radius: 14px;
  font-weight: 700;
  font-size: 40px;
  margin-top: 4.8rem;
  margin-bottom: 4.8rem;
`;
export const ResignButton = styled.button`
  border: 2px solid #ff6969;
  font-weight: 700;
  font-size: 40px;
  line-height: 56px;
  width: 100%;
  text-align: center;
  height: 10rem;
  border-radius: 14px;
  color: #ff6969;
`;
