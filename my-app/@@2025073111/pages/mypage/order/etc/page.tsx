'use client';

import React from 'react';
import { useState } from 'react';
import { ButtonArea, Button } from '@shared/ui';
import { Container } from '@widgets/layout/Container';
import TagFilterSetDrawer from '@/widgets/order/TagFilterSetDrawer';
import CardReceiptDialog from '@/views/mypage/order/receipt/components/CardReceiptDialog';
import CashReceiptDialog from '@/views/mypage/order/receipt/components/CashReceiptDialog';
import { OptionChangeDrawer } from '@/views/mypage/order/detail/components/OptionChangeDrawer';
import DeliveryStatusDialog from '@views/mypage/order/components/DeliveryStatusDialog';
import ReturnOrExchangeDrawer from '@views/mypage/order/components/ReturnOrExchangeDrawer';
import BuyConfirmedDrawer from '@views/mypage/order/components/BuyConfirmedDrawer';
import InquiryDrawer from '@/views/mypage/order/components/InquiryDrawer';
import DeliveryRequestEditDialog from '@views/mypage/order/components/DeliveryRequestEditDialog';
import { LocationDialog } from '@/widgets/order/LocationDialog'; //주문서 : '픽업 장소' 팝업과 동일
import UseGuideDrawer from '@views/mypage/order/components/UseGuideDrawer';
import RequestChangeDrawer from '@views/mypage/order/components/RequestChangeDrawer';
import RecipientInfoEditDrawer from '@views/mypage/order/components/RecipientInfoEditDrawer';
import ChanelBuyDialog from '@views/mypage/order/components/ChanelBuyDialog';
import DeliveryChangeDialog from '@views/mypage/order/components/DeliveryChangeDialog';
import PaymentChangeDialog from '@views/mypage/order/components/PaymentChangeDialog';
import PaymentInfoDialog from '@views/mypage/order/components/PaymentInfoDialog';
import ExchangeItemDrawer from '@views/mypage/order/components/ExchangeItemDrawer';
import ImageViewerDialog from '@widgets/etc/ImageViewerDialog';
// 샘플 이미지
import { mockProdImages } from '@mocks/product';

