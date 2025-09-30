'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
import { DeliveryDetail } from '@widgets/order';
import {
  OrderTopInfo,
  OrderProducts,
  PurchaseGiftInfo,
  CounselingInfo,
  OrdererInfo,
} from '@/views/mypage/order/detail/components';
import { mockCommonOrder } from '@mocks/myorder';
import { mockOrderDetailCaseRental } from '@mocks/myorder';
import styles from './OrderDeliveryDetail.module.scss';

export default function OrderDeliveryDetailRental() {
  // mock 데이터 할당
  const { topInfo: orderTopInfoData, gift: giftData, orderer: orderInfoData } = mockCommonOrder;

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
        <OrderTopInfo info={orderTopInfoData} onCopy={(text) => console.log(text)} />
        {/* 설치상품 */}
        <OrderProducts data={orderData} />
        {/* 배송지 */}
        <DeliveryDetail infoData={deliveryDetailData} borderTop level="1" defaultOpen={false} />
        {/* 구매 사은품 */}
        <PurchaseGiftInfo data={giftData} />
        {/* 상담 정보 */}
        <CounselingInfo
          data={counselingInfoData}
          onChangeRequest={() => {
            console.log('상담 요청사항 변경 버튼 클릭');
          }}
        />
        {/* 주문자 정보 */}
        <OrdererInfo data={orderInfoData} />
      </Contents>
    </Container>
  );
}
