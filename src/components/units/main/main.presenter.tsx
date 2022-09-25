import * as S from "./main.styles";
import { v4 as uuidv4 } from "uuid";
import { IMainUIProps } from "./main.types";
import {
  IBoard,
  IQuery,
  IQueryFetchLikesArgs,
} from "../../../commons/types/generated/types";
import Link from "next/link";
import MainUISliderItem from "./main.presenterSliderItem";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../commons/store";
import { useQuery } from "@apollo/client";
import { FETCH_LIKES } from "./main.queries";
import moment from "moment";

import { useState } from "react";
import { useRouter } from "next/router";
import AdBanner from "../../commons/layout/adBanner";

const FAVORITE_CATEGORIES = [
  "공유 서비스",
  "여행",
  "이커머스",
  "O2O",
  "엔터테인먼트",
  "모빌리티",
  "뷰티/패션",
  "헬스/스포츠",
];

export default function MainUI(props: IMainUIProps) {
  const [dragging, setDragging] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const router = useRouter();

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    dragging: false,

    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const { data } = useQuery<Pick<IQuery, "fetchLikes">, IQueryFetchLikesArgs>(
    FETCH_LIKES,
    {
      variables: { userId: userInfo.id },
    }
  );

  return (
    <S.Wrapper>
      {/* 리스트1 */}
      <S.Section>
        <S.SectionInfo>
          <S.Exiting>exting</S.Exiting>
          <S.Row>
            <S.SectionTitle>
              {userInfo.nickname && `${userInfo.nickname}님을 기다리는 `}
              다양한 신규 프로젝트
            </S.SectionTitle>
            <S.ListLink>
              <Link href="/exiting">
                <S.More>전체 프로젝트 더보기</S.More>
              </Link>
            </S.ListLink>
          </S.Row>
        </S.SectionInfo>
        <S.SliderWrapper>
          <S.ListSlider {...settings}>
            {/* 최신순 게시물 10개 */}
            {props.data?.fetchBoards
              .slice(0, 10)
              .filter(
                (el: IBoard) =>
                  moment().diff(moment(el?.closedAt), "days") < 0 &&
                  moment().diff(moment(el?.closedAt), "days") >
                    moment().diff(moment(el?.startAt), "days") &&
                  moment().diff(moment(el?.startAt), "days") < 0
              )
              .map((el: IBoard) => (
                <MainUISliderItem key={uuidv4()} el={el} likedBoards={data} />
              ))}
          </S.ListSlider>
        </S.SliderWrapper>
      </S.Section>
      {/* 리스트2: 분야1 */}
      <S.Section>
        <S.SectionInfo>
          <S.Exiting>exting</S.Exiting>
          <S.Row>
            <S.SectionTitle>공유서비스 분야 프로젝트</S.SectionTitle>
            <S.ListLink>
              <Link href="/exiting">
                <S.More>전체 프로젝트 더보기</S.More>
              </Link>
            </S.ListLink>
          </S.Row>
        </S.SectionInfo>
        <S.SliderWrapper>
          <S.ListSlider {...settings}>
            {props.data?.fetchBoards
              .filter(
                (el: IBoard) =>
                  el.categories?.[0]?.name === "공유서비스" &&
                  moment().diff(moment(el?.startAt), "days") < 0
              )
              .slice(0, 10)
              .map((el: IBoard) => (
                <MainUISliderItem key={uuidv4()} el={el} likedBoards={data} />
              ))}
          </S.ListSlider>
        </S.SliderWrapper>
      </S.Section>
      {/* 리스트3: 분야2 */}
      <S.Section>
        <S.SectionInfo>
          <S.Exiting>exting</S.Exiting>
          <S.Row>
            <S.SectionTitle>여행 분야 프로젝트</S.SectionTitle>
            <S.ListLink>
              <Link href="/exiting">
                <S.More>전체 프로젝트 더보기</S.More>
              </Link>
            </S.ListLink>
          </S.Row>
        </S.SectionInfo>
        <S.SliderWrapper>
          <S.ListSlider {...settings}>
            {props.data?.fetchBoards
              .slice(0, 10)
              .filter(
                (el: IBoard) =>
                  el.categories?.[0]?.name === "여행" &&
                  moment().diff(moment(el?.startAt), "days") < 0
              )
              .map((el: IBoard) => (
                <MainUISliderItem key={uuidv4()} el={el} likedBoards={data} />
              ))}
          </S.ListSlider>
        </S.SliderWrapper>
      </S.Section>
      <AdBanner />
      <S.Section>
        <S.SectionInfo>
          <S.SectionTitle>인기 카테고리</S.SectionTitle>
        </S.SectionInfo>
        <S.CategoriesWrapper>
          <S.Inner>
            {FAVORITE_CATEGORIES.map((el: string) => (
              <S.Category
                key={uuidv4()}
                onClick={() => {
                  router.push("/exiting");
                }}
              >
                {el}
              </S.Category>
            ))}
          </S.Inner>
        </S.CategoriesWrapper>
      </S.Section>
      <S.Section>
        <S.CustomBanner>
          <img src="/white-logo.svg" />
          <S.CustomText>
            {userInfo.nickname ? `${userInfo.nickname}님을 ` : "당신을 "}
            기다리는 다양한 신규 프로젝트
          </S.CustomText>
        </S.CustomBanner>
      </S.Section>
    </S.Wrapper>
  );
}
