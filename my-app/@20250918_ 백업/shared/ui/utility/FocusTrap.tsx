'use client';

import React, { useRef, useEffect, ReactNode, useId } from 'react';

const KEYCODE_TAB = 9;
const FOCUSABLE_ELEMENTS =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

// 전역 관리 객체 - 최소한의 정보만 저장
const trapRegistry: {
  activeIds: string[];
  triggerElements: Map<string, HTMLElement>;
  focusableElements: Map<string, HTMLElement[]>;
} = {
  activeIds: [],
  triggerElements: new Map(),
  focusableElements: new Map(),
};

// Types
interface FocusTrapProps {
  children: ReactNode;
  /** 자동으로 포커스 이동 설정 */
  autoFocus?: boolean;
  /** 기존 포커스 복원 설정 */
  restoreFocus?: boolean;
  /** 포커스 트랩 루프 설정 */
  loop?: boolean;
  /** 포커스 트랩이 활성화된 상태인지 여부 */
  isActive?: boolean;
  /** 포커스 트랩 종료 시 호출되는 콜백 */
  onExit?: () => void;
}

// FocusTrap Component
export const FocusTrap = ({
  children,
  autoFocus = true,
  restoreFocus = true,
  loop = true,
  isActive = true,
  onExit,
}: FocusTrapProps) => {
  const startSentinelRef = useRef<HTMLSpanElement | null>(null);
  const endSentinelRef = useRef<HTMLSpanElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  // 고유 ID 생성
  const uniqueId = useId();
  const idRef = useRef<string>(`focus-trap-${uniqueId}`);

  // 트랩 등록 및 활성화
  const registerTrap = () => {
    const id = idRef.current;

    // 이미 있으면 제거 후 마지막에 추가 (최상위로 올림)
    trapRegistry.activeIds = trapRegistry.activeIds.filter((trapId) => trapId !== id);
    if (isActive) {
      trapRegistry.activeIds.push(id);
    }

    // 트리거 저장
    if (restoreFocus && !trapRegistry.triggerElements.has(id)) {
      trapRegistry.triggerElements.set(id, document.activeElement as HTMLElement);
    }
  };

  // 최상위 트랩인지 확인
  const isTopMostTrap = () => {
    const id = idRef.current;
    return (
      trapRegistry.activeIds.length > 0 &&
      trapRegistry.activeIds[trapRegistry.activeIds.length - 1] === id
    );
  };

  // 트리거 요소 복원
  const refocusTrigger = (id: string) => {
    if (restoreFocus) {
      const triggerElement = trapRegistry.triggerElements.get(id);
      if (triggerElement) {
        try {
          triggerElement.focus();
        } catch (e) {
          console.error('포커스 복원 오류:', e);
        }
      }
    }
  };

  // 포커스 트랩 종료(loop 없을경우)
  const exitTrap = () => {
    if (!isTopMostTrap()) return;

    refocusTrigger(idRef.current);
    onExit?.();
  };

  // 초기 설정 및 정리
  useEffect(() => {
    registerTrap();

    return () => {
      const id = idRef.current;

      // 목록에서 제거
      trapRegistry.activeIds = trapRegistry.activeIds.filter((trapId) => trapId !== id);

      refocusTrigger(id);

      // 저장된 정보 정리
      trapRegistry.triggerElements.delete(id);
      trapRegistry.focusableElements.delete(id);
    };
  }, []);

  useEffect(() => {
    registerTrap();
  }, [isActive]);

  // 포커스 트랩 로직
  useEffect(() => {
    if (!isActive || !startSentinelRef.current || !startSentinelRef.current.nextElementSibling)
      return;

    const container = startSentinelRef.current.nextElementSibling as HTMLElement;
    containerRef.current = container;

    let focusableNodes: HTMLElement[] = [];

    const updateFocusNodes = () => {
      const focusableElements = container.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS);
      focusableNodes = Array.from(focusableElements).filter(
        (el) => window.getComputedStyle(el).display !== 'none'
      );

      // 전역 저장
      trapRegistry.focusableElements.set(idRef.current, focusableNodes);

      return focusableNodes;
    };

    // 초기 포커스 가능한 요소 목록 설정
    updateFocusNodes();

    if (autoFocus) {
      setTimeout(() => {
        container.setAttribute('tabindex', '-1');
        container.focus();
      }, 150);
    }

    // DOM 변경 감지
    const observer = new MutationObserver(() => {
      updateFocusNodes();
    });

    observer.observe(container, {
      childList: true,
      subtree: true,
    });

    const sentinelFocus = (event: FocusEvent, isFocusingStart: boolean) => {
      if (!isTopMostTrap()) return;

      if (focusableNodes.length === 0) {
        if (!loop) {
          exitTrap();
        }
        return;
      }

      event.preventDefault();
      if (isFocusingStart) {
        focusableNodes[focusableNodes.length - 1].focus();
      } else {
        focusableNodes[0].focus();
      }
    };

    // Tab 키 이벤트 핸들러
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isTopMostTrap()) return;

      if (event.key === 'Tab' || event.keyCode === KEYCODE_TAB) {
        if (focusableNodes.length === 0) {
          event.preventDefault();
          if (!loop) {
            exitTrap();
          }
          return;
        }

        const firstNode = focusableNodes[0];
        const lastNode = focusableNodes[focusableNodes.length - 1];

        // Shift+Tab
        if (event.shiftKey && document.activeElement === firstNode) {
          event.preventDefault();
          loop ? lastNode.focus() : exitTrap();
        }
        // Tab
        else if (!event.shiftKey && document.activeElement === lastNode) {
          event.preventDefault();
          loop ? firstNode.focus() : exitTrap();
        }
      }
    };

    // 센티널 포커스 이벤트
    const handleStartFocus = (event: FocusEvent) => {
      sentinelFocus(event, true);
    };

    const handleEndFocus = (event: FocusEvent) => {
      sentinelFocus(event, false);
    };

    document.addEventListener('keydown', handleKeyDown);
    startSentinelRef.current?.addEventListener('focus', handleStartFocus);
    endSentinelRef.current?.addEventListener('focus', handleEndFocus);

    // 클린업
    return () => {
      observer.disconnect();
      document.removeEventListener('keydown', handleKeyDown);
      startSentinelRef.current?.removeEventListener('focus', handleStartFocus);
      endSentinelRef.current?.removeEventListener('focus', handleEndFocus);
    };
  }, [isActive, loop]);

  return (
    <>
      <span
        ref={startSentinelRef}
        data-focus-trap-id={idRef.current}
        data-focus-trap="start"
        tabIndex={isActive ? 0 : -1}
        aria-hidden="true"
        style={{ position: 'fixed', opacity: 0, pointerEvents: 'none' }}
      />
      {children}
      <span
        ref={endSentinelRef}
        data-focus-trap-id={idRef.current}
        data-focus-trap="end"
        tabIndex={isActive ? 0 : -1}
        aria-hidden="true"
        style={{ position: 'fixed', opacity: 0, pointerEvents: 'none' }}
      />
    </>
  );
};
