import { Dialog, Button } from '@shared/ui';
import { RefundInfo } from '@views/mypage/order/detail/components';

interface ExtraPayInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExtraPayInfoDialog({ isOpen, onClose }: ExtraPayInfoDialogProps) {
  return (
    <Dialog
      footer={
        <>
          <Button>신청 내용 수정</Button>
          <Button variant="primary" onClick={onClose}>
            결제하고 취소
          </Button>
        </>
      }
      isOpen={isOpen}
      onClose={onClose}
    >
      {/* 예상 환불 정보 */}
      <RefundInfo
        title="추가 결제가 필요합니다"
        variant="normal"
        noPadding
        hideBorderTop
        totalTitle="총 예상 환불금액"
        data={{
          refundItems: [
            {
              id: 'refund-product',
              label: '환불 상품금액',
              price: 2000,
            },
            {
              id: 'refund-shipping',
              label: '배송비',
              price: 0,
            },
            {
              id: 'deducted-amount',
              label: '차감금액',
              price: -3000,
              fields: [{ id: 'extra-shipping', label: '추가 배송비', price: -3000 }],
            },
          ],
        }}
      />
      <br />
    </Dialog>
  );
}
