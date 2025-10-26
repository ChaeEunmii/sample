'use client';

import clsx from 'clsx';
import { Section, Box, TextButton, Text, InfoList, InfoItem, Heading } from '@shared/ui';
import { formatDate } from '@shared/utils/ui';
import styles from './ReceiverInfo.module.scss';

export interface ReceiverInfoData {
  name: string; // 이름
  phone?: string; // 휴대폰번호
  note?: string; // 요청사항
  confirmUntil?: string; // 배송지 확인 및 수락 기간
  message?: string; // 선물메시지
  isRejected?: boolean; // 거절여부
}

interface ReceiverInfoProps {
  /** 섹션 타이틀 텍스트 */
  title?: string;
  /** 리스트 데이터  */
  data?: ReceiverInfoData;
  /** 초기 오픈 여부 (기본 true) */
  defaultOpen?: boolean;
  /** 추가적인 클래스 */
  className?: string;
  /** 주문상세 버튼 핸들러 */
  onViewOrder?: (id: string) => void;
  /** 배송조회 버튼 핸들러 */
  onTrackDelivery?: (id: string) => void;
  /** 하단 슬롯 콘텐츠 (예: 상품목록 등) */
  bottomSlot?: React.ReactNode;
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 마스킹해제버튼 숨김여부 */
  hideMaskingBtn?: boolean;
  /** 거절 문구 교체용 텍스트 */
  rejectedText?: string;
}

export function ReceiverInfo({
  title = '선물 받는 분',
  data,
  defaultOpen = true,
  className,
  bottomSlot,
  hideCollapse = false,
  hideMaskingBtn = false,
  rejectedText = '선물 받는 분이 선물을 거절하였습니다.',
}: ReceiverInfoProps) {
  // 공통 렌더컨텐츠
  const renderContent = (
    <>
      <Box size="3" className={styles.box}>
        <div className={styles.info}>
          <ul className={styles.list}>
            <li>
              <Text as="strong" className={styles.tit}>
                {data?.name}
              </Text>
            </li>
            <li>
              <Text as="span" size="5" color="gray1">
                {data?.phone}
              </Text>
            </li>
          </ul>
          {!hideMaskingBtn && (
            <div className={styles.btns}>
              <TextButton variant="underline" size="1" color="gray3">
                마스킹 해제
              </TextButton>
            </div>
          )}
        </div>
        {/* 거절 상태 */}
        {data?.isRejected && (
          <Text size="4" color="alert" className={styles.reject}>
            {rejectedText}
          </Text>
        )}
        {/* 요청사항 */}
        {data?.note && (
          <InfoList variant="default" className="ncp-mt-x10">
            <InfoItem
              title={<Heading className={styles.tit}>요청사항</Heading>}
              content={
                <Text as="span" size="4" color="gray1">
                  {data.note}
                </Text>
              }
            />
          </InfoList>
        )}
        {/* 배송지 확인 및 수락 기간 */}
        {data?.note && (
          <InfoList variant="default" className="ncp-mt-x10">
            <InfoItem
              title={<Heading className={styles.tit}>배송지 확인 및 수락 기간</Heading>}
              content={
                <Text as="span" size="4" color="gray1">
                  {formatDate(data.confirmUntil)}까지
                </Text>
              }
            />
          </InfoList>
        )}
        {/* 선물 메시지 */}
        {data?.message && (
          <InfoList className="ncp-mt-x10">
            <InfoItem
              title={<Heading className={styles.tit}>선물 메시지</Heading>}
              content={
                <Text as="span" size="4" color="gray1">
                  {data.message}
                </Text>
              }
            />
          </InfoList>
        )}
      </Box>
    </>
  );

  return (
    <>
      <Section
        title={title}
        variant={hideCollapse ? 'normal' : 'collapse'}
        level="1"
        flush
        borderTop
        defaultOpen={defaultOpen}
        className={clsx(styles.section, className)}
      >
        {renderContent}
        {bottomSlot && <div className={styles.bottom}>{bottomSlot}</div>}
      </Section>
    </>
  );
}
