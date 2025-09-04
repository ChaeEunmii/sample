'use client';

import { useState, useEffect, useRef } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs, Heading, ButtonArea, Button, Image } from '@shared/ui';
import { MembershipBox } from '@views/mypage/membership/components/MembershipBox';
import styles from './MembershipInfo.module.scss';

// 탭
export const tabItems = [
  { label: '플러스', anchor: '#plus' },
  { label: '프라임', anchor: '#prime' },
];

export default function MembershipInfo() {
  // 탭
  const [activeTab, setActiveTab] = useState(0);
  const stickyRef = useRef<HTMLDivElement>(null); // 상단 고정 영역 참조 (offset 계산용)
  const isScrolling = useRef(false); // 스크롤 자동 이동 중 여부 (수동 스크롤 이벤트 무시용)
  const prevTab = useRef(0); // 이전에 활성화된 탭 인덱스 저장용 (중복 setState 방지)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null); // 디바운스 및 타임아웃 ID 저장용

  // offset 계산
  const getOffset = () =>
    (stickyRef.current?.offsetHeight || 0) + (document.getElementById('header')?.offsetHeight || 0);

  // 탭 클릭 시 스크롤 이동 핸들러
  const onTabChange = (idx: number) => {
    //해당 탭 활성화
    setActiveTab(idx);

    // 탭에 연결된 섹션 ID 추출 (anchor에서 # 제거)
    const id = tabItems[idx].anchor.replace('#', '');
    if (!id) return;
    // 해당 섹션 DOM 요소 찾기
    const target = document.getElementById(id);
    if (!target) return;

    // 고정된 상단 영역과 헤더 높이 합산하여 오프셋 계산
    const offset = getOffset();
    // 스크롤 목표 위치 계산 (섹션 요소 상단 위치 - 오프셋)
    const EXTRA_OFFSET = 24; // 위에 여유 공간
    const scrollY = target.getBoundingClientRect().top + window.scrollY - offset - EXTRA_OFFSET;

    // 스크롤 자동 이동 중 플래그 설정
    isScrolling.current = true;

    // 해당 위치로 스크롤 이동
    window.scrollTo({ top: scrollY, behavior: 'smooth' });

    // 활성 탭 상태 업데이트 및 이전 탭 인덱스 저장
    setActiveTab(idx);
    prevTab.current = idx;

    // 이전에 등록한 타임아웃 클리어 (중복 방지)
    if (timeout.current) clearTimeout(timeout.current);
    // 일정시간 후 자동 스크롤 플래그 해제 (수동 스크롤 감지 재개)
    timeout.current = setTimeout(() => {
      isScrolling.current = false;
    }, 150);
  };

  // 스크롤 위치에 따른 탭 인덱스 계산 함수
  const getClosestIndex = (scrollY: number, offset: number, ids: string[]) => {
    // 각 섹션의 실제 문서 내 위치 계산
    const positions = ids.map((id) => {
      const el = document.getElementById(id);
      return el ? el.getBoundingClientRect().top + scrollY - offset : Infinity;
    });
    let closest = 0;
    let minDist = Infinity;
    // 가장 가까운 위치 찾기
    positions.forEach((pos, i) => {
      const dist = Math.abs(scrollY - pos);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    return closest;
  };

  // 스크롤 시 현재 위치 기준 가장 가까운 섹션에 탭 활성화 업데이트
  useEffect(() => {
    // 탭에 대응하는 섹션 ID 배열 생성
    const tabIds = tabItems.map((t) => t.anchor?.slice(1) || '');

    // 스크롤 이벤트 핸들러
    const onScroll = () => {
      // 자동 스크롤 중일 경우 수동 스크롤 이벤트 무시
      if (isScrolling.current) return;

      // 고정 헤더 포함 오프셋 계산
      const offset = getOffset();
      const scrollY = window.scrollY;
      const scrollBottom = scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // 페이지 하단 근처 도달 시 마지막 탭 활성화
      if (scrollBottom >= docHeight - 40) {
        if (prevTab.current !== tabIds.length - 1) {
          setActiveTab(tabIds.length - 1);
          prevTab.current = tabIds.length - 1;
        }
        return;
      }

      // 현재 스크롤 위치 기준 가장 가까운 섹션 인덱스 계산
      const closest = getClosestIndex(scrollY, offset, tabIds);
      // 이전과 다르면 활성 탭 업데이트
      if (closest !== prevTab.current) {
        setActiveTab(closest);
        prevTab.current = closest;
      }
    };

    // 일정 시간 동안 여러 번 호출돼도 한 번만 실행되도록 지연 처리(스크롤 이벤트가 너무 자주 발생하는 것 막음)
    const debouncedScroll = () => {
      if (timeout.current) clearTimeout(timeout.current);
      onScroll();
      // 150ms 뒤에 자동 스크롤 플래그 해제 (수동 스크롤 감지 재개)
      timeout.current = setTimeout(() => (isScrolling.current = false), 150);
    };

    // 스크롤 이벤트 리스너 등록 (passive 모드)
    window.addEventListener('scroll', debouncedScroll, { passive: true });
    // 컴포넌트 마운트 시 최초 활성 탭 설정
    onScroll();

    return () => {
      // 컴포넌트 언마운트 시 이벤트 정리 및 타임아웃 클리어
      window.removeEventListener('scroll', debouncedScroll);
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  // 멤버십 시작하기 버튼 클릭핸들러
  const handleStartClick = () => {
    console.log('Clicked!!!');
  };

  return (
    <Container showBack title="HiHi 멤버십 안내" mode="gray">
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
        <div className={styles.stickyTabs} ref={stickyRef}>
          <Tabs
            data={tabItems}
            activeTab={activeTab}
            onTabChange={onTabChange}
            className={styles.tabs}
          />
        </div>
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
