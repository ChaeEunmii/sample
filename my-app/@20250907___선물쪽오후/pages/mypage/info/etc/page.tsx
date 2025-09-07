'use client';

import React from 'react';
import { useState } from 'react';
import { ButtonArea, Button } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import {
  DeliveryChangeDialog,
  DeliveryAddEditDialog,
  DeliveryAddEditGlobalDialog,
} from '@widgets/order';
import DeliveryStatusDialog from '@views/mypage/order/components/DeliveryStatusDialog';
import CarPolicyAgreeDialog from '@/views/mypage/info/carregister/components/CarPolicyAgreeDialog';
import IdentityAuthDialog from '@/views/auth/verify/IdentityAuthDialog';
import PhoneAuthDialog from '@/views/auth/verify/PhoneAuthDialog';
import EmailAuthDialog from '@/views/auth/verify/EmailAuthDialog';
import { mockLocalAddresses } from '@mocks/myinfo';

export default function Page() {
  const [deliveryStatusProps, setDeliveryStatusProps] = useState(false);
  const [isDeliveryChangeDialog, setIsDeliveryChangeDialog] = useState(false);
  const [isDeliveryAddDialog, setIsDeliveryAddDialog] = useState(false);
  const [isDeliveryEditDialog, setIsDeliveryEditDialog] = useState(false);
  const [isDeliveryAddGlobalDialog, setIsDeliveryAddGlobalDialog] = useState(false);
  const [isDeliveryAddEditGlobalDialog, setIsDeliveryEditGlobalDialog] = useState(false);
  const [isCarPolicyAgreeDialog, setIsCarPolicyAgreeDialog] = useState(false);
  const [isAuthDialog, setIsAuthDialog] = useState(false);
  const [isEmailAuthDialog, setIsEmailAuthDialog] = useState(false);
  const [isPhoneAuthDialog, setIsPhoneAuthDialog] = useState(false);

  return (
    <Container title="팝업 모음" showBack>
      <Contents>
        {/* 팝업 확인용 페이지입니다 */}
        <ButtonArea vertical className="ncp-mt-s">
          <Button onClick={() => setIsDeliveryChangeDialog(true)}>배송지 변경 (L)</Button>
          <br />
          <Button onClick={() => setIsDeliveryAddDialog(true)}>국내 배송지 추가 (L)</Button>
          <Button onClick={() => setIsDeliveryEditDialog(true)}>국내 배송지 수정 (L)</Button>
          <br />
          <Button onClick={() => setIsDeliveryAddGlobalDialog(true)}>해외 배송지 추가 (L)</Button>
          <Button onClick={() => setIsDeliveryEditGlobalDialog(true)}>해외 배송지 수정 (L)</Button>
          <br />
          <Button onClick={() => setDeliveryStatusProps(true)}>
            배송조회 (L) - 마이페이지 주문/배송과 동일
          </Button>
          <br />
          <Button onClick={() => setIsCarPolicyAgreeDialog(true)}>
            개인정보(차량번호) 수집이용 동의 (L)
          </Button>
          <br />
          <br />
          <Button onClick={() => setIsAuthDialog(true)}>본인 인증 (L)</Button>
          <Button onClick={() => setIsEmailAuthDialog(true)}>이메일 인증 (L)</Button>
          <Button onClick={() => setIsPhoneAuthDialog(true)}>휴대폰 인증 (L)</Button>

          <br />
          <br />
          <br />
        </ButtonArea>

        {/* 배송지 변경 (L)*/}
        <DeliveryChangeDialog
          data={mockLocalAddresses}
          isOpen={isDeliveryChangeDialog}
          onClose={() => setIsDeliveryChangeDialog(false)}
        />

        {/* 배송지 추가 (L)*/}
        <DeliveryAddEditDialog
          isOpen={isDeliveryAddDialog}
          onClose={() => setIsDeliveryAddDialog(false)}
        />
        {/* 배송지 수정 (L)*/}
        <DeliveryAddEditDialog
          isOpen={isDeliveryEditDialog}
          onClose={() => setIsDeliveryEditDialog(false)}
          mode="edit"
        />

        {/* 해외 배송지 추가 (L)*/}
        <DeliveryAddEditGlobalDialog
          isOpen={isDeliveryAddGlobalDialog}
          onClose={() => setIsDeliveryAddGlobalDialog(false)}
        />
        {/* 해외 배송지 수정 (L)*/}
        <DeliveryAddEditGlobalDialog
          isOpen={isDeliveryAddEditGlobalDialog}
          onClose={() => setIsDeliveryEditGlobalDialog(false)}
          mode="edit"
        />

        {/* 배송조회 (L)*/}
        <DeliveryStatusDialog
          isOpen={deliveryStatusProps}
          onClose={() => setDeliveryStatusProps(false)}
          isEmpty
        />
        {/* 개인정보(차량번호) 수집이용 동의 (L)*/}
        <CarPolicyAgreeDialog
          isOpen={isCarPolicyAgreeDialog}
          onClose={() => setIsCarPolicyAgreeDialog(false)}
        />
        {/* 본인 인증 (L)*/}
        <IdentityAuthDialog isOpen={isAuthDialog} onClose={() => setIsAuthDialog(false)} />
        {/* 이메일 인증 (L)*/}
        <EmailAuthDialog isOpen={isEmailAuthDialog} onClose={() => setIsEmailAuthDialog(false)} />
        {/* 휴대폰 인증 (L)*/}
        <PhoneAuthDialog isOpen={isPhoneAuthDialog} onClose={() => setIsPhoneAuthDialog(false)} />
      </Contents>
    </Container>
  );
}
