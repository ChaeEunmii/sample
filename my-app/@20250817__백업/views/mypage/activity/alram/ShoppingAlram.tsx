'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs } from '@shared/ui';
import { RestockAlarm } from '@/views/mypage/activity/alram/restock/RestockAlarm';
import { LiveAlarm } from '@/views/mypage/activity/alram/live/LiveAlarm';
import { restockAlarmList, liveAlarmList, LiveFollowList } from '@mocks/myactivity';
import styles from './ShoppingAlram.module.scss';

export default function ShoppingAlram() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');
  const isTab2 = searchParams.has('tab2');
  // mock 데이터 가져오기
  const recentProdData = isNoData ? [] : restockAlarmList;
  const liveAlarmData = isNoData ? [] : liveAlarmList;
  const liveFollowData = isNoData ? [] : LiveFollowList;

  // 탭
  const [activeIndex, setActiveIndex] = useState(!isTab2 ? 0 : 1);
  const tabItems = [{ label: '재입고 알림' }, { label: 'LIVE 알림' }];

  return (
    <Container title="쇼핑 알림" type="setting">
      <Contents className={styles.layout}>
        <Tabs activeTab={activeIndex} onTabChange={(i) => setActiveIndex(i)} data={tabItems} />
        {/* 재입고 알림 */}
        {activeIndex === 0 && <RestockAlarm data={recentProdData} />}
        {/* LIVE 알림 */}
        {activeIndex === 1 && <LiveAlarm data={liveAlarmData} follows={liveFollowData} />}
      </Contents>
    </Container>
  );
}
