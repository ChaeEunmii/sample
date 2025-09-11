'use client';

import { Dialog, Button } from '@shared/ui';
import { MethodType } from '@/views/mypage/payment/hpoint/history/HistoryItem';
import styles from './ReceiptView.module.scss';

interface ReceiptViewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  /** 결제수단 타입 설정 (타이틀변경) */
  type?: MethodType;
}
const MethodTypeTitleLabelMap: Record<MethodType, string> = {
  hyundai: '현대백화점 카드 전표',
  card: '신용 · 체크카드 매출전표',
  bank: '현금영수증',
};

export default function ReceiptViewDialog({ isOpen, onClose, type }: ReceiptViewDialogProps) {
  return (
    <Dialog
      title={type ? MethodTypeTitleLabelMap[type] : '영수증'}
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <>
          <Button variant="primary" size="large">
            확인
          </Button>
        </>
      }
    >
      <div className={styles.layout}>영수증 내용</div>
    </Dialog>
  );
}
