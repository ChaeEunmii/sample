'use client';

import { useState, useRef } from 'react';
import { Tabs, Tag, Button } from '@shared/ui';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import styles from './TagFilter.module.scss';
import TagFilterSetDrawer from '@widgets/order/TagFilterSetDrawer';
import { Mode } from '@widgets/order/TagFilterSetDrawer';
{
  /*
    TagFilter 컴포넌트
    - 필터 적용 전: Tabs UI (variant="filter")
    - 필터 적용 후: Swiper + Tag 리스트 UI
    - 필터 버튼은 공통으로 노출됨
  */
}
export interface TagFilterProps {
  /** 기본 탭 데이터*/
  defaultTabs?: { label: string }[];
  /** (제어) 외부에서 필터링된 태그를 직접 넘김 */
  labels?: string[];
  /** (비제어) 필터된 태그 리스트 초기값 (optional) */
  filteredLabels?: string[];
  /** 탭 클릭 시 외부로 전달할 콜백 */
  onTabChange?: (index: number) => void;
  /** 필터 적용 시 외부로 전달할 콜백 */
  onApplyFilters?: (labels: string[]) => void;
  /** 필터 초기화/전부 삭제 시 외부로 전달할 콜백 */
  onClearFilters?: () => void;
  /** 마진 블럭 (0/20px, 16px/32px, 24px/32px, 16px/16px, 16px/24px) */
  margin?: '0' | '1' | '2' | '3' | '4';
  /** 드로어 제목 */
  drawerTitle?: string;
  /** 드로어 렌더링 방식 제어 (date-only:달력만나옴)*/
  drawerType?: 'date-only';
  /** 탭 없이 태그 필터만 사용 여부 */
  onlyTag?: boolean;
  /** 클레임 필터 여부 (옵션항목 변경됨) */
  isClaims?: boolean;
  /** 예약 필터 여부 (옵션항목 변경됨) */
  isReservation?: boolean;
  /** 설정시 Drawer에서 해당하는 모드유형 렌더링 */
  mode?: Mode;
  /** 상단 검색영역 안내 문구 숨김 여부 */
  hideTopInfo?: boolean;
  /** 태그 닫기 숨김 여부 */
  hideTagClose?: boolean;
}

export const TagFilter = ({
  defaultTabs,
  labels,
  filteredLabels = [],
  onTabChange,
  onApplyFilters,
  onClearFilters,
  margin = '1',
  drawerTitle = '어떤 주문을 찾으세요?',
  drawerType,
  onlyTag,
  isClaims = false,
  isReservation = false,
  mode,
  hideTopInfo = false,
  hideTagClose = false,
}: TagFilterProps) => {
  // Swiper 인스턴스 참조용
  const swiperRef = useRef<SwiperType | null>(null);
  // 현재 선택된 기본 탭 인덱스
  const [clickedTab, setClickedTab] = useState(0);
  // 제어 여부 판별: labels prop이 있으면 제어형
  const isControlled = labels !== undefined;
  // 비제어 모드에서만 내부 상태 사용 (초기값은 filteredLabels)
  const [uncontrolledTags, setUncontrolledTags] = useState<string[]>(filteredLabels ?? []);
  // 실제 렌더링에 사용할 태그 목록(제어형이면 labels, 아니면 내부 상태)
  const tagItems = isControlled ? (labels as string[]) : uncontrolledTags;
  // 필터 적용 여부
  const isFiltered = (tagItems?.length ?? 0) > 0 || !!onlyTag;
  // 필터 설정 드로어 열림 여부
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // 태그 변경 즉시 적용(=확정); 비제어면 내부 state 갱신 후 onApplyFilters 호출
  const updateTags = (next: string[]) => {
    if (!isControlled) setUncontrolledTags(next);
    onApplyFilters?.(next);
  };

  // 필터 드로어에서 '적용' 버튼 클릭 시 호출
  const handleApplyFilter = () => {
    // 임시 샘플 필터 값 (실제는 드로어에서 선택한 값으로 대체)
    const newFilters = onlyTag
      ? ['2020.12.26~2025.12.25']
      : ['2020.12.26~2025.12.25', '렌탈', '택배배송', '새벽/당일배송', '가나다라마바사'];

    updateTags(newFilters);
    setClickedTab(0);
    setIsDrawerOpen(false);
  };

  /** 태그(X) 클릭 시 제거 처리 */
  const handleRemoveTag = (id?: string) => {
    if (!id) return;
    // tagItems 기준으로 갱신
    const updated = (tagItems ?? []).filter((label) => label !== id);
    // 공통 업데이트 함수 사용
    updateTags(updated);
    // 모든 태그가 사라진 경우의 후처리(표시 전환/콜백)는 그대로 유지
    if (updated.length === 0) {
      onClearFilters?.();
    }
  };

  return (
    <>
      {isFiltered || onlyTag ? (
        // 필터 적용 시 또는 onlyTag일 경우: Swiper + Tag 키워드 리스트
        <div
          className={clsx(
            styles.root,
            styles.tags,
            styles.swiperTabs,
            styles.hasSideSlot,
            margin && styles[`margin${margin}`]
          )}
        >
          <Swiper
            className={clsx(styles.tablist)}
            slidesPerView="auto"
            spaceBetween={0}
            freeMode={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {tagItems.map((label) => (
              <SwiperSlide key={label} className={styles.item}>
                <Tag
                  id={label}
                  size="medium"
                  onClose={hideTagClose ? undefined : handleRemoveTag}
                  className={styles.tag}
                >
                  {label}
                </Tag>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.sideSlot}>
            <Button
              iconOnly="filter"
              size="xsmall"
              variant="primary"
              round
              className={styles.control}
              onClick={() => setIsDrawerOpen(true)}
            >
              주문 상세 검색
            </Button>
          </div>
        </div>
      ) : (
        <>
          {/* 기본 탭 + 필터 버튼 (onlyTag가 아닌 경우에만) */}
          {!onlyTag && defaultTabs ? (
            <div className={margin && styles[`margin${margin}`]}>
              <Tabs
                data={defaultTabs}
                variant="filter"
                activeTab={clickedTab}
                onTabChange={(i) => {
                  setClickedTab(i);
                  onTabChange?.(i);
                }}
                className={clsx(styles.tabs)}
                sideSlot={
                  <Button
                    iconOnly="filter"
                    size="xsmall"
                    variant="tertiary"
                    round
                    className={styles.control}
                    onClick={() => setIsDrawerOpen(true)}
                  >
                    주문 상세 검색
                  </Button>
                }
              />
            </div>
          ) : null}
        </>
      )}

      {/* 검색 설정 Drawer */}
      <TagFilterSetDrawer
        title={drawerTitle}
        onlyCalendar={drawerType === 'date-only'}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onApplyFilters={handleApplyFilter}
        isClaims={isClaims}
        isReservation={isReservation}
        mode={mode}
        hideTopInfo={hideTopInfo}
      />
    </>
  );
};

TagFilter.displayName = 'TagFilter';
