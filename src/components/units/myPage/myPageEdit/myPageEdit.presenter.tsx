import { v4 as uuidv4 } from "uuid";
import * as S from "./myPageEdit.styles";
const FAVORITE_CATEGORIES = [
  "여행",
  "SNS",
  "뷰티 / 패션",
  "엔터테인먼트",
  "게임",
  "건강 / 스포츠",
  "뉴스 / 정보",
  "인테리어",
  "부동산",
  "유틸",
  "금융",
  "종교",
  "교육",
  "의료 / 병원",
  "교통",
  "육아 / 출산",
  "우주 / 외계인",
  "공유 서비스",
  "이커머스",
  "날씨",
  "자연",
  "동물 / 식물",
  "음식 / 요리",
];
// const FAVORITE_CATEGORIES = [
//   { id: 1, categori: "여행" },
//   { id: 2, categori: "SNS" },
//   { id: 3, categori: "뷰티/패션" },
//   { id: 4, categori: "엔터테인먼트" },
//   { id: 5, categori: "건강/스포츠" },
//   { id: 6, categori: "뉴스/정보" },
//   { id: 7, categori: "인테리어" },
//   { id: 8, categori: "부동산" },
//   { id: 9, categori: "유틸" },
//   { id: 10, categori: "금융" },
//   { id: 11, categori: "종교" },
//   { id: 12, categori: "교육" },
//   { id: 13, categori: "의료/병원" },
//   { id: 14, categori: "교통" },
//   { id: 15, categori: "육아/출산" },
//   { id: 16, categori: "우주/외계인" },
//   { id: 17, categori: "공유 서비스" },
//   { id: 18, categori: "이커머스" },
//   { id: 19, categori: "날씨" },
//   { id: 20, categori: "자연" },
//   { id: 21, categori: "동물/식물" },
//   { id: 22, categori: "음식/요리" },
// ];

export default function MyPageEditPresenter(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.TopContainer>
            <S.UserImageBox>
              <S.UserImage>
                <S.UserEditImage src="/profile_edit.png" />
              </S.UserImage>
            </S.UserImageBox>
            <S.UserNameBox>
              <S.UserNickname>
                {props.data?.fetchLoginedUser.nickname}
              </S.UserNickname>
              <S.UserEmail>{props.data?.fetchLoginedUser.email}</S.UserEmail>
            </S.UserNameBox>
          </S.TopContainer>
          <S.MainContainer>
            <S.UserInfo>
              <S.Title>닉네임 변경</S.Title>
              <S.Input
                id="nickname"
                placeholder="변경하실 닉네임을 입력해주세요."
                defaultValue={props.data?.fetchLoginedUser.nickname}
                onChange={props.onChangeInputs}
              />
            </S.UserInfo>
            <S.UserInfo>
              <S.Title>키워드 변경</S.Title>
              <S.Input placeholder="키워드를 입력하세요" />
            </S.UserInfo>
            <S.KeywordBox>
              <S.Keyword>#비오는날엔 쉬고싶은</S.Keyword>
            </S.KeywordBox>
            <S.UserInfo>
              <S.Title>관심 분야</S.Title>
              <S.CategoriTable>
                {FAVORITE_CATEGORIES.map((el: any) => (
                  <S.Category key={uuidv4()}>
                    <S.CategoryBox>
                      <S.SelectInput
                        type="checkbox"
                        name="categori"
                        id={el}
                        onChange={props.onChangeCategori}
                        checked={props.items.includes(el) ? true : false}
                      />
                      {el}
                    </S.CategoryBox>
                  </S.Category>
                ))}
              </S.CategoriTable>
            </S.UserInfo>
            <S.UserInfo>
              <S.SkillBox>
                <S.Title>모집 기술</S.Title>
                <S.SkillButton>모집 기술 편집</S.SkillButton>
              </S.SkillBox>
              <S.TagBox>
                <S.Tag>Vue</S.Tag>
              </S.TagBox>
            </S.UserInfo>
            <S.UdpateButton onClick={props.onUpdateButton}>
              수정하기
            </S.UdpateButton>
            <S.Line />
            <S.ChangePassword>비밀번호 변경하기</S.ChangePassword>
            <S.ResignButton>회원 탈퇴</S.ResignButton>
          </S.MainContainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
