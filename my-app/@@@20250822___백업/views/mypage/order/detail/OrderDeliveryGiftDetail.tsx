'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import {
  OrderTopInfo,
  PurchaseGiftInfo,
  PaymentInfo,
  ExpectedPoint,
  PaymentApprovalInfo,
  RefundInfo,
  OrdererInfo,
  GiftReceiverInfo,
} from '@/views/mypage/order/detail/components';
import { mockOrderDetailItemsCase } from '@mocks/myorder';
import { mockCommonOrder } from '@mocks/myorder';
import styles from './OrderDeliveryDetail.module.scss';
import { DeliveryGroup, OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';

export default function OrderDeliveryGiftDetail() {
  // 화면 상태 (멀티구분용)
  const searchParams = useSearchParams();
  const isMulti = searchParams.has('multi');

  // mock 데이터 가져오기
  const { topInfo, gift, payment, expectedPoint, paymentApproval, refund, orderer } =
    mockCommonOrder;

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];
  // 선물하기 오더 샘플 가져옴 (mockOrderDetailItemsCase)
  const giftOrder = orderData.find((d) => d.id === 'order-detail-gift') ?? orderData[0];
  // 선물 받는 분들
  const giftReceiverOrders = [
    {
      receiver: { name: '김*대', phone: '010-****-5678' },
      orderData: { ...mockOrderDetailItemsCase, id: 'gift-multi-01' },
      //giftData: gift, //  구매 사은품
    },
    {
      receiver: { name: '이*영', phone: '010-****-5678' },
      orderData: { ...mockOrderDetailItemsCase, id: 'gift-multi-02' },
      giftData: gift, //  구매 사은품
    },
  ];

  // 단독/멀티 조건에 따른 콘텐츠 분기
  const giftContent = isMulti ? (
    <>
      {/* 멀티 구조 */}
      {/* 선물 받는 분들 */}
      {giftReceiverOrders.map((group, idx) => (
        <GiftReceiverInfo
          title={`선물 받는 분 ${idx + 1}`}
          key={`${group.orderData.id}-${idx}`}
          name={group.receiver.name}
          phone={group.receiver.phone}
          onClickGoGiftbox={() => {
            console.log('보낸 선물함 바로가기 클릭!!');
          }}
        >
          <DeliveryGroup
            key={`${group.orderData.id}-${idx}`}
            data={[giftOrder]}
            viewType="detail"
          />
          {group.giftData && group.giftData.length > 0 && (
            <PurchaseGiftInfo variant="normal" borderTop={false} data={group.giftData} />
          )}
        </GiftReceiverInfo>
      ))}
    </>
  ) : (
    <>
      {/* 단독 구조 */}
      {/* 받으시는 분 */}
      <GiftReceiverInfo
        name="김*대"
        phone="010-****-5678"
        onClickGoGiftbox={() => {
          console.log('보낸 선물함 바로가기 클릭!!');
        }}
      >
        <DeliveryGroup data={[giftOrder]} viewType="detail" />
      </GiftReceiverInfo>
      {/* 구매 사은품 */}
      <PurchaseGiftInfo data={gift} />
    </>
  );

  return (
    <Container showBack title="주문 상세 정보">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} sideSlot="선물하기" />
        {/* 단독 또는 멀티 */}
        {giftContent}
        {/* 결제정보 */}
        <PaymentInfo data={payment} />
        {/* 적립 예정 포인트 */}
        <ExpectedPoint data={expectedPoint} />
        {/* 결제수단 & 승인내역 */}
        <PaymentApprovalInfo
          {...paymentApproval}
          showChangeButton
          isPending={false}
          onCopyClick={(value) => {
            console.log(value);
          }}
        />
        {/* 환불정보 */}
        <RefundInfo data={refund} />
        {/* 주문자 정보 */}
        <OrdererInfo data={orderer} />
      </Contents>
    </Container>
  );
}
