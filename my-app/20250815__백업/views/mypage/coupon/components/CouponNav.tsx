'use client';
import { Tabs } from '@/shared/ui/blocks/Tabs';

// 활성 메뉴 키 타입
type ActiveKey = 'owned' | 'downloadable';

interface CouponNavProps {
  activeKey: ActiveKey;
}

export const CouponNav = ({ activeKey }: CouponNavProps) => {
  return (
    <nav aria-label="mypage coupon navigation">
      <Tabs
        data={[
          {
            href: '/mypage/coupon/owned',
            label: '보유 쿠폰',
          },
          {
            href: '/mypage/coupon/download',
            label: '다운 가능 쿠폰',
          },
        ]}
        defaultActive={activeKey === 'owned' ? 0 : 1}
      />
    </nav>
  );
};

CouponNav.displayName = 'CouponNav';
