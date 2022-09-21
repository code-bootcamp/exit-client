import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_LOGINED_USER } from "../../../units/member/join/join.queries";
import PaymentModalUI from "./paymentModal.presenter";

export default function PaymentModalContainer(props: any) {
  const [point, setPoint] = useState(0);

  const onClickPoint = (event: any) => {
    setPoint(event.target.value);
  };
  const { data } = useQuery(FETCH_LOGINED_USER);

  const onClickClose = () => {
    props.setVisible(false);
  };

  return (
    <>
      <PaymentModalUI
        onClickClose={onClickClose}
        onClickPoint={onClickPoint}
        point={point}
        data={data}
      />
    </>
  );
}
