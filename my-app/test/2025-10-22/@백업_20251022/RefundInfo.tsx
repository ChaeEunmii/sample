import { Fragment } from 'react';
import {
  Section,
  InfoList,
  InfoItem,
  Text,
  Box,
  TitleBar,
  TextButton,
  ButtonArea,
  Button,
} from '@shared/ui';
import { formatNumber } from '@/shared/utils/ui';
import clsx from 'clsx';
import styles from './RefundInfo.module.scss';

/** 환불 항목 서브 필드 */
export interface RefundSubItem {
  id: string;
  label: string;
  price: number;
}

/** 환불 항목 */
export interface RefundInfoItem {
  id: string;
  label: string;
  price: number;
  fields?: RefundSubItem[];
}

/** 총 환불내역 항목 */
export interface RefundTotalItem {
  id: string;
  label: string;
  price?: number;
  point?: number;
  fields?: { label: string; content: string }[];
}

/** 추가 결제정보 상세 항목 */
export interface PaymentDetail {
  title?: string;
  content?: string;
  desc?: string; //content 부가정보
  info?: string;
}
/** 추가 결제정보 */
export interface PaymentInfoItem {
  label: string;
  price?: number;
  detail?: PaymentDetail | PaymentDetail[];
}

export interface RefundInfoData {
  refundItems?: RefundInfoItem[];
  refundTotals?: RefundTotalItem[];
  totalAmount?: number; // 총 환불금액 직접 지정시
  // 환불 계좌 안내
  refundAccount?: {
    account?: string;
    name?: string;
  };
  // 추가 결제정보
  paymentItems?: PaymentInfoItem[];
  paymentTotalAmount?: number; // 총 결제 금액
}

export interface RefundInfoProps {
  /** 환불 전체 데이터 */
  data?: RefundInfoData;
  /** Section 컴퍼넌트 variant 변경 시 */
  variant?: 'collapse' | 'normal';
  /** 타이틀 변경 시 */
  title?: string;
  /** 총 환불금액 타이틀 변경 시 */
  totalTitle?: string;
  /** 내부 여백 스타일 초기화 여부 */
  noPadding?: boolean;
  /** 상단보더 숨김 여부 */
  hideBorderTop?: boolean;
  /** 추가적인 클래스 이름 */
  className?: string;
  /** 환불예정일 안내 숨김 여부 */
  hideRefundExpectInfo?: boolean;
}

export const RefundInfo = ({
  data,
  variant = 'collapse',
  title = '환불 정보',
  totalTitle = '총 환불금액',
  noPadding,
  hideBorderTop,
  className,
  hideRefundExpectInfo,
}: RefundInfoProps) => {
  const refundItems = data?.refundItems;
  const refundTotals = data?.refundTotals;
  const totalAmount = data?.totalAmount;
  const refundAccount = data?.refundAccount;
  const paymentItems = data?.paymentItems;
  const paymentTotalAmount = data?.paymentTotalAmount;

  const hasItems = Array.isArray(refundItems) && refundItems.length > 0;

  // 총 환불 금액 계산
  const totalRefundAmount =
    typeof totalAmount === 'number'
      ? totalAmount
      : (refundItems?.reduce((acc, item) => acc + item.price, 0) ?? 0);

  /** 공통 항목 렌더링 함수 */
  const renderInfoItem = (item: PaymentInfoItem, idx: number) => {
    const value = item.price !== undefined ? `${formatNumber(item.price)}원` : '-';

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

  return (
    <Section
      title={title}
      variant={variant}
      level="1"
      flush={!noPadding}
      borderTop={!hideBorderTop}
      defaultOpen
      className={clsx(styles.section, noPadding && styles.noPadding, className)}
    >
      {/* 환불 항목 리스트 */}
      {hasItems && (
        <InfoList variant="between" gap="row8">
          {refundItems.map((item) => (
            <Fragment key={item.id}>
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
              {item.fields?.map((field) => (
                <InfoItem
                  key={field.id}
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
      )}

      {/* 총 환불 금액 영역 */}
      <div className={styles.bottom}>
        <div className={styles.total}>
          <InfoList variant="between" gap="row8">
            <InfoItem
              title={
                <Text as="strong" size="5" weight="semibold" color="primary" indent>
                  {totalTitle}
                </Text>
              }
              content={
                <Text as="em" size="7" weight="bold" color="primary" indent>
                  {formatNumber(totalRefundAmount)}원
                </Text>
              }
            />
          </InfoList>
        </div>
        {/* 환불 수단별 금액 + 예정일 안내 */}
        {refundTotals && refundTotals.length > 0 && (
          <div className={styles.desc}>
            <InfoList variant="between" gap="row8">
              {refundTotals.map((item) => (
                <Fragment key={item.id}>
                  <InfoItem
                    title={
                      <Text as="strong" size="5" weight="regular" color="gray2" indent>
                        {item.label}
                      </Text>
                    }
                    content={
                      <Text size="5" weight="medium" indent>
                        {item.price && <>{formatNumber(item.price)}원</>}
                        {item.point && <>{formatNumber(item.point)}P</>}
                      </Text>
                    }
                  />
                  {item.fields?.map((field, idx) => (
                    <InfoItem
                      key={`${item.id}-field-${idx}`}
                      title={
                        <Text as="strong" size="4" weight="regular" color="gray3" indent>
                          - {field.label}
                        </Text>
                      }
                      content={
                        <Text size="4" weight="regular" color="gray3" indent>
                          {field.content}
                        </Text>
                      }
                    />
                  ))}
                </Fragment>
              ))}
              {/* 환불예정일 안내문구 */}
              {!hideRefundExpectInfo && (
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
              )}
            </InfoList>
          </div>
        )}
        {/* 환불 계좌 안내 */}
        {refundAccount && (
          <>
            <TitleBar type="docs" title="환불 계좌 안내" level="2" className="ncp-mt-l" />
            <Box margin="0" size="3" className={styles.box}>
              <div className={styles.infoTop}>
                <Text size="5" weight="semibold" color="point" className={styles.account}>
                  {refundAccount.account} {refundAccount.name}
                </Text>
                <TextButton variant="underline" color="gray3" size="1" className={styles.changeBtn}>
                  변경
                </TextButton>
              </div>

              <Text size="3" color="gray3">
                부분환불/결제 월이 지난 경우, 등록한 환불계좌로 환불됩니다.
              </Text>
            </Box>
          </>
        )}
        {/* 추가 결제 정보 */}
        {paymentItems && paymentItems.length > 0 && (
          <>
            <TitleBar type="docs" title="추가 결제 정보" level="2" className="ncp-mt-l" />
            {/* 추가 결제정보 항목리스트 */}
            {paymentItems.map(renderInfoItem)}
            <div className={styles.paymentTotal}>
              {/* 총 결제 금액 */}
              {paymentTotalAmount && (
                <InfoList variant="between" gap="row8">
                  <InfoItem
                    title={
                      <Text as="strong" size="5" weight="semibold" color="primary" indent>
                        총 결제 금액
                      </Text>
                    }
                    content={
                      <Text as="em" size="7" weight="bold" color="primary" indent>
                        {formatNumber(paymentTotalAmount)}원
                      </Text>
                    }
                  />
                </InfoList>
              )}
              <ButtonArea margin="2">
                <Button>영수증 보기</Button>
              </ButtonArea>
            </div>
          </>
        )}
      </div>
    </Section>
  );
};
