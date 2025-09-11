'use client';

import { useState } from 'react';
import { TagFilter } from '@widgets/order';
import { Loading, Empty } from '@shared/ui';
import { HistoryItem } from '@/views/mypage/payment/hpoint/history/HistoryItem';
import type { HistoryData } from '@/views/mypage/payment/hpoint/history/HistoryItem';
import styles from './UsageHistory.module.scss';

interface UsageHistoryProps {
  /** 사용내역 데이터 배열 */
  data: HistoryData[];
  /** 영수증 클릭 이벤트 */
  onReceiptClick: (item: HistoryData) => void;
}

export function UsageHistory({ data, onReceiptClick }: UsageHistoryProps) {
  // 초기 필터태그 값
  const DEFAULT_FILTER_LABELS = ['2020.11.26~2025.12.25'];
  // 필터 태그 제어를 위한 상태
  const [labels, setLabels] = useState<string[]>(DEFAULT_FILTER_LABELS);
  // 필터 적용 여부 상태 (true면 필터 탭, false면 기본 탭 )
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <>
      {/* 필터 */}
      <TagFilter
        labels={labels} // 필터 태그 제어설정
        drawerTitle="사용내역의 조회 기간을 선택해 주세요."
        drawerType="date-only"
        onlyTag
        hideTagClose={!isFiltered}
        margin="4"
        onApplyFilters={(filters) => {
          const next = filters.length ? filters : DEFAULT_FILTER_LABELS;
          setLabels(next);
          setIsFiltered(filters.length > 0);
        }}
        onClearFilters={() => {
          setLabels(DEFAULT_FILTER_LABELS);
          setIsFiltered(false);
        }}
      />
      {/* 목록 */}
      {data?.length > 0 ? (
        <>
          <ul className={styles.list}>
            {data.map((item) => (
              <li key={item.id} className={styles.item}>
                <HistoryItem data={item} onReceiptClick={onReceiptClick} />
              </li>
            ))}
          </ul>
          <Loading isLoading className={styles.loading} />
        </>
      ) : (
        <Empty title="아직 사용내역이 없어요." />
      )}
    </>
  );
}
