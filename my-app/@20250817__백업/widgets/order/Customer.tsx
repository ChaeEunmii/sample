'use client';
import { useState } from 'react';
import { Button, FormArea, FormItem, Input, Text } from '@/shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import styles from './Customer.module.scss';

interface CustomerInfoProps {
  type?: 'torder';
  title?: string;
  /** Section 컴포넌트 스타일(기본: collapse) */
  sectionVariant?: 'collapse' | 'normal' | 'section';
  /** suffix 사용 여부(기본: false) */
  hideSuffix?: boolean;
}

export const CustomerInfo = ({
  type,
  title,
  sectionVariant = 'collapse',
  hideSuffix = false,
}: CustomerInfoProps) => {
  // 상태 관리
  const [nameValue, setNameValue] = useState(type === 'torder' ? '김현대' : '김*대'); // 이름
  const [phoneValue, setPhoneValue] = useState(
    type === 'torder' ? '010-1234-5678' : '010-****-5678'
  ); // 전화번호

  return (
    <>
      <Section
        title={title ? title : '주문자 정보'}
        suffix={
          !hideSuffix && (
            <>
              <Text as="span" size="5">
                김*대
              </Text>
              <Text as="span" size="5">
                010-****-5678
              </Text>
            </>
          )
        }
        variant={sectionVariant}
        className={styles.customer}
      >
        <FormArea type="vertical">
          <FormItem label="이름" error="이름을 입력해주세요." required className={styles.stack}>
            {/* 에러인 경우 invalid 속성 추가 */}
            <Input
              placeholder="이름을 입력해 주세요"
              size="large"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              className={styles.input}
            />
            {type !== 'torder' && (
              <Button variant="primary" size="large" className={styles.formButton}>
                마스킹 해제
              </Button>
            )}
          </FormItem>
          <FormItem
            label="전화번호"
            error={type === 'torder' ? '전화번호를 입력해주세요.' : undefined}
            required={type === 'torder'}
          >
            <Input
              placeholder="전화번호를 입력해 주세요"
              size="large"
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
              disabled={type !== 'torder'}
            />
          </FormItem>
          {type === 'torder' ? (
            <FormItem label="위치" required>
              <Input size="large" value="압구정본점 88번 테이블" disabled />
            </FormItem>
          ) : (
            <>
              <FormItem label="이메일">
                <Input
                  placeholder="이메일을 입력해 주세요"
                  size="large"
                  defaultValue="hy**dai@hyundai.com"
                  disabled
                />
              </FormItem>
              <FormItem label="회사명">
                <Input placeholder="회사명을 입력해 주세요" size="large" />
              </FormItem>
            </>
          )}
        </FormArea>
      </Section>
    </>
  );
};
CustomerInfo.displayName = 'CustomerInfo';
