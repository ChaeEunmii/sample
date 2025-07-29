'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, Empty, Line } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { TagFilter } from '@widgets/order/TagFilter';
import {
  ReturnGroupSection,
  GroupedReturnData,
} from '@views/mypage/claims/return/remote/components/ReturnGroupSection';
import { mockReturnRemoteList } from '@mocks/claims';
import styles from './RemoteReturn.module.scss';

// 초기 전체 검색 결과
const tabMainItems = [
  { label: `전체 ${'10'}` },
  { label: `취소 ${'5'}` },
  { label: `반품 ${'3'}` },
  { label: `교환 ${'2'}` },
];

export default function RemoteReturnList() {
  const searchParams = useSearchParams();

  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');
  const defaultFilteredLabels = isNoData ? ['2020.12.26~2025.12.25', '택배배송'] : []; // nodata 시 기본 노출용 예시 초기 필터 태그)

  // mock 데이터 변수에 할당
  const myReturnData = isNoData ? [] : (mockReturnRemoteList as GroupedReturnData[]);

  // 필터 적용 여부 상태 (true면 필터 탭, false면 기본 탭 )
  const [isFiltered, setIsFiltered] = useState(isNoData); //필터 여부 상태 초기값을 nodata에 따라 설정 예시
  // const [isFiltered, setIsFiltered] = useState(false);

  return (
    <Container showBack title="비대면 반품" type="myorder">
      <Contents className={styles.layout}>
        {/* 탭 & 태그필터 */}
        <TagFilter
          defaultTabs={tabMainItems}
          filteredLabels={defaultFilteredLabels} // noData 예시용 초기 필터 태그 세팅
          drawerTitle="비대면 반품의 조회 기간을 선택해주세요"
          drawerType="date-only"
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
        {myReturnData.length > 0 ? (
          <>
            {myReturnData.map((orderGroup, index) => (
              <React.Fragment key={`${orderGroup.orderNumber}-${index}`}>
                {index !== 0 && <Line variant="bold" margin="5" />}
                <ReturnGroupSection data={orderGroup} />
              </React.Fragment>
            ))}
          </>
        ) : (
          <Empty
            title={'최근에 비대면 반품 접수하신 정보가 없어요\n이제 쇼핑을 시작해 볼까요?'}
            buttons={<Button variant="primary">쇼핑하러 가기</Button>}
          />
        )}
      </Contents>
    </Container>
  );
}
