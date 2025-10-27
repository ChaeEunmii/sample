'use client';

import { Dialog, Button, Section } from '@shared/ui';
import {
  HistoryDeliveryGroup,
  OrderDeliveryData,
} from '@/views/mypage/order/history/components/HistoryDeliveryGroup';
import { HistoryDeliveryDetail } from '@/views/mypage/order/history/components';
import { ReturnReason } from '@views/mypage/claims/components';
import styles from './ClaimDetail.module.scss';
import { mockCommonOrder, mockClaimDeliveryData } from '@mocks/history';

interface ClaimDetailExchangeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClaimDetailExchangeDialog({
  isOpen,
  onClose,
}: ClaimDetailExchangeDialogProps) {
  // mock 데이터 가져오기
  const { claimReturnReason, deliveryAddress } = mockCommonOrder;
  // 상품 샘플데이터
  const returnApplyData = mockClaimDeliveryData as OrderDeliveryData[];

  return (
    <Dialog
      title="교환 상세 보기"
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
      {/* 교환 상품 */}
      <Section title="교환상품" variant="normal" level="1" flush className={styles.product}>
        <HistoryDeliveryGroup
          data={[returnApplyData[2]]}
          viewType="detail"
          onButtonClick={(action, item) => {
            console.log('Clicked:', action, item);
          }}
        />
      </Section>
      {/* 교환 회수지 */}
      <HistoryDeliveryDetail title="교환 회수지" data={deliveryAddress[6]} hideCollapse />
      {/* 교환 배송지 */}
      <HistoryDeliveryDetail title="교환 배송지" data={deliveryAddress[6]} hideCollapse />
      {/* 교환 사유 */}
      <ReturnReason type="exchange" data={claimReturnReason} />
    </Dialog>
  );
}
