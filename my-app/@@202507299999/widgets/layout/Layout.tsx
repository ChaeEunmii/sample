'use client';
// 라이브러리
import React from 'react';
// 컴포넌트
import { Footer } from './Footer';
import { FAB } from './FAB';
import { NavigationBar } from './NavigationBar';
import { PromotionBar } from './PromotionBar';
// 스타일
import styles from './Layout.module.scss';

export default function Layout({
  children,
  footer = false,
  navBar = false,
  promotionBar = false,
}: {
  children: React.ReactNode;
  footer?: boolean;
  navBar?: boolean;
  promotionBar?: boolean;
}) {
  return (
    <div id="wrap" className={styles.wrap}>
      {/* 홈피드에서만 노출 : 앱설치 유도배너 */}
      {promotionBar && <PromotionBar />}

      {/* 컨텐츠 영역 */}
      {children}

      {/* 하단 푸터 영역 (회사 정보, 약관 링크 등) */}
      {footer && <Footer />}

      {/* 모바일용 하단 고정 내비게이션 바 */}
      {navBar && <NavigationBar />}

      {/* 플로팅 버튼 */}
      <FAB />

      {/* 전역적으로 사용되는 포탈 영역 (모달, 토스트 등) */}
      <div id="portal-root" className={styles.portal} />
    </div>
  );
}
