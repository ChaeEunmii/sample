'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs } from '@shared/ui';
import styles from './Concept.module.scss';

export default function ConceptFood() {
  // 탭
  const [activeIndex, setActiveIndex] = useState(0);
  const tabItems = [
    { label: '홈' },
    { label: '베스트' },
    { label: '세일' },
    { label: '펜트리1985' },
  ];

  return (
    <Container showBack type="basket">
      <Contents>
        <Tabs
          variant="buttons"
          activeTab={activeIndex}
          onTabChange={(i) => setActiveIndex(i)}
          data={tabItems}
          className={styles.topTabs}
        />
        공통 모듈/전용 모듈 노출
      </Contents>
    </Container>
  );
}
