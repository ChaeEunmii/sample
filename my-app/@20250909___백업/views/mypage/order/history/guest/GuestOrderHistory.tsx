'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  Text,
  TitleBar,
  RadioGroup,
  TextList,
  FormArea,
  FormItem,
  Input,
  ButtonArea,
  Button,
  Link,
} from '@shared/ui';
import styles from './GuestOrderHistory.module.scss';

export default function GuestOrderHistory() {
  const [isRadio, setIsRadio] = useState('1');

  return (
    <Container showBack title="과거 주문 내역 조회(비로그인)">
      <Contents className={styles.layout}>
        <Text color="gray1" indent reading>
          이전에 더현대닷컴 혹은 현대식품관 to Home에서 로그인 없이 비회원으로 주문하신 고객님께서는
          다음 안내에 따라 비회원 주문을 조회하실 수 있습니다.
        </Text>
        <TitleBar type="docs" level="2" title="Step 1. 조회할 서비스를 선택해 주세요" />
        <RadioGroup
          name="radio1"
          options={[
            {
              label: '더현대닷컴',
              value: '1',
            },
            {
              label: '현대식품관 to Home',
              value: '2',
            },
          ]}
          value={isRadio}
          onChange={(e) => setIsRadio(e.target.value)}
        />
        <TitleBar type="docs" level="2" title="Step 2. 아래의 주문정보를 입력해주세요" />
        {isRadio === '1' && (
          <FormArea>
            <FormItem>
              <Input title="더현대닷컴 주문번호" placeholder="더현대닷컴 주문번호" size="large" />
            </FormItem>
            <FormItem>
              <Input title="고객명" placeholder="고객명" size="large" />
            </FormItem>
            <FormItem>
              <Input
                title="휴대폰번호"
                placeholder="휴대폰번호(“-”를 제외하고 입력해주세요)"
                size="large"
              />
            </FormItem>
          </FormArea>
        )}
        {isRadio === '2' && (
          <FormArea>
            <FormItem>
              <Input title="현대식품관 주문번호" placeholder="현대식품관 주문번호" size="large" />
            </FormItem>
            <FormItem>
              <Input title="고객명" placeholder="고객명" size="large" />
            </FormItem>
            <FormItem>
              <Input
                title="휴대폰번호"
                placeholder="휴대폰번호(“-”를 제외하고 입력해주세요)"
                size="large"
              />
            </FormItem>
          </FormArea>
        )}

        <ButtonArea margin="3">
          <Button variant="primary" size="large">
            주문조회
          </Button>
        </ButtonArea>
        <TextList
          data={[
            '주문번호는 주문 시 발송된 알림톡에서 확인 가능합니다.',
            <>
              알림톡을 삭제, 분실하셨다면 고객센터{' '}
              <Link href="tel:18002233" variant="underline" type="inline" className={styles.call}>
                1800-2233
              </Link>
              으로 문의 주세요.
            </>,
          ]}
          variant="info"
          className="ncp-mt-xl"
        />
      </Contents>
    </Container>
  );
}
