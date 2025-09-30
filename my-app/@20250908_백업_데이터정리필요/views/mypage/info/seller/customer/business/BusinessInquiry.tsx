'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { FormArea, FormItem, Input, Select, ButtonArea, Button, Textarea } from '@shared/ui';
import styles from './BusinessInquiry.module.scss';

// 문의유형 옵션
const inquiryOptions = [
  { label: '입점문의', value: 'option1' },
  { label: '콘텐츠 및 마케팅 제휴', value: 'option2' },
  { label: '기타 B2B 문의', value: 'option3' },
];

// 카테고리 옵션
const categoryOptions = [
  { label: '뷰티', value: 'option1' },
  { label: '명품/ACC', value: 'option2' },
  { label: '패션', value: 'option3' },
  { label: '아동/스포츠', value: 'option4' },
  { label: '리빙', value: 'option5' },
  { label: '식품', value: 'option6' },
  { label: '기타', value: 'option7' },
  { label: '비즈니스 제휴', value: 'option8' },
];

// 세부 카테고리 옵션
const categoryDetailOptions = [
  { label: '세부 카테고리 1', value: 'option1' },
  { label: '세부 카테고리 2', value: 'option2' },
];

export default function BusinessInquiry() {
  const [inquiry, setInquiry] = useState(''); // 문의 유형
  const [category, setCategory] = useState(''); // 카테고리 선택
  const [categoryDetail, setCategoryDetail] = useState(''); // 세부 카테고리 선택

  return (
    <Container showBack title="비즈니스 문의하기">
      <Contents className={styles.layout}>
        <FormArea type="vertical">
          <FormItem label="문의 유형" required>
            <Select
              placeholder="문의 유형을 선택해 주세요."
              options={inquiryOptions}
              value={inquiry}
              onChange={setInquiry}
              size="large"
            />
          </FormItem>
          <FormItem label="카테고리 선택" required>
            <Select
              placeholder="카테고리를 선택해 주세요."
              options={categoryOptions}
              value={category}
              onChange={(val) => {
                setCategory(val);
                setCategoryDetail(''); // 카테고리 바뀔 때 세부 카테고리 초기화
              }}
              size="large"
            />
            <Select
              placeholder="세부 카테고리를 선택해 주세요."
              options={categoryDetailOptions}
              value={categoryDetail}
              onChange={setCategoryDetail}
              size="large"
              className="ncp-mt-xs"
              disabled={!category} // 카테고리 없으면 비활성화
            />
          </FormItem>
          <FormItem label="문의내용" required>
            <Textarea
              placeholder="문의할 내용을 입력해 주세요. 질문 내용을 구체적으로 입력해주시면 정확하고 빠른 답변에 도움이 돼요."
              maxLength={500}
            />
          </FormItem>
          <FormItem label="회사명" required>
            <Input size="large" placeholder="회사명을 입력해 주세요." />
          </FormItem>
          <FormItem label="브랜드명" required>
            <Input size="large" placeholder="브랜드명을 입력해 주세요." />
          </FormItem>
          <FormItem label="홈페이지 주소">
            <Input size="large" placeholder="홈페이지 주소를 입력해 주세요." />
          </FormItem>
          <FormItem label="담당자명" required>
            <Input size="large" placeholder="담당자명을 입력해 주세요." />
          </FormItem>
          <FormItem label="전화번호" required>
            <Input
              type="number"
              size="large"
              placeholder="전화번호를 입력해 주세요.(숫자만 입력)"
            />
          </FormItem>
          <FormItem label="이메일" required>
            <Input type="email" size="large" placeholder="이메일을 입력해 주세요." />
          </FormItem>
        </FormArea>
        <ButtonArea>
          <Button variant="primary" size="large">
            문의하기
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
