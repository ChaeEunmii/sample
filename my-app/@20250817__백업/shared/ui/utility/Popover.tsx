'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { usePortal } from '@shared/hooks';
import { FocusTrap } from './FocusTrap';
import clsx from 'clsx';
import styles from './Popover.module.scss';

type Position = 'top' | 'bottom';
type PositionAlign = 'start' | 'end';

interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  trigger?: React.ReactNode | React.ReactElement;
  placement?: Position | [Position, PositionAlign?];
  isOpen?: boolean;
  popoverState?: (state: boolean) => void;
  inactiveEvent?: boolean;
  gap?: number;
  className?: string;
  closeLock?: boolean;
  portalRef?: React.RefObject<HTMLElement | null>;
}

// Popover Container 확인(250411 추가)
const getPortal = (node: HTMLElement | null) => {
  let current = node?.parentElement;
  while (current && current !== document.body) {
    const el = window.getComputedStyle(current);
    const isScrollY =
      (el.overflowY === 'auto' || el.overflowY === 'scroll') &&
      current.scrollHeight > current.clientHeight;
    const isScrollX =
      (el.overflowX === 'auto' || el.overflowX === 'scroll') &&
      current.scrollWidth > current.clientWidth;

    if (isScrollY || isScrollX) return current;
    current = current.parentElement;
  }
  return document.body;
};

