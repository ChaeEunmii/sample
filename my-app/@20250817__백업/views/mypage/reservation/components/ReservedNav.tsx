'use client';
import { Tabs } from '@/shared/ui/blocks/Tabs';

// 활성 메뉴 키 타입
type ActiveKey = 'waiting' | 'booking' | 'torder';

interface ReservedNavProps {
  activeKey: ActiveKey;
}

export const ReservedNav = ({ activeKey }: ReservedNavProps) => {
  return (
    <nav aria-label="mypage reservations & orders navigation">
      <Tabs
        data={[
          {
            href: '/mypage/reservation/waiting',
            label: '웨이팅',
          },
          {
            href: '/mypage/reservation/waiting',
            label: '예약',
          },
          {
            href: '/mypage/reservation/waiting',
            label: '테이블오더',
          },
        ]}
        // defaultActive={activeKey === 'owned' ? 0 : 1}
      />
    </nav>
  );
};

ReservedNav.displayName = 'ReservedNav';
