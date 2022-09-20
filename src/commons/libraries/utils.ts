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
  여행: "/categories/category_travel.png", // "5af86a3f-7821-47fd-9e7b-587e21dd6dbf"
  SNS: "/categories/category_socialNetwork.png", // "2b8fe2a5-c6e4-44fc-bfb2-6b8aa71350b8"
  게임: "/categories/category_game.png", //"3c7dc000-addb-47c6-ba65-0efd26e3bec9"
  엔터테인먼트: "/categories/category_entertainment.png", //"bc2864bc-9775-452c-a7b8-8de4dec00599"
  인테리어: "/categories/category_reality_interior.png", //"5c4cc577-8784-4a03-81c9-bad28eb789e7"
  유틸: "/categories/category_util.png", //"9aa1ed60-a822-45eb-98c0-9ee46cd0eb4c"
  금융: "/categories/category_finance.png", //"af99b853-7674-4295-8c46-09d6ee32e5ba"
  종교: "/categories/category_religion.png", //"97002648-cbbd-4045-9ac3-755eaf37042b"
  교육: "/categories/category_education.png", //"01c9a000-c777-47bd-a99d-ecd2e42d673e"
  교통: "/categories/category_mobility.png", // "0314c642-7016-4103-9ade-129ccbfb4480"
  공유서비스: "/categories/category_O2O.png", //"17a6ae72-4567-40d4-af9e-2d76e002c979"
  이커머스: "/categories/category_eCommerce.png", //"337a488b-7883-4106-a8f0-3804e8d62657"
  부동산: "categories/category_reality.png", // "cd10e271-e8ec-4bd8-8c06-8f55dd8400d1"
  날씨: "/categories/category_weather.png", //"bbd5eaa4-e756-4f7a-8965-f795a371badc"
  자연: "/categories/category_nature.png", //"026f6905-b51a-46a7-a8d9-057eb0befdaa"
  "뷰티/패션": "/categories/category_beauty_fashion.png", //"d37b36f9-2dbc-47d2-92b5-db701e718b1b"
  "건강/스포츠": "/categories/category_health_sports.png", //"21613562-6ab7-4f09-a51d-d93c0e3e6f65"
  "뉴스/정보": "/categories/category_news_information.png", //03760f48-3aaa-4cc2-97d5-bc97f0eb86f3"
  "의료/병원": "/categories/category_medical.png", //"144abf77-0b49-47a1-be8c-c422a5cb1bd5"
  "육아/출산": "/categories/category_parenting.png", //"ff5ea4cc-d26b-446b-bca4-bb9e5a8f9f64"
  "우주/외계인": "/categories/category_space_alien.png", //ef141e4e-471f-4890-861c-ab16a46401f9"
  "동물/식물": "/categories/category_animal_plant.png", //3ede45dc-a95e-439f-8e3b-7c6a09cbd134
  "음식/요리": "/categories/category_food_cooking.png", //"6ac2df43-8ebc-4547-b037-a92c14dd94d9"
};
