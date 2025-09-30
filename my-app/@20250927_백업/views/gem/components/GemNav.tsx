'use client';

import { Tabs } from '@shared/ui';
import styles from './GemNav.module.scss';

// 활성 메뉴 키 타입
type ActiveKey = 'gem' | 'collection';

interface GemNavProps {
  activeKey: ActiveKey;
}

export const GemNav = ({ activeKey }: GemNavProps) => {
  return (
    <nav className={styles.nav} aria-label="GEM navigation">
      <Tabs
        data={[
          {
            href: '/gem/gem',
            label: 'GEM',
            icon: 'gemOff',
            iconOn: 'gemOn',
          },
          {
            href: '/gem/mycollection',
            label: 'MY COLLECTION',
            icon: 'collectionOff',
            iconOn: 'collectionOn',
          },
        ]}
        defaultActive={activeKey === 'gem' ? 0 : 1}
        variant="iconText"
      />
    </nav>
  );
};
