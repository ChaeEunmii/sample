'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, Loading, Empty, TextButton, Line } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { TagFilter } from '@widgets/order/TagFilter';
import { GoToHomeBox } from '@views/mypage/order/components/GoToHomeBox';
import { OrderGroupSection } from '@views/mypage/components/OrderGroupSection';
import { GroupedOrderData } from '@/views/mypage/components/OrderGroupSection';
import { mockOrderList } from '@mocks/myorder';
import styles from './OrderDeliveryList.module.scss';

// 초기 전체 검색 결과
const tabMainItems = [
  { label: `전체 ${'10'}` },
  { label: `주문완료 ${'2'}` },
  { label: `결제완료 ${'3'}` },
  { label: `상품준비 ${'5'}` },
];

export default function OrderDeliveryList() {
  const searchParams = useSearchParams();

  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');
  const defaultFilteredLabels = isNoData ? ['2020.12.26~2025.12.25', '택배배송'] : []; // nodata 시 기본 노출용 예시 초기 필터 태그)

  // mock 데이터 변수에 할당
  const myOrderData = isNoData ? [] : (mockOrderList as GroupedOrderData[]);

  // 필터 적용 여부 상태 (true면 필터 탭, false면 기본 탭 )
  const [isFiltered, setIsFiltered] = useState(isNoData); //필터 여부 상태 초기값을 nodata에 따라 설정 예시
  // const [isFiltered, setIsFiltered] = useState(false);

  return (
    <Container showBack title="주문/배송" type="myorder">
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
        />
        {/* 주문번호에 대한 상품목록 구성 반복 */}
        {myOrderData.length > 0 ? (
          <>
            {myOrderData.map((orderGroup, index) => (
              <React.Fragment key={`${orderGroup.orderNumber}-${index}`}>
                {index !== 0 && <Line variant="bold" margin="5" />}
                <OrderGroupSection
                  data={orderGroup}
                  onButtonClick={(action, item) => {
                    console.log('버튼 클릭:', action, item);
                  }}
                />
              </React.Fragment>
            ))}
            {/* 로딩 */}
            <Loading isLoading className={styles.loading} />
            {/* toHome 주문찾으시나요 이동박스 */}
            <GoToHomeBox />
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
