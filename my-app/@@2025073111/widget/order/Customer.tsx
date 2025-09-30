'use client';
import { Button, FormArea, FormItem, Input, Text } from '@/shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import styles from './Customer.module.scss';

interface CustomerInfoProps {
  title?: string;
}

export const CustomerInfo = ({ title }: CustomerInfoProps) => {
  return (
    <>
      <Section
        title={title ? title : '주문자 정보'}
        suffix={
          <>
            <Text as="span" size="5">
              김*대
            </Text>
            <Text as="span" size="5">
              010-****-5678
            </Text>
          </>
        }
        variant="collapse"
        className={styles.customer}
      >
        <FormArea type="vertical">
          <FormItem label="이름" error="이름을 입력해주세요." required className={styles.stack}>
            {/* 에러인 경우 invalid 속성 추가 */}
            <Input
              placeholder="이름을 입력해 주세요"
              size="large"
              value="김*대"
              className={styles.input}
            />
            <Button variant="primary" size="large" className={styles.formButton}>
              마스킹 해제
            </Button>
          </FormItem>
          <FormItem label="전화번호">
            <Input
              placeholder="전화번호를 입력해 주세요"
              size="large"
              value="010-****-5678"
              disabled
            />
          </FormItem>
          <FormItem label="이메일">
            <Input
              placeholder="이메일을 입력해 주세요"
              size="large"
              value="hy**dai@hyundai.com"
              disabled
            />
          </FormItem>
          <FormItem label="회사명">
            <Input placeholder="회사명을 입력해 주세요" size="large" />
          </FormItem>
        </FormArea>
      </Section>
    </>
  );
};
CustomerInfo.displayName = 'CustomerInfo';
