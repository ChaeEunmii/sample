"use client";

import { useState, useId, useEffect, useRef } from "react";
import { Link, Icon, IconName, IconButton } from "@shared/ui";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
import styles from "./Tabs.module.scss";

export interface TabDataType {
  /** 탭 레이블 */
  label: string;
  /** 레이블 suffix */
  labelSuffix?: React.ReactNode;
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
}
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 탭 스타일 변형 */
  variant?:
    | "default"
    | "buttons"
    | "texts"
    | "divid"
    | "boxes"
    | "iconText"
    | "filter"
    | "navbar"
    | "grid"
    | "circle"
    | string;
  /** 패널 최대 높이 설정 */
  maxHeight?: string | number;
  /** 탭 아이템 배열 */
  data: TabDataType[];
  /** 기본 활성화된 탭 인덱스 */
  defaultActive?: number;
  /** 현재 활성 탭 인덱스 (optional, 외부 제어용) */
  activeTab?: number;
  /** 탭 변경 콜백 (optional) */
  onTabChange?: (index: number) => void;
  /** 스와이퍼 영역 최대 넓이 */
  containerWidth?: number | string;
  /** variant = 'texts'일 경우 active 스타일 */
  textActiveType?: "underline" | "none";
  /** variant = 'grid'일 경우 열의 수 설정 */
  columns?: number;
  /** Swiper를 접고 펼칠 수 있는 지 여부 */
  collapable?: boolean;
  /** Swiper 오른쪽 slot */
  sideSlot?: React.ReactNode;
  /** 배경색 위에 올라올경우 */
  withBg?: boolean;
}

