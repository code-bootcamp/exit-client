import Link from "next/link";
import * as S from "./main.styles";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { IMainUIProps } from "./main.types";
import { IBoard } from "../../../commons/types/generated/types";
import { useRouter } from "next/router";
import AdBanner from "../../commons/layout/adBanner";
import Carousel from "../../commons/slider";
import MainUIPresenterItem from "./main.presenterItem";

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
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.Inner>
        <S.Section>
          <S.SectionHead>
            <div>
              <S.Exiting>exting</S.Exiting>
              <S.SectionTitle>
                {props.userInfo.nickname &&
                  `${props.userInfo.nickname}님을 기다리는 `}
                다양한 신규 프로젝트
              </S.SectionTitle>
            </div>
            <Link href="/exiting">
              <S.More>전체 프로젝트 더보기</S.More>
            </Link>
          </S.SectionHead>
          <S.SectionBody>
            <S.CarouselWrapper>
              <Carousel>
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
                    <MainUIPresenterItem
                      key={uuidv4()}
                      el={el}
                      likesData={props.likesData}
                    />
                  ))}
              </Carousel>
            </S.CarouselWrapper>
          </S.SectionBody>
        </S.Section>
        <S.Section>
          <S.SectionHead>
            <div>
              <S.Exiting>exting</S.Exiting>
              <S.SectionTitle>공유서비스</S.SectionTitle>
            </div>
            <Link href="/exiting">
              <S.More>전체 프로젝트 더보기</S.More>
            </Link>
          </S.SectionHead>
          <S.SectionBody>
            <S.CarouselWrapper>
              <Carousel>
                {props.categoryData1?.fetchBoards
                  .filter(
                    (el: IBoard) =>
                      el.categories?.[0]?.name === "공유서비스" &&
                      moment().diff(moment(el?.closedAt), "days") < 0 &&
                      moment().diff(moment(el?.closedAt), "days") >
                        moment().diff(moment(el?.startAt), "days") &&
                      moment().diff(moment(el?.startAt), "days") < 0
                  )
                  .slice(0, 10)
                  .map((el: IBoard) => (
                    <MainUIPresenterItem
                      key={uuidv4()}
                      el={el}
                      likesData={props.likesData}
                    />
                  ))}
              </Carousel>
            </S.CarouselWrapper>
          </S.SectionBody>
        </S.Section>
        <S.Section>
          <S.SectionHead>
            <div>
              <S.Exiting>exting</S.Exiting>
              <S.SectionTitle>여행</S.SectionTitle>
            </div>
            <Link href="/exiting">
              <S.More>전체 프로젝트 더보기</S.More>
            </Link>
          </S.SectionHead>
          <S.SectionBody>
            <S.CarouselWrapper>
              <Carousel>
                {props.categoryData2?.fetchBoards
                  .filter(
                    (el: IBoard) =>
                      el.categories?.[0]?.name === "여행" &&
                      moment().diff(moment(el?.closedAt), "days") < 0 &&
                      moment().diff(moment(el?.closedAt), "days") >
                        moment().diff(moment(el?.startAt), "days") &&
                      moment().diff(moment(el?.startAt), "days") < 0
                  )
                  .slice(0, 10)
                  .map((el: IBoard) => (
                    <MainUIPresenterItem
                      key={uuidv4()}
                      el={el}
                      likesData={props.likesData}
                    />
                  ))}
              </Carousel>
            </S.CarouselWrapper>
          </S.SectionBody>
        </S.Section>
      </S.Inner>
      <AdBanner />
      <S.Inner>
        <S.Section>
          <S.SectionHead>
            <S.SectionTitle>인기 카테고리</S.SectionTitle>
          </S.SectionHead>
          <S.SectionBody>
            <S.CategoriesWrapper>
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
            </S.CategoriesWrapper>
            <S.ProjectBanner>
              <img src="/white-logo.svg" />
              <S.ProjectBannerText>
                {props.userInfo.nickname
                  ? `${props.userInfo.nickname}님을 `
                  : "당신을 "}
                기다리는 다양한 신규 프로젝트
              </S.ProjectBannerText>
            </S.ProjectBanner>
          </S.SectionBody>
        </S.Section>
      </S.Inner>
    </S.Wrapper>
  );
}
