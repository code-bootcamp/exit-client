import axios from "axios";

const MapApi = async () => {
  try {
    let response = await axios
      .get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${37.49676871972202}&y=${127.02474726969814}`,
        {
          headers: {
            Authorization: "KakaoAK 3b615e9d03ff8134c0b585469947ac13",
          },
        }
      )
      .then((response) => {
        const location = response.data.documents[0];
        console.log({
          location,
          // si: location.address.region_1depth_name,
          // gu: location.address.region_2depth_name,
          // dong: location.address.region_3depth_name,

          // locationX: location.address.x,
          // locationY: location.address.y,
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};

export default function BoardsPage() {
  return <div onClick={MapApi}>안녕하세요</div>;
}
