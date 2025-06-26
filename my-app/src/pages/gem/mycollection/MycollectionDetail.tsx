'use client';

import { useState } from 'react';
import { Tabs, Masonry, Icon } from '@shared/ui';
import { Badge } from '@views/gem/components/Badge';
import styles from './MycollectionDetail.module.scss';

export const tabItems = [{ label: 'ALL 50' }, { label: 'BRPRODUCT 35' }, { label: 'BRAND 15' }];

const cardData = [
  { title: 'Card 1', content: 'Masonry 임시 카드입니다', height: 292 },
  { title: 'Card 2', content: 'Masonry 임시 카드입니다', height: 168 },
  { title: 'Card 3', content: 'Masonry 임시 카드입니다', height: 292 },
  { title: 'Card 4', content: 'Masonry 임시 카드입니다', height: 168 },
  { title: 'Card 5', content: 'Masonry 임시 카드입니다', height: 292 },
  { title: 'Card 6', content: 'Masonry 임시 카드입니다', height: 168 },
  { title: 'Card 7', content: 'Masonry 임시 카드입니다', height: 292 },
  { title: 'Card 8', content: 'Masonry 임시 카드입니다', height: 168 },
  { title: 'Card 9', content: 'Masonry 임시 카드입니다', height: 292 },
];

export default function MycollectionDetail() {
  // 탭
  const [clickedTab, setClickedTab] = useState('0');
  const tabsWithClick = tabItems.map((tab, index) => ({
    ...tab,
    onClick: () => setClickedTab(`${index}`),
  }));

  return (
    <div className={styles.layout}>
      <div className={styles.titleWrap}>
        <p className={styles.tit}>귀여운거 옆에 귀여운거🎀</p>
        <ul className={styles.infos}>
          <li>
            이름인데아직안함
            <Badge />
          </li>
          <li>
            <Icon name="gem" size="xsmall" />
            2,743
          </li>
          <li>
            <Icon name="info" size="xsmall" />
            1일 전
          </li>
        </ul>
      </div>
      <div className={styles.sticky}>
        <Tabs data={tabsWithClick} defaultActive={0} variant="buttons" className={styles.tabs} />
      </div>
      <div className={styles.content}>
        {/* Masonry */}
        <Masonry columns={2} gutter={8}>
          {cardData.map((card, idx) => (
            <div
              key={idx}
              style={{
                padding: '16px',
                backgroundColor: '#f2f2f2',
                borderRadius: '4px',
                height: `${card.height}px`,
                border: '1px solid #ddd',
              }}
            >
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}