export default function Page() {
  const [isSearchSettingDrawer, setIsSearchSettingDrawer] = useState(false);
  const [isCardReceiptDialog, setIsCardReceiptDialog] = useState(false);
  const [isCardReceiptHpayDialog, setIsCardReceiptHpayDialog] = useState(false);
  const [isCashReceiptDialog, setIsCashReceiptDialog] = useState(false);
  const [isOptionChangeDrawer, setIsOptionChangeDrawer] = useState(false);
  const [isReturnOrExchangeDrawer, setIsReturnOrExchangeDrawer] = useState(false);
  const [isBuyConfirmedDrawer, setIsBuyConfirmedDrawer] = useState(false);
  const [isInquiryDrawer, setIsInquiryDrawer] = useState(false);
  const [isDeliveryRequestEditDialog, setIsDeliveryRequestEditDialog] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false); // 위치보기 (L)
  const [isUseGuideDrawer, setIsUseGuideDrawer] = useState(false);
  const [isRequestChangeDrawer, setIsRequestChangeDrawer] = useState(false);
  const [isRecipientInfoEditDrawer, setIsRecipientInfoEditDrawer] = useState(false);
  const [isChanelBuyDialog, setIsChanelBuyDialog] = useState(false);
  const [isChanelBuyDialogFull, setIsChanelBuyDialogFull] = useState(false);
  const [isDeliveryChangeDialog, setIsDeliveryChangeDialog] = useState(false);
  const [isPaymentChangeDialog, setIsPaymentChangeDialog] = useState(false);
  const [isPaymentInfoDialog, setIsPaymentInfoDialog] = useState(false);
  const [isExchangeItemDrawer, setIsExchangeItemDrawer] = useState(false);
  const [isImageViewerDialog, setIsImageViewerDialog] = useState(false);

  // 예시 데이터(이미지 크게보기)
  const sampleImages = [...mockProdImages, ...mockProdImages.slice(0, 2)];

  // 배송조회 샘플 보기용 상태
  const [deliveryStatusProps, setDeliveryStatusProps] = useState<{
    isOpen: boolean;
    type: 'parcel' | 'early' | 'quick' | 'ems';
    isEmpty: boolean;
  }>({
    isOpen: false,
    type: 'parcel',
    isEmpty: false,
  });
  const openDeliveryStatus = (type: 'parcel' | 'early' | 'quick' | 'ems', isEmpty = false) => {
    setDeliveryStatusProps({ isOpen: true, type, isEmpty });
  };
  const deliveryCases: { label: string; type: 'parcel' | 'early' | 'quick' | 'ems' }[] = [
    { label: '택배배송조회', type: 'parcel' },
    { label: '새벽배송조회', type: 'early' },
    { label: '퀵배송조회', type: 'quick' },
    { label: 'EMS 배송조회', type: 'ems' },
  ];

  return (
    <Container title="팝업 모음" showBack>
      {/* 팝업 확인용 페이지입니다 */}
      <ButtonArea vertical className="ncp-mt-s">
        <Button onClick={() => setIsSearchSettingDrawer(true)}>검색 설정 (D)</Button>
        <Button onClick={() => setIsCardReceiptDialog(true)}>카드 영수증 (L)</Button>
        <Button onClick={() => setIsCardReceiptHpayDialog(true)}>h pay 카드 영수증 (L)</Button>
        <Button onClick={() => setIsCashReceiptDialog(true)}>현금 영수증 (L)</Button>
        <Button onClick={() => setIsOptionChangeDrawer(true)}>옵션 변경 (D)</Button>
        <br />
        {/* 배송조회 버튼 (정상 / 조회불가) */}
        {deliveryCases.map(({ label, type }) => (
          <React.Fragment key={label}>
            <ButtonArea className="ncp-w-full ncp-mt-x0">
              <Button onClick={() => openDeliveryStatus(type, false)}>{label}</Button>
              <Button onClick={() => openDeliveryStatus(type, true)}>{label} (조회불가)</Button>
            </ButtonArea>
          </React.Fragment>
        ))}
        <br />
        <Button onClick={() => setIsReturnOrExchangeDrawer(true)}>반품 교환 선택 (D)</Button>
        <Button onClick={() => setIsBuyConfirmedDrawer(true)}>구매 확정 (D)</Button>
        <Button onClick={() => setIsInquiryDrawer(true)}>문의하기 (D)</Button>
        <br />
        <Button onClick={() => setIsDeliveryRequestEditDialog(true)}>
          배송지 요청 사항 변경 (L)
        </Button>
        <Button onClick={() => setIsLocationOpen(true)}>
          위치보기 (L) : 주문서와 동일한 디자인
        </Button>
        <Button onClick={() => setIsUseGuideDrawer(true)}>사용안내 (D)</Button>
        <Button onClick={() => setIsRequestChangeDrawer(true)}>요청사항 변경 (D)</Button>
        <Button onClick={() => setIsRecipientInfoEditDrawer(true)}>받으시는 분 편집 (D)</Button>
        <Button onClick={() => setIsChanelBuyDialog(true)}>샤넬 구매 (L)</Button>
        <Button onClick={() => setIsChanelBuyDialogFull(true)}>샤넬 구매 풀팝업 (L)</Button>
        <br />
        <Button onClick={() => setIsDeliveryChangeDialog(true)}>배송지 변경 (L)</Button>
        <Button onClick={() => setIsPaymentChangeDialog(true)}>결제수단 변경 (L)</Button>
        <Button onClick={() => setIsPaymentInfoDialog(true)}>결제정보 상세 (L)</Button>
        <Button onClick={() => setIsExchangeItemDrawer(true)}>교환권 조회 (D)</Button>
        <br />
        <Button onClick={() => setIsImageViewerDialog(true)}>이미지 크게보기 (L)</Button>
        <br />
        <br />
      </ButtonArea>
      {/* 검색설정 (D)*/}
      <TagFilterSetDrawer
        isOpen={isSearchSettingDrawer}
        onClose={() => setIsSearchSettingDrawer(false)}
      />
      {/* 택배 배송 조회 (L)*/}
      <DeliveryStatusDialog
        isOpen={deliveryStatusProps.isOpen}
        onClose={() => setDeliveryStatusProps((prev) => ({ ...prev, isOpen: false }))}
        type={deliveryStatusProps.type} // 배송타입별 다르게 렌더링
        isEmpty={deliveryStatusProps.isEmpty} // 조회불가 여부
      />
      {/* 반품 교환 선택 (D) */}
      <ReturnOrExchangeDrawer
        isOpen={isReturnOrExchangeDrawer}
        onClose={() => setIsReturnOrExchangeDrawer(false)}
      />
      {/* NCP 카드 영수증 (L)*/}
      <CardReceiptDialog
        isOpen={isCardReceiptDialog}
        onClose={() => setIsCardReceiptDialog(false)}
      />
      {/* H.pay 카드 영수증 (L)*/}
      <CardReceiptDialog
        type="hpay"
        isOpen={isCardReceiptHpayDialog}
        onClose={() => setIsCardReceiptHpayDialog(false)}
      />
      {/* 현금 영수증 (L)*/}
      <CashReceiptDialog
        isOpen={isCashReceiptDialog}
        onClose={() => setIsCashReceiptDialog(false)}
      />
      {/* 온션 변경 (D)*/}
      <OptionChangeDrawer
        isOpen={isOptionChangeDrawer}
        onClose={() => setIsOptionChangeDrawer(false)}
      />
      {/* 구매 확정 (D) */}
      <BuyConfirmedDrawer
        isOpen={isBuyConfirmedDrawer}
        onClose={() => setIsBuyConfirmedDrawer(false)}
      />
      {/* 문의 하기 (D) */}
      <InquiryDrawer isOpen={isInquiryDrawer} onClose={() => setIsInquiryDrawer(false)} />
      {/* 배송지 요청 사항 변경 (L)*/}
      <DeliveryRequestEditDialog
        isOpen={isDeliveryRequestEditDialog}
        onClose={() => setIsDeliveryRequestEditDialog(false)}
      />
      {/* 위치보기 (L) : //주문서 : '픽업 장소' 팝업과 동일*/}
      <LocationDialog isOpen={isLocationOpen} onClose={() => setIsLocationOpen(false)} />
      {/* 사용안내 (D) */}
      <UseGuideDrawer isOpen={isUseGuideDrawer} onClose={() => setIsUseGuideDrawer(false)} />
      {/* 요청사항 변경 (D) */}
      <RequestChangeDrawer
        isOpen={isRequestChangeDrawer}
        onClose={() => setIsRequestChangeDrawer(false)}
      />
      {/* 받으시는 분 편집 (D) */}
      <RecipientInfoEditDrawer
        isOpen={isRecipientInfoEditDrawer}
        onClose={() => setIsRecipientInfoEditDrawer(false)}
      />
      {/* 샤넬구매 (L)*/}
      <ChanelBuyDialog isOpen={isChanelBuyDialog} onClose={() => setIsChanelBuyDialog(false)} />
      {/* 샤넬구매 풀팝업 (L)*/}
      <ChanelBuyDialog
        isOpen={isChanelBuyDialogFull}
        onClose={() => setIsChanelBuyDialogFull(false)}
        isMaximize
      />
      {/* 배송지 변경 (L)*/}
      <DeliveryChangeDialog
        isOpen={isDeliveryChangeDialog}
        onClose={() => setIsDeliveryChangeDialog(false)}
      />
      {/* 결제수단 변경 (L)*/}
      <PaymentChangeDialog
        isOpen={isPaymentChangeDialog}
        onClose={() => setIsPaymentChangeDialog(false)}
      />
      {/* 결제정보 상세 (L)*/}
      <PaymentInfoDialog
        isOpen={isPaymentInfoDialog}
        onClose={() => setIsPaymentInfoDialog(false)}
      />
      {/* 교환권 조회 (D) */}
      <ExchangeItemDrawer
        isOpen={isExchangeItemDrawer}
        onClose={() => setIsExchangeItemDrawer(false)}
        status="picked"
      />
      {/* 이미지 크게보기 (L) */}
      <ImageViewerDialog
        isOpen={isImageViewerDialog}
        onClose={() => setIsImageViewerDialog(false)}
        images={sampleImages}
      />
    </Container>
  );
}
