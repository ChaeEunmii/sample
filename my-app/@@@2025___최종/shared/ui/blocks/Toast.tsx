'use client';
// 라이브러리
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// 컴포넌트
import { TextButton } from '../base/TextButton';
import { usePortal } from '@shared/hooks';
import { calculateBottom } from '@/shared/utils/ui';
// 스타일
import styles from './Toast.module.scss';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
  button?: {
    label: string;
    onClick: () => void;
    point?: boolean;
  };
}

export const Toast = ({ message, onClose, duration, button, ...props }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [bottom, setBottom] = useState<number | null>(null);
  const portalRoot = usePortal();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // 애니메이션을 위한 지연
      setTimeout(onClose, 10);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => setBottom(calculateBottom()), []);

  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div
      className={styles.root}
      aria-live="polite"
      style={
        {
          '--ncp-toast-bottom': bottom !== null ? `${bottom + 16}px` : undefined,
        } as React.CSSProperties
      }
      {...props}
    >
      <p className={styles.message}>{message}</p>
      {button && (
        <TextButton
          variant="underline"
          color={button.point ? 'point' : 'inherit'}
          size="1"
          onClick={button.onClick}
        >
          {button.label}
        </TextButton>
      )}
    </div>,
    portalRoot
  );
};

Toast.displayName = 'Toast';
