'use client';

import { useState, useRef, useEffect, useId } from 'react';
import { IconButton, Heading, IconSize } from '@shared/ui';
import styles from './Tooltip.module.scss';
import clsx from 'clsx';

// 트리거 기준 툴팁의 위치
type Placement = 'top' | 'bottom' | 'left' | 'right';
// 정렬 방식 (start: 시작, center: 중앙, end: 끝)
type Align = 'start' | 'center' | 'end';

// 화살표 크기
const ARROW_SIZE = 6;
// 툴팁과 트리거 간 간격
const OFFSET = 8;
// 툴팁 컨테이너 내 패딩 — 넘침 방지용
const PADDING = 16;

interface TooltipProps {
  /** 툴팁 내용 */
  children: React.ReactNode;
  /** 위치 (기본: bottom) */
  placement?: Placement;
  /** 위치 (기본: start) */
  align?: Align;
  /** 툴팁 제목 */
  title?: React.ReactNode;
  /** 추가 클래스 */
  className?: string;
  /** 트리거 아이콘 개별 스타일 Props */
  iconProps?: {
    size?: IconSize;
    className?: string;
  };
  /** 툴팁 박스 추가 클래스 */
  boxClass?: string;
}

export const Tooltip = ({
  children,
  placement = 'bottom',
  align = 'start',
  title,
  className,
  iconProps = {
    size: 'small',
  },
  boxClass,
}: TooltipProps) => {
  const tooltipId = useId();
  const [visible, setVisible] = useState(false);
  const [measured, setMeasured] = useState(false); // 측정 완료 여부
  const [containerWidth, setContainerWidth] = useState<number | null>(null); // container 너비 상태

  useEffect(() => {
    // 'wrap' 아이디를 가진 컨테이너 엘리먼트 찾기
    const container = document.getElementById('wrap');
    if (!container) return;
    // 컨테이너 너비를 상태에 저장하는 함수
    const updateWidth = () => {
      setContainerWidth(container.getBoundingClientRect().width);
    };
    // 컴포넌트 마운트 시 초기 너비 설정
    updateWidth();
    // 윈도우 리사이즈 시 너비 업데이트 이벤트 등록
    window.addEventListener('resize', updateWidth);
    // 컴포넌트 언마운트 시 이벤트 리스너 해제
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // 툴팁과 화살표 위치 상태
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    arrowTop: 0,
    arrowLeft: 0,
  });

  // 툴팁 전체 래퍼 참조
  const wrapperRef = useRef<HTMLDivElement>(null);
  // 툴팁을 띄우는 트리거 참조
  const triggerRef = useRef<HTMLButtonElement>(null);
  // 툴팁 박스 참조
  const tipRef = useRef<HTMLDivElement>(null);

  // 위치 계산 함수
  function calculateTooltipPosition(
    placement: Placement,
    align: Align,
    wrapperRect: DOMRect,
    triggerRect: DOMRect,
    tipWidth: number,
    tipHeight: number,
    containerRect: DOMRect
  ) {
    // wrapper 기준 트리거 위치 및 트리거 중심 좌표 계산
    const triggerTop = triggerRect.top - wrapperRect.top;
    const triggerLeft = triggerRect.left - wrapperRect.left;

    let top = 0;
    let left = 0;
    let arrowTop = 0;
    let arrowLeft = 0;

    // placement에 따른 툴팁과 화살표 위치 계산
    switch (placement) {
      case 'top':
      case 'bottom': {
        const isTop = placement === 'top';
        top = isTop ? triggerTop - tipHeight - OFFSET : triggerTop + triggerRect.height + OFFSET;
        arrowTop = isTop ? top + tipHeight : top - ARROW_SIZE;

        // align 기준으로 left 계산
        switch (align) {
          case 'center':
            left = triggerLeft + triggerRect.width / 2 - tipWidth / 2;
            break;
          case 'end':
            left = triggerLeft + triggerRect.width - tipWidth + OFFSET;
            break;
          case 'start':
          default:
            left = triggerLeft - OFFSET;
            break;
        }

        arrowLeft = triggerLeft + triggerRect.width / 2 - ARROW_SIZE / 2;
        break;
      }

      case 'left':
      case 'right': {
        const isLeft = placement === 'left';
        left = isLeft ? triggerLeft - tipWidth - OFFSET : triggerLeft + triggerRect.width + OFFSET;
        arrowLeft = isLeft ? left + tipWidth : left - ARROW_SIZE;

        // align 기준으로 top 계산
        switch (align) {
          case 'center':
            top = triggerTop + triggerRect.height / 2 - tipHeight / 2;
            break;
          case 'end':
            top = triggerTop + triggerRect.height - tipHeight;
            break;
          case 'start':
          default:
            top = triggerTop;
            break;
        }

        arrowTop = triggerTop + triggerRect.height / 2 - ARROW_SIZE / 2;
        break;
      }
    }

    // 툴팁이 컨테이너 좌우 영역 침범 시 보정
    let tipAbsLeft = left + wrapperRect.left;
    const tipAbsRight = tipAbsLeft + tipWidth;
    const containerLeft = containerRect.left + PADDING;
    const containerRight = containerRect.right - PADDING;

    // 툴팁이 컨테이너 오른쪽을 넘으면, 툴팁 위치를 왼쪽으로 조정
    if (tipAbsRight > containerRight) {
      left -= tipAbsRight - containerRight;
    }
    // 툴팁이 컨테이너 왼쪽보다 왼쪽에 있으면, 위치를 오른쪽으로 조정
    tipAbsLeft = left + wrapperRect.left;
    if (tipAbsLeft < containerLeft) {
      left += containerLeft - tipAbsLeft;
    }

    return { top, left, arrowTop, arrowLeft };
  }

  useEffect(() => {
    if (!visible) return; // 툴팁이 열리지 않으면 위치 계산 안함

    // 렌더 후 위치를 정확히 계산
    const wrapper = wrapperRef.current;
    const trigger = triggerRef.current;
    const tip = tipRef.current;
    const container = document.getElementById('wrap');

    if (!wrapper || !trigger || !tip || !container) return;

    // 요소들의 위치 및 크기 정보 가져오기
    const wrapperRect = wrapper.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const tipRect = tip.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // 계산 함수 호출 — 트리거와 툴팁 요소 위치를 기반으로 툴팁, 화살표 좌표 계산
    const pos = calculateTooltipPosition(
      placement,
      align,
      wrapperRect,
      triggerRect,
      tipRect.width,
      tipRect.height,
      containerRect
    );

    setPosition(pos);
    setMeasured(true); // 위치 측정 완료 후 표시
  }, [visible, placement]);

  // 클릭 시 툴팁 표시 플래그만 켜고, 렌더 후 실제 위치 측정 (레이아웃 이동 방지)
  const handleClick = () => {
    if (!visible) {
      setVisible(true);
      setMeasured(false); // 위치 측정 전 단계
    } else {
      setVisible(false);
    }
  };

  return (
    <div className={clsx(styles.root, className)} ref={wrapperRef}>
      {/* 툴팁 트리거 */}
      <IconButton
        name="info"
        size={iconProps.size}
        onClick={handleClick}
        ref={triggerRef}
        className={clsx(styles.trigger, iconProps.className)}
      />
      {/* 툴팁과 화살표 */}
      {visible && (
        <>
          {/* 화살표: 트리거 중심에 위치 */}
          <span
            className={clsx(styles.arrow, styles[placement])}
            style={{
              position: 'absolute',
              top: position.arrowTop,
              left: position.arrowLeft,
              visibility: measured ? 'visible' : 'hidden',
            }}
            aria-hidden="true"
          />
          {/* 툴팁 박스 */}
          <div
            ref={tipRef}
            id={tooltipId}
            role="tooltip"
            className={clsx(styles.tip, styles[placement], boxClass)}
            style={{
              position: 'absolute',
              top: position.top,
              left: position.left,
              visibility: measured ? 'visible' : 'hidden',
              maxWidth: containerWidth ? `${containerWidth - 32}px` : undefined,
            }}
          >
            <div className={styles.wrap}>
              {title && (
                <Heading as="h2" size="3" weight="semibold">
                  {title}
                </Heading>
              )}
              {children && <div className={styles.content}>{children}</div>}
            </div>
            {/* 닫기 버튼 */}
            <IconButton
              name="close"
              size="xsmall"
              aria-label="툴팁 닫기"
              onClick={() => setVisible(false)}
              className={styles.close}
            />
          </div>
        </>
      )}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';
