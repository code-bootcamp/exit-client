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
    <S.Visual>
      <S.BannerSlider {...settings}>
        <S.BannerItem>
          <S.Inner>
            <S.BannerImageWrapper>
              <img src="banner.png" />
            </S.BannerImageWrapper>
            <S.BannerTextWrapper>
              <S.BannerTitle>
                취준에서 취업으로 가는 프로젝트, 지금 바로 exit
              </S.BannerTitle>
              <S.BannerSubTitle>
                팀원들과 함께 프로젝트를 do it! 프로젝트 보상을 get it! 취준은
                exit!
              </S.BannerSubTitle>
            </S.BannerTextWrapper>
          </S.Inner>
        </S.BannerItem>
      </S.BannerSlider>
    </S.Visual>
  );
}
