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
} from '@/shared/ui';
import { OrderTopInfo, RefundInfo } from '@/views/mypage/order/detail/components';
import { CostInfoSection, RefundAccountInfo } from '@/views/mypage/claims/components';
import { Container, Contents } from '@widgets/layout/Container';
import { mockCommonOrder } from '@mocks/claims';
import styles from './ReturnApplyStep2.module.scss';

export default function ReturnApplyStep2() {
  // mock 데이터 할당
  const { topInfo, refund, returner } = mockCommonOrder;

  const [selected, setSelected] = useState('');

  return (
    <Container showBack title="반품 접수">
      <Contents className={styles.layout}>
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
                size="large"
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
        {/* 환불 계좌 안내 */}
        <RefundAccountInfo data={returner} />
        {/* 반품 비용 발생 */}
        <CostInfoSection
          title="반품 비용 발생"
          costTitle="위약금"
          cost={123456700}
          info="반품으로 인해 위약금이 발생하였습니다. 위약금은 반품 승인 후 환불되는 금액에서 제외되며, 금액이 부족한 경우 추가 결제가 필요합니다."
        />
        {/* 예상 환불 정보 */}
        <RefundInfo
          title="예상 환불 정보"
          totalTitle="총 예상 환불금액"
          variant="normal"
          data={refund}
        />
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
