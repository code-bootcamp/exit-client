import axios from "axios";

export const getAddress = async (lat: any, lng: any) => {
  const result = await axios.get(
    `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lng}&y=${lat}`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.KAKAO_LOCAL_API_KEY}`,
      },
    }
  );
  return result.data.documents?.[0]?.address_name;
};
