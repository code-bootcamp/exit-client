import axios from "axios";

export const alterAddress = (x,y) => {
  const result = axios.get("dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${x}&y=${y}`,
  { headers: { Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}` } }
).then((result) => {
//법정동 기준으로 동단위의 값을 가져온다
  let location = result.documents[0].region_3depth_name;

})


};
