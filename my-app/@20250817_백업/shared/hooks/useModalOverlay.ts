import { useEffect, useMemo, useState } from 'react';
import { useScrollLock } from '@shared/hooks';

let modalCount = 0;

interface ModalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  isDismissable?: boolean;
  labelledBy?: string;
  role?: string;
  parentDepth?: number;
}

export function useModalOverlay({
  isOpen,
  onClose,
  isDismissable,
  labelledBy,
  role = 'dialog',
  parentDepth = 1,
}: ModalOverlayProps) {
  const [vh, setVh] = useState<number>(0);
  useScrollLock(isOpen);

  // 뷰포트 높이 계산
  useEffect(() => {
    if (!isOpen) return;

    const updateVh = () => {
      const currentHeight = window.innerHeight;
      setVh(currentHeight * 0.01);
    };

    updateVh();
    window.addEventListener('resize', updateVh);

    return () => {
      window.removeEventListener('resize', updateVh);
    };
  }, [isOpen]);

  // modal 외 비활성 처리
  useEffect(() => {
    if (!isOpen) return;

    let portalRoot: HTMLElement | null =
      document.querySelector('[data-overlay]')?.parentElement ?? null;
    // parentDepth 만큼 위로 올라감
    for (let i = 1; i < parentDepth && portalRoot; i++) {
      portalRoot = portalRoot.parentElement;
    }

    if (!portalRoot) return;

    const siblings = Array.from(portalRoot.parentElement?.children || []).filter(
      (el) => el !== portalRoot
    );
    if (modalCount === 0) {
      siblings.forEach((el) => el.setAttribute('aria-hidden', 'true'));
    }
    modalCount++;

    return () => {
      modalCount--;
      if (modalCount === 0) {
        siblings.forEach((el) => el.removeAttribute('aria-hidden'));
      }
    };
  }, [isOpen]);

  const overlayProps = useMemo(
    () => ({
      'data-overlay': isOpen ? true : false,
      onClick: isDismissable ? onClose : undefined,
      style: {
        ...(!isOpen && { visibility: 'hidden' as const }),
        ...(vh && { '--layout-vh': `${vh}px` }),
      },
    }),
    [isOpen, onClose, isDismissable, vh]
  );

  const modalProps = useMemo(
    () => ({
      role: role,
      onClick: isDismissable ? (e: React.MouseEvent) => e.stopPropagation() : undefined,
      'aria-labelledby': labelledBy,
    }),
    [isDismissable, role, labelledBy]
  );

  return { overlayProps, modalProps };
}
