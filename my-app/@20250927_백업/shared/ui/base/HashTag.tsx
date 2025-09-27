import React from 'react';
import styles from './HashTag.module.scss';
import clsx from 'clsx';

interface HashTagProps {
  /** 데이터 */
  data?: string[];
  /** 말줄임 처리 시 */
  line?: string;
  /** 추가 클래스명 */
  className?: string;
}

export const HashTag = ({ data, line, className }: HashTagProps) => {
  // 해시태그 포맷팅
  const formatHashTag = (text: string) => `#${text}`;

  if (!data || data.length === 0) return null;

  const rootClass = clsx(styles.root, line && styles[`line${line}`], className);

  if (data.length === 1) {
    return (
      <div className={rootClass}>
        <span className={styles.hashTag}>{formatHashTag(data[0])}</span>
      </div>
    );
  }

  return (
    <ul className={rootClass}>
      {data.map((item, idx) => (
        <li key={idx} className={styles.hashTag}>
          {formatHashTag(item)}
        </li>
      ))}
    </ul>
  );
};

HashTag.displayName = 'HashTag';
