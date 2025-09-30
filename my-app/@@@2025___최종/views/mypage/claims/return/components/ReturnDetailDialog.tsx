import { Dialog, Button, Section, ButtonArea } from '@shared/ui';
import { RefundAccountInfo, ReturnReason, ClaimInfoTxt } from '@views/mypage/claims/components';
import { DeliveryDetail } from '@widgets/order';
import { PaymentInfo, OrderTopInfo } from '@views/mypage/order/detail/components';
import { DeliveryGroup, OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
import { ReturnStoreBox } from '@/views/mypage/claims/components';
import { ClaimProdList } from '@views/mypage/claims/components/ClaimProdList';

import { mockCommonOrder } from '@mocks/claims';

interface ReturnDetailDialogProps {
  type?: 'parcel' | 'store';
  isOpen: boolean;
  onClose: () => void;
}

export default function ReturnDetailDialog({
  type = 'parcel',
  isOpen,
  onClose,
}: ReturnDetailDialogProps) {
  // mock 데이터 가져오기
  const {
    returner,
    topInfo,
    deliveryDetailItems,
    claimDeliveryItem,
    claimItem,
    claimReturnReason,
  } = mockCommonOrder;
  // 택배 상품 샘플데이터
  const returnApplyData = claimDeliveryItem as OrderDeliveryData[];
  // 매장 상품 샘플데이터
  const cancelProdData = claimItem;

  return (
    <Dialog
      title="반품 상세 보기"
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
      {/* 택배 */}
      {type === 'parcel' && (
        <>
          {/* 반품 접수 목록 */}
          <Section title="반품 접수 목록" variant="normal" level="1" flush borderTop>
            <DeliveryGroup
              data={returnApplyData}
              viewType="detail"
              hideStatusBtns
              onButtonClick={(action, item) => {
                console.log('Clicked:', action, item);
              }}
            />
          </Section>
          {/* 반품 회수지 */}
          <DeliveryDetail
            title="반품 회수지"
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
          {/* 반품 사유 */}
          <ReturnReason type="return" data={claimReturnReason} />
          {/* 환불 계좌 안내 */}
          <RefundAccountInfo data={returner} />
          {/* 추가 결제 정보 */}
          <PaymentInfo
            title="추가 결제 정보"
            data={{
              variant: 'extra_payment',
              items: [
                { label: '상품금액', price: 180000 },
                { label: '배송비', price: 0 },
                { label: '포인트 사용', price: -20000 },
                { label: '결제수단 혜택', price: -45000 },
              ],
              totalPrice: 126000,
            }}
            hideCollapse
          />
        </>
      )}
      {/* 매장 */}
      {type === 'store' && (
        <>
          {/* 반품 회수 매장 */}
          <Section title="반품 회수 매장" variant="normal" level="1" flush borderTop>
            <ReturnStoreBox />
            <ClaimInfoTxt content="매장에 반품 상품을 전달해 주세요" />
            <ClaimProdList
              type="list"
              data={cancelProdData}
              showSelectAll={false}
              hideControls
              margin="1"
            />
          </Section>
          {/* 추가 결제 정보 */}
          <PaymentInfo
            title="추가 결제 정보"
            data={{
              variant: 'extra_payment',
              items: [
                { label: '상품금액', price: 180000 },
                { label: '배송비', price: 0 },
                { label: '포인트 사용', price: -20000 },
                { label: '결제수단 혜택', price: -45000 },
              ],
              totalPrice: 126000,
            }}
            hideCollapse
          />
          {/* 반품 사유 */}
          <ReturnReason type="return" data={claimReturnReason} />
        </>
      )}
    </Dialog>
  );
}
