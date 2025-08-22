import { useState, useEffect } from 'react';

// usehooks-ts/useMediaQuery 참고
const useMediaQuery = (query: string): boolean => {
  // SSR 대응
  const getMatches = (query: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(getMatches(query));

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // 현재 상태 업데이트
    setMatches(mediaQuery.matches);

    try {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange); // 클린업
    } catch (e) {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [query]);

  return matches;
};

// Breakpoints
export function useDeviceSize() {
  const [isMounted, setIsMounted] = useState(false);

  // 마운트 체크
  useEffect(() => setIsMounted(true), []);

  const isDesktop = useMediaQuery('(min-width: 1280px)');
  const isLaptop = useMediaQuery('(min-width: 1024px)');
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isMobile = useMediaQuery('(max-width:1023.99px)');

  if (!isMounted) {
    return {
      isDesktop: null,
      isLaptop: null,
      isTablet: null,
      isMobile: null,
    };
  }
  return { isDesktop, isLaptop, isTablet, isMobile };
}
