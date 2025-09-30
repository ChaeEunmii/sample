'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, Loading, Empty, TextButton, Line, Text, Heading } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { TagFilter } from '@widgets/order';
import { SubscriptionGroup } from '@/views/mypage/components/SubscriptionGroup';
import { GroupedOrderData } from '@/views/mypage/components/OrderGroup';
import { mockOrderList } from '@mocks/subscription';
import styles from './SubscriptionOrderList.module.scss';

export default function SubscriptionOrderList() {
  const searchParams = useSearchParams();

  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');
  const defaultFilteredLabels = isNoData ? ['2020.12.26~2025.12.25', '택배배송'] : []; // nodata 시 기본 노출용 예시 초기 필터 태그)

  // mock 데이터 변수에 할당
  const myOrderData = isNoData ? [] : (mockOrderList as GroupedOrderData[]);

  // 필터 적용 여부 상태 (true면 필터 탭, false면 기본 탭 )
  const [isFiltered, setIsFiltered] = useState(isNoData); //필터 여부 상태 초기값을 nodata에 따라 설정 예시
  // const [isFiltered, setIsFiltered] = useState(false);

  // 주문이 없고 필터도 안 된 상태인지 임시
  const isNoOrderAndNotFiltered = !isFiltered && myOrderData.length === 0;
  // 탭 항목 구성
  const tabMainItems = isNoOrderAndNotFiltered
    ? [{ label: '전체 0' }]
    : [
        { label: `전체 5` },
        { label: '진행중 1' },
        { label: '구독종료 2' },
        { label: '구독해지 2' },
      ];

  return (
    <Container
      showBack
      title="구독 관리"
      actions={[
        {
          type: 'custom' as const,
          component: (
            <TextButton variant="underline" size="1">
              정기구독 홈
            </TextButton>
          ),
        },
      ]}
    >
      <Contents className={styles.layout}>
        {/* 탭 & 태그필터 */}
        <TagFilter
          defaultTabs={tabMainItems}
          filteredLabels={defaultFilteredLabels} // noData 예시용 초기 필터 태그 세팅
          onTabChange={(index) => {
            console.log('탭 인덱스 변경:', index);
          }}
          onApplyFilters={(filters) => {
            console.log('필터 적용됨:', filters);
            setIsFiltered(true);
          }}
          onClearFilters={() => {
            console.log('필터 초기화');
            setIsFiltered(false);
          }}
          drawerTitle="어떤 구독 내역을 찾으세요?"
          margin="3"
        />
        {/* 상단배너 */}
        <div className={styles.banner}>
          <div className={styles.box}>
            <div className={styles.tit}>
              <Heading size="3" weight="semibold" color="black">
                H.Point Pay
              </Heading>
              <Text as="span" color="gray2">
                5개의 결제수단이 등록되어 있어요.
              </Text>
            </div>
            <TextButton variant="underline" size="1" color="gray3">
              변경
            </TextButton>
          </div>
        </div>
        {/* 주문번호에 대한 상품목록 구성 반복 */}
        {myOrderData.length > 0 ? (
          <>
            {myOrderData.map((orderGroup, index) => (
              <React.Fragment key={`${orderGroup.orderNumber}-${index}`}>
                {index !== 0 && <Line variant="bold" margin="5" />}
                <SubscriptionGroup
                  data={orderGroup}
                  onButtonClick={(action, item) => {
                    console.log('버튼 클릭:', action, item);
                  }}
                />
              </React.Fragment>
            ))}
            {/* 로딩 */}
            <Loading isLoading className={styles.loading} />
          </>
        ) : (
          <Empty
            title={
              isFiltered
                ? '입력하신 조건에 맞는 주문이 없어요.\n다시한번 검색을 해 주세요.'
                : '최근에 주문/배송된 정보가 없어요.\n이제 쇼핑을 시작해 보실까요?'
            }
            buttons={
              <Button variant="primary">{isFiltered ? '검색 초기화' : '쇼핑하러 가기'}</Button>
            }
          >
            <div className="ncp-text-center ncp-mt-m">
              <TextButton size="1" variant="underline">
                과거 주문 내역 조회
              </TextButton>
            </div>
          </Empty>
        )}
      </Contents>
    </Container>
  );
}
