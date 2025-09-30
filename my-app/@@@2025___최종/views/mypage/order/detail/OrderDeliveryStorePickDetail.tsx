'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  OrderTopInfo,
  PaymentInfo,
  ExpectedPoint,
  PaymentApprovalInfo,
  RefundInfo,
  OrdererInfo,
  OrderProductWithMeta,
} from '@/views/mypage/order/detail/components';
import { mockCommonOrder } from '@mocks/myorder';
import { mockOrderDetailItemsCase } from '@mocks/myorder';
import styles from './OrderDeliveryDetail.module.scss';
import { DeliveryGroup, OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';

export default function OrderDeliveryStorePickDetail() {
  // mock 데이터 할당
  const { topInfo, payment, expectedPoint, paymentApproval, refund, orderer } = mockCommonOrder;

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];
  // 스토어픽 오더 샘플 가져옴 (mockOrderDetailList)
  const storepickOrder =
    orderData.find((d) => d.id === 'order-detail-storepickOrder') ?? orderData[0];

  // 픽업목록 샘플 데이터
  const mockPickupGroups = [
    {
      info: {
        name: '김*대',
        phone: '010-****-5678',
        pickupDate: '2025년 12월 25일 토요일',
        isConfirmed: false,
        message: '함께 해줘서 늘 감사해요. 그동안 고마웠고, 앞으로도 주욱 함께 해요. -HD-',
        pickupOptions: [
          { label: '2025년 12월 26일 일요일', value: 'option1' },
          { label: '2025년 12월 27일 월요일', value: 'option2' },
        ],
      },
      orderData: storepickOrder,
    },
    {
      info: {
        name: '이*영',
        phone: '010-****-1234',
        pickupDate: '2025년 12월 28일 월요일',
        isConfirmed: true,
        // message: '함께 해줘서 늘 감사해요. 그동안 고마웠고, 앞으로도 주욱 함께 해요. -HD-',
        pickupOptions: [
          { label: '2025년 12월 28일 월요일', value: 'option3' },
          { label: '2025년 12월 29일 화요일', value: 'option4' },
        ],
      },
      orderData: {
        ...storepickOrder,
        sellers: storepickOrder.sellers.map((seller) => ({
          ...seller,
          items: seller.items.map((item) => ({
            ...item,
            orderStatus: { ...item.orderStatus, status: 'pickup_completed' },
          })),
        })),
      } as OrderDeliveryData,
    },
  ];

  return (
    <Container showBack title="주문 상세 정보 스토어픽">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 픽업들 */}
        {mockPickupGroups.map((group, idx) => (
          <OrderProductWithMeta
            variant="store"
            key={idx}
            title={`픽업 ${idx + 1}`}
            data={group.info}
            onSelectPickupDate={(value) => console.log('선택됨:', value)}
            onClickConfirmPickupDate={() => console.log(`변경 버튼 클릭`)}
            bottomSlot={
              <DeliveryGroup
                data={[group.orderData]}
                viewType="detail"
                onButtonClick={(action, item) => {
                  if (action === 'viewVoucher') {
                    console.log('교환권 조회 클릭됨:', item);
                  }
                }}
              />
            }
          />
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
