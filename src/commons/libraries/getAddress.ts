import axios from "axios";

export const getAddress = async (lat: any, lng: any) => {
  try {
    const result = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCOr5GLVd5UuMVfEruBcjE2i3WYUU3Tt_s`
    );

    return result.data.results[5].formatted_address.slice(5);
  } catch (error) {}
};
