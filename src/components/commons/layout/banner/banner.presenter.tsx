import * as S from "./banner.styles";

const BANNER_SOURCES = [
  {
    title: "취준에서 취업으로 가는 프로젝트,\n지금 바로 exit",
    description: (
      <>
        <span>{"팀원들과 함께 프로젝트를 do it! "}</span>
        <span>{"프로젝트 보상을 get it! "}</span>
        <span>{"취준은 exit!"}</span>
      </>
    ),
    descriptionColor: "#fff",
    src: "/banner/banner1.png",
  },
  {
    title: "취준에서 취업으로 가는 프로젝트,\n지금 바로 exit",
    description: (
      <>
        <span>{"팀원들과 함께 프로젝트를 do it! "}</span>
        <span>{"프로젝트 보상을 get it! "}</span>
        <span>{"취준은 exit!"}</span>
      </>
    ),
    descriptionColor: "#b2b2b2",
    src: "/banner/banner2.png",
  },
  {
    title: "취준에서 취업으로 가는 프로젝트,\n지금 바로 exit",
    description: (
      <>
        <span>{"팀원들과 함께 프로젝트를 do it! "}</span>
        <span>{"프로젝트 보상을 get it! "}</span>
        <span>{"취준은 exit!"}</span>
      </>
    ),
    descriptionColor: "#fff",
    src: "/banner/banner3.png",
  },
];

export default function BannerUI() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Visual>
      <S.BannerSlider {...settings}>
        {BANNER_SOURCES.map((el, i) => (
          <S.BannerItem key={i} src={el.src}>
            <S.Inner>
              <S.BannerTextWrapper>
                <S.BannerTitle>{el.title}</S.BannerTitle>
                <S.BannerDescription descriptionColor={el.descriptionColor}>
                  {el.description}
                </S.BannerDescription>
              </S.BannerTextWrapper>
            </S.Inner>
          </S.BannerItem>
        ))}
      </S.BannerSlider>
    </S.Visual>
  );
}
