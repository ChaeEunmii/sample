import React, { useEffect, useState } from 'react';
import styles from './LoadingSpinner.module.scss';

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const LoadingSpinner = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const duration = 2000; // 2초에 한 사이클

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = (elapsed % duration) / duration; // 0~1 반복
      const eased = easeOutCubic(t);
      setProgress(eased * 100);
      requestAnimationFrame(animate); // 무한 루프
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const radius = 14;
  const stroke = 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  return (
    <div className={styles.loading}>
      <svg className={styles.spinner} width="32" height="32" viewBox="0 0 32 32">
        <circle className={styles.bg} cx="16" cy="16" r={radius} strokeWidth={stroke} />
        <circle
          className={styles.progress}
          cx="16"
          cy="16"
          r={radius}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
    </div>
  );
};

export default LoadingSpinner;
