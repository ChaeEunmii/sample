'use client';

import { useState } from 'react';
import { ButtonArea, Button } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
// 팝업목록
import {
  AgreeDrawer,
  DeliveryDateSelectDialog,
  ThanksProdListDialog,
  DeliveryInfoDialog,
  DeliveryTraceDialog,
} from '@views/hbss/components';

export default function Page() {
  const [isAgreeDrawer, setIsAgreeDrawer] = useState(false);
  const [isDeliveryDateSelect, setIsDeliveryDateSelect] = useState(false); // 배송 희망일
  const [isDeliveryDateSelect2, setIsDeliveryDateSelect2] = useState(false); // 배송 예정일
  const [isDeliveryDateSelect3, setIsDeliveryDateSelect3] = useState(false); // 택배 발송일
  const [isThanksProdListDialog, setIsThanksProdListDialog] = useState(false); // 감사 상품 목록
  const [isDeliveryInfoDialog, setIsDeliveryInfoDialog] = useState(false); // 배송정보 자세히 보기
  const [isDeliveryTraceDialog, setIsDeliveryTraceDialog] = useState(false); // 배송조회

  return (
    <Container title="팝업 모음" showBack>
      <Contents>
        {/* 팝업 확인용 페이지입니다 */}
        <ButtonArea vertical className="ncp-mt-x0">
          <Button onClick={() => setIsAgreeDrawer(true)}>
            마케팅 활용을 위한 개인정보 수집·이용 동의
          </Button>
          <br />
          <Button onClick={() => setIsDeliveryDateSelect(true)}>배송 희망일 선택 (L)</Button>
          <Button onClick={() => setIsDeliveryDateSelect2(true)}>배송 예정일 선택 (L)</Button>
          <Button onClick={() => setIsDeliveryDateSelect3(true)}>택배 발송일 선택 (L)</Button>
          <Button onClick={() => setIsThanksProdListDialog(true)}>감사 상품 목록 (L)</Button>
          <br />
          <Button onClick={() => setIsDeliveryInfoDialog(true)}>배송정보 자세히 보기 (L)</Button>
          <br />
          <Button onClick={() => setIsDeliveryTraceDialog(true)}>배송조회 (L)</Button>
        </ButtonArea>

        {/* 마케팅 활용을 위한 개인정보 수집·이용 동의 (D)*/}
        <AgreeDrawer isOpen={isAgreeDrawer} onClose={() => setIsAgreeDrawer(false)} />
        {/* 배송 희망일 선택 (L)*/}
        <DeliveryDateSelectDialog
          type="hopeDate"
          isOpen={isDeliveryDateSelect}
          onClose={() => setIsDeliveryDateSelect(false)}
        />
        {/* 배송 예정일 선택 (L)*/}
        <DeliveryDateSelectDialog
          type="expectDate"
          isOpen={isDeliveryDateSelect2}
          onClose={() => setIsDeliveryDateSelect2(false)}
        />
        {/* 택배 발송일 선택 (L)*/}
        <DeliveryDateSelectDialog
          type="shipDate"
          isOpen={isDeliveryDateSelect3}
          onClose={() => setIsDeliveryDateSelect3(false)}
        />
        {/* 감사 상품 목록 (L)*/}
        <ThanksProdListDialog
          isOpen={isThanksProdListDialog}
          onClose={() => setIsThanksProdListDialog(false)}
        />
        {/* 배송정보 자세히 보기 (L)*/}
        <DeliveryInfoDialog
          isOpen={isDeliveryInfoDialog}
          onClose={() => setIsDeliveryInfoDialog(false)}
        />
        {/* 배송조회 (L)*/}
        <DeliveryTraceDialog
          isOpen={isDeliveryTraceDialog}
          onClose={() => setIsDeliveryTraceDialog(false)}
        />
      </Contents>
    </Container>
  );
}
