import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import Head from "next/head";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { userInfoState } from "../store";
import { message } from "antd";
declare const window: typeof globalThis & {
  IMP: any;
};
const CERATE_PAYMENT = gql`
  mutation createPayment($impUid: String!, $amount: Int!) {
    createPayment(impUid: $impUid, amount: $amount) {
      id
      impUid
      amount
    }
  }
`;
export default function Payment(props: any) {
  const router = useRouter();
  const [userInfo] = useRecoilState(userInfoState);
  const [createPayment] = useMutation(CERATE_PAYMENT);

  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp61031678"); // Example: imp00000000

    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        name: "exit 포인트 충전",
        amount: Number(props.point), //  변경해야됨
        buyer_email: userInfo.email,
        buyer_name: userInfo.nickname,
        buyer_tel: "010-2745-5704",
        buyer_addr: "서울특별시 구로구 구로동",
        buyer_postcode: "01181",
        m_redirect_url: `http://localhost:3000/myPage/${userInfo.id}`, // 변경해야됨
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          await createPayment({
            variables: {
              impUid: rsp.imp_uid,
              amount: Number(props.point),
            },
          });
          router.push(`/`);
        } else {
          message.error("결제에 실패했습니다! 다시 시도해주세요");
        }
      }
    );
  };

  const Button = styled.button`
    font-weight: 400;
    width: 310px;
    height: 70px;
    border-radius: 14px;
    color: #fff;
    background-color: #3ebd5d;
    font-size: 24px;
  `;

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Button onClick={onClickPayment}>충전하기</Button>
    </>
  );
}
