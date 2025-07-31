'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
import { DeliveryDetail } from '@widgets/order';
import {
  OrderTopInfo,
  OrderProducts,
  PurchaseGiftInfo,
  CounselingInfo,
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

  // 주문상품
  const orderData = mockOrderDetailCaseRental as OrderDeliveryData[];
  // 배송지 상세데이터
  const deliveryDetailData = {
    note: '안전하고 빠른 배송 부탁드립니다.\n기다리고 있어요. 빨리 왔으면 좋겠어요!',
  };
  //상담 정보
  const counselingInfoData = {
    phone: '010-****-5678',
    message: `방문드릴 때 가능하면 앞 자리로 배정 받을 수 있을까요?\n같이 가는 어머니가 시력이랑 청력이 좀 안좋으셔서요.\n이번에 방문 신청한거 당첨 되었다고 말씀드리니까 너무 기뻐하시더라고요. 꼭 좀 부탁드려요 🤗`,
  };

  return (
    <Container showBack title="주문 상세 정보 렌탈">
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
        <DeliveryDetail infoData={deliveryDetailData} borderTop level="1" defaultOpen={false} />
        {/* 구매 사은품 */}
        <PurchaseGiftInfo data={gift} />
        {/* 상담 정보 */}
        <CounselingInfo
          data={counselingInfoData}
          onChangeRequest={() => {
            console.log('상담 요청사항 변경 버튼 클릭');
          }}
        />
        {/* case1. 상담 후 결제  */}
        {isCase1 && (
          <>
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
              variant="normal"
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
