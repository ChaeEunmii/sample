'use client';

import React from 'react';
import { useState } from 'react';
import { ButtonArea, Button, ImageViewer } from '@shared/ui';
import { Container } from '@widgets/layout/Container';
import CancleCompleteDialog from '@/views/mypage/claims/cancel/list/CancleCompleteDialog';
import CancelDetailDialog from '@/views/mypage/claims/cancel/components/CancelDetailDialog';
import ReturnDetailDialog from '@/views/mypage/claims/return/components/ReturnDetailDialog';
import ExchangeDetailDialog from '@/views/mypage/claims/exchange/components/ExchangeDetailDialog';
import ExtraPayInfoDialog from '@/views/mypage/claims/cancel/components/ExtraPayInfoDialog';
import NeedExtraPayDialog from '@/views/mypage/claims/cancel/components/NeedExtraPayDialog';
import NeedExtraPayInfoDialog from '@/views/mypage/claims/cancel/components/NeedExtraPayInfoDialog';
import RefundAccountDialog from '@/views/mypage/claims/components/RefundAccountDialog';
import PrivacyInfoDrawer from '@/views/mypage/claims/components/PrivacyInfoDrawer';
import OrderHistoryDialog from '@/views/mypage/order/history/components/OrderHistoryDialog';
import HpointNeedPayDialog from '@/views/mypage/claims/components/HpointNeedPayDialog';
import HpointChargeInfoDialog from '@/views/mypage/claims/components/HpointChargeInfoDialog';
// 샘플 이미지
import { mockProdImages } from '@mocks/product';

