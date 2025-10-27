'use client';

import React from 'react';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, Empty, Line, ButtonArea, TextButton } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { TagFilter } from '@widgets/order';
import {
  HistoryOrderGroup,
  GroupedOrderData,
} from '@/views/mypage/order/history/components/HistoryOrderGroup';
import { mockOrderList } from '@mocks/history';
import styles from './TheHdOrderList.module.scss';

export default function TheHdOrderList() {
  const searchParams = useSearchParams();

  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // 초기 태그
  const initialTags = ['2025.10~2025.12'];
  // 필터 적용 여부 상태
  const [isFiltered, setIsFiltered] = useState(isNoData);
  // 태그 관리
  const [labels, setLabels] = useState(initialTags);

  // mock 데이터 가져오기
  const myOrderData = isNoData ? [] : (mockOrderList as GroupedOrderData[]);

  return (
    <Container showBack title="더현대 주문확인/배송조회">
      <Contents className={styles.layout}>
        {/* 태그필터만 사용 */}
        <TagFilter
          labels={labels}
          filteredLabels={initialTags} // 초기 태그 필터 설정 임시
          drawerTitle="과거 주문의 조회 기간을 선택해 주세요"
          drawerType="date-only"
          onlyTag
          hideTagClose={!isFiltered} // 태그 삭제버튼 숨김처리
          showReset={isFiltered} // 검색 완료된 경우 Reset UI
          onApplyFilters={(next) => {
            // 검색 후 결과 태그 반영 샘플
            setLabels(next);
            setIsFiltered(true);
            console.log('필터 적용됨:', next);
          }}
          onClearFilters={() => {
            // 리셋 시 초기 태그 반영 샘플
            setLabels(initialTags);
            setIsFiltered(false);
            console.log('필터 초기화');
          }}
          filterBtnVariant="tertiary"
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
              <Button
                variant="primary"
                onClick={() => {
                  // 검색 초기화 눌렀을 때 필터 상태 해제
                  if (isFiltered) {
                    setIsFiltered(false);
                  } else {
                    // 쇼핑하러가기
                    console.log('쇼핑하러가기 클릭');
                  }
                }}
              >
                {isFiltered ? '검색 초기화' : '쇼핑하러 가기'}
              </Button>
            }
          />
        )}
      </Contents>
    </Container>
  );
}
