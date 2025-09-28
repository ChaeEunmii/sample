'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs } from '@shared/ui';
import styles from './Concept.module.scss';

const tabs = [
  { id: 'home', label: '홈' },
  { id: 'best', label: '베스트' },
  { id: 'sale', label: '세일' },
  { id: 'pantry', label: '펜트리1985&Life' },
];

export default function ConceptFood() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentTabId = searchParams.get('tab') || 'home';
  const activeIndex = tabs.findIndex((t) => t.id === currentTabId);

  const handleTabChange = (index: number) => {
    const newTabId = tabs[index].id;
    router.push(`?tab=${newTabId}`);
  };

  const renderContents = () => {
    switch (currentTabId) {
      case 'home':
        return <Contents>공통 모듈 및 전용모듈</Contents>;
      case 'best':
        return <Contents>베스트 탭은 전문관 공통으로 운영 예정</Contents>;
      case 'sale':
        return <Contents>공통 모듈 및 전용모듈</Contents>;
      case 'pantry':
        return <Contents>공통 모듈 및 전용모듈</Contents>;
      default:
        return null;
    }
  };

  return (
    <Container showBack type="basket">
      <Tabs
        variant="buttons"
        data={tabs}
        className={styles.tab}
        activeTab={activeIndex}
        onTabChange={handleTabChange}
      />
      {renderContents()}
    </Container>
  );
}
