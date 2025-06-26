'use client';

import { useState, useRef, useEffect, useId } from 'react';
import { Icon, IconButton, Heading } from '@shared/ui';
import styles from './Tooltip.module.scss';
import clsx from 'clsx';

// 트리거 기준 툴팁의 위치
type Placement = 'top' | 'bottom' | 'left' | 'right';

// 화살표 크기
const ARROW_SIZE = 6;
// 툴팁과 트리거 간 간격
const OFFSET = 8;
// 툴팁 좌측 고정 오프셋, 트리거 왼쪽 기준으로 -4 고정 위치 조정용
const TIP_LEFT_OFFSET = 4;
// 툴팁 컨테이너 내 패딩 — 넘침 방지용
const PADDING = 16;

interface TooltipProps {
  /** 툴팁 내용 */
  children: React.ReactNode;
  /** 위치 (기본: bottom) */
  placement?: Placement;
  /** 툴팁 제목 */
  title?: React.ReactNode;
  /** 추가 클래스 */
  className?: string;
}

export const Tooltip = ({ children, placement = 'bottom', title, className }: TooltipProps) => {
  const tooltipId = useId();
  const [visible, setVisible] = useState(false);
  const [measured, setMeasured] = useState(false); // 측정 완료 여부

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
  const triggerRef = useRef<HTMLSpanElement>(null);
  // 툴팁 박스 참조
  const tipRef = useRef<HTMLDivElement>(null);

  // 위치 계산 함수 (컴포넌트 내부에 정의, 캡슐화 용이)
  function calculateTooltipPosition(
    placement: Placement,
    wrapperRect: DOMRect,
    triggerRect: DOMRect,
    tipWidth: number,
    tipHeight: number,
    containerRect: DOMRect
  ) {
    // wrapper 기준 트리거 위치 및 트리거 중심 좌표 계산
    const triggerTop = triggerRect.top - wrapperRect.top;
    const triggerLeft = triggerRect.left - wrapperRect.left;
    const triggerCenterX = triggerRect.left + triggerRect.width / 2;
    const triggerCenterY = triggerRect.top + triggerRect.height / 2;

    let top = 0;
    let left = 0;
    let arrowTop = 0;
    let arrowLeft = 0;

    // placement에 따른 툴팁과 화살표 위치 계산
    switch (placement) {
      case 'top':
        top = triggerTop - tipHeight - OFFSET;
        left = triggerLeft - TIP_LEFT_OFFSET;
        arrowTop = top + tipHeight;
        arrowLeft = triggerCenterX - wrapperRect.left - ARROW_SIZE / 2;
        break;

      case 'bottom':
        top = triggerTop + triggerRect.height + OFFSET;
        left = triggerLeft - TIP_LEFT_OFFSET;
        arrowTop = top - ARROW_SIZE;
        arrowLeft = triggerCenterX - wrapperRect.left - ARROW_SIZE / 2;
        break;

      case 'left':
        top = triggerTop + triggerRect.height / 2 - tipHeight / 2;
        left = triggerLeft - tipWidth - OFFSET;
        arrowTop = triggerCenterY - wrapperRect.top - ARROW_SIZE / 2;
        arrowLeft = left + tipWidth;
        break;

      case 'right':
        top = triggerTop + triggerRect.height / 2 - tipHeight / 2;
        left = triggerLeft + triggerRect.width + OFFSET;
        arrowTop = triggerCenterY - wrapperRect.top - ARROW_SIZE / 2;
        arrowLeft = left - ARROW_SIZE;
        break;
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
      <span
        role="button"
        tabIndex={0}
        aria-expanded={visible}
        aria-describedby={visible && measured ? tooltipId : undefined}
        onClick={handleClick}
        ref={triggerRef}
        className={styles.trigger}
      >
        <Icon name="info" size="small" />
      </span>

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
            className={clsx(styles.tip, styles[placement])}
            style={{
              position: 'absolute',
              top: position.top,
              left: position.left,
              visibility: measured ? 'visible' : 'hidden',
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