export const Tabs = ({
  variant = "default",
  maxHeight,
  data,
  defaultActive = 0,
  activeTab: controlledActiveTab,
  onTabChange,
  containerWidth,
  textActiveType = "underline",
  columns = 3,
  className,
  collapable = false,
  sideSlot,
  withBg,
  ...props
}: TabsProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [internalActiveTab, setInternalActiveTab] = useState(defaultActive);
  const activeTab = controlledActiveTab ?? internalActiveTab;
  const [isCollapsed, setIsCollapsed] = useState(true); // true = 접힘, false = 펼침

  const tabsId = `tab-${useId()}`;

  // 활성화 탭의 위치를 중앙으로 당기기
  const centerSlide = (index: number, speed = 300) => {
    const swiper = swiperRef.current;
    if (!isCollapsed) return; // 펼쳐진 상태에서는 Swiper가 렌더되지 않으므로 실행하지 않음(collapable)
    if (!swiper?.slides[index]) return;
    const slide = swiper.slides[index] as HTMLElement;
    const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
    const containerCenter = swiper.width / 2;

    swiper.translateTo(containerCenter - slideCenter, speed);
  };

  // 스와이퍼 tabs
  const handleSwiperClick = (
    index: number,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    onTabChange?.(index);
    setInternalActiveTab(index);
    centerSlide(index);
  };

  // 일반 tabs
  const handleTabClick = (
    index: number,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    onTabChange?.(index);
    setInternalActiveTab(index);
    data[index].onClick?.();
  };

  // 컨텐츠가 있는 탭이 있는지 확인
  const hasContent = data.some((tab) => tab.content);

  // maxHeight 스타일 객체 생성
  const panelStyle = maxHeight
    ? {
        maxHeight: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
      }
    : undefined;

  // 외부 activeTab 변경 시 swiper 이동
  useEffect(() => {
    if (typeof activeTab === "number") {
      centerSlide(activeTab);
    }
  }, [activeTab]);

  // collapse 접힘(true)으로 전환 시, Swiper 준비된 후 활성 탭을 중앙 정렬
  useEffect(() => {
    if (!collapable) return;
    if (!isCollapsed) return;
    if (!swiperRef.current) return;

    // 접힘 상태로 전환된 직후, DOM 준비 후 centerSlide 실행
    const centerSlideTimer = setTimeout(() => {
      centerSlide(activeTab);
    }, 0);

    return () => clearTimeout(centerSlideTimer);
  }, [collapable, isCollapsed, activeTab]);

  return (
    <>
      {[
        "buttons",
        "texts",
        "divid",
        "boxes",
        "filter",
        "navbar",
        "circle",
      ].includes(variant) ? (
        <>
          <div
            className={clsx(
              styles.root,
              styles.swiperTabs,
              variant && styles[variant],
              sideSlot && styles.hasSideSlot,
              collapable && styles.swiperCollapable,
              !isCollapsed && styles.expanded,
              withBg && styles.withBg,
              className
            )}
            {...props}
          >
            {/* Swiper 탭 UI */}
            {(!collapable || (collapable && isCollapsed)) && (
              <Swiper
                className={clsx(styles.tablist)}
                slidesPerView="auto"
                spaceBetween={0}
                freeMode={true}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  // collapable에서 펼쳐서 이동 시, swiper도 즉시 활성 탭으로 이동
                  if (collapable && activeTab !== swiper.activeIndex) {
                    centerSlide(activeTab);
                  }
                }}
              >
                {data.map((tab, index) => (
                  <SwiperSlide key={index} className={styles.item}>
                    <Link
                      href={tab.href || "#"}
                      onClick={
                        !tab.href || tab.href.startsWith("#")
                          ? (e) => {
                              handleSwiperClick(index, e);
                            }
                          : undefined
                      }
                      className={clsx(
                        styles.tab,
                        activeTab === index && styles.tabActive,
                        textActiveType !== "none" &&
                          activeTab === index &&
                          styles[textActiveType]
                      )}
                      aria-selected={activeTab === index}
                      aria-controls={
                        tab.content ? `${tabsId}-${index}` : undefined
                      }
                    >
                      {["buttons", "circle"].includes(variant) && tab.thumb ? (
                        <>
                          <span className={styles.thumb}>
                            <img src={tab.thumb} alt="" />
                          </span>
                          <span className={styles.label}>{tab.label}</span>
                        </>
                      ) : (
                        tab.label
                      )}

                      {tab.labelSuffix && tab.labelSuffix}
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            {/* collapable 사용시 펼친 상태에서만 일반탭 UI 보여주기 */}
            {collapable && !isCollapsed && (
              <div className={clsx(styles.tablist)}>
                {data.map((tab, index) => (
                  <Link
                    key={index}
                    href={tab.href || "#"}
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
                      textActiveType !== "none" &&
                        activeTab === index &&
                        styles[textActiveType]
                    )}
                    aria-selected={activeTab === index}
                    aria-controls={
                      tab.content ? `${tabsId}-${index}` : undefined
                    }
                  >
                    {variant === "buttons" && tab.thumb && (
                      <span className={styles.thumb}>
                        <img src={tab.thumb} alt="" />
                      </span>
                    )}
                    {tab.label}
                    {tab.labelSuffix && tab.labelSuffix}
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
                    name={isCollapsed ? "arrowDown" : "arrowUp"}
                    onClick={() => setIsCollapsed((v) => !v)}
                  >
                    {isCollapsed ? "펼치기" : "접기"}
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
          <div
            className={clsx(styles.root, variant && styles[variant], className)}
            style={
              variant === "grid"
                ? ({
                    ["--tab-grid-columns"]: String(columns),
                  } as React.CSSProperties)
                : undefined
            }
            {...props}
          >
            <div className={clsx(styles.tablist)}>
              {data.map((tab, index) => {
                return (
                  <Link
                    key={index}
                    href={tab.href || "#"}
                    onClick={
                      !tab.href || tab.href.startsWith("#")
                        ? (e) => {
                            handleTabClick(index, e);
                          }
                        : undefined
                    }
                    className={clsx(
                      styles.tab,
                      activeTab === index && styles.tabActive
                    )}
                    aria-selected={activeTab === index}
                    aria-controls={
                      tab.content ? `${tabsId}-${index}` : undefined
                    }
                  >
                    {tab.icon && (
                      <Icon
                        size="medium"
                        name={
                          activeTab === index && tab.iconOn
                            ? tab.iconOn
                            : tab.icon
                        }
                        className={styles.icon}
                      />
                    )}
                    {tab.label}
                    {tab.labelSuffix && tab.labelSuffix}
                  </Link>
                );
              })}
            </div>

            {hasContent && (
              <>
                {data.map((tab, index) => {
                  if (!tab.content) return null;

                  return (
                    /* 기본 show/hide 탭 */
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

Tabs.displayName = "Tabs";
