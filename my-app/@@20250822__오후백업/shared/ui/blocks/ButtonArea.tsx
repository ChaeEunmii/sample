'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './ButtonArea.module.scss';

interface ButtonAreaProps {
  /** 레이아웃 배치 스타일 */
  type?: 'base' | 'sticky';
  /** 스타일 */
  variant?: 'clear';
  /** 버튼 컴포넌트 */
  children: React.ReactNode;
  /** 세로 정렬 여부 */
  vertical?: boolean;
  /** margin top 설정 기본 var(--ncp-layout-gutter-y) (0px, 24px, 32px, 16px) */
  margin?: '0' | '1' | '2' | '3';
  /** 추가 클래스명 */
  className?: string;
  /** 버튼 정렬 변경 */
  align?: 'center' | 'right';
}

export const ButtonArea: React.FC<ButtonAreaProps> = ({
  type = 'base',
  variant,
  children,
  vertical,
  margin,
  className,
  align,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isStatic, setIsStatic] = useState(true); // 기본: 원래 위치(static)

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(() => {
      window.dispatchEvent(new Event('ButtonArea:resized'));
    });

    resizeObserver.observe(ref.current);
    window.dispatchEvent(new Event('ButtonArea:mounted'));

    return () => {
      resizeObserver.disconnect();
      window.dispatchEvent(new Event('ButtonArea:unmounted'));
    };
  }, []);

  useEffect(() => {
    if (type !== 'sticky' || !sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStatic(entry.isIntersecting);
      },
      {
        threshold: 1.0,
      }
    );

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [type]);

  return (
    <>
      <div
        ref={ref}
        className={clsx(
          styles.root,
          type !== 'base' && styles[type],
          variant && styles[variant],
          vertical && styles.vertical,
          margin && styles[`mt${margin}`],
          align && styles[align],
          className
        )}
        data-sticky-state={isStatic ? 'false' : 'true'}
        {...props}
      >
        {children}
      </div>
      {type === 'sticky' && <div ref={sentinelRef} className="ncp-sentinel" />}
    </>
  );
};

ButtonArea.displayName = 'ButtonArea';
