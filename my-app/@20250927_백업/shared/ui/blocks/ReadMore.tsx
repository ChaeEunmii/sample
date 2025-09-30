'use client';
// 라이브러리
import { useState, useEffect, useRef } from 'react';
// 컴포넌트
import { Text, TextButton } from '@shared/ui';
import { TextButtonProps } from '../base/TextButton';
// 스타일
import styles from './ReadMore.module.scss';
import clsx from 'clsx';

interface ReadMoreProps {
  /** 더보기 타입 */
  type?: 'inline' | 'below';
  /** 표시할 내용 */
  children: React.ReactNode;
  /** 줄 수 제한 */
  lines?: number;
  /** Text 컴포넌트 props */
  textProps?: {
    size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
    className?: string;
  };
  /** TextButton 컴포넌트 props */
  buttonProps?: {
    size?: TextButtonProps['size'];
    color?: TextButtonProps['color'];
    className?: string;
  };
  /** 토글 가능 여부 (true: 접기/더보기 둘 다, false: 더보기만) */
  toggleable?: boolean;
  /** 클릭 이벤트 핸들러 (없으면 기본 더보기 펼침) */
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  /** 추가 클래스명 */
  className?: string;
}

export const ReadMore = ({
  type = 'inline',
  children,
  lines = 3,
  textProps,
  buttonProps,
  toggleable = false,
  onClick,
  className,
}: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const readMoreRef = useRef<HTMLDivElement>(null);

  // 최대 높이 계산 (line-height 1.7em 기준)
  const maxHeight = `${lines * 1.7}em`;

  useEffect(() => {
    if (!readMoreRef.current) return;

    const checkOverflow = () => {
      const el = readMoreRef.current?.querySelector(`.${styles.text}`);
      if (!el) return;

      // 스크롤 높이가 클라이언트 높이보다 크면 더보기 버튼 노출
      const hasOverflow = el.scrollHeight > el.clientHeight;
      setShowButton(hasOverflow);
    };

    // 딜레이 (폰트 로딩 고려)
    const timer = setTimeout(checkOverflow, 100);

    window.addEventListener('resize', checkOverflow);
    // 클린업
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkOverflow);
    };
  }, [children]);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={clsx(styles.root, className)}
      ref={readMoreRef}
      style={
        {
          '--readmore-line-clamp': lines,
          '--readmore-max-height': maxHeight,
        } as React.CSSProperties
      }
    >
      <Text
        size={textProps?.size || '4'}
        className={clsx(styles.text, !isExpanded && styles.collapse, textProps?.className)}
        indent
        reading
      >
        {children}
      </Text>
      {showButton && (toggleable || !isExpanded) && (
        <TextButton
          variant={type === 'below' ? 'underline' : undefined}
          size={buttonProps?.size || '1'}
          color={buttonProps?.color ?? (type === 'inline' ? 'gray3' : undefined)}
          className={clsx(
            styles.more,
            type && styles[type],
            isExpanded && type === 'inline' && styles.fold,
            buttonProps?.className
          )}
          onClick={onClick ? onClick : toggleExpanded}
        >
          {isExpanded ? '접기' : '더보기'}
        </TextButton>
      )}
    </div>
  );
};

ReadMore.displayName = 'ReadMore';
