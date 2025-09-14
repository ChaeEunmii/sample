'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Text, TextButton, Loading, Tabs, Empty, Button } from '@shared/ui';
import { AlramItem } from '@/views/mypage/util/alram/AlramItem';
import OpenAlramDrawer from '@views/mypage/util/alram/OpenAlramDrawer';
import styles from './Alram.module.scss';
import { mockMainAlramList, mockOpenAlramList } from '@mocks/mypage';

export default function Alram() {
  const [isOpenAlramDrawer, setIsOpenAlramDrawer] = useState(false); // 관심 브랜드의 래플 상품 오픈 알림 (D)

  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // mock 데이터 가져오기
  const mainAlramData = isNoData ? [] : mockMainAlramList;

  // 탭
  const [activeIndex, setActiveIndex] = useState(0);
  const tabItems = [
    { label: '전체' },
    { label: '래플/선공개' },
    { label: '브랜드 소식' },
    { label: '특가/할인' },
    { label: '주문/배송' },
    { label: '미스페이스' },
    { label: '리뷰' },
    { label: '쿠폰 혜택' },
    { label: 'PUSH' },
  ];

  return (
    <Container showBack title="알림">
      <Contents className={styles.layout}>
        {/* 상단정보 박스 */}
        <div className={styles.topInfo}>
          <Text size="4" indent>
            알림을 켜면 혜택과 콘텐츠 소식을 받아볼 수 있어요.
          </Text>
          <TextButton variant="underline" size="1" color="gray3">
            설정
          </TextButton>
        </div>
        {/* 탭 */}
        <Tabs
          variant="buttons"
          activeTab={activeIndex}
          onTabChange={(i) => setActiveIndex(i)}
          data={tabItems}
          className={styles.tabs}
        />
        {/* 목록 */}
        {mainAlramData.length > 0 ? (
          <>
            <ul className={styles.list}>
              {mainAlramData.map((sec, i) => (
                <li key={i} className={styles.item}>
                  <AlramItem
                    data={sec}
                    onMore={(item, idx) => {
                      console.log('더보기 클릭:', item, idx);
                      setIsOpenAlramDrawer(true);
                    }}
                  />
                </li>
              ))}
            </ul>
            {/* 로딩 */}
            <Loading
              isLoading
              text="최근 30일 동안 받은 알림을 모두 확인했어요"
              className={styles.loading}
            />
          </>
        ) : (
          <Empty
            title="알림 내역이 없어요"
            buttons={<Button variant="primary">알림 설정하기</Button>}
          />
        )}

        {/* 관심 브랜드의 래플 상품 오픈 알림 (D) */}
        <OpenAlramDrawer
          isOpen={isOpenAlramDrawer}
          onClose={() => setIsOpenAlramDrawer(false)}
          data={mockOpenAlramList}
        />
      </Contents>
    </Container>
  );
}
