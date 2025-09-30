'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Text, Tabs } from '@shared/ui';
import styles from './HPointPay.module.scss';

export default function HPointPay() {
  // 탭
  const [activeIndex, setActiveIndex] = useState(0);
  const tabItems = [{ label: '결제수단' }, { label: '사용내역' }];

  return (
    <Container showBack title="H.Point Pay">
      <Contents className={styles.layout}>
        <Tabs activeTab={activeIndex} onTabChange={(i) => setActiveIndex(i)} data={tabItems} />
        <Text>구독상세</Text>
        <ul>
          <li>
            <a href="#">결제 비밀번호 변경</a>
          </li>
          <li>
            <button type="button">원터치 결제 설정</button>
          </li>
          <li>
            <button type="button">H.Point Pay 이용약관 및 정책</button>
          </li>
        </ul>
      </Contents>
    </Container>
  );
}
