'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Collapse,
  Heading,
  Section,
  Tip,
  Box,
  TextButton,
  Text,
  InfoList,
  InfoItem,
} from '@shared/ui';
import styles from './ReceiverInfo.module.scss';

export interface ReceiverInfoData {
  name: string;
  phone?: string;
  message?: string;
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
}

export function ReceiverInfo({
  title = '선물 받는 분',
  data,
  defaultOpen = true,
  className,
  bottomSlot,
  hideCollapse = false,
}: ReceiverInfoProps) {
  const [tipOpen, setTipOpen] = useState(data?.isRejected); // 팁 열림 여부 상태

  // 공통 렌더컨텐츠
  const renderContent = (
    <>
      <Box size="3" className={styles.box}>
        <div className={styles.info}>
          <ul className={styles.list}>
            <li>
              <span className={styles.tit}>{data?.name}</span>
            </li>
            <li>
              <Text as="span" size="5" color="gray1">
                {data?.phone}
              </Text>
            </li>
          </ul>
          <TextButton variant="underline" size="1" color="gray3" className={styles.maskingBtn}>
            마스킹 해제
          </TextButton>
        </div>
        {/* 스토어픽 선물 메시지 */}
        {data?.message && (
          <InfoList className="ncp-mt-x10">
            <InfoItem
              title={<span className={styles.tit}>선물 메시지</span>}
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
      {!hideCollapse ? (
        <Collapse
          variant="section"
          defaultOpen={defaultOpen}
          marginTop="2"
          className={clsx(styles.collapse, className)}
        >
          <Collapse.Control as="div">
            <div className={clsx(styles.title)}>
              <Heading as="h2" size="6" weight="bold">
                {title}
              </Heading>
              {tipOpen && (
                <span
                  onClick={(e) => e.stopPropagation()}
                  onPointerDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                >
                  <Tip
                    placement="top"
                    arrowPlace="start"
                    onClose={() => {
                      setTipOpen(false);
                    }}
                    className={styles.tip}
                  >
                    선물 받는 분이 선물을 거절하였습니다.
                  </Tip>
                </span>
              )}
            </div>
          </Collapse.Control>
          <Collapse.Content>
            {renderContent}
            {bottomSlot && <div className={styles.bottom}>{bottomSlot}</div>}
          </Collapse.Content>
        </Collapse>
      ) : (
        <Section
          title={title}
          variant="normal"
          flush
          level="1"
          defaultOpen={defaultOpen}
          className={clsx(styles.section, className)}
        >
          {renderContent}
          {bottomSlot && <div className={styles.bottom}>{bottomSlot}</div>}
        </Section>
      )}
    </>
  );
}
