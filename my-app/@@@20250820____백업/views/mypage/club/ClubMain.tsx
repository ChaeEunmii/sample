'use client';

import { useRef, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs } from '@shared/ui';
import styles from './ClubMain.module.scss';
import { ClubBox } from '@/views/mypage/club/components/ClubBox';
import { clubThumbTabs, clubDataMap } from '@mocks/club';

export default function ClubMain() {
  const searchParams = useSearchParams();
  // 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isCase2 = searchParams.has('case2');
  const isCase3 = searchParams.has('case3');

  // mock 데이터를 변수에 할당
  // const clubData = clubDataMap;
  const clubData = Object.fromEntries(
    Object.entries(clubDataMap).map(([key, data]) => [
      key,
      {
        ...data,
        signupDate: '',
        ...(isCase2 && { signupDate: '20240401', isMyClub: true }), // case2. 클럽 가입: isMyClub: true면 가입된 상태
        ...(isCase3 && { cancelDate: '20240421', isRejoinBlocked: true }), // case3.클럽 가입불가: isRejoinBlocked: true면 30일 제한으로 재가입 불가 상태
      },
    ])
  );

  // 탭
  const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭 인덱스 상태
  const stickyRef = useRef<HTMLDivElement>(null); // 상단 고정 영역 참조 (offset 계산용)
  const isScrolling = useRef(false); // 스크롤 자동 이동 중 여부 (수동 스크롤 이벤트 무시용)
  const prevTab = useRef(0); // 이전에 활성화된 탭 인덱스 저장용 (중복 setState 방지)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null); // 디바운스 및 타임아웃 ID 저장용

  // offset 계산
  const getOffset = () =>
    (stickyRef.current?.offsetHeight || 0) + (document.getElementById('header')?.offsetHeight || 0);

  // 탭 클릭 시 스크롤 이동 핸들러
  const onTabChange = (idx: number) => {
    // 탭에 연결된 섹션 ID 추출 (href에서 # 제거)
    const id = clubThumbTabs[idx]?.href?.slice(1);
    if (!id) return;
    // 해당 섹션 DOM 요소 찾기
    const el = document.getElementById(id);
    if (!el) return;

    // 고정된 상단 영역과 헤더 높이 합산하여 오프셋 계산
    const offset = getOffset();
    // 스크롤 목표 위치 계산 (섹션 요소 상단 위치 - 오프셋)
    const EXTRA_OFFSET = 24; // 위에 여유 공간
    const scrollY = el.getBoundingClientRect().top + window.scrollY - offset - EXTRA_OFFSET;

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
    const tabIds = clubThumbTabs.map((t) => t.href?.slice(1) || '');

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

  return (
    <Container showBack title="클럽">
      <Contents className={styles.layout}>
        <div className={styles.stickyTop} ref={stickyRef}>
          <Tabs
            data={clubThumbTabs}
            variant="buttons"
            activeTab={activeTab}
            onTabChange={onTabChange}
            className={styles.tabs}
            collapable
          />
        </div>
        <div className={styles.content}>
          {Object.keys(clubData).map((key) => (
            <ClubBox key={key} id={key} data={clubData[key]} />
          ))}
        </div>
      </Contents>
    </Container>
  );
}
