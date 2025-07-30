'use client';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, Empty } from '@/shared/ui';
import { Container, Contents } from '@/widgets/layout/Container';
import { AddCouponDrawer, CouponList } from '@/widgets/coupon';
import { CouponFilters, CouponNav, CouponNotice } from './components';
import { mockOfflineCouponList, mockOnlineCouponList } from '@/mocks/coupon';

export const OwnedCouponList = () => {
  // 임시 데이터
  const online = mockOnlineCouponList;
  const offline = mockOfflineCouponList;

  // 라우터 훅 (next/navigation)
  const searchParams = useSearchParams();

  // 화면 상태
  const status = searchParams.get('status');
  const isEmpty = status === 'empty';

  // 상태 관리
  const [onlineOfflineTab, setOnlineOfflineTab] = useState(0); // 온라인/오프라인 탭
  const [categoryTab, setCategoryTab] = useState(0); // 카테고리 탭
  const [isAddCouponDrawerOpen, setIsAddCouponDrawerOpen] = useState(false); // 쿠폰 등록하기 Drawer

  const couponData = useMemo(() => {
    const raw = onlineOfflineTab === 0 ? online : offline;

    return raw.map((coupon) => ({
      ...coupon,
      hasCoupon: coupon.group?.id ? false : true, // group.id가 있으면 false, 없으면 true
    }));
  }, [onlineOfflineTab, online, offline]);

  return (
    <Container title="쿠폰" showBack>
      <Contents>
        {/* nav */}
        <CouponNav activeKey="owned" />
        {/* 쿠폰 등록하기 */}
        <Button variant="secondary" onClick={() => setIsAddCouponDrawerOpen(true)}>
          쿠폰 등록하기
        </Button>
        {/* 필터 */}
        <CouponFilters
          type="owned"
          isEmpty={isEmpty}
          onlineOfflineTab={onlineOfflineTab}
          onChangeOnlineOfflineTab={setOnlineOfflineTab}
          onCategoryTab={categoryTab}
          onChangeCategoryTab={setCategoryTab}
        />
        {/* 쿠폰 리스트 */}
        {!isEmpty && couponData.length > 0 ? (
          <CouponList key={onlineOfflineTab} data={couponData} />
        ) : (
          <Empty
            title="사용가능한 쿠폰이 없어요"
            buttons={
              <>
                <Button variant="primary">새로운 쿠폰 보러 가기</Button>
              </>
            }
            variant="minDisplay"
          />
        )}
        {/* 확인해주세요 */}
        <CouponNotice />
        {/* 쿠폰 등록하기 Drawer */}
        <AddCouponDrawer
          isOpen={isAddCouponDrawerOpen}
          onClose={() => setIsAddCouponDrawerOpen(false)}
        />
      </Contents>
    </Container>
  );
};

OwnedCouponList.displayName = 'OwnedCouponList';
