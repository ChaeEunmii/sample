'use client';

import { useState, useId, useEffect, useRef } from 'react';
import { Link, Icon, IconName, IconButton } from '@shared/ui';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import styles from './Tabs.module.scss';
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 탭 스타일 변형 */
  variant?: 'default' | 'buttons' | 'texts' | 'divid' | 'iconText' | string;
  /** 패널 최대 높이 설정 */
  maxHeight?: string | number;
  /** 탭 아이템 배열 */
  data: Array<{
    /** 탭 레이블 */
    label: string;
    /** 탭 썸네일 이미지 */
    thumb?: string;
    /** 탭 아이콘 종류 */
    icon?: IconName;
    /** 탭 아이콘 ON 종류 (선택사항) */
    iconOn?: IconName;
    /** 이동할 URL (선택사항) */
    href?: string;
    /** 클릭 시 실행할 함수 (선택사항) */
    onClick?: () => void;
    /** 탭 컨텐츠 (선택사항) */
    content?: React.ReactNode;
  }>;
  /** 기본 활성화된 탭 인덱스 */
  defaultActive?: number;
  /** 현재 활성 탭 인덱스 (optional, 외부 제어용) */
  activeTab?: number;
  /** 탭 변경 콜백 (optional) */
  onTabChange?: (index: number) => void;
  /** 스와이퍼 영역 최대 넓이 */
  containerWidth?: number | string;
  /** variant = 'texts'일 경우 active 스타일 */
  textActiveType?: 'underline' | 'none';
  /** Swiper를 접고 펼칠 수 있는 지 여부 */
  collapable?: boolean;
  /** Swiper 오른쪽 slot */
  sideSlot?: React.ReactNode;
}

