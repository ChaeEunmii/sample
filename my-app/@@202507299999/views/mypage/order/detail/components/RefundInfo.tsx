import { Fragment } from 'react';
import { Section, InfoList, InfoItem, Text } from '@shared/ui';
import { formatNumber } from '@/shared/utils/ui';
import clsx from 'clsx';
import styles from './RefundInfo.module.scss';

/** 환불 항목 서브 필드 */
export interface RefundSubItem {
  label: string;
  price: number;
}

/** 환불 항목 */
export interface RefundInfoItem {
  label: string;
  price: number;
  fields?: RefundSubItem[];
}

/** 총 환불내역 항목 */
export interface RefundTotalItem {
  label: string;
  price: number;
}

interface RefundInfoProps {
  /** 환불 전체 데이터 */
  data: {
    refundItems: RefundInfoItem[];
    refundTotals?: RefundTotalItem[];
  };
  /** Section 컴퍼넌트 variant 변경 시 */
  variant?: 'collapse' | 'normal';
  /** 타이틀 변경 시 */
  title?: string;
  /** 총 환불금액 타이틀 변경 시 */
  totalTitle?: string;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const RefundInfo = ({
  variant = 'collapse',
  title = '환불 정보',
  totalTitle = '총 환불금액',
  data,
  className,
}: RefundInfoProps) => {
  const { refundItems, refundTotals } = data;

  // 총 환불 금액 계산
  const totalRefundAmount = refundItems.reduce((acc, item) => {
    const itemTotal = item.price;
    const subTotal = item.fields?.reduce((subAcc, field) => subAcc + field.price, 0) || 0;
    return acc + itemTotal + subTotal;
  }, 0);

  return (
    <Section
      title={title}
      variant={variant}
      level="1"
      flush
      borderTop
      className={clsx(styles.section, className)}
    >
      {/* 환불 항목 리스트 */}
      <InfoList variant="between" gap="row8">
        {refundItems.map((item, idx) => (
          <Fragment key={idx}>
            <InfoItem
              title={
                <Text as="strong" size="5" weight="regular" color="gray2" indent>
                  {item.label}
                </Text>
              }
              content={
                <Text size="5" weight="medium" indent>
                  {formatNumber(item.price)}원
                </Text>
              }
            />
            {item.fields?.map((field, fieldIdx) => (
              <InfoItem
                key={`${idx}-${fieldIdx}`}
                title={
                  <Text as="strong" size="4" weight="regular" color="gray3" indent>
                    - {field.label}
                  </Text>
                }
                content={
                  <Text size="4" weight="regular" color="gray3" indent>
                    {formatNumber(field.price)}원
                  </Text>
                }
              />
            ))}
          </Fragment>
        ))}
      </InfoList>

      {/* 총 환불 금액 영역 */}
      <div className={styles.bottom}>
        <div className={styles.total}>
          <InfoList variant="between" gap="row8">
            <InfoItem
              title={
                <Text as="strong" size="5" weight="semibold" color="gray1" indent>
                  {totalTitle}
                </Text>
              }
              content={
                <Text as="em" size="7" weight="bold" indent>
                  {formatNumber(totalRefundAmount)}원
                </Text>
              }
            />
          </InfoList>
        </div>

        {/* 환불 수단별 금액 + 예정일 안내 */}
        {refundTotals && (
          <div className={styles.desc}>
            <InfoList variant="between" gap="row8">
              {refundTotals.map((item, idx) => (
                <InfoItem
                  key={idx}
                  title={
                    <Text as="strong" size="5" weight="regular" color="gray2" indent>
                      {item.label}
                    </Text>
                  }
                  content={
                    <Text size="5" weight="medium" indent>
                      {formatNumber(item.price)}원
                    </Text>
                  }
                />
              ))}
              <InfoItem
                title={
                  <Text as="strong" size="5" weight="regular" color="gray2" indent>
                    환불예정일
                  </Text>
                }
                content={
                  <Text size="5" weight="medium" indent>
                    환불 승인 후 최대 7 영업일 소요
                  </Text>
                }
              />
            </InfoList>
          </div>
        )}
      </div>
    </Section>
  );
};
