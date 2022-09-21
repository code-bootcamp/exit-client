import Payment from "../../payments";
import * as S from "./paymentModal.styles";
export default function PaymentModalUI(props: any) {
  return (
    <>
      <S.Background>
        <S.Wrapper>
          <S.Container>
            <S.CloseButton
              onClick={props.onClickClose}
              src={"/icons/icon_close.png"}
            />
            <S.Header>
              <S.MiniTitle>포인트 충전하기</S.MiniTitle>
            </S.Header>
            <S.Main>
              <S.MyPointBox>
                <S.MyPointTitle>충전 후 포인트</S.MyPointTitle>
                <S.MyPoint>
                  {props.data?.fetchLoginedUser.point
                    ? props.point + props.data?.fetchLoginedUser.point
                    : props.point}
                </S.MyPoint>
              </S.MyPointBox>
              <S.SelectPointBox>
                <S.SeleteTitle>충전하실 금액을 선택해주세요</S.SeleteTitle>
                <S.SelectMoneyBox>
                  <S.Money value={10000} onClick={props.onClickPoint}>
                    10000P
                  </S.Money>
                  <S.Money value={30000} onClick={props.onClickPoint}>
                    30000P
                  </S.Money>
                  <S.Money value={50000} onClick={props.onClickPoint}>
                    50000P
                  </S.Money>
                  <S.Money value={100000} onClick={props.onClickPoint}>
                    100000P
                  </S.Money>
                  <S.Money value={200000} onClick={props.onClickPoint}>
                    200000P
                  </S.Money>
                  <S.Money value={300000} onClick={props.onClickPoint}>
                    300000P
                  </S.Money>
                  <S.Money value={400000} onClick={props.onClickPoint}>
                    400000P
                  </S.Money>
                  <S.Money value={100} onClick={props.onClickPoint}>
                    500000P
                  </S.Money>
                </S.SelectMoneyBox>
                <S.SelectButtonBox>
                  <S.ResetButton
                    value={props.point + props.data?.fetchLoginedUser.point}
                    onClick={props.onClickPoint}
                  >
                    초기화
                  </S.ResetButton>
                  <Payment point={props.point}>결제</Payment>
                </S.SelectButtonBox>
              </S.SelectPointBox>
            </S.Main>
          </S.Container>
        </S.Wrapper>
      </S.Background>
    </>
  );
}
