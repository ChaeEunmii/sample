'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import type { OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
import { DeliveryDetail } from '@widgets/order';
import {
  OrderTopInfo,
  OrderProducts,
  PurchaseGiftInfo,
  PaymentInfo,
  ExpectedPoint,
  PaymentApprovalInfo,
  RefundInfo,
  OrdererInfo,
} from '@/views/mypage/order/detail/components';
import { DeliveryGroup } from '@/views/mypage/components/DeliveryGroup';
import styles from './OrderDeliveryDetail.module.scss';
import { mockDeliveryDetailsItem } from '@mocks/address';
import { mockOrderDetaiMultilList } from '@mocks/myorder';
import { mockCommonOrder } from '@mocks/myorder';

export default function OrderDeliveryDetail() {
  // 화면 상태 (멀티구분용)
  const searchParams = useSearchParams();
  const isMulti = searchParams.has('multi');

  // mock 데이터 가져오기
  const {
    topInfo,
    orderItems,
    deliveryDetail,
    gift,
    payment,
    expectedPoint,
    paymentApproval,
    refund,
    orderer,
  } = mockCommonOrder;

  // 멀티 배송지
  const DeliveryGroupListData = [
    {
      id: 'addr-1',
      infoData: mockDeliveryDetailsItem, //배송지 정보
      orderData: mockOrderDetaiMultilList as OrderDeliveryData[], //주문상품
      //giftData: gift, // 배송지별 사은품
    },
    {
      id: 'addr-2',
      infoData: mockDeliveryDetailsItem, //배송지 정보
      orderData: mockOrderDetaiMultilList as OrderDeliveryData[], //주문상품
      giftData: gift, // 배송지별 사은품
    },
  ];

  // 단독/멀티 조건에 따른 콘텐츠 분기
  const deliveryContent = isMulti ? (
    <>
      {/* 멀티구조 */}
      {/* 배송지 - 멀티 */}
      {DeliveryGroupListData.map((group, idx) => (
        <DeliveryDetail
          title={`배송지 ${idx + 1}`}
          key={`delivery-${group.id}`}
          infoData={group.infoData}
          borderTop
          level="1"
          bottomSlot={
            <>
              <DeliveryGroup
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
    </>
  ) : (
    <>
      {/* 일반 */}
      {/* 주문상품 */}
      <OrderProducts data={orderItems} />
      {/* 배송지 */}
      <DeliveryDetail infoData={deliveryDetail} borderTop level="1" />
      {/* 구매 사은품 */}
      <PurchaseGiftInfo data={gift} />
    </>
  );

  return (
    <Container showBack title="주문 상세 정보">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 일반 또는 멀티 */}
        {deliveryContent}
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