export const Tabs = ({
  variant = 'default',
  maxHeight,
  data,
  defaultActive = 0,
  activeTab: controlledActiveTab,
  onTabChange,
  containerWidth,
  textActiveType = 'underline',
  className,
  collapable = false,
  sideSlot,
  ...props
}: TabsProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [internalActiveTab, setInternalActiveTab] = useState(defaultActive);
  const activeTab = controlledActiveTab ?? internalActiveTab;
  const [isCollapsed, setIsCollapsed] = useState(true); // true = 접힘, false = 펼침

  const tabsId = `tab-${useId()}`;

  // 스와이퍼 tabs
  const handleSwiperClick = (index: number, e?: React.MouseEvent<HTMLAnchorElement>) => {
    // 외부 콜백이 존재하면 실행
    onTabChange?.(index);
    setInternalActiveTab(index);
    swiperRef.current?.slideTo(index, 300);
  };

  // 일반 tabs
  const handleTabClick = (index: number, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (data[index].href) return;

    onTabChange?.(index);
    setInternalActiveTab(index);
    data[index].onClick?.();
  };

  // 컨텐츠가 있는 탭이 있는지 확인
  const hasContent = data.some((tab) => tab.content);

  // maxHeight 스타일 객체 생성
  const panelStyle = maxHeight
    ? { maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight }
    : undefined;

  // 외부 activeTab 변경 시 swiper 이동
  useEffect(() => {
    if (swiperRef.current && typeof activeTab === 'number') {
      swiperRef.current.slideTo(activeTab, 300);
    }
  }, [activeTab]);

  return (
    <>
      {variant === 'buttons' || variant === 'texts' || variant === 'divid' ? (
        <>
          <div
            className={clsx(
              styles.root,
              styles.swiperTabs,
              variant && styles[variant],
              sideSlot && styles.hasSideSlot,
              collapable && styles.swiperCollapable,
              !isCollapsed && styles.expanded,
              className
            )}
            {...props}
          >
            {/* Swiper 탭 UI */}
            {(!collapable || (collapable && isCollapsed)) && (
              <>
                <Swiper
                  className={styles.tablist}
                  slidesPerView="auto"
                  spaceBetween={0}
                  freeMode={true}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    // collapable에서 펼쳐서 이동 시, swiper도 즉시 활성 탭으로 이동
                    if (collapable && activeTab !== swiper.activeIndex) {
                      swiper.slideTo(activeTab, 0);
                    }
                  }}
                >
                  {data.map((tab, index) => (
                    <SwiperSlide key={index} className={styles.item}>
                      <Link
                        href={tab.href || '#'}
                        onClick={(e) => {
                          if (tab.href) {
                            e.preventDefault();
                            handleSwiperClick(index, e);
                          } else {
                            handleSwiperClick(index, e);
                          }
                        }}
                        className={clsx(
                          styles.tab,
                          activeTab === index && styles.tabActive,
                          textActiveType !== 'none' && activeTab === index && styles[textActiveType]
                        )}
                        aria-selected={activeTab === index}
                        aria-controls={tab.content ? `${tabsId}-${index}` : undefined}
                      >
                        {variant === 'buttons' && tab.thumb && (
                          <span className={styles.thumb}>
                            <img src={tab.thumb} alt="" />
                          </span>
                        )}
                        {tab.label}
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            )}
            {/* collapable 사용시 펼친 상태에서만 일반탭 UI 보여주기 */}
            {collapable && !isCollapsed && (
              <div className={styles.tablist}>
                {data.map((tab, index) => (
                  <Link
                    key={index}
                    href={tab.href || '#'}
                    onClick={(e) => {
                      if (tab.href) {
                        e.preventDefault();
                        handleSwiperClick(index, e);
                      } else {
                        handleSwiperClick(index, e);
                      }
                    }}
                    className={clsx(
                      styles.tab,
                      activeTab === index && styles.tabActive,
                      textActiveType !== 'none' && activeTab === index && styles[textActiveType]
                    )}
                    aria-selected={activeTab === index}
                    aria-controls={tab.content ? `${tabsId}-${index}` : undefined}
                  >
                    {variant === 'buttons' && tab.thumb && (
                      <span className={styles.thumb}>
                        <img src={tab.thumb} alt="" />
                      </span>
                    )}
                    {tab.label}
                  </Link>
                ))}
              </div>
            )}
            {/* side 슬롯 영역 (collapable 도 같이 사용) */}
            {(sideSlot || collapable) && (
              <div className={styles.sideSlot}>
                {sideSlot}
                {collapable && (
                  <IconButton
                    className={clsx(styles.collapsBtn)}
                    size="medium"
                    name={isCollapsed ? 'arrowDown' : 'arrowUp'}
                    onClick={() => setIsCollapsed((v) => !v)}
                  >
                    {isCollapsed ? '펼치기' : '접기'}
                  </IconButton>
                )}
              </div>
            )}

            {hasContent && (
              <>
                {data.map((tab, index) => {
                  if (!tab.content) return null;

                  return (
                    <div
                      key={index}
                      className={styles.panel}
                      hidden={activeTab !== index}
                      style={panelStyle}
                    >
                      {tab.content}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className={clsx(styles.root, variant && styles[variant], className)} {...props}>
            <div className={styles.tablist}>
              {data.map((tab, index) => {
                return (
                  <Link
                    key={index}
                    href={tab.href || '#'}
                    {...(!tab.href ? { onClick: (e) => handleTabClick(index, e) } : {})}
                    className={clsx(styles.tab, activeTab === index && styles.tabActive)}
                    aria-selected={activeTab === index}
                    aria-controls={tab.content ? `${tabsId}-${index}` : undefined}
                  >
                    {tab.icon && (
                      <Icon
                        size="medium"
                        name={activeTab === index && tab.iconOn ? tab.iconOn : tab.icon}
                        className={styles.icon}
                      />
                    )}
                    {tab.label}
                  </Link>
                );
              })}
            </div>

            {hasContent && (
              <>
                {data.map((tab, index) => {
                  if (!tab.content) return null;

                  return (
                    <div
                      key={index}
                      id={`${tabsId}-${index}`}
                      className={styles.panel}
                      hidden={activeTab !== index}
                      style={panelStyle}
                    >
                      {tab.content}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

Tabs.displayName = 'Tabs';
