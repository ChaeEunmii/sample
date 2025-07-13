'use client';

import { useState } from 'react';
import { ButtonArea, Button } from '@shared/ui';
import { Container } from '@widgets/layout/Container';
import JoinCompleteDialog from '@/views/mypage/membership/components/JoinCompleteDialog';
import JoinFailDialog from '@/views/mypage/membership/components/JoinFailDialog';
import CancelCompleteDialog from '@/views/mypage/membership/cancel/CancelCompleteDialog';
import UseVoucherDrawer from '@/views/mypage/myvoucher/UseVoucherDrawer';
import EmployeeCheckDrawer from '@/views/mypage/myvoucher/EmployeeCheckDrawer';
import CouponPasswordDrawer from '@/views/mypage/myvoucher/CouponPasswordDrawer';
import ProductChangeDialog from '@/views/mypage/membership/change/ProductChangeDialog';

export default function Page() {
  const [isJoinCompleteDialog, setIsJoinCompleteDialog] = useState(false);
  const [isJoinFailDialog, setIsJoinFailDialog] = useState(false);
  const [isCancelCompleteDialog, setIsCancelCompleteDialog] = useState(false);
  const [isUseVoucherDrawer, setIsUseVoucherDrawer] = useState(false);
  const [isEmployeeCheckDrawer, setIsEmployeeCheckDrawer] = useState(false);
  const [isEmployeeCheckDrawer2, setIsEmployeeCheckDrawer2] = useState(false);
  const [isCouponPasswordDrawer, setIsCouponPasswordDrawer] = useState(false);
  const [isCouponPasswordDrawer2, setIsCouponPasswordDrawer2] = useState(false);
  const [isProductChangeDialog, setIsProductChangeDialog] = useState(false);

  return (
    <Container title="팝업 모음" showBack>
      {/* 팝업 확인용 페이지입니다 */}
      <ButtonArea vertical>
        <Button onClick={() => setIsJoinCompleteDialog(true)}>HiHi 멤버십 가입완료 (L)</Button>
        <Button onClick={() => setIsJoinFailDialog(true)}>HiHi 멤버십 가입실패 (L)</Button>
        <Button onClick={() => setIsCancelCompleteDialog(true)}>HiHi 멤버십 해지 완료 (L)</Button>
        <Button onClick={() => setIsUseVoucherDrawer(true)}>바우처 사용하기 (D)</Button>
        <Button onClick={() => setIsEmployeeCheckDrawer(true)}>
          직원확인 하기 - 아이체크 방식 (D)
        </Button>
        <Button onClick={() => setIsEmployeeCheckDrawer2(true)}>
          직원확인 하기 - 아이체크 방식+수량선택 (D)
        </Button>
        <Button onClick={() => setIsCouponPasswordDrawer(true)}>
          쿠폰 비밀번호 입력하기 - 회수유형: 인증키 방식 (D)
        </Button>
        <Button onClick={() => setIsCouponPasswordDrawer2(true)}>
          쿠폰 비밀번호 입력하기 - 회수유형: 인증키 방식+수량선택 (D)
        </Button>
        <Button onClick={() => setIsProductChangeDialog(true)}>정기배송 상품 변경 신청 (L)</Button>
      </ButtonArea>

      {/* HiHi 멤버십 가입완료 (L)*/}
      <JoinCompleteDialog
        isOpen={isJoinCompleteDialog}
        onClose={() => setIsJoinCompleteDialog(false)}
      />

      {/* HiHi 멤버십 가입실패 (L)*/}
      <JoinFailDialog isOpen={isJoinFailDialog} onClose={() => setIsJoinFailDialog(false)} />

      {/* HiHi 멤버십 해지 완료 (L)*/}
      <CancelCompleteDialog
        isOpen={isCancelCompleteDialog}
        onClose={() => setIsCancelCompleteDialog(false)}
      />

      {/* 바우처 사용하기 (D)*/}
      <UseVoucherDrawer isOpen={isUseVoucherDrawer} onClose={() => setIsUseVoucherDrawer(false)} />

      {/* 직원확인 하기 (D) - 아이체크 방식*/}
      <EmployeeCheckDrawer
        isOpen={isEmployeeCheckDrawer}
        onClose={() => setIsEmployeeCheckDrawer(false)}
      />

      {/* 직원확인 하기 (D) - 아이체크 방식+수량선택*/}
      <EmployeeCheckDrawer
        isOpen={isEmployeeCheckDrawer2}
        onClose={() => setIsEmployeeCheckDrawer2(false)}
        isQuantityCheck
      />

      {/* 쿠폰 비밀번호 입력하기 (D) - 회수유형: 인증키 방식*/}
      <CouponPasswordDrawer
        isOpen={isCouponPasswordDrawer}
        onClose={() => setIsCouponPasswordDrawer(false)}
      />

      {/* 쿠폰 비밀번호 입력하기 (D) - 회수유형: 인증키 방식+수량선택*/}
      <CouponPasswordDrawer
        isOpen={isCouponPasswordDrawer2}
        onClose={() => setIsCouponPasswordDrawer2(false)}
        isQuantityCheck
      />

      {/* 정기배송 상품 변경 신청 (L)*/}
      <ProductChangeDialog
        isOpen={isProductChangeDialog}
        onClose={() => setIsProductChangeDialog(false)}
      />
    </Container>
  );
}
