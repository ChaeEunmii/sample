'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs } from '@shared/ui';
import styles from './Concept.module.scss';
// 예시 컴포넌트
import { ConceptRsvpBrand } from '@views/concept/overview/ConceptRsvpBrand';

const tabs = [
  { id: 'recommend', label: '추천' },
  { id: 'brand', label: '브랜드' },
  { id: 'showcase', label: 'SHOWCASE' },
  { id: 'culturelift', label: 'Culture&Life' },
];

export default function ConceptRsvp() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentTabId = searchParams.get('tab') || 'recommend';
  const activeIndex = tabs.findIndex((t) => t.id === currentTabId);

  const handleTabChange = (index: number) => {
    const newTabId = tabs[index].id;
    router.push(`?tab=${newTabId}`);
  };

  const renderContents = () => {
    switch (currentTabId) {
      case 'recommend':
        return <Contents>공통 모듈 및 전용모듈</Contents>;
      case 'brand':
        return <ConceptRsvpBrand />;
      case 'showcase':
        return <Contents>공통 모듈</Contents>;
      case 'culturelift':
        return <Contents>공통 모듈</Contents>;
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
