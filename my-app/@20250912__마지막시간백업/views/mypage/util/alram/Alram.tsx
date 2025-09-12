'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Text, TextButton, Loading, Tabs, Heading } from '@shared/ui';
import OpenAlramDrawer from '@views/mypage/util/alram/OpenAlramDrawer';
import styles from './Alram.module.scss';

export default function Alram() {
  const [isOpenAlramDrawer, setIsOpenAlramDrawer] = useState(false); // 관심 브랜드의 래플 상품 오픈 알림 (D)

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
        <Tabs
          variant="buttons"
          activeTab={activeIndex}
          onTabChange={(i) => setActiveIndex(i)}
          data={tabItems}
          className={styles.tabs}
        />
        <div className={styles.cont}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Text size="4" color="gray3" className={styles.date}>
                2025년 6월 13일 금요일
              </Text>
              <ul className={styles.listWrap}>
                <li className={styles.listItem}>
                  <div className={styles.tit}>
                    <Heading size="2" weight="semibold">
                      관심 브랜드의 신규 기획전 오픈
                    </Heading>
                    <Text as="span" size="3" color="gray3">
                      방금 전
                    </Text>
                  </div>
                  <Text as="span" size="5" reading>
                    신규 기획전 오픈! 지금 바로 확인해보세요.
                  </Text>
                </li>
                <li className={styles.listItem}>
                  <div className={styles.tit}>
                    <Heading size="2" weight="semibold">
                      관심 브랜드의 신규 기획전 오픈
                    </Heading>
                    <Text as="span" size="3" color="gray3">
                      방금 전
                    </Text>
                  </div>
                  <Text as="span" size="5" reading>
                    신규 기획전 오픈! 지금 바로 확인해보세요.
                  </Text>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              <Text size="4" color="gray3" className={styles.date}>
                2025년 6월 13일 금요일
              </Text>
              <ul className={styles.listWrap}>
                <li className={styles.listItem}>
                  <div className={styles.tit}>
                    <Heading size="2" weight="semibold">
                      관심 브랜드의 신규 기획전 오픈
                    </Heading>
                  </div>
                  <Text as="span" size="5" reading>
                    신규 기획전 오픈! 지금 바로 확인해보세요.
                  </Text>
                  <div className={styles.btns}>
                    <TextButton
                      size="1"
                      variant="underline"
                      color="gray3"
                      onClick={() => setIsOpenAlramDrawer(true)}
                    >
                      더보기
                    </TextButton>
                  </div>
                </li>
                <li className={styles.listItem}>
                  <div className={styles.tit}>
                    <Heading size="2" weight="semibold">
                      관심 브랜드의 신규 기획전 오픈
                    </Heading>
                  </div>
                  <Text as="span" size="5" reading>
                    신규 기획전 오픈! 지금 바로 확인해보세요.
                  </Text>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* 로딩 */}
        <Loading
          isLoading
          text="최근 30일 동안 받은 알림을 모두 확인했어요"
          className={styles.loading}
        />
        {/* 관심 브랜드의 래플 상품 오픈 알림 (D) */}
        <OpenAlramDrawer isOpen={isOpenAlramDrawer} onClose={() => setIsOpenAlramDrawer(false)} />
      </Contents>
    </Container>
  );
}
