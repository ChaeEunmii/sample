'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs } from '@shared/ui';
import UserInfoForm from '@views/mypage/order/history/components/UserInfoForm';
import styles from './TohomeOrderHistory.module.scss';

export default function TohomeOrderHistory() {
  // 탭
  const tabItems = [{ label: 'H.Point 통합회원' }, { label: '투홈 일반회원' }];
  const [clickedTab, setClickedTab] = useState(1);

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
        {/* 투홈 일반회원 */}
        {clickedTab === 1 && (
          <>
            <UserInfoForm />
          </>
        )}
      </Contents>
    </Container>
  );
}
