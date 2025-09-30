'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Checkbox } from '@shared/ui';
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

export default function OrderDeliveryVisitDetail() {
  // mock 데이터 할당
  const { topInfo, payment, expectedPoint, paymentApproval, refund, orderer } = mockCommonOrder;

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];
  // 방문픽업 오더 샘플 가져옴 (mockOrderDetailList)
  const visitOrder = orderData.find((d) => d.id === 'order-detail-visit') ?? orderData[0];

  // 픽업목록 샘플 데이터
  const mockPickupGroups = [
    {
      info: {
        name: '김*대',
        phone: '010-****-5678',
        address: '현대백화점 압구정본점 1층 로비 탈리다쿰 팝업 스토어 C8번 창구 앞',
      },
      orderData: visitOrder,
    },
  ];

  // 체크 상태 관리 (item.id 기준)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  // 전체 아이템 목록
  const allItems = visitOrder.sellers.flatMap((s) => s.items);
  // 전체 선택 여부
  const isAllChecked = allItems.every((item) => checkedItems[item.id]);
  // 개별 아이템 선택 변경
  const handleSelectItem = (itemId: string, selected: boolean) => {
    console.log(`[아이템 선택] ${itemId}:`, selected);
    setCheckedItems((prev) => ({ ...prev, [itemId]: selected }));
  };
  // 전체 선택 / 해제
  const handleToggleAll = (checked: boolean) => {
    console.log(`[전체선택]`, checked);
    const updated = Object.fromEntries(allItems.map((item) => [item.id, checked]));
    setCheckedItems(updated);
  };

  return (
    <Container showBack title="주문 상세 정보 방문픽업">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} sideSlot="문화센터" />
        {/* 픽업들 */}
        {mockPickupGroups.map((group, idx) => (
          <OrderProductWithMeta
            variant="visit"
            key={idx}
            title="주문상품"
            data={group.info}
            bottomSlot={
              <DeliveryGroup
                data={group.orderData}
                viewType="detail"
                onButtonClick={(action, item) => {
                  console.log('Clicked:', action, item);
                }}
                topSlot={
                  <Checkbox
                    label="전체선택"
                    checked={isAllChecked}
                    onChange={(e) => handleToggleAll(e.target.checked)}
                  />
                }
                checkedItems={checkedItems}
                onSelectItem={handleSelectItem}
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
