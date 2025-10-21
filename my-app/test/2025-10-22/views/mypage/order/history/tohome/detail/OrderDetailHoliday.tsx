'use client';

import { Container, Contents } from '@widgets/layout/Container';
import {
  OrderTopInfo,
  PaymentInfo,
  RefundInfo,
  OrdererInfo,
} from '@/views/mypage/order/detail/components';
import {
  OrderHistoryAddress,
  BoxInfo,
  ReceiverInfo,
} from '@/views/mypage/order/history/components';
import { OrderDeliveryData } from '@/views/mypage/order/history/components/HistoryDeliveryGroup';
import {
  mockCommonOrder,
  mockRefundInfoData2,
  mockToHomeHolidayDetailList,
  mockToHomeExtraPayment,
  mockGiftInfo,
} from '@mocks/history';

import styles from './OrderDetail.module.scss';

export default function OrderDetailHoliday() {
  // mock 데이터 가져오기
  const { orderer, topInfo, deliveryAddress } = mockCommonOrder;

  // 주문상품
  const orderData = mockToHomeHolidayDetailList as OrderDeliveryData[];

  return (
    <Container showBack title="주문 상세 정보 - 명절배송">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} sideSlot="명절배송" />
        {/* 선물 받는 분 */}
        <ReceiverInfo
          data={{
            name: '김*대',
            phone: '010-****-5678',
            message: `작년 한 해 수고해 주신 노고에 깊은 감사를 드리며,\n올 해도 뜻깊은 한 해가 되시기 바랍니다.`,
            isRejected: true,
          }}
          bottomSlot={<>하단슬롯(상품목록)</>}
        />
        {/* 사은품 정보 */}
        <BoxInfo title="사은품 정보" data={mockGiftInfo} />
        {/* 배송지 */}
        <OrderHistoryAddress data={deliveryAddress[0]} />
        {/* 결제정보 */}
        <PaymentInfo title="결제정보" data={mockToHomeExtraPayment} />
        {/* 환불 정보 */}
        <RefundInfo title="환불정보" totalTitle="총 환불금액" data={mockRefundInfoData2} />
        {/* 주문자 정보 */}
        <OrdererInfo data={{ ...orderer, email: undefined }} hideMaskingBtn />
      </Contents>
    </Container>
  );
}
