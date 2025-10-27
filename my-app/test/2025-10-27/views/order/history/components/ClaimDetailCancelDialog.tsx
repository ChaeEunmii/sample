'use client';

import { Dialog, Button, Section } from '@shared/ui';
import {
  HistoryDeliveryGroup,
  OrderDeliveryData,
} from '@/views/mypage/order/history/components/HistoryDeliveryGroup';
import { RefundInfo } from '@views/mypage/order/detail/components';
import { RefundAccountInfo, ReturnReason } from '@views/mypage/claims/components';
import styles from './ClaimDetail.module.scss';
import { mockClaimDeliveryData } from '@mocks/history';
import { mockCommonOrder } from '@mocks/history';

interface ClaimDetailCancelDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClaimDetailCancelDialog({ isOpen, onClose }: ClaimDetailCancelDialogProps) {
  // mock 데이터 가져오기
  const { returner, claimRefund } = mockCommonOrder;
  // 상품 샘플데이터
  const returnApplyData = mockClaimDeliveryData as OrderDeliveryData[];

  return (
    <Dialog
      title="취소 상세 보기"
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
      {/* 취소 상품 */}
      <Section title="취소상품" variant="normal" level="1" flush className={styles.product}>
        <HistoryDeliveryGroup
          data={[returnApplyData[0]]}
          viewType="detail"
          onButtonClick={(action, item) => {
            console.log('Clicked:', action, item);
          }}
        />
      </Section>
      {/* 취소 사유 */}
      <ReturnReason
        type="cancel"
        data={{
          requestedAt: '2025.12.25 12:34:56',
          reason: '기타',
          detailReason: '주문을 잘못했어요.',
        }}
      />
      {/* 환불 계좌 안내 */}
      <RefundAccountInfo data={returner} />
      {/* 환불 정보 */}
      <RefundInfo variant="normal" data={claimRefund} totalTitle="총 예상 환불금액" />
    </Dialog>
  );
}