// Popover 컴포넌트
export const Popover = ({
  className,
  trigger = 'trigger',
  placement = 'bottom',
  children,
  isOpen = false,
  popoverState,
  inactiveEvent = false,
  gap = 0,
  closeLock = false,
  portalRef,
  ...props
}: PopoverProps) => {
  const placements = Array.isArray(placement) ? placement : [placement];
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(isOpen);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const isScrollLockedRef = useRef(false);

  const portalRoot = usePortal();

  // 토글 이벤트
  const clickTrigger = () => {
    if (inactiveEvent) return;
    setIsPopoverOpen(!isPopoverOpen);
    popoverState?.(!isPopoverOpen);
  };

  // Popover 닫기 및 포커스 처리
  const closePopover = useCallback(() => {
    if (isPopoverOpen) {
      setIsPopoverOpen(false);
      popoverState?.(false);
    }
  }, [isPopoverOpen, popoverState]);

  // 외부 클릭 시 닫기
  const clickOutside = useCallback(
    (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        popoverRef.current &&
        !popoverRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        closePopover();
      }
    },
    [closePopover]
  );

  // 스크롤 시 닫기
  const handleScroll = useCallback(() => {
    if (isScrollLockedRef.current || closeLock) return;
    closePopover();
  }, [closePopover, closeLock]);

  // Popover 위치 설정
  const setPopoverPosition = useCallback(() => {
    const target = triggerRef.current;
    const popover = popoverRef.current;
    const portal = portalRef?.current ?? portalRoot;

    if (!target || !popover) return;

    const { top, left, width, height } = target.getBoundingClientRect();
    const portalRect = portal ? portal.getBoundingClientRect() : { top: 0, left: 0 };

    const popoverWidth = popover.offsetWidth;
    const popoverHeight = popover.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    let posX = !portal ? left + scrollX : left - portalRect.left;
    let posY = !portal ? top + scrollY : top - portalRect.top;
    let adjustedPos = [...placements];

    if (
      placements[0] === 'bottom' &&
      viewportHeight - (top + height) < popoverHeight &&
      top > popoverHeight
    ) {
      adjustedPos[0] = 'top';
    } else if (
      placements[0] === 'top' &&
      top < popoverHeight &&
      viewportHeight - (top + height) > popoverHeight
    ) {
      adjustedPos[0] = 'bottom';
    }

    switch (adjustedPos[0]) {
      case 'top':
        posY -= popoverHeight + gap;
        posX += width / 2 - popoverWidth / 2;
        break;
      case 'bottom':
        posY += height + gap;
        posX += width / 2 - popoverWidth / 2;
        break;
      default:
        break;
    }

    if (adjustedPos.length > 1) {
      switch (adjustedPos[1]) {
        case 'start':
          posX -= width / 2 - popoverWidth / 2;
          break;
        case 'end':
          posX += width / 2 - popoverWidth / 2;
          break;
      }
    }

    if (posX > 0 && posX + popoverWidth > viewportWidth) posX = viewportWidth - popoverWidth;
    if (!portal) posX = Math.max(posX, 0);

    popover.style.top = `${posY}px`;
    popover.style.left = `${posX}px`;
  }, [placements, triggerRef, popoverRef, gap]);

  // 상태 업데이트
  useEffect(() => setIsPopoverOpen(isOpen), [isOpen]);

  useEffect(() => {
    if (isPopoverOpen) setPopoverPosition();
  }, [isPopoverOpen]);

  useEffect(() => {
    if (portalRef?.current) {
      setPortalContainer(portalRef.current);
      portalRef.current.style.position = 'relative';
    }
  }, [portalRef]);

  // 이벤트
  useEffect(() => {
    window.addEventListener('resize', closePopover);
    return () => {
      window.removeEventListener('resize', closePopover);
    };
  }, [closePopover]);

  useEffect(() => {
    let target = portalContainer !== document.body ? portalContainer : null;

    if (isPopoverOpen) {
      isScrollLockedRef.current = true;
      setTimeout(() => (isScrollLockedRef.current = false), 100);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    if (target) {
      target.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (target) {
        target.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isPopoverOpen, portalContainer]);

  useEffect(() => {
    window.addEventListener('click', clickOutside);
    return () => {
      window.removeEventListener('click', clickOutside);
    };
  }, [clickOutside]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePopover();
      }
    };

    if (isPopoverOpen) {
      window.addEventListener('keydown', handleKeyPress);
    } else {
      window.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isPopoverOpen]);

  // ref 병합
  const mergeRefs = (ref: any, newRef: React.RefCallback<HTMLElement>) => {
    return (node: HTMLElement | null) => {
      // 기존 ref 처리
      if (ref) {
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref.hasOwnProperty('current')) {
          ref.current = node;
        }
      }
      if (newRef) newRef(node);
    };
  };

  // 트리거 : 참조 설정
  const triggerRefCallback = (node: HTMLElement | null) => {
    if (node) {
      triggerRef.current = node;
      if (!portalRef?.current) setPortalContainer(getPortal(node)); // 컨테이너 설정
    }
  };

  const findClickableElement = (element: React.ReactNode): React.ReactElement | null => {
    if (!React.isValidElement(element)) return null;

    const props = element.props as any;

    if (
      (typeof element.type === 'string' && (element.type === 'a' || element.type === 'button')) ||
      props.role === 'button'
    ) {
      return element;
    }

    // 커스텀 컴포넌트
    if (typeof element.type === 'function') {
      return element;
    }

    if (props && props.children) {
      // 단일 자식인 경우
      if (React.isValidElement(props.children)) {
        const childResult = findClickableElement(props.children);
        if (childResult) return childResult;
      }
      // 여러 자식이 있는 경우
      else if (Array.isArray(props.children)) {
        for (const child of props.children) {
          const childResult = findClickableElement(child);
          if (childResult) return childResult;
        }
      }
    }

    return null;
  };

  // 트리거 처리
  const triggerElement = React.isValidElement(trigger) ? trigger : null;
  let clickableElement = triggerElement ? findClickableElement(triggerElement) : null;

  // 트리거 렌더링
  const commonProps = (originalProps: any = {}) => {
    return {
      ref: mergeRefs(originalProps.ref, triggerRefCallback),
      onClick: (e: React.MouseEvent) => {
        clickTrigger();
        if (originalProps.onClick) {
          originalProps.onClick(e);
        }
      },
      'aria-expanded': isPopoverOpen,
      'aria-haspopup': true,
      disabled: inactiveEvent,
    };
  };

  const renderTrigger = () => {
    // 트리거가 ReactElement가 아닌 경우
    if (!triggerElement) {
      return (
        <button type="button" {...commonProps()}>
          {' '}
          {trigger}{' '}
        </button>
      );
    }

    // clickable
    const triggerProps = triggerElement.props as any; //타입단언(안하면 unknown 에러남)

    if (clickableElement === triggerElement) {
      return React.cloneElement(triggerElement, {
        ...triggerProps,
        ...commonProps(triggerProps),
      });
    } else if (clickableElement) {
      return React.cloneElement(
        triggerElement,
        {},
        // 자식요소 중 클릭 가능한 요소에만 이벤트 추가
        React.Children.map(triggerProps.children, (child) => {
          if (!React.isValidElement(child)) return child;

          if (child === clickableElement) {
            const childProps = child.props as any;
            return React.cloneElement(child, {
              ...childProps,
              ...commonProps(childProps),
            });
          }
          return child;
        })
      );
    }

    return React.cloneElement(triggerElement, {
      ...triggerProps,
      ...commonProps(triggerProps),
    });
  };

  if (!portalRoot) return;
  return (
    <>
      {renderTrigger()}
      {isPopoverOpen &&
        ReactDOM.createPortal(
          <FocusTrap loop={false} onExit={closePopover}>
            <div
              ref={popoverRef}
              className={clsx(styles.root, className)}
              onClick={(e) => e.stopPropagation()}
              {...props}
            >
              {children}
            </div>
          </FocusTrap>,
          portalRef?.current ?? portalRoot
        )}
    </>
  );
};
