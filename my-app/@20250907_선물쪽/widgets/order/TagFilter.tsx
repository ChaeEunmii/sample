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
  /** 필터된 태그 리스트 초기값 (optional) */
  filteredLabels?: string[];
  /** 탭 클릭 시 외부로 전달할 콜백 */
  onTabChange?: (index: number) => void;
  /** 필터 적용 시 외부로 전달할 콜백 */
  onApplyFilters?: (labels: string[]) => void;
  /** 필터 초기화 시 외부로 전달할 콜백 */
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
}

export const TagFilter = ({
  defaultTabs,
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
}: TagFilterProps) => {
  // Swiper 인스턴스 참조용
  const swiperRef = useRef<SwiperType | null>(null);
  // 현재 선택된 기본 탭 인덱스
  const [clickedTab, setClickedTab] = useState(0);
  // 현재 선택된 필터 태그 목록
  const [tagItems, setTagItems] = useState<string[]>(filteredLabels);
  // 필터 적용 여부
  const [isFiltered, setIsFiltered] = useState(filteredLabels.length > 0);
  // 필터 설정 드로어 열림 여부
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // 필터 드로어에서 '적용' 버튼 클릭 시 호출
  const handleApplyFilter = () => {
    // 임시 샘플 필터 값 (실제는 드로어에서 선택한 값으로 대체)
    const newFilters = [
      '2020.12.26~2025.12.25',
      '렌탈',
      '택배배송',
      '새벽/당일배송',
      '가나다라마바사',
    ];

    setTagItems(newFilters);
    setIsFiltered(true);
    setClickedTab(0);
    setIsDrawerOpen(false);
    onApplyFilters?.(newFilters);
  };

  /** 태그(X) 클릭 시 제거 처리 */
  const handleRemoveTag = (id?: string) => {
    if (!id) return;
    const updated = tagItems.filter((label) => label !== id);
    setTagItems(updated);

    if (updated.length === 0) {
      if (!onlyTag) {
        setIsFiltered(false); // onlyTag가 아닐 때만 필터 모드 종료
        onClearFilters?.();
      } else {
        onClearFilters?.(); // onlyTag일 땐 UI는 그대로 두고 콜백만 호출
      }
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
                <Tag id={label} size="medium" onClose={handleRemoveTag} className={styles.tag}>
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
