'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, ButtonArea, TitleBar } from '@/shared/ui';
import { Container, Contents } from '@/widgets/layout/Container';
import { OrdererDetail } from '@/widgets/order';
import { O4OBoxMenuList, O4OLocationList } from '@/widgets/o4o';
import { PaymentReceiptDialog } from '@/widgets/payment';
import PaymentAmount from '@/views/shop/order/complete/payment/PaymentAmount';
import { OrderInfoBox } from '../../components/OrderInfoBox';

import { mockTorderLocationList, mockTorderMenuList } from '@/mocks/torder';

export const TorderCompleted = () => {
  // ✅ 화면 상태
  const searchParams = useSearchParams();
  enum StatusEnum {
    Apgujeong = 'apgujeong',
    DaejeonOutlet = 'daejeonOutlet',
    Completed = 'completed',
    Reviewed = 'reviewed',
    Cancel = 'cancel',
  }
  const status = searchParams.get('status') as StatusEnum | null;
  const isApgujeong = status === StatusEnum.Apgujeong; // 압구정본점
  const isDaejeonOutlet = status === StatusEnum.DaejeonOutlet; // 대전아울렛점
  const isCompleted = status === StatusEnum.Completed; // 키오스크 주문건의 '조리 완료' 단계인 경우
  const isReviewed = status === StatusEnum.Reviewed; // 리뷰를 작성한 경우
  const isCancel = status === StatusEnum.Cancel; // 주문 취소

  // ✅ 상태 관리
  const [isPaymentReceiptDialogOpen, setIsPaymentReceiptDialogOpen] = useState(false);

  // ✅ 결제금액 임시 데이터
  const mockPaymentList = [
    {
      id: 'price-1',
      title: '상품금액',
      price: 150000,
    },
    {
      id: 'price-2',
      title: '할인금액',
      price: -10000,
    },
    {
      id: 'price-3',
      title: '포인트사용',
      price: -10000,
    },
  ];

  return (
    <Container title="주문 상세 정보" showBack>
      <Contents>
        {/* 주문 정보 */}
        <TitleBar title="2025.12.25" level="3" />
        <OrderInfoBox title="주문번호" content="25122512345678" isCopy />
        {/* 픽업위치, 배달위치 */}
        <O4OLocationList
          type={isApgujeong ? 'apgujeong' : isDaejeonOutlet ? 'daejeonOutlet' : 'pickup'}
          data={mockTorderLocationList}
          className="ncp-mt-xl"
        />
        {/* 주문 메뉴 */}
        <O4OBoxMenuList data={mockTorderMenuList} className="ncp-mt-xl" />
        {isCancel && (
          <PaymentAmount
            title="환불정보"
            type="card"
            data={mockPaymentList}
            hideRewardPoint
            slot={
              <>
                <ButtonArea margin="1">
                  <Button onClick={() => setIsPaymentReceiptDialogOpen(true)}>영수증 보기</Button>
                </ButtonArea>
              </>
            }
            className="ncp-mt-xl"
          />
        )}
        {/* 결제금액 - 수정 */}
        <PaymentAmount
          type="card"
          data={mockPaymentList}
          hideRewardPoint
          slot={
            <>
              <ButtonArea margin="1">
                <Button onClick={() => setIsPaymentReceiptDialogOpen(true)}>영수증 보기</Button>
              </ButtonArea>
            </>
          }
          className="ncp-mt-xl"
        />
        {/* 주문자 정보 - 위젯 공통에서 수정 */}
        <OrdererDetail isCollpaseGraybox className="ncp-mt-xl" />
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large" variant={isCompleted || isReviewed ? 'secondary' : 'primary'}>
          목록으로
        </Button>
        {(isCompleted || isReviewed) && (
          <Button variant="primary" size="large">
            리뷰 {isReviewed ? '수정' : '쓰기'}
          </Button>
        )}
      </ButtonArea>

      {/* 영수증 보기 (L) */}
      <PaymentReceiptDialog
        isOpen={isPaymentReceiptDialogOpen}
        onClose={() => setIsPaymentReceiptDialogOpen(false)}
      />
    </Container>
  );
};

TorderCompleted.displayName = 'TorderCompleted';
