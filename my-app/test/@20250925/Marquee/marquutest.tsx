import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './Marquee.module.scss';

interface MarqueeProps {
  children: React.ReactNode;
  /** 속도(px/s): 기본 100 */
  speed?: number;
  direction?: 'left' | 'right';
  height?: number | string;
  duplicate?: number;
  className?: string;
}

export const Marquee = ({
  children,
  speed = 100,
  direction = 'right',
  className,
  height,
  duplicate = 3,
}: MarqueeProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;
    // 원본 1세트(content) 너비 측정
    const firstContent = trackRef.current.querySelector<HTMLElement>(
      `.${styles.content}`
    );
    if (!firstContent) return;
    const distance = firstContent.scrollWidth;
    // duration = 거리(px) / 속도(px/s)
    setDuration(distance / speed);
  }, [speed, children]);

  const style: React.CSSProperties & { [key: string]: string } = {
    animationDuration: `${duration}s`,
    '--duplicate': String(duplicate),
    ...(height ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
  };

  const contents = Array.from({ length: duplicate });

  return (
    <div className={clsx(styles.root, className)}>
      <div
        ref={trackRef}
        className={clsx(styles.track, styles[direction])}
        style={style}
      >
        {contents.map((_, i) => (
          <div key={i} className={styles.content} aria-hidden={i > 0}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};