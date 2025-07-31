'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, Empty, Line } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { TagFilter } from '@widgets/order/TagFilter';
import {
  ReturnGroup,
  GroupedReturnData,
} from '@/views/mypage/claims/return/remote/components/ReturnGroup';
import { mockReturnRemoteList } from '@mocks/claims';
import styles from './RemoteReturn.module.scss';

export default function RemoteReturnList() {
  const searchParams = useSearchParams();

  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // mock 데이터 변수에 할당
  const myReturnData = isNoData ? [] : (mockReturnRemoteList as GroupedReturnData[]);

  return (
    <Container showBack title="비대면 반품" type="myorder">
      <Contents className={styles.layout}>
        {/* 태그필터만 사용 */}
        <TagFilter
          filteredLabels={['2020.12.26~2025.12.25', '택배배송']} // 초기 태그 필터 설정 임시
          drawerTitle="비대면 반품의 조회 기간을 선택해주세요"
          drawerType="date-only"
          onlyTag
          onApplyFilters={(filters) => {
            console.log('필터 적용됨:', filters);
          }}
          onClearFilters={() => {
            console.log('필터 초기화');
          }}
        />
        {/* 주문번호에 대한 상품목록 구성 반복 */}
        {myReturnData.length > 0 ? (
          <>
            {myReturnData.map((orderGroup, index) => (
              <React.Fragment key={`${orderGroup.orderNumber}-${index}`}>
                {index !== 0 && <Line variant="bold" margin="5" />}
                <ReturnGroup data={orderGroup} />
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
