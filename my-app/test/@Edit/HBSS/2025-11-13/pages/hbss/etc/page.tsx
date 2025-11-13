'use client';

import { useState } from 'react';
import { ButtonArea, Button } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
// 팝업목록
import { AgreeDrawer, DeliveryDateSelectDialog } from '@views/hbss/components';
import { DeliveryInfoSenderDialog } from '@/views/hbss/delivery/track/DeliveryInfoSenderDialog'; // 배송정보 자세히 보기 (L) (보내시는분)
import { DeliveryInfoReceiverDialog } from '@/views/hbss/delivery/track/DeliveryInfoReceiverDialog'; // 배송정보 자세히 보기 (L) (받으시는분)
import { DeliveryTraceDialog } from '@/views/hbss/tohome/components/DeliveryTraceDialog'; // 더현대 투홈, 수취인 배송조회 (L)
import { ThanksProdListDialog } from '@/views/hbss/special/components/ThanksProdListDialog'; // 감사 상품 목록 (L)

export default function Page() {
  const [isAgreeDrawer, setIsAgreeDrawer] = useState(false);
  const [isDeliveryDateSelect, setIsDeliveryDateSelect] = useState(false); // 배송 희망일
  const [isDeliveryDateSelect2, setIsDeliveryDateSelect2] = useState(false); // 배송 예정일
  const [isDeliveryDateSelect3, setIsDeliveryDateSelect3] = useState(false); // 택배 발송일
  const [isThanksProdListDialog, setIsThanksProdListDialog] = useState(false); // 감사 상품 목록
  const [isDeliveryTraceDialog, setIsDeliveryTraceDialog] = useState(false); // 배송조회

  const [isDeliveryInfoSenderDialog, setIsDeliveryInfoSenderDialog] = useState(false); // 배송정보 자세히 보기 (보내시는분)
  const [isDeliveryInfoReceiverDialog, setIsDeliveryInfoReceiverDialog] = useState(false); // 배송정보 자세히 보기 (받으시는분)

  return (
    <Container title="팝업 모음" showBack>
      <Contents>
        {/* 팝업 확인용 페이지입니다 */}
        <ButtonArea vertical className="ncp-mt-x0">
          <Button onClick={() => setIsDeliveryDateSelect(true)}>배송 희망일 선택 (L)</Button>
          <Button onClick={() => setIsDeliveryDateSelect2(true)}>배송 예정일 선택 (L)</Button>
          <Button onClick={() => setIsDeliveryDateSelect3(true)}>택배 발송일 선택 (L)</Button>
          <br />
          <Button onClick={() => setIsAgreeDrawer(true)}>
            마케팅 활용을 위한 개인정보 수집·이용 동의
          </Button>
          <br />
          <Button onClick={() => setIsDeliveryInfoSenderDialog(true)}>
            배송정보 자세히 보기 - 보내시는분 (L)
          </Button>
          <Button onClick={() => setIsDeliveryInfoReceiverDialog(true)}>
            배송정보 자세히 보기 - 받으시는분 (L)
          </Button>
          <br />
          <Button onClick={() => setIsThanksProdListDialog(true)}>감사 상품 목록 (L)</Button>
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
        {/* 배송정보 자세히 보기 - 보내시는 분(L)*/}
        <DeliveryInfoSenderDialog
          isOpen={isDeliveryInfoSenderDialog}
          onClose={() => setIsDeliveryInfoSenderDialog(false)}
        />
        {/* 배송정보 자세히 보기 - 받으시는 분(L)*/}
        <DeliveryInfoReceiverDialog
          isOpen={isDeliveryInfoReceiverDialog}
          onClose={() => setIsDeliveryInfoReceiverDialog(false)}
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
