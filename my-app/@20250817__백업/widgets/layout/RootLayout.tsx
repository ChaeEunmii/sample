// 라이브러리
import { useState, useEffect, useRef, useCallback } from 'react';
// 스타일
import styles from './Layout.module.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 스크롤이벤트
  const lastScrollTop = useRef(0);
  const lastScrollHeight = useRef(0);
  const [scrollDir, setScrollDir] = useState<'top' | 'down' | 'up' | null>(null);

  // 스크롤 방향 확인
  const onScroll = useCallback((isInitial = false) => {
    const scrollTop = Math.max(0, window.scrollY);
    const clientHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const offset =
      ((document.getElementById('navBar')?.children[0] as HTMLElement)?.offsetHeight ?? 0) + 10;
    const isNearBottom = scrollTop + clientHeight >= scrollHeight - offset;
    const hasScroll = scrollHeight > clientHeight;

    // 스크롤 높이 변화 시에는 변경 x
    if (!isInitial && scrollHeight !== lastScrollHeight.current) {
      lastScrollHeight.current = scrollHeight;
      lastScrollTop.current = scrollTop;
      return;
    }

    // 초기 호출 시 무조건 업데이트
    if (isInitial) {
      lastScrollHeight.current = scrollHeight;
      lastScrollTop.current = scrollTop;
    }

    let dir: 'up' | 'down' | 'top' | null;

    if (!hasScroll || scrollTop < 10) {
      dir = 'top';
    } else if (isNearBottom) {
      dir = null;
    } else {
      // 스크롤 차이가 작을경우 무시 (Safari 미세 스크롤 방지)
      const scrollDiff = Math.abs(scrollTop - lastScrollTop.current);
      if (scrollDiff < 2) {
        return;
      }

      if (scrollTop > lastScrollTop.current) {
        dir = 'down';
      } else {
        dir = 'up';
      }
    }
    setScrollDir(dir);
    lastScrollTop.current = scrollTop;
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(onScroll, 10);
    };

    onScroll(true);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 클린업
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [onScroll]);

  return (
    <div id="root" className={styles.root} data-scroll-state={scrollDir}>
      {/* 좌측 고정 영역 */}
      <div className={styles.aside}></div>
      {/* 컨텐츠 영역 */}
      {children}
    </div>
  );
}
