'use client';

import { useState } from 'react';
import { ButtonArea, Button } from '@shared/ui';
import { Container } from '@widgets/layout/Container';
import JoinCompleteDialog from '@views/mypage/membership/components/JoinCompleteDialog';
import JoinFailDialog from '@views/mypage/membership/components/JoinFailDialog';
import CancelCompleteDialog from '@views/mypage/membership/cancel/CancelCompleteDialog';
import UseVoucherDrawer from '@views/mypage/myvoucher/UseVoucherDrawer';
import EmployeeCheckDrawer from '@views/mypage/myvoucher/EmployeeCheckDrawer';
import CouponPasswordDrawer from '@views/mypage/myvoucher/CouponPasswordDrawer';
import ProductChangeDialog from '@views/mypage/membership/change/ProductChangeDialog';
import PaymentChangeDialog from '@views/mypage/membership/payment/PaymentChangeDialog';

export default function Page() {
  const [isUseVoucherDrawer1, setIsUseVoucherDrawer1] = useState(false);
  const [isUseVoucherDrawer2, setIsUseVoucherDrawer2] = useState(false);
  const [isUseVoucherDrawer3, setIsUseVoucherDrawer3] = useState(false);

  const [isJoinCompleteDialog, setIsJoinCompleteDialog] = useState(false);
  const [isJoinFailDialog, setIsJoinFailDialog] = useState(false);
  const [isCancelCompleteDialog, setIsCancelCompleteDialog] = useState(false);
  const [isEmployeeCheckDrawer, setIsEmployeeCheckDrawer] = useState(false);
  const [isEmployeeCheckDrawer2, setIsEmployeeCheckDrawer2] = useState(false);
  const [isCouponPasswordDrawer, setIsCouponPasswordDrawer] = useState(false);
  const [isCouponPasswordDrawer2, setIsCouponPasswordDrawer2] = useState(false);
  const [isPaymentChangeDialog, setIsPaymentChangeDialog] = useState(false);
  const [isProductChangeDialog, setIsProductChangeDialog] = useState(false);

  return (
    <Container title="팝업 모음" showBack>
      {/* 팝업 확인용 페이지입니다 */}
      <ButtonArea vertical className="ncp-mt-x0">
        <Button onClick={() => setIsUseVoucherDrawer1(true)}>바우처 사용하기 - 사용가능 (D)</Button>
        <Button onClick={() => setIsUseVoucherDrawer2(true)}>바우처 사용하기 - 사용완료 (D)</Button>
        <Button onClick={() => setIsUseVoucherDrawer3(true)}>바우처 사용하기 - 기간만료 (D)</Button>
        <br />
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
        <br />
        <Button onClick={() => setIsJoinCompleteDialog(true)}>HiHi 멤버십 가입완료 (L)</Button>
        <Button onClick={() => setIsJoinFailDialog(true)}>HiHi 멤버십 가입실패 (L)</Button>
        <Button onClick={() => setIsCancelCompleteDialog(true)}>HiHi 멤버십 해지 완료 (L)</Button>

        <Button onClick={() => setIsPaymentChangeDialog(true)}>결제수단 변경 (L)</Button>
        <Button onClick={() => setIsProductChangeDialog(true)}>정기배송 상품 변경 신청 (L)</Button>
      </ButtonArea>

      {/* 바우처 사용하기 -사용가능 (D)*/}
      <UseVoucherDrawer
        isOpen={isUseVoucherDrawer1}
        onClose={() => setIsUseVoucherDrawer1(false)}
      />
      {/* 바우처 사용하기 -사용완료 (D)*/}
      <UseVoucherDrawer
        type="used"
        isOpen={isUseVoucherDrawer2}
        onClose={() => setIsUseVoucherDrawer2(false)}
      />
      {/* 바우처 사용하기 -기간만료 (D)*/}
      <UseVoucherDrawer
        type="expired"
        isOpen={isUseVoucherDrawer3}
        onClose={() => setIsUseVoucherDrawer3(false)}
      />

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

      {/* 결제수단 변경 (L)*/}
      <PaymentChangeDialog
        isOpen={isPaymentChangeDialog}
        onClose={() => setIsPaymentChangeDialog(false)}
      />

      {/* 정기배송 상품 변경 신청 (L)*/}
      <ProductChangeDialog
        isOpen={isProductChangeDialog}
        onClose={() => setIsProductChangeDialog(false)}
      />
    </Container>
  );
}
