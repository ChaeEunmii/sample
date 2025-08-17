import { Dialog, Button, Text, Link } from '@shared/ui';
import { formatPrice } from '@shared/utils/ui';
import styles from './CashReceipt.module.scss';
import { ReceiptInfoSection } from '@/views/mypage/order/receipt/components/ReceiptInfoSection';
import { mockPaymentCash, mockSummaryShare, mockSellerShare } from '@mocks/myorder';

interface CashReceiptDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function CashReceiptDialog({ isOpen, onClose }: CashReceiptDialogProps) {
  return (
    <Dialog
      title="현금 영수증"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <Button variant="primary" size="large">
          인쇄하기
        </Button>
      }
    >
      <div className={styles.wrap}>
        {/* 결제정보 */}
        <ReceiptInfoSection
          items={[
            { label: '승인번호', value: mockPaymentCash.approvalNumber },
            { label: '구매자 발행번호', value: mockPaymentCash.buyerNumber },
            { label: '발행방법', value: mockPaymentCash.issueMethod },
            { label: '신청구분', value: mockPaymentCash.applyType },
            { label: '발행일자', value: mockPaymentCash.issueDate },
            { label: '취소일자', value: mockPaymentCash.cancelDate },
            { label: '구분', value: mockPaymentCash.receiptType },
            { label: '주문번호', value: mockPaymentCash.orderNumber },
            { label: '구매상품', value: mockPaymentCash.productName },
            { label: '승인금액', value: `${formatPrice(mockPaymentCash.amount)}원` }, // 금액 필드 추가 시
          ]}
        />
        {/* 금액 */}
        <ReceiptInfoSection
          title="금액"
          items={[
            { label: '승인금액', value: `${formatPrice(mockSummaryShare.approvalAmount)}` },
            { label: '공급가액', value: `${formatPrice(mockSummaryShare.supplyValue)}` },
            { label: '부가세액', value: `${formatPrice(mockSummaryShare.vat)}` },
            { label: '봉사료', value: `${formatPrice(mockSummaryShare.serviceCharge)}` },
            { label: '현금지급', value: `${formatPrice(mockSummaryShare.cashAmount)}` },
            {
              label: '합계',
              value: `${formatPrice(mockSummaryShare.totalAmount)}`,
              highlight: 'small',
            },
          ]}
        />
        {/* 판매자 정보 */}
        <ReceiptInfoSection
          title="판매자 정보"
          items={[
            { label: '가맹점명', value: mockSellerShare.storeName },
            { label: '대표자명', value: mockSellerShare.ceoName },
            { label: '사업자등록번호', value: mockSellerShare.businessNumber },
            { label: '업태/업종', value: mockSellerShare.businessType },
            {
              label: '전화번호',
              value: (
                <Link variant="underline" href={`tel:${mockSellerShare.tel.replace(/-/g, '')}`}>
                  {mockSellerShare.tel}
                </Link>
              ),
            },
            { label: '사업장주소', value: mockSellerShare.address },
          ]}
        />
        {/* 가맹점 정보 */}
        <ReceiptInfoSection
          title="가맹점 정보"
          items={[
            { label: '가맹점명', value: mockSellerShare.storeName },
            { label: '대표자명', value: mockSellerShare.ceoName },
            { label: '사업자등록번호', value: mockSellerShare.businessNumber },
            { label: '업태/업종', value: mockSellerShare.businessType },
            {
              label: '전화번호',
              value: (
                <Link variant="underline" href={`tel:${mockSellerShare.tel.replace(/-/g, '')}`}>
                  {mockSellerShare.tel}
                </Link>
              ),
            },
            { label: '사업장주소', value: mockSellerShare.address },
          ]}
        />
        <Text color="gray3" size="3">
          부가세법 46조의 2에 따라 매입 세금계산서와 동일하게 매출전표를 세액 공제용으로 사용할 수
          있습니다.
          <br />
          (별도의 세금계산서 발행은 교부하지 않습니다.)
        </Text>
      </div>
    </Dialog>
  );
}
