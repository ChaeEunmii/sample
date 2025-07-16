'use client';
// 라이브러리
import { useEffect, useId, useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
// 컴포넌트
import { useModalOverlay, usePortal } from '@shared/hooks';
import { IconButton, FocusTrap, Heading, Text } from '@shared/ui';
// 스타일
import clsx from 'clsx';
import styles from './Drawer.module.scss';

interface DrawerProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  /** 하단 간격 */
  offset?: number;
  /** 하단 고정 영역 */
  footer?: React.ReactNode;
  /** 드래그 핸들 노출 여부 */
  draggable?: boolean;
  /** 드래그 핸들로 조절 가능한 최대 높이(%) */
  maxHeight?: number;
  /** 접기 버튼 노출 여부 */
  collapsible?: boolean;
}

export const Drawer = ({
  title,
  description,
  className,
  children,
  isOpen,
  onClose,
  offset,
  footer,
  draggable = false,
  maxHeight = 90,
  collapsible = false,
}: DrawerProps) => {
  const titleId = `modal-label--${useId()}`;
  const [show, setShow] = useState(false);
  const [height, setHeight] = useState<number | null>(null); // 초기에는 auto
  const isDraggingRef = useRef(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const startHeight = useRef(0);

  const handleClose = () => {
    setShow(false);
  };
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!show) timer = setTimeout(() => onClose(), 300);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [show]);

  // 드래그 시작
  const handleDragStart = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();

      if (height === null && drawerRef.current) {
        const rect = drawerRef.current.getBoundingClientRect();
        const currentHeightPer = (rect.height / window.innerHeight) * 100;
        setHeight(currentHeightPer);
        startHeight.current = currentHeightPer;
      } else {
        startHeight.current = height!;
      }

      isDraggingRef.current = true;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      startY.current = clientY;

      // 드래그 중 텍스트 선택 방지
      document.body.style.userSelect = 'none';

      // 이벤트 리스너 등록
      const handleMouseMove = (e: MouseEvent) => handleDragMove(e);
      const handleMouseUp = () => {
        handleDragEnd();
        cleanup();
      };
      const handleTouchMove = (e: TouchEvent) => handleDragMove(e);
      const handleTouchEnd = () => {
        handleDragEnd();
        cleanup();
      };

      const cleanup = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    },
    [height]
  );

  // 드래그 중
  const handleDragMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDraggingRef.current) return;

      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const deltaY = startY.current - clientY; // 위로 드래그하면 양수
      const deltaHeight = (deltaY / window.innerHeight) * 100;

      let newHeight = startHeight.current + deltaHeight;

      // 최대 높이 제한
      newHeight = Math.min(newHeight, maxHeight);

      // 15% 미만이면 닫기
      if (deltaY < 0 && newHeight < 15) {
        handleClose();
        return;
      }

      setHeight(newHeight);
    },
    [handleClose]
  );

  // 키보드 드래그
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      let currentHeight = height;

      if (currentHeight === null && drawerRef.current) {
        const rect = drawerRef.current.getBoundingClientRect();
        currentHeight = (rect.height / window.innerHeight) * 100;
        setHeight(currentHeight);
      }

      if (!currentHeight) return;

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHeight(Math.min(currentHeight + 5, maxHeight));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const newHeight = currentHeight - 5;
        newHeight < 15 ? handleClose() : setHeight(newHeight);
      }
    },
    [height, maxHeight, handleClose]
  );

  // 드래그 종료
  const handleDragEnd = useCallback(() => {
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 50);
    document.body.style.userSelect = '';
  }, []);

  const { overlayProps, modalProps } = useModalOverlay({
    isOpen,
    onClose: handleClose,
    labelledBy: title ? titleId : undefined,
  });

  useEffect(() => {
    isOpen ? setShow(true) : setShow(false);
  }, [isOpen]);

  // 모달이 열릴 때 높이 초기화
  useEffect(() => {
    if (isOpen) setHeight(null);
  }, [isOpen]);

  const portalRoot = usePortal();
  if (!isOpen || !portalRoot) return null;

  return ReactDOM.createPortal(
    <FocusTrap>
      <div
        className={styles.overlay}
        {...overlayProps}
        {...(offset && { style: { bottom: `${offset}px` } })}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            if (!isDraggingRef.current) {
              handleClose();
            }
          }
        }}
      >
        <div
          {...modalProps}
          ref={drawerRef}
          role="dialog"
          aria-labelledby={title ? titleId : undefined}
          className={clsx(styles.root, className)}
          data-state={show ? 'show' : 'hide'}
          data-dragging={isDraggingRef.current ? 'true' : 'false'}
          style={
            draggable && height !== null
              ? { height: `${height}%`, maxHeight: `${maxHeight}%` }
              : undefined
          }
        >
          {draggable && (
            <div
              className={styles.drag}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
              onKeyDown={handleKeyDown}
              role="slider"
              aria-label="Drawer 높이 조절"
              aria-valuenow={height ? Math.round(height) : undefined}
              aria-valuemax={maxHeight}
              aria-valuetext={height ? `높이 ${Math.round(height)}%` : '자동 높이'}
              aria-orientation="vertical"
              tabIndex={0}
            />
          )}

          {collapsible && (
            <button
              type="button"
              className={styles.collapse}
              onClick={handleClose}
              aria-label="닫기"
            />
          )}

          {title && (
            <div className={clsx(styles.header)}>
              <Heading
                as="h2"
                size="6"
                weight="semibold"
                id={titleId}
                indent
                className={styles.title}
              >
                {title}
              </Heading>
              {description && (
                <Text indent className={styles.desc}>
                  {description}
                </Text>
              )}
              {!draggable && !collapsible && (
                <IconButton
                  name="close"
                  size="large"
                  onClick={handleClose}
                  className={styles.close}
                >
                  닫기
                </IconButton>
              )}
            </div>
          )}
          <div className={clsx(styles.body)}>{children}</div>
          {footer && <div className={styles.footer}>{footer}</div>}
        </div>
      </div>
    </FocusTrap>,
    portalRoot
  );
};

Drawer.displayName = 'Drawer';
