'use client';
import { useState } from 'react';
import { Button, ButtonArea } from '@/shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { mockCouponBarcode, mockCouponItem } from '@/mocks/coupon';
import { ApplyCouponTargetDialog } from '@/widgets/coupon/ApplyCouponTargetDialog';
import { AddCouponDrawer, CouponUseDrawer } from '@/widgets/coupon';

export default function Page() {
  const coupon = mockCouponItem;
  const barcode = mockCouponBarcode;
  const [isAddCouponDrawerOpen, setIsAddCouponDrawerOpen] = useState(false);
  const [isCouponTargetDialogOpen, setIsCouponTargetDialogOpen] = useState(false);
  const [isCouponBarcodeDrawerOpen, setIsCouponBarcodetDrawerOpen] = useState(false);
  const [isAuthKeyDrawerOpen, setIsAuthKeyDraweOpen] = useState(false);
  const [isCouponUseDrawerOpen, setIsCouponUseDraweOpen] = useState(false);

  return (
    <Container title="팝업 모음" showBack>
      <Contents>
        {/* 팝업 확인용 페이지입니다 */}
        <ButtonArea vertical>
          <Button onClick={() => setIsAddCouponDrawerOpen(true)}>쿠폰 등록하기 (D)</Button>
          <Button onClick={() => setIsCouponTargetDialogOpen(true)}>쿠폰 적용 대상 (L)</Button>
          <Button onClick={() => setIsCouponBarcodetDrawerOpen(true)}>
            쿠폰 사용하기 - 바코드형 (D)
          </Button>
          <Button onClick={() => setIsAuthKeyDraweOpen(true)}>쿠폰 사용하기 - 인증키형 (D)</Button>
          <Button onClick={() => setIsCouponUseDraweOpen(true)}>
            쿠폰 사용하기 - 아이체크/직원 확인형 (D)
          </Button>
        </ButtonArea>

        {/* 쿠폰 등록하기 Drawer */}
        <AddCouponDrawer
          isOpen={isAddCouponDrawerOpen}
          onClose={() => setIsAddCouponDrawerOpen(false)}
        />
        {/* 쿠폰 적용 대상 Dialog */}
        <ApplyCouponTargetDialog
          data={coupon}
          isOpen={isCouponTargetDialogOpen}
          onClose={() => setIsCouponTargetDialogOpen(false)}
        />
        {/* 쿠폰 사용하기 - 바코드 Drawer */}
        <CouponUseDrawer
          data={barcode}
          type="barcode"
          isOpen={isCouponBarcodeDrawerOpen}
          onClose={() => setIsCouponBarcodetDrawerOpen(false)}
        />
        {/* 쿠폰 사용하기 - 인증키 Drawer */}
        <CouponUseDrawer
          type="authCode"
          isOpen={isAuthKeyDrawerOpen}
          onClose={() => setIsAuthKeyDraweOpen(false)}
        />
        {/* 쿠폰 사용하기 - 직원확인/아이체크 Drawer */}
        <CouponUseDrawer
          type="eyeCheck"
          isOpen={isCouponUseDrawerOpen}
          onClose={() => setIsCouponUseDraweOpen(false)}
        />
      </Contents>
    </Container>
  );
}
