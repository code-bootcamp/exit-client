interface ICategoriesImgSources {
  [key: string]: string | undefined;
}

export const getDate = (value: string) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export const categoriesImgSources: ICategoriesImgSources = {
  여행: "/categories/category_travel.png",
  SNS: "/categories/category_socialNetwork.png",
  게임: "/categories/category_game.png",
  엔터테인먼트: "/categories/category_entertainment.png",
  인테리어: "/categories/category_reality_interior.png",
  유틸: "/categories/category_util.png",
  금융: "/categories/category_finance.png",
  종교: "/categories/category_religion.png",
  교육: "/categories/category_education.png",
  교통: "/categories/category_mobility.png",
  공유서비스: "/categories/category_O2O.png",
  이커머스: "/categories/category_eCommerce.png",
  부동산: "categories/category_reality.png",
  날씨: "categories/category_weather.png",
  자연: "categories/category_nature.png",
  "뷰티/패션": "/categories/category_beauty_fashion.png",
  "건강/스포츠": "/categories/category_health_sports.png",
  "뉴스/정보": "/categories/category_news_information.png",
  "의료/병원": "/categories/category_medical.png",
  "육아/출산": "/categories/category_parenting.png",
  "우주/외계인": "/categories/category_space_alien.png",
  "동물/식물": "/categories/category_animal_plant.png",
  "음식/요리": "/categories/category_food_cooking.png",
};
