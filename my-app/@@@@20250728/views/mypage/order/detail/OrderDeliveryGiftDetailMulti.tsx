'use client';

// import { useState } from 'react';
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
import { mockOrderGiftList } from '@mocks/order';
import { mockCommonOrder } from '@mocks/myorder';
import { mockOrderDetailItemsCase } from '@mocks/myorder';
import styles from './OrderDeliveryDetail.module.scss';
import { DeliveryGroup, OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';

export default function OrderDeliveryGiftDetailMulti() {
  // mock 데이터 할당
  const { topInfo, payment, expectedPoint, paymentApproval, refund, orderer } = mockCommonOrder;

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];
  // 선물 받는 분
  const giftReceiverOrders = [
    {
      receiver: { name: '김*대', phone: '010-****-5678' },
      orderData: { ...mockOrderDetailItemsCase, id: 'gift-multi-01' },
      //giftData: mockOrderGiftList, //  구매 사은품
    },
    {
      receiver: { name: '이*영', phone: '010-****-5678' },
      orderData: { ...mockOrderDetailItemsCase, id: 'gift-multi-02' },
      giftData: mockOrderGiftList, //  구매 사은품
    },
  ];
  // 선물하기 오더 샘플 가져옴 (mockOrderDetailList)
  const giftOrder = orderData.find((d) => d.id === 'order-detail-gift') ?? orderData[0];

  return (
    <Container showBack title="주문 상세 정보 선물하기 멀티">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
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
              data={giftOrder}
              viewType="detail"
            />
            {group.giftData && group.giftData.length > 0 && (
              <PurchaseGiftInfo variant="normal" borderTop={false} data={group.giftData} />
            )}
          </GiftReceiverInfo>
        ))}
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
