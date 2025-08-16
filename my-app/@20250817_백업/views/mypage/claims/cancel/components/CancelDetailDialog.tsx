import { Dialog, Button, Text } from '@shared/ui';
import { RefundAccountInfo, ClaimProdList, CheckGiftBox } from '@views/mypage/claims/components';
import { RefundInfo, PaymentInfo } from '@views/mypage/order/detail/components';

import { mockCommonOrder } from '@mocks/claims';

interface CancelDetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CancelDetailDialog({ isOpen, onClose }: CancelDetailDialogProps) {
  // mock 데이터 가져오기
  const { refund, returner, giftClaim, claimDetailItems } = mockCommonOrder;
  // 상품 샘플데이터
  const cancelProdData = claimDetailItems;

  return (
    <Dialog
      title="취소 상세 보기"
      footer={
        <Button variant="primary" size="large">
          닫기
        </Button>
      }
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
    >
      <ClaimProdList
        type="list"
        title={
          <>
            취소상품
            <Text as="span" color="gray3" weight="regular" size="5">
              {cancelProdData?.flatMap((d) => d.items).length}개
            </Text>
          </>
        }
        sideText="사은품"
        data={cancelProdData}
        showSelectAll={false}
        hideControls
        margin="1"
        bottomSlot={
          <>
            <CheckGiftBox data={giftClaim} isCompleted />
          </>
        }
      />
      {/* 예상 환불 정보 */}
      <RefundInfo variant="normal" totalTitle="총 예상 환불금액" data={refund} />
      {/* 환불 계좌 안내 */}
      <RefundAccountInfo data={returner} />
      {/* 추가 결제 정보 */}
      <PaymentInfo
        title="추가 결제 정보"
        data={{
          variant: 'extra_payment',
          items: [
            { label: '추가 배송비', price: 2000 },
            { label: '결제수단 혜택', price: -45000 },
          ],
          totalPrice: 2000,
        }}
        hideCollapse
      />
    </Dialog>
  );
}
