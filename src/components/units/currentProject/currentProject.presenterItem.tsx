import { useEffect, useState } from "react";
import { getAddress } from "../../../commons/libraries/getAddress";
import * as S from "./currentProject.styles";
import { ICurrentProjectUIItemProps } from "./currentProject.types";

export default function CurrentProjectUIItem(
  props: ICurrentProjectUIItemProps
) {
  const [location, setLocation] = useState("");

  const fetchData = async () => {
    const result = await getAddress(props.lat, props.lng);
    setLocation(result);
  };

  useEffect(() => {
    if (!!props.lat && !!props.lng) {
      fetchData();
    }
  }, [props]);

  return <S.PresentAddress>{location || ""}</S.PresentAddress>;
}
