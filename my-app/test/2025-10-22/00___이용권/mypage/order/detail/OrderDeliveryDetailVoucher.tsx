'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { DeliveryGroup, OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
import {
  OrderTopInfo,
  OrderProducts,
  OrdererInfo,
  CouponReceiver,
  PaymentInfo,
  ExpectedPoint,
  PaymentApprovalInfo,
  RefundInfo,
} from '@/views/mypage/order/detail/components';
import { mockCommonOrder } from '@mocks/myorder';
import { mockOrderDetailItemsCase } from '@mocks/myorder';
import styles from './OrderDeliveryDetail.module.scss';

export default function OrderDeliveryDetailVoucher() {
  // mock 샘플데이터
  const { topInfo, orderer, payment, refund, expectedPoint, paymentApproval } = mockCommonOrder;
  // 쿠폰 받으시는 분 샘플데이터

  // 쿠폰 받으시는 분 샘플데이터
  const mockCouponReceiver = [
    {
      id: 'receiver-1',
      name: '김*대',
      phone: '010-****-5678',
      coupons: [
        {
          id: 'coupon-1',
          number: 'AB123456789012345678',
          start: '20250101',
          due: '20250101',
          status: 'waiting' as const, //사용대기
          sentRemain: 3,
        },
        {
          id: 'coupon-2',
          number: 'AB123456789012345678',
          start: '20250101',
          due: '20250101',
          status: 'waiting' as const, //사용대기
          sentRemain: 3,
        },
        {
          id: 'coupon-3',
          number: 'AB123456789012345678',
          start: '20250101',
          due: '20251231',
          status: 'expired' as const, //기간만료
        },
        {
          id: 'coupon-4',
          number: 'AB123456789012345678',
          start: '20250101',
          due: '20251231',
          status: 'cancel_apply' as const, //취소요청
        },
        {
          id: 'coupon-5',
          number: 'AB123456789012345678',
          start: '20250101',
          due: '20251231',
          status: 'cancel_completed' as const, //취소완료
        },
        {
          id: 'coupon-6',
          number: 'AB123456789012345678',
          start: '20250101',
          due: '20251231',
          status: 'used' as const, //사용완료
        },
      ],
    },
    {
      id: 'receiver-2',
      name: '김*대',
      phone: '010-****-5678',
      coupons: [
        {
          id: 'coupon-2-1',
          number: 'AB123456789012345678',
          start: '20250101',
          due: '20251231',
          status: 'waiting' as const, //사용대기
        },
        {
          id: 'coupon-2-2',
          number: 'AB123456789012345678',
          start: '20250101',
          due: '20251231',
          status: 'expired' as const, //기간만료
        },
      ],
    },
  ];

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];

  // 이용권&e쿠폰 오더 샘플 가져옴 (mockOrderDetailItemsCase)
  const VoucherCouponOrder =
    orderData.find((d) => d.id === 'order-detail-voucherCoupon') ?? orderData[0];

  return (
    <Container showBack title="주문 상세 정보">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo
          info={topInfo}
          onCopy={(text) => console.log(text)}
          sideSlot="이용권 or e쿠폰"
        />
        {/* 주문상품 */}
        <OrderProducts>
          <DeliveryGroup
            data={[VoucherCouponOrder]}
            viewType="detail"
            itemTopLine // 첫번째 item 상단에 보더 디자인적용
          />
        </OrderProducts>
        {/* 쿠폰 받으시는 분 */}
        <CouponReceiver data={mockCouponReceiver} />
        {/* 결제정보 */}
        <PaymentInfo data={payment} />
        {/* 적립 예정 포인트 */}
        <ExpectedPoint data={expectedPoint} />
        {/* 결제수단 & 승인내역 */}
        <PaymentApprovalInfo
          {...paymentApproval}
          paymentData={[
            {
              label: '네이버페이',
              price: 123456700000,
            },
            {
              label: '신용카드',
              price: 123456700000,
              detail: {
                card: '현대카드',
                cardPlan: '무이자 3개월',
                cardAt: '202512241530',
                cardAmt: 123456700000,
              },
              info: '정확한 무이자 할부 적용 여부는 카드사를 통해 확인 가능해요.',
            },
          ]}
          showChangeButton
        />
        {/* 환불정보 */}
        <RefundInfo data={refund} />
        {/* 주문자 정보 */}
        <OrdererInfo data={orderer} />
      </Contents>
    </Container>
  );
}
