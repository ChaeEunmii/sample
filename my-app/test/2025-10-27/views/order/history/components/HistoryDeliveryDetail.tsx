'use client';

import React from 'react';
import {
  Section,
  Box,
  Text,
  ButtonArea,
  TextButton,
  InfoList,
  InfoItem,
  Heading,
} from '@/shared/ui';
import { formatDate } from '@/shared/utils/ui';
import clsx from 'clsx';
import styles from './HistoryDeliveryDetail.module.scss';

/**
 * 과거주문내역조회 상세
 * @description '배송지', '받으시는 분' 컴퍼넌트
 *
 * 마이페이지-주문/배송에서 사용하는 DeliveryDetail.tsx의 DeliveryDetails 항목 포함
 */

export interface HistoryDeliveryDetailData {
  /** 이름 */
  name: string;
  /** 연락처 (투홈: 주문에 등록된 ASIS 연락처 모두 노출) */
  phone: string | string[];
  /** 추가 연락처 (더현대: ASIS 추가 연락처 표시)*/
  addPhone?: string;
  /** 주소 */
  defaultAddress?: string;
  /** 상세주소 */
  detailedAddress?: string;
  /** 기본배송지 여부 */
  isDefault?: boolean;
  // --- DeliveryDetails --- //
  /** 배송 희망일 */
  hopeDate?: string;
  /** 공동현관 비밀번호 */
  gatePw?: string;
  /** 새벽배송 완료 알림 시점 */
  notifyAt?: string;
  /** 요청사항 */
  note?: string;
  // --- (투홈: ASIS 새벽/택배로 구분하여 노출) --- //
  /** 새벽배송 요청사항 */
  dawnNote?: string;
  /** 택배배송 요청사항 */
  parcelNote?: string;
}

interface HistoryDeliveryDetailProps {
  /** 데이터 */
  data: HistoryDeliveryDetailData;
  /** 타이틀 변경 시 */
  title?: string;
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 기본 열림 여부 */
  defaultOpen?: boolean;
  /** 마스킹해제버튼 숨김여부 */
  hideMaskingBtn?: boolean;
  /** 기본 배송지 여부 */
  isDefaultAddress?: boolean;
  /** 하단 슬롯 */
  bottomSlot?: React.ReactNode;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function HistoryDeliveryDetail({
  data,
  title = '배송지',
  hideCollapse = false,
  defaultOpen = true,
  hideMaskingBtn = false,
  isDefaultAddress = false,
  bottomSlot,
  className,
}: HistoryDeliveryDetailProps) {
  // 배송 정보 항목 리스트 (값이 있을 때만 InfoItem으로 렌더링됨)
  const infoItems = [
    { key: 'hopeDate', title: '배송 희망일', content: formatDate(data.hopeDate, 'dot') },
    { key: 'gatePw', title: '공동현관 비밀번호', content: data.gatePw },
    {
      key: 'notifyAt',
      title: '새벽배송 완료 알림 시점',
      content: data.notifyAt,
    },
    {
      key: 'note',
      title: '요청사항',
      content: data.note?.split('\n').map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          <br />
        </React.Fragment>
      )),
    },
    // 과거주문내역 투홈(ASIS는 새벽/택배로 구분하여 노출)
    {
      key: 'dawnNote',
      title: '새벽배송 요청사항',
      content: data.dawnNote?.split('\n').map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          <br />
        </React.Fragment>
      )),
    },
    {
      key: 'parcelNote',
      title: '택배배송 요청사항',
      content: data.parcelNote?.split('\n').map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          <br />
        </React.Fragment>
      )),
    },
  ];

  return (
    <Section
      title={title}
      variant={hideCollapse ? 'normal' : 'collapse'}
      level="1"
      flush
      borderTop
      defaultOpen={defaultOpen}
      className={clsx(styles.root, className)}
    >
      <Box margin="0" size="3" className={styles.box}>
        <div className={styles.top}>
          <div className={styles.info}>
            <Text as="span" size="5" weight="semibold" color="primary">
              {data.name}
            </Text>
            {(isDefaultAddress || data.isDefault) && (
              <Text as="span" size="3" weight="semibold" color="point">
                기본 배송지
              </Text>
            )}
            {data.phone && (
              <Text as="span" size="5" className={clsx(styles.phone)}>
                {Array.isArray(data.phone) ? data.phone.join(', ') : data.phone}
              </Text>
            )}
          </div>
          {data.addPhone && (
            <InfoList variant="line" margin="0" className={styles.addPhone}>
              <InfoItem
                title={
                  <Heading size="3" color="gray1" weight="regular">
                    추가 연락처
                  </Heading>
                }
                content={
                  <Text size="5" color="gray1">
                    {data.addPhone}
                  </Text>
                }
              />
            </InfoList>
          )}
          {data.defaultAddress && (
            <div className={styles.address}>
              <Text size="4" color="gray2">
                {data.defaultAddress}
              </Text>
              <Text size="4" color="gray2" className={styles.detailedAddress}>
                {data.detailedAddress}
              </Text>
            </div>
          )}
          {!hideMaskingBtn && (
            <ButtonArea align="right" margin="3">
              <TextButton variant="underline" size="1" color="gray3" className={styles.btn}>
                마스킹 해제
              </TextButton>
            </ButtonArea>
          )}
        </div>
        {/* 요청사항 영역 */}
        <InfoList variant="default">
          {infoItems.map(
            ({ key, title, content }) =>
              content && (
                <InfoItem
                  key={key}
                  title={
                    <Heading size="3" weight="semibold" color="black">
                      {title}
                    </Heading>
                  }
                  content={
                    <Text size="4" reading>
                      {content}
                    </Text>
                  }
                />
              )
          )}
        </InfoList>
      </Box>
      {bottomSlot && <div className="ncp-mt-m">{bottomSlot}</div>}
    </Section>
  );
}
