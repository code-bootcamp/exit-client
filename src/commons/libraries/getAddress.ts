import axios from "axios";

export const getAddress = (lat: any, lng: any) => async () => {
  try {
    const result = await axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=37.566826,126.9786567&key=AIzaSyCOr5GLVd5UuMVfEruBcjE2i3WYUU3Tt_s`
      )
      .then((res) => {
        const result = res.data.results[5].formatted_address.slice(5);
        return result;
      });
    return result;
  } catch (error) {}
};
