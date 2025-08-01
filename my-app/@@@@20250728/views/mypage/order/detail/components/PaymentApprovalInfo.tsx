'use client';

import { Fragment } from 'react';
import {
  Section,
  InfoList,
  InfoItem,
  Text,
  ButtonArea,
  Button,
  Icon,
  TextButton,
  Empty,
} from '@shared/ui';
import { formatNumber, formatDate } from '@/shared/utils/ui';
import clsx from 'clsx';
import styles from './PaymentApprovalInfo.module.scss';

/** 결제수단 정보 타입 */
interface PaymentInfoItem {
  label: string;
  price: number;
  detail?: {
    bank: string;
    depositorName: string;
  };
  info?: string;
}

/** 승인내역 정보 타입 */
interface PaymentApprovalItem {
  label: string;
  price: number;
}

interface PaymentApprovalInfoProps {
  /** 결제정보 (예: 무통장입금 등) */
  paymentData?: PaymentInfoItem[];
  /** 결제 승인내역 (예: 포인트, 더머니 등) */
  approvalData?: PaymentApprovalItem[];
  /** 입금 마감일 텍스트(결제 대기중일 때) */
  depositDeadlineText?: string;
  /** 입금 마감일 날짜 */
  depositDate?: string;
  /** '결제수단 변경' 버튼 노출 여부 */
  showChangeButton?: boolean;
  /** 결제 대기 상태 여부 */
  isPending?: boolean;
  /** 추가적인 클래스 이름 */
  className?: string;
  /** '복사하기' 버튼 클릭 시 실행 함수 */
  onCopyClick?: (value: string) => void;
}

export const PaymentApprovalInfo = ({
  paymentData = [],
  approvalData = [],
  depositDeadlineText,
  depositDate,
  showChangeButton,
  isPending,
  className,
  onCopyClick,
}: PaymentApprovalInfoProps) => {
  // 결제수단 렌더링
  const renderPaymentInfo = (item: PaymentInfoItem, idx: number) => (
    <Fragment key={idx}>
      {/* 결제수단 항목 */}
      <InfoList variant="between" gap="row8">
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
      </InfoList>

      {/* 입금 상세 정보 (은행, 입금자명) */}
      {item.detail && (
        <InfoList variant="between" gap="row8">
          <InfoItem
            title={
              <Text as="strong" size="4" weight="regular" color="gray3" indent>
                - {item.detail.bank}
              </Text>
            }
            content={
              <TextButton
                color="gray3"
                size="1"
                suffixIcon="copy"
                variant="bold"
                onClick={
                  onCopyClick
                    ? () => {
                        const text = item.detail!.bank;
                        onCopyClick(text);
                      }
                    : undefined
                }
              >
                복사하기
              </TextButton>
            }
          />
          <InfoItem
            title={
              <Text as="strong" size="4" weight="regular" color="gray3" indent>
                - {item.detail.depositorName}
              </Text>
            }
            content={
              <Text color="point" size="4">
                입금 마감일: {formatDate(depositDate, 'dot')}까지
              </Text>
            }
          />
        </InfoList>
      )}

      {/* 안내 메시지 */}
      {item.info && (
        <div className={styles.caution}>
          <Icon name="caution" size="small" />
          <Text as="span" size="3" color="gray3">
            {item.info}
          </Text>
        </div>
      )}
    </Fragment>
  );

  // 승인내역 렌더링
  const renderApprovalItem = (item: PaymentApprovalItem, idx: number) => (
    <InfoItem
      key={idx}
      title={
        <Text as="strong" size="5" weight="regular" color="gray2">
          {item.label}
        </Text>
      }
      content={
        <Text size="5" weight="medium">
          {formatNumber(item.price)}원
        </Text>
      }
    />
  );

  return (
    <Section
      title="결제수단 & 승인내역"
      variant="collapse"
      level="1"
      flush
      borderTop
      className={clsx(styles.section, className)}
    >
      {/* 결제대기 상태 */}
      {isPending ? (
        <Empty
          title="결제를 기다리고 있습니다."
          desc={
            depositDeadlineText ? (
              <Text as="span" color="point" size="4">
                {depositDeadlineText}
              </Text>
            ) : undefined
          }
        />
      ) : (
        <>
          {/* 결제수단 */}
          {paymentData.map(renderPaymentInfo)}
          {/* 승인내역 */}
          {!!approvalData.length && (
            <InfoList variant="between" gap="row8">
              {approvalData.map(renderApprovalItem)}
            </InfoList>
          )}
        </>
      )}

      {/* 하단 버튼 */}
      {showChangeButton && (
        <ButtonArea margin="2">
          <Button>결제수단 변경</Button>
        </ButtonArea>
      )}
    </Section>
  );
};
