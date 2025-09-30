'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, TextList, TitleBar, RadioGroup, Section } from '@/shared/ui';
import { DeliveryDetail } from '@widgets/order';
import { ReturnStoreBox } from '@/views/mypage/claims/components';
import { OrderTopInfo, RefundInfo } from '@views/mypage/order/detail/components';
import { ClaimProdList } from '@views/mypage/claims/components/ClaimProdList';
import styles from './ReturnApplyStep1.module.scss';

import { mockCommonOrder } from '@mocks/claims';

// 반품 수단 옵션
const radioOptions = [
  {
    label: '택배로 반품',
    value: '1',
  },
  {
    label: '매장으로 반품',
    value: '2',
  },
];
// 반품 접수안내글
const returnInfoTextList = [
  '반품 사유에 따라 반품 추가 배송비 3,000원이 발생합니다.',
  '발생한 반품 배송비는 환불금액에서 제외됩니다.',
  '반품 접수 하신 이후에는 반품 방법을 변경할 수 없습니다.',
];

export default function ReturnApplyStep1() {
  // mock 데이터 가져오기
  const { topInfo, claimApplyItems, deliveryDetailItems, refund } = mockCommonOrder;

  // 회수지 샘플 데이터
  const DeliveryGroupListData = [
    {
      id: 'addr-1',
      infoData: deliveryDetailItems[2], // 회수지
      orderData: claimApplyItems, //주문상품
    },
    {
      id: 'addr-2',
      infoData: deliveryDetailItems[2], // 회수지
      orderData: claimApplyItems, //주문상품
    },
  ];

  // 반품 매장 샘플 데이터
  const ReturnStoreListData = [
    {
      id: 'store-1',
      orderData: claimApplyItems, //주문상품
    },
    {
      id: 'store-2',
      orderData: claimApplyItems, //주문상품
    },
  ];

  // 회수 방법 상태
  const [isReturnRadio, setIsReturnRadio] = useState('1');
  // 체크박스 상태 관리 (item.id 기준)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // 개별 아이템 선택 변경
  const handleSelectItem = (itemId: string, selected: boolean) => {
    console.log(`[아이템 선택] ${itemId}:`, selected);
    setCheckedItems((prev) => ({ ...prev, [itemId]: selected }));
  };

  // 택배/매장 조건에 따른 콘텐츠 분기
  const ReturnContent =
    isReturnRadio === '2' ? (
      <>
        {/* 반품 매장 */}
        {ReturnStoreListData.map((group, idx) => (
          <Section
            title={`반품 매장 ${idx + 1}`}
            key={`store-${group.id}`}
            variant="normal"
            level="1"
            borderTop
            flush
          >
            <div className={styles.store}>
              <ReturnStoreBox />
              <ClaimProdList
                title="반품할 상품을 선택해주세요"
                data={group.orderData}
                checkedItems={checkedItems}
                onSelectItem={handleSelectItem}
              />
              <ClaimProdList
                title={
                  <>
                    <span className="ncp-color-point">택배</span>로만 반품 가능한 상품입니다
                  </>
                }
                data={[
                  {
                    ...group.orderData[0],
                    items: [group.orderData[0].items[1]], // 임시
                  },
                ]}
                checkedItems={checkedItems}
                onSelectItem={handleSelectItem}
                showSelectAll={false}
              />
            </div>
          </Section>
        ))}
      </>
    ) : (
      <>
        {/* 택배 */}
        {DeliveryGroupListData.map((group, idx) => (
          <DeliveryDetail
            title={`회수지 ${idx + 1}`}
            key={`delivery-${group.id}`}
            infoData={group.infoData}
            borderTop
            level="1"
            defaultOpen={false}
            hideCollapse
            bottomSlot={
              <div className={styles.group}>
                <ClaimProdList
                  title="반품할 상품을 선택해주세요"
                  data={group.orderData}
                  checkedItems={checkedItems}
                  onSelectItem={handleSelectItem}
                />
              </div>
            }
          />
        ))}
      </>
    );

  return (
    <Container showBack title="반품 접수">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo
          info={topInfo}
          onCopy={(text) => console.log(text)}
          bottomSlot={
            <>
              <div className={styles.method}>
                <TitleBar type="docs" title="반품 상품 회수 방법" className="ncp-mt-x0" />
                <RadioGroup
                  name="radio"
                  options={radioOptions}
                  value={isReturnRadio}
                  onChange={(e) => setIsReturnRadio(e.target.value)}
                />
                <TextList data={returnInfoTextList} variant="info" className="ncp-mt-s" />
              </div>
            </>
          }
        />
        {/* 택배 또는 매장 */}
        {ReturnContent}
        {/* 예상 환불 정보 */}
        <RefundInfo
          title="예상 환불 정보"
          totalTitle="총 예상 환불금액"
          variant="normal"
          data={refund}
        />
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
