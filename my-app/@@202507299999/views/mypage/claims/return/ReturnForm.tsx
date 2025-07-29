'use client';

import { useState } from 'react';
import {
  FormArea,
  FormItem,
  Select,
  Textarea,
  ButtonArea,
  Button,
  ImageUploader,
  Section,
  IconButton,
} from '@/shared/ui';
import {
  OrderTopInfo,
  RefundInfo,
  PaymentInfo,
  OrdererInfo,
} from '@/views/mypage/order/detail/components';
import {
  CostInfoSection,
  CancelReason,
  RefundAccountInfo,
  ReturnReason,
  ReturnStoreBox,
} from '@/views/mypage/claims/components';
import { Container, Contents } from '@widgets/layout/Container';
import { mockCommonOrder } from '@mocks/claims';
import styles from './ReturnForm.module.scss';

export default function ReturnForm() {
  // mock 데이터 할당
  const { topInfo, refund, payment, orderer, returner } = mockCommonOrder;

  const [selected, setSelected] = useState('');

  return (
    <Container showBack title="반품 접수">
      <Contents className={styles.layout}>
        {/* 반품매장 박스 */}
        <ReturnStoreBox />
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 반품 사유 */}
        <Section variant="section" title="반품사유" level="1" marginTop="3">
          <FormArea>
            <FormItem label="제목">
              <Select
                options={[
                  { value: 'option1', label: '포장과 상품이 모두 훼손됨' },
                  { value: 'option2', label: '옵션 2' },
                ]}
                placeholder="반품 사유를 선택해 주세요"
                value={selected}
                onChange={setSelected}
              />
            </FormItem>
            <FormItem label="제목">
              <Textarea placeholder="반품 사유를 입력해주세요." />
            </FormItem>
          </FormArea>
        </Section>
        {/* 이미지 첨부 */}
        <Section variant="section" title="이미지 첨부" level="1" marginTop="3">
          <ImageUploader />
        </Section>
        {/* 배송비 안내 */}
        <CostInfoSection
          title="배송비 안내"
          costTitle="추가 배송비"
          cost={3000}
          info="부분 취소로 무료 배송을 제공드릴 수 없게 되었어요. 추가된 배송비는 취소 후 환불 금액에서
            제외되는 점 양해 부탁드립니다."
          marginTop="2"
        />
        {/* 반품 비용 발생 */}
        <CostInfoSection
          title="반품 비용 발생"
          costTitle="위약금"
          cost={123456700}
          info="반품으로 인해 위약금이 발생하였습니다. 위약금은 반품 승인 후 환불되는 금액에서 제외되며, 금액이 부족한 경우 추가 결제가 필요합니다."
        />
        {/* 반품 사유 */}
        <ReturnReason
          type="return"
          requestedAt="2025.12.25 12:34:56"
          reason="단순변심"
          detailReason="상품이 잘못 들어가 있어요. 다시 바꿔주세요. 오래 기다렸는데 실망스러워요"
          images={[
            '/images/dummy/@sample_delivery.png',
            '/images/dummy/@sample_delivery.png',
            '/images/dummy/@sample_delivery.png',
            '/images/dummy/@sample_delivery.png',
            '/images/dummy/@sample_delivery.png',
          ]}
        />
        {/* 교환 사유 */}
        <ReturnReason
          type="exchange"
          requestedAt="2025.12.25 12:34:56"
          reason="단순변심"
          detailReason="상품이 잘못 들어가 있어요. 다시 바꿔주세요. 오래 기다렸는데 실망스러워요"
          images={[
            '/images/dummy/@sample_delivery.png',
            '/images/dummy/@sample_delivery.png',
            '/images/dummy/@sample_delivery.png',
            '/images/dummy/@sample_delivery.png',
            '/images/dummy/@sample_delivery.png',
          ]}
        />
        {/* 보유 예치금 안내 */}
        <CostInfoSection
          title="보유 예치금 안내"
          costTitle={
            <>
              <span className={styles.hasInfo}>
                예치금
                <IconButton
                  name="info"
                  size="small"
                  aria-label="예치금 안내"
                  className={styles.infoBtn}
                />
              </span>
            </>
          }
          cost={123450}
          info="현대백화점 상품권권은 예치금으로 전환 후 환불됩니다."
        />
        {/* 예상 환불 정보 */}
        <RefundInfo
          title="예상 환불 정보"
          totalTitle="총 예상 환불금액"
          variant="normal"
          data={refund}
        />
        {/* 취소 사유를 입력해주세요 */}
        <CancelReason />
        {/* 환불 계좌 안내 */}
        <RefundAccountInfo data={returner} />
        <RefundAccountInfo data={returner} isEmpty />
        {/* 추가 결제 정보 */}
        <PaymentInfo title="추가 결제 정보" data={payment} />
        {/* 주문자 정보 */}
        <OrdererInfo data={orderer} />
        {/* 하단버튼 영역 */}
        <ButtonArea>
          <Button size="large">이전으로</Button>
          <Button size="large" variant="primary">
            반품 접수
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
