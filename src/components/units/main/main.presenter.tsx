import * as S from "./main.styles";
import { v4 as uuidv4 } from "uuid";

export default function MainUI() {
  const settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    // responsive: [
    //   {
    //     breakpoint: 768, // 화면의 넓이가 768px 이상일 때
    //     settings: {
    //       slidesToShow: 3,
    //       // slidesToScroll: 1
    //     },
    //   },
    //   {
    //     breakpoint: 320, // 화면의 넓이가 320px 이상일 때
    //     settings: {
    //       slidesToShow: 2,
    //       // slidesToScroll: 1
    //     },
    //   },
    // ],
  };
  return (
    <S.Wrapper>
      <S.Inner>
        <S.ListTitle>프로젝트 리스트</S.ListTitle>
      </S.Inner>
      <S.ListSlider {...settings}>
        {new Array(8).fill(0).map((el) => (
          <S.ListItem key={uuidv4()}>
            <S.ThumbnailWrapper>
              <S.ImageWrapper>
                <S.Image id="thumbnail" src="/itemImage.png"></S.Image>
              </S.ImageWrapper>
              <S.Status>모집중 3/5</S.Status>
              <S.Like>♥451</S.Like>
              <S.Background id="background" />
            </S.ThumbnailWrapper>
            <S.ContentsWrapper>
              <S.ItemTitle>개발 포트폴리오 팀 멤버 모집합니다</S.ItemTitle>
              <S.ItemWriter>작성자: I6</S.ItemWriter>
              <S.IconWrapper>
                <S.Icon>
                  <img src="/javascript-original.svg" />
                </S.Icon>
                <S.Icon>
                  <img src="/figma-original.svg" />
                </S.Icon>
                <S.Icon>
                  <img src="/react-original.svg" />
                </S.Icon>
              </S.IconWrapper>
              <S.Date>2022.10.01 ~ 2022.12.31</S.Date>
            </S.ContentsWrapper>
          </S.ListItem>
        ))}
      </S.ListSlider>
      <S.Inner>
        <S.ListTitle>유료 리스트</S.ListTitle>
      </S.Inner>
      <S.ListSliderWrapper>
        <S.ListSlider {...settings}>
          {new Array(8).fill(0).map((el) => (
            <S.PremiumListItem key={uuidv4}>
              <S.PremiumBackground>
                <S.Notice>유료 멤버만 볼 수 있는 리스트예요!</S.Notice>
                <S.Button>지금 바로 유료 가입 &gt; </S.Button>
              </S.PremiumBackground>
              <S.ThumbnailWrapper>
                <S.ImageWrapper>
                  <S.Image id="thumbnail" src="/itemImage.png"></S.Image>
                </S.ImageWrapper>
                <S.Status>모집중 3/5</S.Status>
                <S.Like>♥451</S.Like>
                <S.Background id="background" />
              </S.ThumbnailWrapper>
              <S.ContentsWrapper>
                <S.ItemTitle>개발 포트폴리오 팀 멤버 모집합니다</S.ItemTitle>
                <S.ItemWriter>작성자: I6</S.ItemWriter>
                <S.IconWrapper>
                  <S.Icon>
                    <img src="/javascript-original.svg" />
                  </S.Icon>
                  <S.Icon>
                    <img src="/figma-original.svg" />
                  </S.Icon>
                  <S.Icon>
                    <img src="/react-original.svg" />
                  </S.Icon>
                </S.IconWrapper>
                <S.Date>2022.10.01 ~ 2022.12.31</S.Date>
              </S.ContentsWrapper>
            </S.PremiumListItem>
          ))}
        </S.ListSlider>
      </S.ListSliderWrapper>
    </S.Wrapper>
  );
}
