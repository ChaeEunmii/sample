'use client';

import { useEffect, useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs } from '@shared/ui';
// import { ClubContentSwitcher } from '@views/mypage/club/myclub/components/ClubContentSwitcher';
import { ClubView, ClubViewData } from '@/views/mypage/club/myclub/components/ClubView';
import { clubThumbTabs, MyClubDataMap } from '@mocks/club';

import styles from './MyClubMain.module.scss';

export default function MyClubMain() {
  // 사용자가 가입한 클럽 ID 배열 (서버에서 받아온다고 가정)
  const userClubIds = [
    'beauty',
    'moms',
    'pet',
    'outdoor',
    'healthy',
    'pet',
    'modern',
    'ezwel',
    'friends',
  ];

  // 가입한 클럽만 필터링하여 탭 데이터로 사용
  const joinedTabs = clubThumbTabs.filter((tab) => userClubIds.includes(tab.id));

  // 탭
  const [clickedTab, setClickedTab] = useState(0);

  // 현재 선택된 탭 데이터
  const selectedTab = joinedTabs[clickedTab];

  // selectedTab.id가 MyClubDataMap의 키임을 명확히 알려줌
  const tabId = selectedTab.id as keyof typeof MyClubDataMap;

  // clubData가 ClubViewData 타입임을 명시해 타입 에러 방지
  const clubData = MyClubDataMap[tabId] as ClubViewData;

  // 탭 클릭시 스크롤상단이동
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [clickedTab]);

  return (
    <Container showBack title="마이클럽">
      <Contents className={styles.layout}>
        <div className={styles.stickyTop}>
          <Tabs
            data={joinedTabs}
            variant="buttons"
            activeTab={clickedTab}
            onTabChange={setClickedTab}
            className={styles.tabs}
          />
        </div>
        {/* 클럽 데이터가 있을 때만 렌더 */}
        {/* {clubData ? (
          <ClubContentSwitcher clubData={clubData} />
        ) : (
          <div>가입된 클럽이 없습니다.</div>
        )} */}
        {clubData ? <ClubView clubData={clubData} /> : <div>가입된 클럽이 없습니다.</div>}
      </Contents>
    </Container>
  );
}
