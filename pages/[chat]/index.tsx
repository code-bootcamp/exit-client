import { useQuery } from "@apollo/client";
import ChatContainer from "../../src/components/commons/chat/01/chat.container";
import ToggleButtonContainenr from "../../src/components/commons/layout/toggleButton/toggleButton.contaier";
import MiniMypageContainer from "../../src/components/commons/modal/miniMypageModal/miniMypage.container";
import PaymentModalContainer from "../../src/components/commons/modal/paymentModal/paymentModal.contaner";
import { FETCH_LOGINED_USER } from "../../src/components/units/member/login/login.queries";
import WriteContainer from "../../src/components/units/projects/write02/write.container";

export default function ChatTest() {
  const { data } = useQuery(FETCH_LOGINED_USER);

  return <ChatContainer data={data} />;
  // return <PaymentModalContainer />;
  // return <MiniMypageContainer />;
  // return <ToggleButtonContainenr />;
  // return <WriteContainer />;
}
