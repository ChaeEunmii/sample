'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
import { DeliveryDetail } from '@widgets/order';
import {
  OrderTopInfo,
  OrderProducts,
  PurchaseGiftInfo,
  OrdererInfo,
  RefundInfo,
  ExpectedPoint,
  PaymentApprovalInfo,
} from '@/views/mypage/order/detail/components';
import { mockCommonOrder } from '@mocks/myorder';
import { mockOrderDetailCaseRental } from '@mocks/myorder';
import styles from './OrderDeliveryDetail.module.scss';

export default function OrderDeliveryDetailRental() {
  // 화면 상태 (케이스구분용)
  const searchParams = useSearchParams();
  const isCase1 = searchParams.has('case1');
  const isCase2 = searchParams.has('case2');

  // mock 데이터 가져오기
  const { topInfo, gift, orderer, refund, expectedPoint, paymentApproval } = mockCommonOrder;

  // 주문상품 (설치상품 정보 rentalInfo 추가)
  const orderData = (mockOrderDetailCaseRental as OrderDeliveryData[]).map((group) => ({
    ...group,
    sellers: group.sellers.map((seller) => ({
      ...seller,
      items: seller.items.map((item) => ({
        ...item,
        // 설치상품 정보 있는경우
        rentalInfo:
          !isCase1 && !isCase2
            ? {
                monthlyFee: 44000,
                period: 60,
                separateContract: true,
              }
            : undefined,
        // 상담후 결제인 경우 orderOptions로 표시
        orderOptions: !isCase1 && !isCase2 ? undefined : ['상담 후 결제'],
      })),
    })),
  }));

  // 배송지 상세데이터
  const deliveryDetailData = {
    note: '안전하고 빠른 배송 부탁드립니다.\n기다리고 있어요. 빨리 왔으면 좋겠어요!',
  };

  return (
    <Container showBack title="주문 상세 정보">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo
          info={topInfo}
          sideSlot={isCase1 || isCase2 ? '상담 후 결제' : undefined}
          onCopy={(text) => console.log(text)}
        />
        {/* 설치상품 */}
        <OrderProducts data={orderData} />
        {/* 배송지 */}
        <DeliveryDetail infoData={deliveryDetailData} borderTop level="1" />
        {/* case1. 상담 후 결제  */}
        {isCase1 && (
          <>
            {/* 구매 사은품 */}
            <PurchaseGiftInfo data={gift} />
            {/* 결제수단 & 승인내역 */}
            <PaymentApprovalInfo
              {...paymentApproval}
              isPending
              onCopyClick={(value) => {
                console.log(value);
              }}
            />
          </>
        )}
        {/* case2. 상담 후 결제_결제 후  */}
        {isCase2 && (
          <>
            {/* 구매 사은품 */}
            <PurchaseGiftInfo data={gift} />
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
            <RefundInfo
              title="환불정보"
              totalTitle="총 예상 환불금액"
              variant="collapse"
              data={refund}
            />
          </>
        )}
        {/* 주문자 정보 */}
        <OrdererInfo data={orderer} />
      </Contents>
    </Container>
  );
}
