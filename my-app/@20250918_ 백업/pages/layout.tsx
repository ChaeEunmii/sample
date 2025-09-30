'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Layout from '@widgets/layout/Layout';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // 특정 경로에서만 footer, navBar 보이게하기
  const showFooter =
    ['/test'].includes(pathname) || ['/shop/complete'].some((path) => pathname.startsWith(path));
  const showNavBar =
    [
      '/test',
      '/mespace',
      '/shop/main',
      '/shop/brand',
      '/category',
      '/gem/gem',
      '/gem/mycollection',
      '/mypage/club',
      '/mypage/club/myclub',
      '/shop/detail/error',
      '/mypage/order/list',
      '/mypage/order/detail/normal',
      '/mypage/order/detail/storepick',
      '/mypage/order/detail/gift',
      '/mypage/order/detail/global',
      '/mypage/order/detail/rental',
      '/mypage/order/detail/holiday',
      '/mypage/order/detail/experience',
      '/mypage/order/detail/culture',
      '/mypage/order/detail/visit',
      '/mypage/order/detail/purchasegift',
      '/mypage/order/detail/omni',
      '/mypage/claims/cancel/list',
      '/mypage/claims/cancel/detail',
      '/mypage/claims/return/remote/list',
      '/mypage/order/history',
      '/mypage/order/history/thehyundai',
      '/mypage/order/history/tohome',
      '/mypage/order/history/guest',
      '/mypage/booking/waiting',
      '/mypage/booking/reservation',
      '/mypage/booking/reservation/guest',
      '/mypage/booking/torder',
      '/torder/app',
      '/torder/stores',
      '/torder/detail/store',
      '/torder/complete',
      '/promotion',
      '/promotion/event',
      '/promotion/event/detail',
      '/promotion/results',
      '/promotion/event/hpoint',
      '/mypage/activity/reviews/product',
      '/mypage/activity/reviews/store',
      '/mypage/activity/alram',
      '/mypage/activity/vip',
      '/mypage/activity/event/history',
      '/mypage/activity/event/taxinfo',
      '/mypage/info/social',
      '/mypage/info/privacyinfo',
      '/mypage/info/privacyinfo/policy',
      '/mypage/info/privacyinfo/outsourcing',
      '/mypage/info/carregister',
      '/mypage/subscription/list',
      '/mypage/gift/list',
      '/mypage/gift/detail/received',
      '/mypage/gift/detail/sent',
      '/mypage/gift/detail/pick',
      '/mypage/gift/delivery',
      '/mypage/activity/favorites',
      '/mypage/customer',
      '/mypage/customer/faq',
      '/mypage/customer/notice',
      '/shop/order/complete/trip',
      '/search',
      '/mypage/trip/list',
      '/mypage/trip/detail',
      '/mypage',
    ].includes(pathname) || ['/category', '/brand'].some((path) => pathname.startsWith(path));
  const showPromotionBar = ['/test', '/homefead'].includes(pathname);

  return (
    <Layout footer={showFooter} navBar={showNavBar} promotionBar={showPromotionBar}>
      {children}
    </Layout>
  );
}
