'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { DeliveryDetail } from '@widgets/order';
import { ButtonArea, Button, Checkbox, TextList, Section } from '@/shared/ui';
import { OrderTopInfo } from '@views/mypage/order/detail/components';
import { ClaimProdList } from '@views/mypage/claims/components/ClaimProdList';
import styles from './ExchangeApplyStep1.module.scss';

import { mockCommonOrder } from '@mocks/claims';

export default function ExchangeApplyStep1() {
  // 화면 상태 (멀티구분용)
  const searchParams = useSearchParams();
  const isMulti = searchParams.has('multi');

  // mock 데이터 가져오기
  const { topInfo, claimApplyItems, deliveryDetail, deliveryDetailItems } = mockCommonOrder;

  // 취소 상품 샘플데이터
  const cancelApplyData = claimApplyItems;

  // 멀티 배송지 샘플 데이터
  const DeliveryGroupListData = [
    {
      id: 'addr-1',
      infoData: deliveryDetailItems[1], // 교환 상품 회수지
      orderData: claimApplyItems, //주문상품
      exChangeAddrData: deliveryDetailItems[1], // 교환 상품 배송지
    },
    {
      id: 'addr-2',
      infoData: deliveryDetailItems[2], // 교환 상품 회수지
      orderData: claimApplyItems, //주문상품
      exChangeAddrData: deliveryDetailItems[3], // 교환 상품 배송지
    },
  ];

  // 체크박스 상태 관리 (item.id 기준)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // 전체 아이템 목록
  const allItems = cancelApplyData.flatMap((s) => s.items);

  // 전체 선택 여부 (선택 가능한 항목 기준)
  const isAllChecked = allItems
    .filter((item) => item.status !== 'unselectable')
    .every((item) => checkedItems[item.id]);

  // 개별 아이템 선택 변경
  const handleSelectItem = (itemId: string, selected: boolean) => {
    console.log(`[아이템 선택] ${itemId}:`, selected);
    setCheckedItems((prev) => ({ ...prev, [itemId]: selected }));
  };

  // 전체 선택 핸들러 (선택 가능한 항목만 체크)
  const handleToggleAll = (checked: boolean) => {
    console.log(`[전체선택]`, checked);
    const updated = Object.fromEntries(
      allItems.map((item) => [item.id, item.status !== 'unselectable' && checked])
    );
    setCheckedItems(updated);
  };

  // 단독/멀티 조건에 따른 콘텐츠 분기
  const deliveryContent = isMulti ? (
    <>
      {/* 멀티구조 */}
      {DeliveryGroupListData.map((group, idx) => (
        <DeliveryDetail
          title={`교환 상품 회수지 ${idx + 1}`}
          key={`delivery-${group.id}`}
          infoData={group.infoData}
          borderTop
          level="1"
          defaultOpen={false}
          hideCollapse
          bottomSlot={
            <div className={styles.group}>
              <ClaimProdList
                title="교환할 상품과 옵션을 선택해 주세요"
                data={group.orderData}
                checkedItems={checkedItems}
                onSelectItem={handleSelectItem}
                isExchange
                topSlot={
                  <Checkbox
                    label="전체선택"
                    checked={isAllChecked}
                    onChange={(e) => handleToggleAll(e.target.checked)}
                  />
                }
              />
              <DeliveryDetail
                title={`교환 상품 배송지 ${idx + 1}`}
                infoData={group.exChangeAddrData}
                borderTop
                level="1"
                defaultOpen={false}
                hideCollapse
              />
            </div>
          }
        />
      ))}
    </>
  ) : (
    <>
      {/* 단독 구조 */}
      {/* 교환 상품 목록 */}
      <Section title="교환 상품 목록" variant="normal" level="1" flush borderTop>
        <ClaimProdList
          title="교환할 상품과 옵션을 선택해 주세요"
          data={cancelApplyData}
          checkedItems={checkedItems}
          onSelectItem={handleSelectItem}
          isExchange
          topSlot={
            <Checkbox
              label="전체선택"
              checked={isAllChecked}
              onChange={(e) => handleToggleAll(e.target.checked)}
            />
          }
        />
      </Section>
      <DeliveryDetail
        title="교환 회수지"
        infoData={deliveryDetail}
        borderTop
        level="1"
        defaultOpen={false}
        hideCollapse
      />
      <DeliveryDetail
        title="교환 배송지"
        infoData={{ ...deliveryDetail, hopeDate: undefined }}
        borderTop
        level="1"
        defaultOpen={false}
        hideCollapse
      />
    </>
  );

  return (
    <Container showBack title="교환 접수">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo
          info={topInfo}
          onCopy={(text) => console.log(text)}
          bottomSlot={
            <TextList
              data={[
                '교환 사유에 따라 교환 회수 및 재발송 배송비 6,000원이 발생합니다.',
                '발생한 교환 배송비는 추가 결제가 필요합니다.',
                '교환은 택배로 회수 및 재발송이 진행됩니다.',
              ]}
              variant="info"
            />
          }
        />
        {/* 일반 또는 멀티 */}
        {deliveryContent}
        {/* 버튼 영역 */}
        <ButtonArea>
          <Button size="large">이전으로</Button>
          <Button variant="primary" size="large">
            다음으로
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
