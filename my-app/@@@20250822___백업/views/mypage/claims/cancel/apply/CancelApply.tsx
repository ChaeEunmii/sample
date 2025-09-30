'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, Section } from '@/shared/ui';
import { OrderTopInfo } from '@views/mypage/order/detail/components';
import {
  CostInfoSection,
  CancelReason,
  RefundAccountInfo,
  ClaimProdList,
  CheckGiftBox,
} from '@views/mypage/claims/components';
import { RefundInfo } from '@views/mypage/order/detail/components';
import { DeliveryDetail } from '@widgets/order';
import styles from './CancelApply.module.scss';

import { mockCommonOrder } from '@mocks/claims';

export default function CancelApply() {
  // 화면 상태 (멀티구분용)
  const searchParams = useSearchParams();
  const isMulti = searchParams.has('multi');

  // mock 데이터 가져오기
  const {
    topInfo,
    refund,
    giftClaim,
    claimApplyItems,
    returner,
    deliveryDetailItems,
    claimApplyMultiItems,
  } = mockCommonOrder;
  // 단독 상품 샘플데이터
  const cancelProdData = claimApplyItems;
  // 멀티 배송지 샘플 데이터
  const DeliveryGroupListData = [
    {
      id: 'addr-1',
      infoData: deliveryDetailItems[1], // 교환 상품 회수지
      orderData: claimApplyMultiItems[0], //주문상품
      exChangeAddrData: deliveryDetailItems[1], // 교환 상품 배송지
    },
    {
      id: 'addr-2',
      infoData: deliveryDetailItems[2], // 교환 상품 회수지
      orderData: claimApplyMultiItems[1], //주문상품
      exChangeAddrData: deliveryDetailItems[3], // 교환 상품 배송지
    },
  ];

  // 체크박스 상태 관리 (item.id 기준)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // 개별 아이템 선택 변경
  const handleSelectItem = (itemId: string, selected: boolean) => {
    console.log(`[아이템 선택] ${itemId}:`, selected);
    setCheckedItems((prev) => ({ ...prev, [itemId]: selected }));
  };

  // 단독/멀티 조건에 따른 콘텐츠 분기
  const deliveryContent = isMulti ? (
    <>
      {/* 멀티구조 */}
      {DeliveryGroupListData.map((group, idx) => (
        <DeliveryDetail
          title={`배송지 ${idx + 1}`}
          key={`delivery-${group.id}`}
          infoData={group.infoData}
          borderTop
          level="1"
          defaultOpen={false}
          hideCollapse
          bottomSlot={
            <ClaimProdList
              title="취소할 상품을 선택해주세요"
              data={[group.orderData]}
              checkedItems={checkedItems}
              onSelectItem={handleSelectItem}
              bottomSlot={
                <>
                  <CheckGiftBox data={giftClaim} status="사은품이 취소될 예정입니다." />
                </>
              }
            />
          }
        />
      ))}
    </>
  ) : (
    <>
      {/* 단독 구조 */}
      <Section title="주문상품" variant="normal" level="1" flush borderTop>
        <ClaimProdList
          title="취소할 상품을 선택해주세요"
          data={cancelProdData}
          checkedItems={checkedItems}
          onSelectItem={handleSelectItem}
          bottomSlot={
            <>
              <CheckGiftBox data={giftClaim} />
            </>
          }
        />
      </Section>
    </>
  );

  return (
    <Container showBack title="주문 취소 신청">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 단독 또는 멀티 */}
        {deliveryContent}
        {/* 배송비 안내 */}
        <CostInfoSection
          title="배송비 안내"
          costTitle="추가 배송비"
          cost={3000}
          info={
            <>
              부분 취소로 무료 배송을 제공드릴 수 없게 되었어요.
              <br />
              추가된 배송비는 취소 후 환불 금액에서 제외되는 점 양해 부탁드립니다.
            </>
          }
          marginTop="2"
        />
        {/* 취소 비용 발생 */}
        <CostInfoSection
          title="취소 비용 발생"
          costTitle="취소 위약금"
          cost={123456700}
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
        {/* 보유 예치금 안내 */}
        <CostInfoSection
          title="보유 예치금 안내"
          costTitle="예치금"
          costTitleIcon
          cost={123450}
          info="현대백화점 상품권은 예치금으로 전환 후 환불됩니다."
        />
        {/* 환불 계좌 안내 */}
        <RefundAccountInfo data={returner} />
        <RefundAccountInfo data={returner} hideChangeBtn />
        <RefundAccountInfo data={returner} isEmpty />
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
