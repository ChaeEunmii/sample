import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, Text, Line } from '@shared/ui';
import { ReceiptInfoSection } from '@/views/mypage/order/receipt/components/ReceiptInfoSection';
import { formatDate, formatPrice } from '@shared/utils/ui';
import styles from './OrderReceipt.module.scss';
import {
  mockOrderInfo,
  mockPaymentGroups,
  mockTransactionGroups,
  mockSummary,
} from '@mocks/myorder';

export default function OrderReceipt() {
  return (
    <Container showBack title="영수증">
      <Contents className={styles.layout}>
        {/* 주문정보 */}
        <ReceiptInfoSection
          title="주문정보"
          items={[
            { label: '주문 하시는 분', value: mockOrderInfo.customerName },
            { label: '회원ID', value: mockOrderInfo.userId },
          ]}
        />
        {/* 결제정보 */}
        <ReceiptInfoSection
          title="결제정보"
          groups={mockPaymentGroups.map((g) => [
            ...(g.cardNumber ? [{ label: '주문번호', value: g.orderNumber }] : []),
            { label: '결제수단', value: g.method },
            ...(g.cardNumber ? [{ label: '카드번호', value: g.cardNumber }] : []),
            ...(g.approvalNumber ? [{ label: '승인번호', value: g.approvalNumber }] : []),
            { label: '결제금액', value: `${formatPrice(g.amount)}` },
          ])}
          bottomSlot={
            <>
              <ButtonArea margin="1">
                <Button>영수증 인쇄</Button>
              </ButtonArea>
            </>
          }
        />
        {/* 거래내역 상세 */}
        <ReceiptInfoSection
          title="거래내역 상세"
          groups={mockTransactionGroups.map((item) => [
            { label: '거래일자', value: `${formatDate(item.date, 'dot')}` },
            { label: '품목', value: item.product },
            { label: '공급가액', value: `${formatPrice(item.supplyPrice)}` },
            { label: '세액', value: `${formatPrice(item.tax)}` },
            { label: '수량', value: `${item.quantity}개` },
            { label: '합계', value: `${formatPrice(item.total)}` },
          ])}
        />
        {/* 금액 합계 */}
        <ReceiptInfoSection
          title="금액 합계"
          items={[
            { label: '면세물품가액', value: `${formatPrice(mockSummary.dutyFreeValue)}` },
            { label: '과세물품가액', value: `${formatPrice(mockSummary.taxableValue)}` },
            { label: '부가세', value: `${formatPrice(mockSummary.vat)}` },
            { label: 'H.Point 사용', value: `${formatPrice(mockSummary.hPointUsed)}` },
            { label: '더머니 사용', value: `${formatPrice(mockSummary.theMoneyUsed)}` },
            { label: 'RSVP 사용', value: `${formatPrice(mockSummary.rsvpUsed)}` },
            { label: '배송료', value: `${formatPrice(mockSummary.shippingFee)}` },
            { label: '총 합계', value: `${formatPrice(mockSummary.totalAmount)}`, highlight: true },
          ]}
        />
        <div className={styles.infoWrap}>
          <Text color="gray3" size="3">
            본 영수증은 매입세액공제용도로 사용이 불가하며, 신용카드, 현금 영수증 전표가 필요하신
            경우, 이 영수증에서 영수증 인쇄 버튼을 눌러 각각 인쇄를 해주세요.
          </Text>
          <Line margin="6" color="bg2" />
          <ul className={styles.infos}>
            <li>(주)현대백화점 대표 정지선, 정지영(인)</li>
            <li>사업자등록번호 211-87-21455</li>
            <li>주소 서울시 강남구 테헤란로 98길 12</li>
            <li>업태 소매업</li>
            <li>종목 백화점</li>
          </ul>
        </div>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          인쇄하기
        </Button>
      </ButtonArea>
    </Container>
  );
}
