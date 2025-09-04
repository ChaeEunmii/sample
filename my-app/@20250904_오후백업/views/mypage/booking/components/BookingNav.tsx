'use client';
import { Tabs } from '@/shared/ui/blocks/Tabs';

// 활성 메뉴 키 타입
type ActiveKey = 'waiting' | 'reservation' | 'torder';

interface BookingNavProps {
  activeKey: ActiveKey;
  /** 영어로 표시 여부 (기본: false) */
  isEnglish?: boolean;
}

export const BookingNav = ({ activeKey, isEnglish = false }: BookingNavProps) => {
  const defaultActive = (() => {
    switch (activeKey) {
      case 'waiting':
        return 0;
      case 'reservation':
        return 1;
      case 'torder':
        return 2;
      default:
        return 0;
    }
  })();

  return (
    <nav aria-label="mypage booking & orders navigation">
      <Tabs
        data={[
          {
            href: '/mypage/booking/waiting',
            label: isEnglish ? 'Waiting' : '웨이팅',
          },
          {
            href: '/mypage/booking/reservation',
            label: isEnglish ? 'Reservation' : '예약',
          },
          {
            href: '/mypage/booking/torder',
            label: isEnglish ? 'Table Order' : '테이블오더',
          },
        ]}
        defaultActive={defaultActive}
      />
    </nav>
  );
};

BookingNav.displayName = 'BookingNav';
