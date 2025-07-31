'use client';

import { useState } from 'react';
import { Tabs } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import UserInfoForm from '@views/mypage/order/history/components/UserInfoForm';
import styles from './TheHyundaiOrderHistory.module.scss';

export default function TheHyundaiOrderHistory() {
  // 탭
  const tabItems = [{ label: 'H.Point 통합회원' }, { label: '더현대닷컴회원' }];
  const [clickedTab, setClickedTab] = useState(0);

  return (
    <Container showBack title="더현대/투홈 과거 주문 내역 조회">
      <Contents className={styles.layout}>
        <Tabs data={tabItems} activeTab={clickedTab} onTabChange={setClickedTab} />
        {/* H.Point 통합회원 */}
        {clickedTab === 0 && (
          <>
            <UserInfoForm />
          </>
        )}
        {/* 더현대닷컴회원 */}
        {clickedTab === 1 && (
          <>
            <UserInfoForm />
          </>
        )}
      </Contents>
    </Container>
  );
}
