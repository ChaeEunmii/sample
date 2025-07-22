'use client';

import { useState, useEffect } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs, Heading, ButtonArea, Button, Image } from '@shared/ui';
import { MembershipBox } from '@views/mypage/membership/components/MembershipBox';
import styles from './MembershipInfo.module.scss';

// 탭
export const tabItems = [
  { href: '#plus', label: '플러스' },
  { href: '#prime', label: '프라임' },
];

export default function MembershipInfo() {
  // 탭
  const [clickedTab, setClickedTab] = useState(0);

  // 멤버십 시작하기 버튼 클릭핸들러
  const handleStartClick = () => {
    console.log('Clicked!!!');
  };

  return (
    <Container showBack title="HIHI 멤버십 안내" mode="gray">
      <Contents className={styles.layout}>
        <div className={styles.visual}>
          <div className={styles.keycopy}>
            <span className={styles.mark}>HIHI 멤버십</span>
            <Heading as="h3" className={styles.heading}>
              오직 멤버십 고객만이
              <br />
              누릴 수 있는
              <br />
              <strong>프리미엄 구독 혜택</strong>
            </Heading>
          </div>
          <Image
            src="/images/img_membership_visual.png"
            alt="멤버십카드 이미지"
            className={styles.keyImg}
          />
          <dl className={styles.benefits}>
            <dt>첫번째 혜택</dt>
            <dd>H.Point 최대 5,000P 적립</dd>
            <dt>두번째 혜택</dt>
            <dd>무료반품</dd>
            <dt>세번째 혜택</dt>
            <dd>기프트 배송</dd>
          </dl>
        </div>
        <Tabs
          data={tabItems}
          activeTab={clickedTab}
          onTabChange={setClickedTab}
          className={styles.stickyTabs}
        />
        {/* <div className={styles.tabCont}>
          {clickedTab === 0 && <MembershipBox type="plus" onClick={handleStartClick} />}
          {clickedTab === 1 && <MembershipBox type="prime" onClick={handleStartClick} />}
        </div> */}
        <div className={styles.tabCont}>
          <div id="plus">
            <MembershipBox type="plus" onClick={handleStartClick} />
          </div>
          <div id="prime">
            <MembershipBox type="prime" onClick={handleStartClick} />
          </div>
        </div>
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large" variant="primary">
          지금 바로 멤버십 시작하기
        </Button>
      </ButtonArea>
    </Container>
  );
}
