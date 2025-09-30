'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, Checkbox, Section } from '@/shared/ui';
import { OrderTopInfo } from '@views/mypage/order/detail/components';
import { CostInfoSection, CancelReason } from '@views/mypage/claims/components';
import { RefundInfo } from '@views/mypage/order/detail/components';
import { CheckGiftBox } from '@views/mypage/claims/components/CheckGiftBox';
import { ClaimProdList } from '@views/mypage/claims/components/ClaimProdList';
import styles from './CancelApply.module.scss';

import { mockCommonOrder } from '@mocks/claims';

export default function CancelApply() {
  // mock 데이터 할당
  const { topInfo, refund, giftClaim, claimApplyItems } = mockCommonOrder;
  // 취소 상품 샘플데이터
  const cancelProdData = claimApplyItems;

  // 체크박스 상태 관리 (item.id 기준)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // 전체 아이템 목록
  const allItems = cancelProdData.flatMap((s) => s.items);

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

  return (
    <Container showBack title="주문 취소 신청">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 클레임 상품목록 (체크) */}
        <Section title="주문상품" variant="normal" level="1" flush borderTop>
          <ClaimProdList
            title="취소할 상품을 선택해주세요"
            data={cancelProdData}
            checkedItems={checkedItems}
            onSelectItem={handleSelectItem}
            topSlot={
              <Checkbox
                label="전체선택"
                checked={isAllChecked}
                onChange={(e) => handleToggleAll(e.target.checked)}
              />
            }
            bottomSlot={
              <>
                <CheckGiftBox data={giftClaim} />
                <CheckGiftBox data={giftClaim} status="사은품이 취소될 예정입니다." isChecked />
              </>
            }
          />
        </Section>
        {/* 배송비 안내 */}
        <CostInfoSection
          title="배송비 안내"
          costTitle="추가 배송비"
          cost={3000}
          info="부분 취소로 무료 배송을 제공드릴 수 없게 되었어요. 추가된 배송비는 취소 후 환불 금액에서
                    제외되는 점 양해 부탁드립니다."
          marginTop="2"
        />
        {/* 취소 위약금 안내 */}
        <CostInfoSection
          title="취소 위약금 안내"
          costTitle="취소 위약금"
          cost={123000}
          info={
            <>
              주문 취소로 위와 같이 위약금이 발생하였어요.
              <br />
              자세한 사항은 주문서 상세와 주문 상품의 상세 페이지를 참고해 주세요.
            </>
          }
        />
        {/* 예상 환불 정보 */}
        <RefundInfo
          variant="normal"
          title="예상 환불 정보"
          totalTitle="총 예상 환불금액"
          data={refund}
        />
        {/* 취소 사유를 입력해주세요 */}
        <CancelReason />
        {/* 버튼 영역 */}
        <ButtonArea>
          <Button size="large">이전으로</Button>
          <Button variant="primary" size="large">
            취소 확인
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
