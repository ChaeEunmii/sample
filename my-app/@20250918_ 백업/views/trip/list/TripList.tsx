'use client';

import React, { useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { Icon, Button, Empty, Line } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { TagFilter } from '@widgets/order';
import { OrderMoreDrawer } from '@/views/mypage/trip/components/OrderMoreDrawer';
import { TripItemGroup } from '@/views/mypage/components';
import styles from './TripList.module.scss';
import { mockTripGroupList, mockTripAirGroupList, mockTripPackageGroupList } from '@mocks/mypage';

export default function TripList() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const searchParams = useSearchParams();

  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // 활성 탭 index 상태 추가
  const [activeTab, setActiveTab] = useState(0);
  // 이전 탭 기억용
  const prevTabRef = useRef(0);
  // 3번이면 이전 탭으로 치환해서 데이터 계산
  const dataTab = activeTab === 3 ? prevTabRef.current : activeTab;

  // mock 데이터 가져오기(샘플)
  const tripData = isNoData
    ? []
    : dataTab === 0
      ? mockTripGroupList
      : dataTab === 1
        ? mockTripAirGroupList
        : dataTab === 2
          ? mockTripPackageGroupList
          : [];

  // 데이터 존재 체크
  const hasData = tripData && tripData.length > 0;

  const defaultFilteredLabels = isNoData ? ['프랑스', '2020.12.26~2025.12.25'] : []; // nodata 시 기본 노출용 예시 초기 필터 태그)

  // 필터 적용 여부 상태
  // const [isFiltered, setIsFiltered] = useState(defaultFilteredLabels.length > 0);
  const [labels, setLabels] = useState<string[]>(defaultFilteredLabels);
  const isFiltered = labels.length > 0;

  // 탭 항목 구성
  const tabMainItems = hasData
    ? [
        { label: `여행 99` },
        { label: '항공 99' },
        { label: '패키지 99' },
        {
          label: '더 조회하기',
          labelSuffix: <Icon name={activeTab === 3 ? 'arrowUp' : 'arrowDown'} size="xsmall" />,
        },
      ]
    : [
        { label: '여행 0' },
        { label: '항공 0' },
        { label: '패키지 0' },
        {
          label: '더 조회하기',
          labelSuffix: <Icon name={activeTab === 3 ? 'arrowUp' : 'arrowDown'} size="xsmall" />,
        },
      ];

  // 더 조회하기 drawer핸들러
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
    // setActiveTab(0);
    setActiveTab(prevTabRef.current);
  };

  return (
    <Container showBack title="여행" type="basket">
      <Contents className={styles.layout}>
        <div className={styles.sticky}>
          {/* 탭 & 태그필터 */}
          <TagFilter
            defaultTabs={tabMainItems}
            labels={labels}
            // filteredLabels={defaultFilteredLabels}
            activeTab={activeTab}
            onTabChange={(index) => {
              // 3번(더 조회하기) 눌렀을 때 현재 탭을 저장해두고 드로어만 열기
              if (index === 3) {
                prevTabRef.current = activeTab;
                setIsDrawerOpen(true);
              }
              // 탭 전환
              setActiveTab(index);
            }}
            onApplyFilters={(filters) => {
              setLabels(filters);
              console.log('필터 적용됨:', filters);
            }}
            onClearFilters={() => {
              setLabels([]);
              console.log('필터 초기화');
            }}
            drawerTitle="어떤 주문을 찾으세요?"
            margin="3"
            mode="trip"
            showReset
          />
        </div>
        {/* 주문번호에 대한 여행목록 구성 반복 */}
        {hasData ? (
          <>
            {tripData.map((orderGroup, index) => (
              <React.Fragment key={`trip-order-${index}`}>
                {index !== 0 && <Line variant="bold" margin="5" />}
                <TripItemGroup
                  data={orderGroup}
                  viewType="list"
                  onButtonClick={(action, item) => {
                    console.log('버튼 클릭:', action, item);
                  }}
                  onDetailClick={(order) => {
                    console.log('주문상세 버튼 클릭:', order);
                  }}
                  onCopy={(text) => console.log('복사:', text)}
                  hideStatusBtns
                  useItemLimit
                  className="ncp-mt-l"
                />
              </React.Fragment>
            ))}
          </>
        ) : (
          <Empty
            title={
              isFiltered
                ? '입력하신 조건에 맞는 주문이 없어요.\n다시한번 검색을 해 주세요.'
                : '주문 내역이 없습니다.'
            }
            buttons={
              <Button
                variant="primary"
                onClick={() => {
                  if (isFiltered) {
                    setLabels([]);
                    setActiveTab(0);
                  } else {
                    console.log('쇼핑 페이지로 이동');
                  }
                }}
              >
                {isFiltered ? '검색 초기화' : '쇼핑하러 가기'}
              </Button>
            }
          />
        )}

        {/* 주문조회 더보기 (D) */}
        <OrderMoreDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
      </Contents>
    </Container>
  );
}
