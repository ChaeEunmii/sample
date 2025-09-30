'use client';

import React from 'react';
import { useState } from 'react';
import { ButtonArea, Button } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import RefundAccountDialog from '@/views/mypage/info/payment/manage/RefundAccountDialog';
import CashReceiptPhoneDialog from '@/views/mypage/info/payment/manage/CashReceiptPhoneDialog';
import CashReceiptBizNoDialog from '@/views/mypage/info/payment/manage/CashReceiptBizNoDialog';
import ReceiptViewDialog from '@/views/mypage/info/payment/hpoint/components/ReceiptViewDialog';

export default function Page() {
  const [isRefundAccountDialog, setIsRefundAccountDialog] = useState(false);
  const [isCashReceiptPhoneDialog, setIsCashReceiptPhoneDialog] = useState(false);
  const [isCashReceiptBizNoDialog, setIsCashReceiptBizNoDialog] = useState(false);
  const [isReceiptViewDialog, setIsReceiptViewDialog] = useState(false);

  return (
    <Container title="팝업 모음" showBack>
      <Contents>
        {/* 팝업 확인용 페이지입니다 */}
        <ButtonArea vertical className="ncp-mt-s">
          <Button onClick={() => setIsRefundAccountDialog(true)}>환불계좌 정보 (L)</Button>
          <Button onClick={() => setIsCashReceiptPhoneDialog(true)}>
            현금영수증 휴대폰 번호 (L)
          </Button>
          <Button onClick={() => setIsCashReceiptBizNoDialog(true)}>
            현금영수증 사업자등록번호 (L)
          </Button>
          <Button onClick={() => setIsReceiptViewDialog(true)}>영수증 (L)</Button>
          <br />
          <br />
          <br />
        </ButtonArea>

        {/* 환불계좌 정보 (L)*/}
        <RefundAccountDialog
          isOpen={isRefundAccountDialog}
          onClose={() => setIsRefundAccountDialog(false)}
        />
        {/* 현금영수증 휴대폰 번호 (L)*/}
        <CashReceiptPhoneDialog
          isOpen={isCashReceiptPhoneDialog}
          onClose={() => setIsCashReceiptPhoneDialog(false)}
        />
        {/* 현금영수증 사업자등록번호 (L)*/}
        <CashReceiptBizNoDialog
          isOpen={isCashReceiptBizNoDialog}
          onClose={() => setIsCashReceiptBizNoDialog(false)}
        />
        {/* 영수증 (L)*/}
        <ReceiptViewDialog
          isOpen={isReceiptViewDialog}
          onClose={() => setIsReceiptViewDialog(false)}
        />
      </Contents>
    </Container>
  );
}
