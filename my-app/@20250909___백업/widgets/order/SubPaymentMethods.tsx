'use client';

import { useState } from 'react';
import { formatNumber, formatPrice } from '@/shared/utils/ui';
import { Text, Button, FormArea, FormItem, Input } from '@shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import styles from './SubPaymentMethods.module.scss';

// 임시 데이터
import { mockSubPayment } from '@/mocks/order';

// 보조결제수단 타입별 ID
type PaymentId = 'moeny' | 'rsvp' | 'hpoint' | 'deposit';

// 타입별 포인트 최소 금액 보유시, 해당 영역노출
const minimumPointMap: Record<PaymentId, number> = {
  moeny: 1000,
  rsvp: 500,
  hpoint: 2000,
  deposit: 0,
};

// 보조결제수단 타입
const subPaymentType: { id: PaymentId; title: string; point: number }[] = [
  {
    id: 'moeny',
    title: '더머니',
    point: mockSubPayment[0].point,
  },
  {
    id: 'rsvp',
    title: 'RSVP point',
    point: mockSubPayment[1].point,
  },
  {
    id: 'hpoint',
    title: 'H.point',
    point: mockSubPayment[2].point,
  },
  {
    id: 'deposit',
    title: '예치금',
    point: mockSubPayment[3].point,
  },
];

interface SubPaymentMethodsProps {
  allowedIds?: PaymentId[];
  /** Section 컴포넌트 스타일(기본: collapse) */
  sectionVariant?: 'collapse' | 'normal' | 'section';
  /** suffix 사용 여부(기본: false) */
  hideSuffix?: boolean;
}

export const SubPaymentMethods = ({
  allowedIds,
  sectionVariant = 'collapse',
  hideSuffix = false,
}: SubPaymentMethodsProps) => {
  // 상태 관리
  const [values, setValues] = useState<Record<string, number | ''>>({});
  const [disabledMap, setDisabledMap] = useState<Record<string, boolean>>({});

  // allowedIds가 주어지면 해당 ID만 필터링, 없으면 전체 노출
  const filteredList =
    allowedIds && allowedIds.length > 0
      ? subPaymentType.filter((item) => allowedIds.includes(item.id))
      : subPaymentType;

  /**
   * 인풋 값 변경 핸들러
   * - 숫자만 입력 허용
   * - 값이 최대 포인트 이상이면 버튼 비활성화
   * - 값이 비어있으면 버튼 활성화
   */
  const handleInputChange = (id: string, value: string, maxPoint: number) => {
    const onlyNum = Number(value.replace(/[^0-9]/g, ''));

    setValues((prev) => ({
      ...prev,
      [id]: value === '' ? '' : onlyNum,
    }));

    setDisabledMap((prev) => ({
      ...prev,
      [id]: onlyNum >= maxPoint,
    }));
  };

  /**
   * 전액 사용 버튼 클릭 핸들러
   * - 입력 값을 최대 포인트로 세팅
   * - 버튼 비활성화 처리
   */
  const handleUseAll = (id: string, point: number) => {
    setValues((prev) => ({ ...prev, [id]: point }));
    setDisabledMap((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <Section
        title="포인트 사용"
        suffix={
          !hideSuffix && (
            <Text as="span" size="5" weight="medium">
              142,345
            </Text>
          )
        }
        variant={sectionVariant}
        defaultOpen
      >
        <FormArea type="vertical">
          {filteredList
            .filter((type) => type.point >= (minimumPointMap[type.id] ?? 0))
            .map((type) => (
              <FormItem
                key={type.id}
                label={type.title}
                suffix={
                  <Text as="span" size="4" color="gray2">
                    {type.id === 'deposit'
                      ? formatPrice(type.point)
                      : formatNumber(type.point) + 'P'}
                  </Text>
                }
                className={styles.stack}
              >
                <Input
                  type="text"
                  placeholder="0"
                  size="large"
                  value={
                    values[type.id] !== undefined && values[type.id] !== ''
                      ? formatNumber(values[type.id] as number)
                      : ''
                  }
                  onChange={(e) => handleInputChange(type.id, e.target.value, type.point)}
                  className={styles.input}
                />
                <Button
                  variant="primary"
                  size="large"
                  onClick={() => handleUseAll(type.id, type.point)}
                  className={styles.formButton}
                  disabled={!!disabledMap[type.id]}
                >
                  전액 사용
                </Button>
              </FormItem>
            ))}
        </FormArea>
      </Section>
    </>
  );
};
SubPaymentMethods.displayName = 'SubPaymentMethods';