export default function Page() {
  const [currentThumbIdx] = useState(0); // 이미지 크게보기 팝업 상태
  const [isImageViewer, setIsImageViewer] = useState(false);
  const [isCancelDetailDialog, setIsCancelDetailDialog] = useState(false);
  const [isReturnDetailDialog, setIsReturnDetailDialog] = useState(false);
  const [isReturnDetailDialog2, setIsReturnDetailDialog2] = useState(false);
  const [isExChangeDetailDialog, setIsExChangeDetailDialog] = useState(false);
  const [isCancleCompleteDialog, setIsCancleCompleteDialog] = useState(false);
  const [isExtraPayInfoDialog, setIsExtraPayInfoDialog] = useState(false);
  const [isNeedExtraPayDialog, setIsNeedExtraPayDialog] = useState(false);
  const [isNeedExtraPayInfoDialog, setIsNeedExtraPayInfoDialog] = useState(false);
  const [isRefundAccountDialog, setIsRefundAccountDialog] = useState(false);
  const [isPrivacyInfoDrawer, setIsPrivacyInfoDrawer] = useState(false);
  const [isOrderHistoryDialog, setIsOrderHistoryDialog] = useState(false);
  const [isHpointChargeDialog, setIsHpointChargeDialog] = useState(false);
  const [isHpointChargeInfoDialog, setIsHpointChargeInfoDialog] = useState(false);

  // 예시 데이터(이미지 크게보기)
  const sampleImages = [...mockProdImages.slice(0, 5)];

  return (
    <Container title="팝업 모음" showBack>
      {/* 팝업 확인용 페이지입니다 */}
      <ButtonArea vertical className="ncp-mt-s">
        <Button onClick={() => setIsImageViewer(true)}>이미지 크게보기 (L)</Button>
        <br />
        <Button onClick={() => setIsCancleCompleteDialog(true)}>주문 취소 완료 (L)</Button>
        <br />
        <Button onClick={() => setIsExtraPayInfoDialog(true)}>추가 결제 안내 (L)</Button>
        <Button onClick={() => setIsNeedExtraPayDialog(true)}>추가 결제 (L)</Button>
        <Button onClick={() => setIsNeedExtraPayInfoDialog(true)}>추가결제필요 안내 (L)</Button>
        <br />
        <Button onClick={() => setIsRefundAccountDialog(true)}>환불 계좌 등록/수정 (L)</Button>
        <Button onClick={() => setIsPrivacyInfoDrawer(true)}>개인정보수집 및 이용안내 (D)</Button>
        <br />
        <Button onClick={() => setIsCancelDetailDialog(true)}>취소 상세 보기 (L)</Button>
        <Button onClick={() => setIsReturnDetailDialog(true)}>반품 상세 보기 - 택배 (L)</Button>
        <Button onClick={() => setIsReturnDetailDialog2(true)}>반품 상세 보기 - 매장 (L)</Button>
        <Button onClick={() => setIsExChangeDetailDialog(true)}>교환 상세 보기 (L)</Button>
        <br />
        <Button onClick={() => setIsHpointChargeInfoDialog(true)}>H.Point 충전 안내 (L)</Button>
        <Button onClick={() => setIsHpointChargeDialog(true)}>H.Point 결제 필요 안내 (L)</Button>
        <br />
        <Button onClick={() => setIsOrderHistoryDialog(true)}>과거주문 내역 문의하기 (L)</Button>
        <br />
        <br />
        <br />
        <br />
      </ButtonArea>

      {/* 이미지 크게보기 (L) - 공통 */}
      <ImageViewer
        images={sampleImages}
        isOpen={isImageViewer}
        onClose={() => setIsImageViewer(false)}
        activeSlide={currentThumbIdx}
      />
      {/* 주문 취소 완료 (L)*/}
      <CancleCompleteDialog
        isOpen={isCancleCompleteDialog}
        onClose={() => setIsCancleCompleteDialog(false)}
      />
      {/* 추가 결제 안내 (L)*/}
      <ExtraPayInfoDialog
        isOpen={isExtraPayInfoDialog}
        onClose={() => setIsExtraPayInfoDialog(false)}
      />
      {/* 추가결제 (L)*/}
      <NeedExtraPayDialog
        isOpen={isNeedExtraPayDialog}
        onClose={() => setIsNeedExtraPayDialog(false)}
      />
      {/* 추가결제필요 안내 (L)*/}
      <NeedExtraPayInfoDialog
        isOpen={isNeedExtraPayInfoDialog}
        onClose={() => setIsNeedExtraPayInfoDialog(false)}
      />
      {/* 환불 계좌 등록/수정 (L)*/}
      <RefundAccountDialog
        isOpen={isRefundAccountDialog}
        onClose={() => setIsRefundAccountDialog(false)}
      />
      {/* 개인정보수집 및 이용안내 (D)*/}
      <PrivacyInfoDrawer
        isOpen={isPrivacyInfoDrawer}
        onClose={() => setIsPrivacyInfoDrawer(false)}
      />
      {/* 취소 상세 보기  (L)*/}
      <CancelDetailDialog
        isOpen={isCancelDetailDialog}
        onClose={() => setIsCancelDetailDialog(false)}
      />
      {/* 반품 상세 보기 - 택배  (L)*/}
      <ReturnDetailDialog
        isOpen={isReturnDetailDialog}
        onClose={() => setIsReturnDetailDialog(false)}
      />
      {/* 반품 상세 보기 - 매장 (L)*/}
      <ReturnDetailDialog
        type="store"
        isOpen={isReturnDetailDialog2}
        onClose={() => setIsReturnDetailDialog2(false)}
      />
      {/* 교환 상세 보기  (L)*/}
      <ExchangeDetailDialog
        isOpen={isExChangeDetailDialog}
        onClose={() => setIsExChangeDetailDialog(false)}
      />
      {/* 과거주문내역문의하기 (L)*/}
      <OrderHistoryDialog
        isOpen={isOrderHistoryDialog}
        onClose={() => setIsOrderHistoryDialog(false)}
      />
      {/* H.Point 충전 안내 (L)*/}
      <HpointChargeInfoDialog
        isOpen={isHpointChargeInfoDialog}
        onClose={() => setIsHpointChargeInfoDialog(false)}
      />
      {/* H.Point 결제 필요 안내 (L)*/}
      <HpointNeedPayDialog
        isOpen={isHpointChargeDialog}
        onClose={() => setIsHpointChargeDialog(false)}
      />
    </Container>
  );
}
