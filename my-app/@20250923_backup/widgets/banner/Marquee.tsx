import React from 'react';
import clsx from 'clsx';
import styles from './Marquee.module.scss';

interface MarqueeProps {
  children: React.ReactNode;
  /** 속도(초): 트랙이 100%/duplicate 한 칸 이동하는 데 걸리는 시간 */
  speed?: number;
  /** 흐르는방향 (기본:right (좌->우)) */
  direction?: 'left' | 'right';
  /** 높이 지정 */
  height?: number | string;
  /** 복제 횟수 (기본 3) */
  duplicate?: number;
  /** 추가적인 클래스 */
  className?: string;
}

export const Marquee = ({
  children,
  speed = 10,
  direction = 'right',
  className,
  height,
  duplicate = 3,
}: MarqueeProps) => {
  const style: React.CSSProperties & { [key: string]: string } = {
    animationDuration: `${speed}s`,
    '--duplicate': String(duplicate), // CSS 변수로 전달
    ...(height ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
  };

  const contents = Array.from({ length: duplicate });

  return (
    <div className={clsx(styles.root, className)}>
      <div className={clsx(styles.track, styles[direction])} style={style}>
        {contents.map((_, i) => (
          <div key={i} className={styles.content} aria-hidden={i > 0}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};
