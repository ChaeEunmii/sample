import { Dialog, Button, Section, ButtonArea } from '@shared/ui';
import { ReturnReason } from '@views/mypage/claims/components';
import { DeliveryDetail } from '@widgets/order';
import { PaymentInfo, OrderTopInfo } from '@views/mypage/order/detail/components';
import { DeliveryGroup, OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';

import { mockCommonOrder } from '@mocks/claims';

interface ExchangeDetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExchangeDetailDialog({ isOpen, onClose }: ExchangeDetailDialogProps) {
  // mock 데이터 가져오기
  const { topInfo, deliveryDetailItems, claimDeliveryItem2, claimExchangeReason } = mockCommonOrder;
  // 택배 상품 샘플데이터
  const returnApplyData = claimDeliveryItem2 as OrderDeliveryData[];

  return (
    <Dialog
      title="교환 상세 보기"
      footer={
        <>
          <Button size="large">문의하기</Button>
          <Button variant="primary" size="large">
            닫기
          </Button>
        </>
      }
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
    >
      {/* 상단 주문정보 */}
      <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
      {/* 교환 접수 목록 */}
      <Section title="교환 접수 상품" variant="normal" level="1" flush borderTop>
        <DeliveryGroup data={returnApplyData} viewType="detail" hideStatusFlag hideStatusBtns />
      </Section>
      {/* 교환 회수지 */}
      <DeliveryDetail
        title="교환 회수지"
        infoData={deliveryDetailItems[2]}
        borderTop
        level="1"
        defaultOpen={false}
        hideCollapse
        bottomSlot={
          <>
            <ButtonArea className="ncp-mt-x0">
              <Button variant="tertiary">배송조회</Button>
            </ButtonArea>
          </>
        }
      />
      {/* 교환 배송지 */}
      <DeliveryDetail
        title="교환 배송지"
        infoData={deliveryDetailItems[2]}
        borderTop
        level="1"
        defaultOpen={false}
        hideCollapse
        bottomSlot={
          <>
            <ButtonArea className="ncp-mt-x0">
              <Button variant="tertiary">배송조회</Button>
            </ButtonArea>
          </>
        }
      />
      {/* 교환 사유 */}
      <ReturnReason type="exchange" data={claimExchangeReason} />
      {/* 추가 결제 정보 */}
      <PaymentInfo
        title="추가 결제 정보"
        data={{
          variant: 'extra_payment',
          items: [
            { label: '교환 배송비', price: 3000 },
            { label: '회수 배송비', price: 3000 },
            { label: '결제수단 혜택', price: -45000 },
          ],
          totalPrice: 6000,
        }}
        hideCollapse
      />
    </Dialog>
  );
}
