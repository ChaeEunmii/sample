'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/shared/ui';
import { Empty } from '@/shared/ui/blocks/Empty';
import { Container, Contents } from '@/widgets/layout/Container';
import { TagFilter } from '@/widgets/order';
import { ReservedList } from '@/widgets/o4o';
import { ReservedItem } from '@/widgets/o4o/ReservedList';
import { BookingNav } from '../components/BookingNav';
import { mockBookingList, mockEnBookingList } from '@/mocks/reservation';

export const ReservationList = () => {
  // ✅ 화면 상태
  const searchParams = useSearchParams();
  const isNoData = searchParams.has('nodata'); // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const lang = searchParams.get('lang');
  const isEnglish = lang === 'en'; // 영문 페이지

  // ✅ mock 데이터 변수에 할당
  const myBookingData = isNoData
    ? []
    : isEnglish
      ? (mockEnBookingList as ReservedItem[])
      : (mockBookingList as ReservedItem[]);

  // ✅ 필터 적용 여부 상태 (true면 필터 탭, false면 기본 탭 )
  const [isFiltered, setIsFiltered] = useState(isNoData); //필터 여부 상태 초기값을 nodata에 따라 설정 예시

  // ✅ 탭 항목 구성
  const tabMainItems = [
    { label: `전체` },
    { label: '방문예정' },
    { label: '방문완료' },
    { label: '취소/노쇼' },
  ];
  const enTabMainItems = [
    { label: `All` },
    { label: 'Reservations' },
    { label: 'Visits Completed' },
    { label: 'Cancel Visit' },
  ];

  return (
    <Container
      title={isEnglish ? 'Reservation' : '예약/오더'}
      showBack
      actions={[
        ...(isEnglish ? [{ type: 'lang' as const, value: 'en', options: ['en', 'zh'] }] : []),
      ]}
    >
      <Contents>
        {/* nav */}
        <BookingNav activeKey="reservation" isEnglish={isEnglish} />
        {/* 탭 & 태그필터 */}
        <TagFilter
          defaultTabs={isEnglish ? enTabMainItems : tabMainItems}
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
        {myBookingData.length > 0 ? (
          <>
            <ReservedList data={myBookingData} isEnglish={isEnglish} />
          </>
        ) : (
          <Empty
            title="내역 정보가 없어요"
            buttons={<Button variant="primary">예약하러 가기</Button>}
          />
        )}
      </Contents>
    </Container>
  );
};

ReservationList.displayName = 'ReservationList';
