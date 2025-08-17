import { useEffect } from 'react';

let scrollLockCount = 0;

export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const html = document.documentElement;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    // 스크롤 가능한 요소인지 확인
    const isScrollable = (el: HTMLElement | null): boolean => {
      while (el && el !== html) {
        const style = window.getComputedStyle(el);
        const overflowY = style.overflowY;
        const canScroll =
          (overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight;
        if (canScroll) return true;
        el = el.parentElement;
      }
      return false;
    };

    const preventTouch = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        // 한 손가락 터치했을 때,
        const target = e.target as HTMLElement;
        if (!isScrollable(target)) {
          // 스크롤 가능한 요소가 아니면
          e.preventDefault(); // 막기
        }
      }
    };

    if (isLocked) {
      scrollLockCount++;

      if (scrollLockCount === 1) {
        html.style.overflow = 'hidden';
        if (scrollbarWidth > 0) {
          html.style.paddingRight = `${scrollbarWidth}px`;
        }

        document.addEventListener('touchmove', preventTouch, { passive: false });
      }
    }

    return () => {
      if (isLocked) {
        scrollLockCount--;

        if (scrollLockCount === 0) {
          html.style.overflow = '';
          html.style.paddingRight = '';
          document.removeEventListener('touchmove', preventTouch);
        }
      }
    };
  }, [isLocked]);
}
