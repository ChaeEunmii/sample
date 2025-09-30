'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, Line } from '@/shared/ui';
import { Empty } from '@/shared/ui/blocks/Empty';
import { Container, Contents } from '@/widgets/layout/Container';
import { TagFilter } from '@/widgets/order';
import { ReservedList } from '@/widgets/o4o';
import { ReservedItem } from '@/widgets/o4o/ReservedList';
import { ReservedNav } from '../components';
import { mockReviewList, mockWaitingList } from '@/mocks/reservation';

export const WaitingList = () => {
  // ✅ 화면 상태
  const searchParams = useSearchParams();
  const isNoData = searchParams.has('nodata'); // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)

  // mock 데이터 변수에 할당
  const myWatingData = isNoData ? [] : (mockWaitingList as ReservedItem[]);

  // 필터 적용 여부 상태 (true면 필터 탭, false면 기본 탭 )
  const [isFiltered, setIsFiltered] = useState(isNoData); //필터 여부 상태 초기값을 nodata에 따라 설정 예시

  // ✅ 탭 항목 구성
  const tabMainItems = [
    { label: `전체` },
    { label: '방문예정' },
    { label: '방문완료' },
    { label: '취소/노쇼' },
  ];

  return (
    <Container title="예약/오더" showBack>
      <Contents>
        {/* nav */}
        <ReservedNav activeKey="waiting" />

        {/* 탭 & 태그필터 */}
        <TagFilter
          defaultTabs={tabMainItems}
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
          margin="2"
          drawerTitle="기간 조회"
          isReservation
        />
        {/* 주문번호에 대한 상품목록 구성 반복 */}
        {myWatingData.length > 0 ? (
          <>
            <ReservedList data={myWatingData} />
          </>
        ) : (
          <Empty
            title="내역 정보가 없어요"
            buttons={<Button variant="primary">예약하러 가기</Button>}
          />
        )}

        {/* 리뷰 페이지 테스트 */}
        <Line variant="bold" margin="4" />
        <ReservedList data={mockReviewList as ReservedItem[]} isReview showSelectDrawer />
        {/* 리뷰 페이지 데이터 없음 테스트 */}
        <ReservedList
          data={[]}
          isReview
          showSelectDrawer
          empty={() => (
            <Empty
              title="작성 가능한 리뷰가 없어요"
              buttons={<Button variant="primary">이용하러 가기</Button>}
            />
          )}
        />
      </Contents>
    </Container>
  );
};

WaitingList.displayName = 'WaitingList';
