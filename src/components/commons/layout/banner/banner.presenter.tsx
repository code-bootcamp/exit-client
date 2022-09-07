import * as S from "./banner.styles";

export default function BannerUI() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <S.Wrapper>
      <S.BannerSlider {...settings}>
        <S.BannerItem>
          <S.BannerImage src="/banner.png" />
        </S.BannerItem>
        <S.BannerItem>
          <S.BannerImage src="/banner.png" />
        </S.BannerItem>
        <S.BannerItem>
          <S.BannerImage src="/banner.png" />
        </S.BannerItem>
      </S.BannerSlider>
    </S.Wrapper>
  );
}
