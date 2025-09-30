import React from 'react';

import styles from './EventDescList.module.scss';

interface EventDescItem {
  term: string;
  desc: string | React.ReactNode;
  /** dd 상단 마진 (기본 8) */
  margin?: 4 | 8 | 10 | 16;
}

interface EventDescListProps {
  data: EventDescItem[];
}

export default function EventDescList({ data }: EventDescListProps) {
  return (
    <dl className={styles.root}>
      {data.map(({ term, desc, margin }: EventDescItem, idx) => {
        return (
          <div key={idx}>
            <dt>{term}</dt>
            <dd className={margin ? styles[`mt-${margin}`] : undefined}>{desc}</dd>
          </div>
        );
      })}
    </dl>
  );
}
