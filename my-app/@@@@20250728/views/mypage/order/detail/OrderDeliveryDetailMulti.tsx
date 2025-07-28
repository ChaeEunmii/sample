'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { DeliveryDetail } from '@widgets/order';
import type { OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
import { DeliveryGroupList } from '@/views/mypage/components/DeliveryGroupList';
import {
  OrderTopInfo,
  PurchaseGiftInfo,
  PaymentInfo,
  ExpectedPoint,
  PaymentApprovalInfo,
  RefundInfo,
  OrdererInfo,
} from '@/views/mypage/order/detail/components';
import { mockOrderGiftList } from '@mocks/order';
import { mockDeliveryDetailsItem } from '@mocks/address';
import { mockOrderDetaiMultilList } from '@mocks/myorder';
import { mockCommonOrder } from '@mocks/myorder';
import styles from './OrderDeliveryDetail.module.scss';

export default function OrderDeliveryDetail() {
  // mock 데이터 할당
  const { topInfo, payment, expectedPoint, paymentApproval, refund, orderer } = mockCommonOrder;
  // 멀티 배송지
  const DeliveryGroupListData = [
    {
      id: 'addr-1',
      infoData: mockDeliveryDetailsItem, //배송지 정보
      orderData: mockOrderDetaiMultilList as OrderDeliveryData[], //주문상품
      //giftData: mockOrderGiftList, // 배송지별 사은품
    },
    {
      id: 'addr-2',
      infoData: mockDeliveryDetailsItem, //배송지 정보
      orderData: mockOrderDetaiMultilList as OrderDeliveryData[], //주문상품
      giftData: mockOrderGiftList, // 배송지별 사은품
    },
  ];

  return (
    <Container showBack title="주문 상세 정보 멀티">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 배송지 - 멀티 */}
        {DeliveryGroupListData.map((group, idx) => (
          <DeliveryDetail
            title={`배송지 ${idx + 1}`}
            key={`delivery-${group.id}`}
            infoData={group.infoData}
            borderTop
            level="1"
            defaultOpen={false}
            bottomSlot={
              <>
                <DeliveryGroupList
                  data={group.orderData}
                  viewType="detail"
                  onButtonClick={(action, item) => {
                    console.log('Clicked:', action, item);
                  }}
                />
                {/* 배송지별 사은품 */}
                {group.giftData && group.giftData.length > 0 && (
                  <PurchaseGiftInfo variant="normal" borderTop={false} data={group.giftData} />
                )}
              </>
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
