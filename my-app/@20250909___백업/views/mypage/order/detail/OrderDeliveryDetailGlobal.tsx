'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { DeliveryDetail } from '@widgets/order';
import { DeliveryGroup, OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
import {
  OrderTopInfo,
  OrderProducts,
  PurchaseGiftInfo,
  PaymentInfo,
  ExpectedPoint,
  PaymentApprovalInfo,
  RefundInfo,
  OrdererInfo,
  DeliveryDestination,
} from '@/views/mypage/order/detail/components';
import { CustomerCodeInfo } from '@widgets/order';
import { mockCommonOrder } from '@mocks/myorder';
import { mockOrderDetailItemsCase } from '@mocks/myorder';
import styles from './OrderDeliveryDetail.module.scss';

export default function OrderDeliveryDetailGlobal() {
  // 화면 상태 (멀티구분용)
  const searchParams = useSearchParams();
  const isEms = searchParams.has('ems');

  // mock 데이터 가져오기
  const { topInfo, gift, payment, expectedPoint, paymentApproval, refund, orderer } =
    mockCommonOrder;

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];

  // 배송지 상세데이터
  const deliveryDetailData = {
    note: '안전하고 빠른 배송 부탁드립니다.\n기다리고 있어요. 빨리 왔으면 좋겠어요!',
  };
  // 직구 오더 샘플 가져옴 (mockOrderDetailItemsCase)
  const globalOrder = orderData.find((d) => d.id === 'order-detail-global') ?? orderData[0];
  // EMS 오더 샘플 가져옴 (mockOrderDetailItemsCase)
  const EMSOrder = orderData.find((d) => d.id === 'order-detail-EMS') ?? orderData[0];
  // 배송지 (EMS)
  const deliveryDestinationData = {
    name: 'Joseph Biden',
    phone: '+1-(202)456-1111',
    address: ['1600 Pennsylvania Avenue NW', 'Washington, D.C. 20500 U.S.'],
    shippingMethod: 'EMS (Korea Post Parcel Service)',
    limitInfo: 'Max ₩214,583 per day and 20 lbs (9 kg).',
  };

  // 단독/멀티 조건에 따른 콘텐츠 분기
  const GlobalContent = isEms ? (
    <>
      {/* EMS */}
      {/* 주문상품 */}
      <OrderProducts>
        <DeliveryGroup data={[EMSOrder]} viewType="detail" />
      </OrderProducts>
      {/* 배송지(역직구) */}
      <DeliveryDestination data={deliveryDestinationData} />
      {/* 구매 사은품 */}
      <PurchaseGiftInfo data={gift} />
    </>
  ) : (
    <>
      {/* 직구 */}
      {/* 주문상품 */}
      <OrderProducts>
        <DeliveryGroup data={[globalOrder]} viewType="detail" />
      </OrderProducts>
      {/* 배송지 */}
      <DeliveryDetail infoData={deliveryDetailData} borderTop level="1" />
      {/* 구매 사은품 */}
      <PurchaseGiftInfo data={gift} />
      {/* 개인통관고유부호 */}
      <CustomerCodeInfo hideChangeBtn data="P123451234512" level="1" borderTop flush hideSuffix />
    </>
  );

  return (
    <Container showBack title="주문 상세 정보">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 직구 또는 EMS */}
        {GlobalContent}
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
