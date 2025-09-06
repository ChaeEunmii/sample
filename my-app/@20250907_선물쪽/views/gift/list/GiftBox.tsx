'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs } from '@shared/ui';
import { TagFilter } from '@widgets/order';
import { ReceivedGiftBox } from '@views/mypage/activity/gift/list/received/ReceivedGiftBox';
import { SentGiftBox } from '@views/mypage/activity/gift/list/sent/SentGiftBox';
import styles from './GiftBox.module.scss';
import { mockReceivedGiftList, mockSentGiftList } from '@mocks/myactivity';

export default function GiftBox() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');
  const isTab2 = searchParams.has('tab2');

  // mock 데이터 가져오기
  const receivedOrders = isNoData ? [] : mockReceivedGiftList;
  const sentOrders = isNoData ? [] : mockSentGiftList;

  // 탭
  const [activeIndex, setActiveIndex] = useState(!isTab2 ? 0 : 1);
  const tabItems = [{ label: '받은 선물함' }, { label: '보낸 선물함' }];
  // 보낸 선물함 탭
  const [activeIndex2, setActiveIndex2] = useState(0);
  const tabItems2 = [{ label: '보낸선물함' }, { label: '선물픽' }];

  return (
    <Container showBack title="선물함">
      <Contents className={styles.layout}>
        <Tabs activeTab={activeIndex} onTabChange={(i) => setActiveIndex(i)} data={tabItems} />
        {/* 받은 선물함 */}
        {activeIndex === 0 && (
          <>
            {/* 탭 & 태그필터 */}
            <TagFilter
              filteredLabels={['2020.12.26~2025.12.25']} // 초기 태그 필터 설정 임시
              drawerTitle="비대면 반품의 조회 기간을 선택해주세요"
              drawerType="date-only"
              onlyTag
              margin="4"
              onApplyFilters={(filters) => {
                console.log('필터 적용됨:', filters);
              }}
              onClearFilters={() => {
                console.log('필터 초기화');
              }}
            />
            <ReceivedGiftBox
              data={receivedOrders}
              onOrderDetail={(order) => console.log('선택한 주문번호:', order.orderNumber)}
              onButtonClick={(action, item) => {
                console.log('버튼 클릭:', action, item);
              }}
            />
          </>
        )}
        {/* 보낸 선물함 */}
        {activeIndex === 1 && (
          <>
            {/* 탭 & 태그필터 */}
            <TagFilter
              filteredLabels={['2020.12.26~2025.12.25']} // 초기 태그 필터 설정 임시
              drawerTitle="비대면 반품의 조회 기간을 선택해주세요"
              drawerType="date-only"
              onlyTag
              margin="4"
              onApplyFilters={(filters) => {
                console.log('필터 적용됨:', filters);
              }}
              onClearFilters={() => {
                console.log('필터 초기화');
              }}
            />
            <Tabs
              variant="buttons"
              activeTab={activeIndex2}
              onTabChange={(i) => setActiveIndex2(i)}
              data={tabItems2}
            />
            {activeIndex2 === 0 ? (
              <>
                {/* 보낸선물함 */}
                <SentGiftBox
                  data={sentOrders}
                  showTotalCount
                  useItemLimit
                  onOrderDetail={(order) => console.log('선택한 주문번호:', order.orderNumber)}
                />
              </>
            ) : (
              <>
                {/* 선물픽 */}
                <SentGiftBox />
              </>
            )}
          </>
        )}
      </Contents>
    </Container>
  );
}
