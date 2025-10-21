'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, Empty, Line, ButtonArea, TextButton } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { TagFilter } from '@widgets/order';
import {
  HistoryOrderGroup,
  GroupedOrderData,
} from '@/views/mypage/order/history/components/HistoryOrderGroup';
import { mockToHomeOrderList } from '@mocks/history';
import styles from './OrderList.module.scss';

export default function OrderList() {
  const searchParams = useSearchParams();

  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');
  const defaultFilteredLabels = isNoData ? ['2025.10~2025.12'] : []; // nodata 시 기본 노출용 예시 초기 필터 태그)

  // mock 데이터 가져오기
  const myOrderData = isNoData ? [] : (mockToHomeOrderList as GroupedOrderData[]);

  // 필터 적용 여부 상태 (true면 필터 탭, false면 기본 탭 )
  const [isFiltered, setIsFiltered] = useState(isNoData); //필터 여부 상태 초기값을 nodata에 따라 설정 예시

  // 주문이 없고 필터도 안 된 상태인지 임시
  // const isNoOrderAndNotFiltered = !isFiltered && myOrderData.length === 0;

  return (
    <Container showBack title="투홈 주문확인/배송조회">
      <Contents className={styles.layout}>
        {/* 태그필터만 사용 */}
        <TagFilter
          filteredLabels={defaultFilteredLabels} // noData 예시용 초기 필터 태그 세팅
          // filteredLabels={['2025.10~2025.12']} // 초기 태그 필터 설정 임시
          drawerTitle="과거 주문의 조회 기간을 선택해 주세요"
          drawerType="date-only"
          onlyTag
          hideTagClose
          onApplyFilters={(filters) => {
            console.log('필터 적용됨:', filters);
            setIsFiltered(true);
          }}
          onClearFilters={() => {
            console.log('필터 초기화');
            setIsFiltered(false);
          }}
          showReset
        />
        {/* 주문번호에 대한 상품목록 구성 반복 */}
        {myOrderData.length > 0 ? (
          <>
            {myOrderData.map((orderGroup, index) => {
              const items = orderGroup.deliveries[0].sellers[0].items; // 주문그룹안에 아이템들
              const itemLimit = 3; // 갯수제한
              const total = items.length; // 전체 상품 수
              const visibleCount = Math.min(itemLimit ?? total, total); // 처음부터 보여줄 개수만 계산
              const remain = Math.max(total - visibleCount, 0); // 남은 상품 수 (음수 방지)
              const showViewAll = remain > 0; // '더보기' 영역 노출 여부 (남은 상품 있을 때)

              // 보여줄 아이템 목록
              const slicedGroup = {
                ...orderGroup,
                deliveries: orderGroup.deliveries.map((delivery) => ({
                  ...delivery,
                  sellers: delivery.sellers.map((seller) => ({
                    ...seller,
                    items: seller.items.slice(0, visibleCount),
                  })),
                })),
              };

              return (
                <React.Fragment key={`${orderGroup.orderNumber}-${index}`}>
                  {index !== 0 && <Line variant="bold" margin="5" />}
                  <HistoryOrderGroup
                    data={slicedGroup}
                    onButtonClick={(action, item) => {
                      console.log('버튼 클릭:', action, item);
                    }}
                  />
                  {showViewAll && (
                    <ButtonArea align="center" margin="2">
                      <TextButton size="1" suffixIcon="arrowRight" iconSize="xsmall">
                        {remain}건의 주문 상품 더보기
                      </TextButton>
                    </ButtonArea>
                  )}
                </React.Fragment>
              );
            })}
          </>
        ) : (
          <Empty
            title={
              isFiltered
                ? '입력하신 조건에 맞는 주문이 없어요\n다시 한 번 검색을 해 주세요'
                : '이전에 더현대에서 이용하신 주문내역 정보가 없어요\n새롭게 쇼핑을 시작해 보실까요?'
            }
            buttons={
              <Button variant="primary">{isFiltered ? '검색 초기화' : '쇼핑하러 가기'}</Button>
            }
          ></Empty>
        )}
      </Contents>
    </Container>
  );
}
