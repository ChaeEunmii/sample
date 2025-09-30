'use client';

import {
  Section,
  InfoList,
  InfoItem,
  Text,
  ButtonArea,
  Button,
  Stack,
  TextButton,
  TextList,
  Box,
} from '@shared/ui';
import { formatNumber, formatDate } from '@/shared/utils/ui';
import clsx from 'clsx';
import styles from './PaymentInfo.module.scss';

/** 결제 정보 variant 타입 정의 */
export type PaymentInfoVariant = 'contract_pending' | 'contract_done' | 'penalty_only';

/** 항목 데이터 타입 정의 */
export interface PaymentInfoItem {
  label: string;
  price?: number;
  point?: number;
}

/** 결제 정보 데이터 */
export interface PaymentInfoData {
  /** 유형 : 계약금_잔금_대기 / 계약금_잔금_완납 / 취소 후 위약금 발생 시 */
  variant: PaymentInfoVariant;
  /** 항목 리스트 */
  items: PaymentInfoItem[];
  /** 총 결제 금액 */
  totalPrice: number;
  /** 계약금 금액 */
  contractPrice?: number;
  /** 잔금 금액 */
  balancePrice?: number;
  /** 계약금 결제일 */
  contractDate?: string;
  /** 결제 시작일 */
  paymentStartDate?: string;
  /** 결제 마감일*/
  paymentEndDate?: string;
}

/** PaymentInfo 컴포넌트 Props */
export interface PaymentInfoProps {
  /** 결제 정보 데이터 */
  data: PaymentInfoData;
  /** 안내 문구 리스트 */
  notices?: string[];
  /** '자세히' 버튼 클릭 핸들러 */
  onDetailClick?: () => void;
  /** 추가적인 클래스 이름 */
  className?: string;
}

/** 공통 항목 렌더링 함수 */
const renderInfoItem = (item: PaymentInfoItem, idx: number) => {
  const value =
    item.price !== undefined
      ? `${formatNumber(item.price)}원`
      : item.point !== undefined
        ? `${formatNumber(item.point)}P`
        : '-';

  return (
    <InfoItem
      key={`${item.label}-${idx}`}
      title={
        <Text as="strong" size="5" weight="regular" color="gray2" indent>
          {item.label}
        </Text>
      }
      content={
        <Text size="5" weight="medium" indent>
          {value}
        </Text>
      }
    />
  );
};

/** 결제정보 컴포넌트 */
export const PaymentInfo = ({
  data,
  className,
  notices = [
    '결제 마감일이 지나면 자동으로 결제가 취소가 되어 위약금이 발생할 수 있습니다.',
    '위약금 발생 시 결제금액에서 위약금을 제외한 금액이 자동으로 결제하신 결제 수단으로 환불이 진행됩니다.',
    '결제금액은 상담 후 결정되며, 서비스 제공 중 추가금액이 발생할 경우, 잔금의 금액이 변동될 수 있습니다.',
  ],
  onDetailClick,
}: PaymentInfoProps) => {
  const {
    variant,
    items,
    totalPrice,
    contractPrice,
    balancePrice,
    contractDate,
    paymentStartDate,
    paymentEndDate,
  } = data;

  const isContractPending = variant === 'contract_pending';
  const isContractDone = variant === 'contract_done';
  const isPenaltyOnly = variant === 'penalty_only';
  const showReceiptButton = variant !== 'contract_pending';

  return (
    <Section
      title="결제정보"
      variant="collapse"
      level="1"
      flush
      borderTop
      suffix={isContractPending ? '잔금 결제 대기' : isPenaltyOnly ? '위약금 차감/결제' : undefined}
      defaultSuffix={!!(isContractPending || isPenaltyOnly)}
      className={clsx(styles.section, className)}
    >
      {/* 결제 항목 or 위약금 항목 리스트 */}
      <InfoList variant="between" gap="row8">
        {items.map(renderInfoItem)}
      </InfoList>

      {/* 하단 정보 영역 */}
      <div className={styles.bottom}>
        {isContractPending && (
          <>
            {/* 결제 시작일 / 마감일 */}
            <InfoList variant="between" gap="row8">
              {paymentStartDate && (
                <InfoItem
                  title={
                    <Text as="strong" size="5" weight="regular" color="gray2" indent>
                      결제 시작일
                    </Text>
                  }
                  content={
                    <Text size="5" weight="medium" indent>
                      {formatDate(paymentStartDate, 'dot')}
                    </Text>
                  }
                />
              )}
              {paymentEndDate && (
                <InfoItem
                  title={
                    <Text as="strong" size="5" weight="regular" color="gray2" indent>
                      결제 마감일
                    </Text>
                  }
                  content={
                    <Text size="5" weight="medium" indent>
                      {formatDate(paymentEndDate, 'dot')}
                    </Text>
                  }
                />
              )}
            </InfoList>

            {/* 총 결제 금액 */}
            <InfoList variant="between" gap="row8">
              <InfoItem
                title={
                  <Stack>
                    <Text as="strong" size="5" weight="semibold" color="gray1" indent>
                      총 결제 금액
                    </Text>
                    {isContractDone && (
                      <TextButton
                        variant="underline"
                        color="gray3"
                        size="1"
                        onClick={onDetailClick}
                      >
                        자세히
                      </TextButton>
                    )}
                  </Stack>
                }
                content={
                  <Text as="em" size="7" weight="bold" indent>
                    {formatNumber(totalPrice)}원
                  </Text>
                }
              />
            </InfoList>

            {/* 계약금 / 잔금 박스 */}
            <Box className={styles.box}>
              <InfoList variant="between" gap="row8">
                <InfoItem
                  title={
                    <>
                      <Text
                        as="strong"
                        size="5"
                        weight="regular"
                        indent
                        className={styles.titleLine}
                      >
                        계약금
                      </Text>
                      {contractDate && (
                        <Text as="span" size="3" weight="regular">
                          {formatDate(contractDate, 'dot')} 결제
                        </Text>
                      )}
                    </>
                  }
                  content={
                    <Text as="em" size="5" weight="medium" indent>
                      {formatNumber(contractPrice ?? 0)}원
                    </Text>
                  }
                />
                <InfoItem
                  title={
                    <Text as="strong" size="5" weight="semibold" color="point" indent>
                      잔금
                    </Text>
                  }
                  content={
                    <Text as="em" size="7" weight="bold" color="point" indent>
                      {formatNumber(balancePrice ?? 0)}원
                    </Text>
                  }
                />
              </InfoList>
            </Box>

            {/* 안내 문구 */}
            <TextList data={notices} variant="info" className="ncp-mt-s" />
          </>
        )}

        {/* contract 외 케이스 총 결제 금액 (가장 아래) */}
        {!isContractPending && (
          <InfoList variant="between" gap="row8">
            <InfoItem
              title={
                <Stack>
                  <Text as="strong" size="5" weight="semibold" color="gray1" indent>
                    총 결제 금액
                  </Text>
                  {isContractDone && (
                    <TextButton variant="underline" color="gray3" size="1" onClick={onDetailClick}>
                      자세히
                    </TextButton>
                  )}
                </Stack>
              }
              content={
                <Text as="em" size="7" weight="bold" indent>
                  {formatNumber(totalPrice)}원
                </Text>
              }
            />
          </InfoList>
        )}
      </div>

      {/* 하단 공통 버튼 */}
      {showReceiptButton && (
        <ButtonArea margin="2">
          <Button>영수증 보기</Button>
        </ButtonArea>
      )}
    </Section>
  );
};
