import { Dialog, Button } from '@shared/ui';
import { PaymentInfo } from '@views/mypage/order/detail/components';
import { CashReceipt } from '@/widgets/order';
import { PaymentMethods } from '@/widgets/payment';
import styles from './NeedExtraPay.module.scss';

interface NeedExtraPayDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NeedExtraPayDialog({ isOpen, onClose }: NeedExtraPayDialogProps) {
  return (
    <Dialog
      title="추가 결제"
      footer={
        <Button variant="primary" size="large">
          결제하기
        </Button>
      }
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
    >
      <div className={styles.wrap}>
        <div className={styles.pay}>
          {/* 결제수단 - 위젯공통에서 수정 */}
          <PaymentMethods
            sectionTitle=""
            sectionSuffix={null}
            sectionVariant="normal"
            sectionFlush
            hideGlobal
          />
        </div>
        <div className={styles.bottom}>
          {/* 추가 결제 정보 */}
          <PaymentInfo
            title="결제 정보"
            data={{
              variant: 'extra_payment',
              items: [{ label: '추가 결제금액', price: 1000 }],
              totalPrice: 1000,
            }}
            defaultOpen
          />
          {/* 현금 영수증 */}
          <CashReceipt borderTop flush defaultOpen />
        </div>
      </div>
    </Dialog>
  );
}
