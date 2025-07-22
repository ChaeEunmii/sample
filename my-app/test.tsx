'use client';

import { useEffect, useRef, useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs, Heading, ButtonArea, Button, Image } from '@shared/ui';
import { MembershipBox } from '@views/mypage/membership/components/MembershipBox';
import styles from './MembershipInfo.module.scss';

// 탭 데이터 정의 (href는 각 섹션의 id와 연결됨)
export const tabItems = [
  { href: '#plus', label: '플러스' },
  { href: '#prime', label: '프라임' },
];

export default function MembershipInfo() {
  // 현재 활성화된 탭 인덱스 상태
  const [activeTab, setActiveTab] = useState(0);

  // sticky 영역(tabs)의 높이를 계산하기 위한 ref
  const stickyRef = useRef<HTMLDivElement>(null);

  // 탭 클릭 시 해당 섹션으로 스크롤 이동
  const handleTabChange = (index: number) => {
    const id = tabItems[index].href.replace('#', ''); // 섹션 id 추출
    const target = document.getElementById(id); // 해당 id의 DOM 찾기
    const offset = stickyRef.current?.offsetHeight || 0; // sticky 탭 높이만큼 보정

    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' }); // 부드럽게 스크롤
    }

    // 탭 클릭 시 즉시 활성화 상태 반영
    setActiveTab(index);
  };

  // 스크롤 시 현재 보이는 섹션에 맞게 탭 자동 활성화
  useEffect(() => {
    const onScroll = () => {
      const offset = (stickyRef.current?.offsetHeight || 0) + 10; // 탭 높이 + 여유 offset
      const scrollTop = window.scrollY;

      // 현재 스크롤 위치가 포함된 섹션 찾기
      const currentIndex = tabItems.findIndex(({ href }) => {
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (!el) return false;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        return scrollTop + offset >= top && scrollTop + offset < bottom;
      });

      // 탭이 변경되었을 때만 상태 업데이트
      if (currentIndex !== -1 && currentIndex !== activeTab) {
        setActiveTab(currentIndex);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll); // 이벤트 클린업
  }, [activeTab]);

  // CTA 버튼 클릭 핸들러 (예시)
  const handleStartClick = () => {
    console.log('Clicked!!!');
  };

  return (
    <Container showBack title="HIHI 멤버십 안내" mode="gray">
      <Contents className={styles.layout}>
        {/* 상단 비주얼 영역 */}
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

        {/* 탭 영역 (sticky 기준 영역) */}
        <div ref={stickyRef}>
          <Tabs
            data={tabItems}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            className={styles.stickyTabs}
          />
        </div>

        {/* 실제 콘텐츠 섹션: 탭 이동 및 스크롤 감지 대상 */}
        <div className={styles.tabCont}>
          <div id="plus">
            <MembershipBox type="plus" onClick={handleStartClick} />
          </div>
          <div id="prime">
            <MembershipBox type="prime" onClick={handleStartClick} />
          </div>
        </div>
      </Contents>

      {/* 하단 CTA 버튼 */}
      <ButtonArea type="sticky">
        <Button size="large" variant="primary">
          지금 바로 멤버십 시작하기
        </Button>
      </ButtonArea>
    </Container>
  );
}