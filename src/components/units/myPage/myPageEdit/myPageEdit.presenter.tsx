import { PossibleTypeExtensionsRule } from "graphql";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Check from "../../../commons/categori";
import TagsModal from "../../../commons/modal/tagsModal/tagsModal.container";
import Uploads01 from "../../../commons/uploads/02/Uploads.container";
import ChangePassword from "../../member/changePassword/changePassword.container";

import * as S from "./myPageEdit.styles";

const FAVORITE_CATEGORIES = [
  "여행",
  "SNS",
  "뷰티/패션",
  "엔터테인먼트",
  "게임",
  "건강/스포츠",
  "뉴스/정보",
  "인테리어",
  "부동산",
  "유틸",
  "금융",
  "종교",
  "교육",
  "의료/병원",
  "교통",
  "육아/출산",
  "우주/외계인",
  "공유서비스",
  "이커머스",
  "날씨",
  "자연",
  "동물/식물",
  "음식/요리",
];

export default function MyPageEditPresenter(props: any) {
  return (
    <>
      {props?.isModalVisible && props?.modal === "isEditingTags" && (
        <TagsModal onClickClose={props.onClickClose} />
      )}
      {props?.isModalVisible && props?.modal === "isChangingPassword" && (
        <ChangePassword onClickClose={props.onClickClose} />
      )}
      <S.Wrapper>
        <S.Container>
          <S.TopContainer>
            <S.UserImageBox>
              <Uploads01
                key={uuidv4()}
                fileUrl={props.fileUrl}
                onChangeFileUrl={props.onChangeFileUrl}
              />
              <S.UserEditImage src="/profile_edit.png" />
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
                type="text"
                placeholder="변경하실 닉네임을 입력해주세요."
                defaultValue={props.data?.fetchLoginedUser.nickname}
                onChange={props.onChangeNickname}
              />
            </S.UserInfo>
            <S.UserInfo>
              <S.Title>키워드 변경</S.Title>
              <S.Input
                placeholder="키워드를 입력하세요"
                onKeyPress={props.onPushKeywords}
                onChange={props.onChangeKeyword}
              />
            </S.UserInfo>
            <S.KeywordBox>
              {props.keywordBox?.map((el, index) => (
                <S.Key key={uuidv4()}>
                  <S.Keyword
                    onClick={props.onClickDeleteKey}
                    id={props.keywordBox[index]}
                  >
                    # {props.keywordBox[index]} x
                  </S.Keyword>
                </S.Key>
              ))}
            </S.KeywordBox>
            <S.UserInfo>
              <S.Title>포트폴리오 & 블로그</S.Title>
              <S.Input
                placeholder="주소를 입력하세요"
                type="text"
                onChange={props.onChangeUserUrl}
                defaultValue={props.data?.fetchLoginedUser.userUrl}
              />
            </S.UserInfo>
            <S.UserInfo>
              <S.Title>관심 분야</S.Title>

              <S.CategoriTable>
                {FAVORITE_CATEGORIES.map((el: any) => (
                  <S.Category key={uuidv4()}>
                    <S.CategoryBox>
                      <S.SelectInput
                        type="checkbox"
                        id={el}
                        checked={props.items.includes(el) ? true : false}
                        onClick={props.onClickCategori}
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
                <S.SkillButton onClick={props.onClickTagsEditing}>
                  모집 기술 편집
                </S.SkillButton>
              </S.SkillBox>
              <S.TagBox>
                {props.tags?.map((el: string) => (
                  <S.Tag>{el}</S.Tag>
                ))}
              </S.TagBox>
            </S.UserInfo>
            <S.UdpateButton onClick={props.onUpdateButton}>
              수정하기
            </S.UdpateButton>
            <S.Line />
            <S.ChangePassword onClick={props.onClickChangePassword}>
              비밀번호 변경하기
            </S.ChangePassword>
            <S.ResignButton onClick={props.onClickRemoveUser}>
              회원 탈퇴
            </S.ResignButton>
          </S.MainContainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
