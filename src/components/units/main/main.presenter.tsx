import * as S from "./main.styles";
import { v4 as uuidv4 } from "uuid";
import { IMainUIProps } from "./main.types";
import { IBoard } from "../../../commons/types/generated/types";
import Link from "next/link";
import MainUISliderItem from "./main.presenterSliderItem";

export default function MainUI(props: IMainUIProps) {
  console.log(props.data);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <S.Wrapper>
      <S.Section>
        <S.Inner>
          <S.SectionInfo>
            <S.ListTitle>새로운 프로젝트를 찾아보세요</S.ListTitle>
            <Link href="/projects">
              <S.More>신규 프로젝트 더보기</S.More>
            </Link>
          </S.SectionInfo>
        </S.Inner>
        <S.SliderWrapper>
          <S.ListSlider {...settings}>
            {props.data?.fetchBoards.map((el: IBoard) => (
              <MainUISliderItem el={el} key={uuidv4()} />
            ))}
          </S.ListSlider>
        </S.SliderWrapper>
      </S.Section>
      <S.Section>
        <S.Inner>
          <S.SectionInfo>
            <S.ListTitle>인기있는 프로젝트를 확인해보세요</S.ListTitle>
            <Link href="/projects">
              <S.More>신규 프로젝트 더보기</S.More>
            </Link>
          </S.SectionInfo>
        </S.Inner>
        <S.SliderWrapper>
          <S.ListSlider {...settings}>
            {props.data?.fetchBoards.map((el: IBoard) => (
              <MainUISliderItem el={el} key={uuidv4()} />
            ))}
          </S.ListSlider>
        </S.SliderWrapper>
      </S.Section>
    </S.Wrapper>
  );
}
