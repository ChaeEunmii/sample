'use client';

import { Dialog, Button, Section } from '@shared/ui';
import {
  HistoryDeliveryGroup,
  OrderDeliveryData,
} from '@/views/mypage/order/history/components/HistoryDeliveryGroup';
import { RefundInfo } from '@views/mypage/order/detail/components';
import { RefundAccountInfo, ReturnReason } from '@views/mypage/claims/components';
import { HistoryDeliveryDetail } from '@/views/mypage/order/history/components';
import styles from './ClaimDetail.module.scss';
import { mockClaimDeliveryData } from '@mocks/history';
import { mockCommonOrder } from '@mocks/history';

interface ClaimDetailReturnDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClaimDetailReturnDialog({ isOpen, onClose }: ClaimDetailReturnDialogProps) {
  // mock 데이터 가져오기
  const { returner, claimReturnReason, deliveryAddress, claimRefund } = mockCommonOrder;
  // 상품 샘플데이터
  const returnApplyData = mockClaimDeliveryData as OrderDeliveryData[];

  return (
    <Dialog
      title="반품 상세 보기"
      footer={
        <>
          <Button size="large">문의하기</Button>
          <Button variant="primary" size="large" onClick={onClose}>
            닫기
          </Button>
        </>
      }
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
    >
      {/* 반품 상품 */}
      <Section title="반품상품" variant="normal" level="1" flush className={styles.product}>
        <HistoryDeliveryGroup
          data={[returnApplyData[1]]}
          viewType="detail"
          onButtonClick={(action, item) => {
            console.log('Clicked:', action, item);
          }}
        />
      </Section>
      {/* 반품 회수지 */}
      <HistoryDeliveryDetail title="반품 회수지" data={deliveryAddress[6]} hideCollapse />
      {/* 반품 사유 */}
      <ReturnReason type="return" data={claimReturnReason} />
      {/* 환불 계좌 안내 */}
      <RefundAccountInfo data={returner} />
      {/* 환불 정보 */}
      <RefundInfo variant="normal" data={claimRefund} totalTitle="총 예상 환불금액" />
    </Dialog>
  );
}
