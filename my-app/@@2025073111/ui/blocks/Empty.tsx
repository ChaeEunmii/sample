'use client';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { ButtonArea, Heading, Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './Empty.module.scss';

interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 스타일 변형 
   * - minDisplay: layout height 값이 커서 상단 마진을 높게 잡아버리는 경우 사용(ex. 마이페이지 > 쇼핑혜택 > 쿠폰) 
  */
  variant?: 'minDisplay' | string;
  /** 주요 문구 설정 */
  title?: string;
  /** 보조 문구 설정 */
  desc?: React.ReactNode;
  /** 버튼영역 */
  buttons?: React.ReactNode;
  /** 추가 콘텐츠 필요 시 */
  children?: React.ReactNode;
  /** 추가 CSS 클래스명 */
  className?: string;
}

const MIN_MARGIN_TOP = 16; // 최소 마진 상단 값
const TOP_POSITION_RATIO = 0.3; // 부모 높이의 위치 기준

export const Empty = ({
  variant,
  title,
  desc,
  buttons,
  children,
  className,
  ...props
}: EmptyProps) => {
  const [isClient, setIsClient] = useState(false); // 클라이언트 렌더링 여부
  const [marginTop, setMarginTop] = useState(MIN_MARGIN_TOP); // 마진 상단값
  const emptyRef = useRef<HTMLDivElement>(null);

  // 마진 상단값 업데이트 함수
  const updateMargin = () => {
    const el = emptyRef.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const parentHeight = parent.offsetHeight;
    const elementHeight = el.offsetHeight;

    // 컴포넌트가 부모보다 크면 최소 마진만 적용
    if (elementHeight >= parentHeight) {
      setMarginTop(MIN_MARGIN_TOP);
      return;
    }

    // 부모 높이의 위치 기준에 컴포넌트 중앙이 오도록 계산
    const targetMargin = parentHeight * TOP_POSITION_RATIO - elementHeight / 2;

    // marginTop 은 최소 MIN_MARGIN_TOP 이상 유지
    setMarginTop(Math.max(MIN_MARGIN_TOP, targetMargin));
  };

  useEffect(() => {
    setIsClient(true);
    if (isClient) {
      updateMargin();
    }
    window.addEventListener('resize', updateMargin);
    return () => window.removeEventListener('resize', updateMargin);
  }, [isClient]);
  if (!isClient) return null;

  return (
    <div
      ref={emptyRef}
      className={clsx(styles.root, variant && styles[variant], className)}
      style={{
        marginTop,
      }}
      {...props}
    >
      {title && (
        <Heading size="3" weight="medium">
          {title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Heading>
      )}
      {desc && (
        <Text size="5" color="gray3" reading>
          {desc}
        </Text>
      )}
      {buttons && (
        <ButtonArea margin="2" className={styles.buttons}>
          {buttons}
        </ButtonArea>
      )}
      {children}
    </div>
  );
};

Empty.displayName = 'Empty';
