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
  /** 마진 블럭 (0/20px, 16px/32px, 24px/32px, 16px/16px, 16px/24px, 24px/24px,) */
  margin?: '0' | '1' | '2' | '3' | '4' | '5';
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
  /** 외부에서 강제로 지정할 활성 탭 (없으면 내부 상태 사용) */
  activeTab?: number;
  /** 초기화 버튼 노출 여부 (현재 초기화버튼 노출시 우측 사이드슬롯 버튼숨김)*/
  showReset?: boolean;
  /** Drawer 달력 하단 문구 */
  drawerDesc?: string;
  /** Drawer 조회기간 데이터 */
  periodData?: {
    value: string;
    label: string;
  }[];
  /** 주문 상세 검색 버튼 노출 여부(기본: false)*/
  hideOrderDetailSearch?: boolean;
  /** 검색 설정 Drawer > 상태 영역 다중 선택 가능 여부 */
  multiple?: boolean;
  /** 주문 상세 검색 버튼 스타일 (넘길 경우 우선 적용됨) */
  filterBtnVariant?: 'primary' | 'tertiary';
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
  activeTab,
  showReset = false,
  drawerDesc,
  periodData,
  hideOrderDetailSearch = false,
  multiple = false,
  filterBtnVariant,
}: TagFilterProps) => {
  // Swiper 인스턴스 참조용
  const swiperRef = useRef<SwiperType | null>(null);
  // 현재 선택된 기본 탭 인덱스
  const [clickedTab, setClickedTab] = useState(0);
  // 외부 activeTab이 있으면 그 값, 없으면 내부 clickedTab 사용
  const currentActiveTab = activeTab ?? clickedTab;
  // 제어 여부 판별: labels prop이 있으면 제어형
  const isControlled = labels !== undefined;
  // 비제어 모드에서만 내부 상태 사용 (초기값은 filteredLabels)
  const [uncontrolledTags, setUncontrolledTags] = useState<string[]>(filteredLabels ?? []);
  // 실제 렌더링에 사용할 태그 목록(제어형이면 labels, 아니면 내부 상태)
  const tagItems = isControlled ? (labels as string[]) : uncontrolledTags;
  // 필터 적용 여부 (태그가 있거나 onlyTag 모드면 필터(태그) 뷰)
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
    const newFilters =
      mode === 'trip'
        ? ['대만', '2020.12~2025.12']
        : onlyTag
          ? ['2020.12~2025.12']
          : ['2020.12~2025.12', '렌탈', '택배배송', '새벽/당일배송', '가나다라마바사'];

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

  /** 초기화 핸들러 */
  const handleReset = () => {
    if (isControlled) {
      onApplyFilters?.([]); // 외부 제어형이면 부모에 빈 배열 전달
    } else {
      setUncontrolledTags([]); // 내부 상태 초기화
    }
    onClearFilters?.(); // 콜백 통지
    setClickedTab(0); // 탭 0으로 복귀
    swiperRef.current?.slideTo?.(0); // 스와이퍼도 맨 앞으로
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
            !showReset && styles.hasSideSlot,
            showReset && styles.hasResetSlot,
            margin && styles[`margin${margin}`]
          )}
        >
          {showReset && (
            <div className={styles.reset}>
              <Button
                iconOnly="refresh"
                size="xsmall"
                variant="tertiary"
                round
                className={styles.control}
                onClick={handleReset}
              >
                초기화
              </Button>
            </div>
          )}
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
          {!showReset && (
            <div className={styles.sideSlot}>
              <Button
                iconOnly="filter"
                size="xsmall"
                variant={filterBtnVariant ?? 'primary'}
                round
                className={styles.control}
                onClick={() => setIsDrawerOpen(true)}
              >
                주문 상세 검색
              </Button>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* 기본 탭 + 필터 버튼 (onlyTag가 아닌 경우에만) */}
          {!onlyTag && defaultTabs ? (
            <div className={margin && styles[`margin${margin}`]}>
              <Tabs
                data={defaultTabs}
                variant="filter"
                activeTab={currentActiveTab}
                onTabChange={(i) => {
                  if (activeTab === undefined) {
                    // 비제어일 때만 내부 상태 변경
                    setClickedTab(i);
                  }
                  onTabChange?.(i);
                }}
                className={clsx(styles.tabs)}
                sideSlot={
                  !hideOrderDetailSearch && (
                    <Button
                      iconOnly="filter"
                      size="xsmall"
                      variant={filterBtnVariant ?? 'tertiary'}
                      round
                      className={styles.control}
                      onClick={() => setIsDrawerOpen(true)}
                    >
                      주문 상세 검색
                    </Button>
                  )
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
        desc={drawerDesc}
        periodData={periodData}
        multiple={multiple}
      />
    </>
  );
};

TagFilter.displayName = 'TagFilter';
