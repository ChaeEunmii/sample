'use client';

import { Fragment } from 'react';
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

/**
 * '결제 정보', '추가 결제정보' 같이 사용하는 컴퍼넌트
 */

/** 결제 정보 variant 타입 정의 */
export type PaymentInfoVariant =
  | 'contract_pending' //결제정보_계약금_잔금
  | 'contract_done' //결제정보_계약금_잔금_완납
  | 'penalty_only' //결제정보_계약금_잔금(위약금차감/결제)
  | 'extra_payment'; //추가 결제정보

/** 상세 항목 타입 */
export interface PaymentDetail {
  title?: string;
  content?: string;
  desc?: string; //content 부가정보
  info?: string;
}

/** 항목 데이터 타입 정의 */
export interface PaymentInfoItem {
  label: string;
  price?: number;
  point?: number;
  detail?: PaymentDetail | PaymentDetail[];
}

/** 결제 정보 데이터 */
export interface PaymentInfoData {
  /** 유형 : 계약금_잔금_대기 / 계약금_잔금_완납 / 취소 후 위약금 발생 시 */
  variant?: PaymentInfoVariant;
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
  /** 승인 일시 (ex: 202512241530) */
  approvedAt?: string;
  /** 승인 금액 */
  approvedAmt?: number;
}

/** PaymentInfo 컴포넌트 Props */
export interface PaymentInfoProps {
  /** 결제 정보 데이터 */
  data: PaymentInfoData;
  /** 안내 문구 리스트 */
  notices?: string[];
  /** '자세히' 버튼 클릭 핸들러 */
  onDetailClick?: () => void;
  /** 타이틀 변경 시 */
  title?: string;
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 영수증보기 숨김 여부 */
  hideReciptBtn?: boolean;
  /** 자세히 버튼 숨김 여부 */
  hideDetailBtn?: boolean;
  /** 기본열림 여부 */
  defaultOpen?: boolean;
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

  const details: PaymentDetail[] = Array.isArray(item.detail)
    ? item.detail
    : item.detail
      ? [item.detail]
      : [];

  return (
    <Fragment key={`item-${idx}-${item.label}`}>
      {/* 각 항목 */}
      <InfoList variant="between" gap="row8" className={styles.infoList}>
        <InfoItem
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
      </InfoList>
      {/* 항목의 상세 정보 */}
      {details.length > 0 && (
        <ul className={styles.fields}>
          {details.map((d, i) => (
            <li key={`detail-${idx}-${i}-${d.title ?? 'no-title'}`} className={styles.detailItem}>
              <div className={styles.fieldWrap}>
                <Text as="strong" size="4" weight="regular" color="gray3" indent>
                  - {d.title}
                </Text>
                <Text as="span" size="4" weight="regular" color="gray3" indent>
                  {d.content}
                </Text>
              </div>
              {d.desc && (
                <div className={styles.detailInfo}>
                  <Text size="3" color="gray3" indent align="right">
                    {d.desc}
                  </Text>
                </div>
              )}
              {d.info && (
                <div className={styles.detailInfo}>
                  <Text as="span" size="3" color="gray3" indent>
                    {d.info}
                  </Text>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
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
  title = '결제정보',
  hideCollapse = false,
  hideReciptBtn = false,
  hideDetailBtn = false,
  defaultOpen = true,
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

  const isContractPending = variant === 'contract_pending'; // 결제정보_계약금_잔금
  const isContractDone = variant === 'contract_done'; // 결제정보_계약금_잔금_완납
  const isPenaltyOnly = variant === 'penalty_only'; // 결제정보_계약금_잔금(위약금차감/결제)
  const isExtraPayment = variant === 'extra_payment'; // 추가 결제정보

  // 영수증보기 버튼 보이는 조건
  const showReceiptButton = !hideReciptBtn && (isContractDone || isPenaltyOnly || isExtraPayment);

  return (
    <Section
      title={title}
      variant={hideCollapse ? 'normal' : 'collapse'}
      level="1"
      flush
      borderTop
      defaultOpen={defaultOpen}
      suffix={isContractPending ? '잔금 결제 대기' : isPenaltyOnly ? '위약금 차감/결제' : undefined}
      defaultSuffix={!!(isContractPending || isPenaltyOnly)}
      className={clsx(styles.section, className)}
    >
      {/* 결제 항목 or 위약금 항목 리스트 */}
      {items.map(renderInfoItem)}

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
                    {!hideDetailBtn && (
                      <>
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
                      </>
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
          <>
            {/* 승인 정보 */}
            <ApprovedInfo data={data} />
            {/* 총 결제 금액 */}
            <InfoList variant="between" gap="row8">
              <InfoItem
                title={
                  <Stack>
                    <Text as="strong" size="5" weight="semibold" color="gray1" indent>
                      총 결제 금액
                    </Text>
                    {!hideDetailBtn && (
                      <>
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
                      </>
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
          </>
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

// 승인 정보 영역
const ApprovedInfo = ({ data }: { data: PaymentInfoData }) => {
  const { approvedAt: at, approvedAmt: amt } = data;
  if (!at && amt == null) return null;
  return (
    <InfoList variant="between" gap="row8" indent className={styles.appr}>
      {at && (
        <InfoItem
          title={
            <Text as="strong" size="5" color="gray2">
              승인일시
            </Text>
          }
          content={
            <Text size="5" weight="medium">
              {formatDate(at, 'dot', false)}
            </Text>
          }
        />
      )}
      {amt != null && (
        <InfoItem
          title={
            <Text as="strong" size="5" weight="semibold" color="primary">
              승인금액
            </Text>
          }
          content={
            <Text size="7" weight="bold" color="primary">
              {formatNumber(amt)}원
            </Text>
          }
        />
      )}
    </InfoList>
  );
};
