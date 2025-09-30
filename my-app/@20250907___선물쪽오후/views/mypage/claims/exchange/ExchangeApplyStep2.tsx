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
import { OrderTopInfo } from '@/views/mypage/order/detail/components';
import { CostInfoSection } from '@/views/mypage/claims/components';
import { Container, Contents } from '@widgets/layout/Container';
import { mockCommonOrder } from '@mocks/claims';
import styles from './ExchangeApplyStep2.module.scss';

export default function ExchangeApplyStep2() {
  // mock 데이터 가져오기
  const { topInfo } = mockCommonOrder;

  // 교환사유 선택 상태
  const [selected, setSelected] = useState('');

  return (
    <Container showBack title="교환 접수">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} />
        {/* 반품 사유 */}
        <Section variant="section" title="교환사유" level="1" marginTop="4">
          <FormArea>
            <FormItem label="제목">
              <Select
                options={[
                  { value: 'option1', label: '포장과 상품이 모두 훼손됨' },
                  { value: 'option2', label: '옵션 2' },
                ]}
                placeholder="교환 사유를 선택해 주세요"
                value={selected}
                onChange={setSelected}
                size="large"
              />
            </FormItem>
            <FormItem label="제목">
              <Textarea placeholder="교환 사유를 입력해주세요." />
            </FormItem>
          </FormArea>
        </Section>
        {/* 이미지 첨부 */}
        <Section variant="section" title="이미지 첨부" level="1" marginTop="3">
          <ImageUploader />
        </Section>
        {/* 교환 비용 발생 */}
        <CostInfoSection
          title="교환 비용 발생"
          costTitle="교환 배송비"
          cost={6000}
          info="선택하신 교환 사유에 따라 신청하신 상품의 회수와 교환을 위해 추가 배송비의 결제가 필요합니다. 교환 접수를 선택 후 결제 화면에서 교환 배송비를 결제해 주세요."
          marginTop="4"
        />
        {/* 하단버튼 영역 */}
        <ButtonArea>
          <Button size="large">이전으로</Button>
          <Button size="large" variant="primary">
            교환 접수
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
