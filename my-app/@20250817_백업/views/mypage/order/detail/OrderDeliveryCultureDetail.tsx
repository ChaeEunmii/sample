'use client';

// import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { useAlert } from '@shared/contexts/AlertContext';
import { Link } from '@shared/ui';
import {
  OrderTopInfo,
  PaymentInfo,
  ExpectedPoint,
  PaymentApprovalInfo,
  RefundInfo,
  OrdererInfo,
  OrderProductWithMeta,
  PurchaseGiftInfo,
} from '@/views/mypage/order/detail/components';
import { mockCommonOrder } from '@mocks/myorder';
import { mockOrderDetailItemsCase } from '@mocks/myorder';
import styles from './OrderDeliveryDetail.module.scss';
import { DeliveryGroup, OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';

export default function OrderDeliveryCultureDetail() {
  // mock 데이터 가져오기
  const { topInfo, payment, expectedPoint, paymentApproval, refund, orderer, gift } =
    mockCommonOrder;

  const { showAlert } = useAlert();

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];
  // 스토어픽 오더 샘플 가져옴 (mockOrderDetailList)
  const storepickOrder = orderData.find((d) => d.id === 'order-detail-culture') ?? orderData[0];

  // 픽업목록 샘플 데이터
  const mockPickupGroups = [
    {
      info: {
        name: '김*대',
        phone: '010-****-5678',
        date: '2025년 12월 25일 토요일',
      },
      orderData: storepickOrder,
    },
  ];

  return (
    <Container showBack title="주문 상세 정보">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} sideSlot="문화센터" />
        {/* 픽업들 */}
        {mockPickupGroups.map((group, idx) => (
          <OrderProductWithMeta
            variant="culture"
            key={idx}
            title="주문상품"
            data={group.info}
            bottomSlot={
              <DeliveryGroup
                data={[group.orderData]}
                viewType="detail"
                onButtonClick={(action, item) => {
                  // 취소하기 버튼 클릭
                  if (action === 'cancelOrder') {
                    showAlert({
                      title: '문화센터 취소 안내',
                      message: (
                        <>
                          문화센터 취소를 위해서는 상담원의 확인이 필요합니다
                          <br />
                          신청하신 문화센터 상담 번호{' '}
                          <Link href="tel:15881234" type="inline" variant="underline">
                            1588-1234
                          </Link>
                          <br />
                          전화연락 부탁드려요
                        </>
                      ),
                      onConfirm: () => console.log('전화걸기 클릭'),
                      showCancel: true,
                      labelProps: { confirm: '전화걸기', cancel: '취소' },
                    });
                  } else {
                    console.log('Clicked:', action, item);
                  }
                }}
              />
            }
          />
        ))}
        {/* 구매 사은품 */}
        <PurchaseGiftInfo data={gift} />
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
