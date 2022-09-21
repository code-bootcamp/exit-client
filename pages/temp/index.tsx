import axios from "axios";

const MapApi = async () => {
  try {
    const result = await axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=37.566826,126.9786567&key=AIzaSyCOr5GLVd5UuMVfEruBcjE2i3WYUU3Tt_s`
      )
      .then((res) => {
        // console.log(res);
        const result = res.data.results[5].formatted_address.slice(5);
        console.log(result);
        return result;
      });
    console.log(result);
    return result;
  } catch (error) {
    // console.log(error.message);
  }
};

export default function BoardsPage() {
  return <div onClick={MapApi}>안녕하세요</div>;
}
