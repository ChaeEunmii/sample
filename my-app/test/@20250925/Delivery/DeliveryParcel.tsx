'use client';

import {
  Heading,
  Text,
  TitleArea,
  Icon,
  Box,
  InfoList,
  InfoItem,
  TextButton,
  IconButton,
  Empty,
  IconName,
} from '@shared/ui';
import clsx from 'clsx';
import styles from './DeliveryParcel.module.scss';

/**
 * 택배배송조회 컴퍼넌트
 */

// Step 타입 정의
interface Step {
  title: string; // 단계명 (프로세스 라벨)
  headline: React.ReactNode; // TitleArea
  description?: string; // 보조 설명 (선택)
  iconName?: IconName; // 아이콘명
}

interface HistoryItem {
  place: string[];
  time: string;
  updated?: boolean;
}

export interface DeliveryParcelProps {
  className?: string;
  /** 현재 활성 단계 (0~N) */
  activeStepIndex: number;
  /** 배송업체 */
  carrier?: string;
  /** 배송기사 */
  courier?: string;
  /** 송장번호 */
  invoiceNo?: string;
  /** 배송 이력 */
  history?: HistoryItem[];
  /** 조회 기준 시간 */
  timestamp?: string;
  /** 도착 예정 시간 */
  etaText?: string;
}

export function DeliveryParcel({
  className,
  activeStepIndex,
  carrier,
  courier,
  invoiceNo,
  history,
  timestamp,
  etaText,
}: DeliveryParcelProps) {
  // 단계별 내용
  const steps: Step[] = [
    {
      title: '배송 준비',
      headline: (
        <>
          주문이 접수되어
          <br />
          배송을 준비 중이에요
        </>
      ),
      description: '발송을 준비 중입니다',
      iconName: 'write',
    },
    {
      title: '택배사 전달',
      headline: (
        <>
          주문이
          <br />
          택배사로 전달되었어요
        </>
      ),
      iconName: 'send',
    },
    {
      title: '배송중',
      headline: (
        <>
          {etaText ? (
            <>
              {etaText} 사이에
              <br />
              도착 예정이에요
            </>
          ) : (
            <>배송중입니다.</>
          )}
        </>
      ),
      iconName: 'package',
    },
    {
      title: '배송완료',
      headline: (
        <>
          배송이
          <br />
          완료되었어요
        </>
      ),
      description: `배송 조회 기간이 만료되었어요.\n자세한 사항은 택배사에 문의 부탁드려요`,
      iconName: 'complete',
    },
  ];

  const current = Math.min(Math.max(activeStepIndex, 0), steps.length - 1);
  const list = history ?? [];

  // 박스 노출조건
  const showMetaBox = current !== 0 && [carrier, courier, invoiceNo].some((v) => !!v?.trim());
  // 히스토리 노출조건
  const showHistory = current > 0 && current < steps.length - 1 && list.length > 0;

  return (
    <div className={clsx(styles.root, className)}>
      {/* 상단 TitleArea */}
      <TitleArea
        topSlot={
          <Text size="3" color="gray3" weight="semibold">
            {timestamp}
          </Text>
        }
        title={steps[current].headline}
        className={styles.title}
      />
      {/* 단계 프로세스 */}
      <ul className={styles.process}>
        {steps.map((step, idx) => {
          const isLast = idx === steps.length - 1;
          const isActive = idx === current;
          const isDone = idx < current;
          return (
            <li
              key={idx}
              className={clsx(styles.item, isDone && styles.done, isActive && styles.active)}
              aria-current={isActive ? 'step' : undefined}
            >
              <span className={styles.mark}>
                <Icon name={step.iconName as IconName} className={styles.icon} />
              </span>
              <Heading className={styles.tit}>{step.title}</Heading>
              {!isLast && <Icon name="arrowRight" size="xsmall" className={styles.arrow} />}
            </li>
          );
        })}
      </ul>
      {/* 추가 정보 영역 */}
      {showMetaBox && (
        <Box className="ncp-mt-m">
          <InfoList variant="stacked" gap="row8" gridColumns="auto">
            {carrier && (
              <InfoItem
                title={<Text reading>배송업체</Text>}
                content={
                  <div className={styles.full}>
                    <Text reading>{carrier}</Text>
                    <TextButton variant="underline" size="1" color="gray3">
                      통화하기
                    </TextButton>
                  </div>
                }
              />
            )}
            {courier && (
              <InfoItem
                title={<Text reading>배송기사</Text>}
                content={
                  <div className={styles.full}>
                    <Text reading>{courier}</Text>
                    <TextButton variant="underline" size="1" color="gray3">
                      통화하기
                    </TextButton>
                  </div>
                }
              />
            )}
            {invoiceNo && (
              <InfoItem
                title={<Text reading>송장번호</Text>}
                content={
                  <div className={styles.number}>
                    <Text reading>{invoiceNo}</Text>
                    <IconButton name="copy" size="small" className={styles.copy}>
                      복사하기
                    </IconButton>
                  </div>
                }
              />
            )}
          </InfoList>
        </Box>
      )}
      {/* 보조 설명 (단계별 description 이 필요한 경우) */}
      {steps[current].description && (
        <Empty variant="minDisplay" title={steps[current].description} />
      )}
      {/* 히스토리 영역 */}
      {showHistory && history && (
        <ul className={styles.history}>
          {history.map((h, i) => {
            const isNow = h.updated === true; // updated=true인 항목 체크 표시
            return (
              <li
                key={i}
                className={clsx(styles.historyItem, isNow && styles.updated)}
                aria-current={isNow ? 'true' : undefined}
                data-current={isNow ? 'true' : undefined}
              >
                {isNow && <span aria-label="현재 상태" className={styles.now} />}
                <div className={styles.wrap}>
                  <div className={styles.place}>
                    {h.place.map((part, j) => (
                      <span key={j} className={styles.part}>
                        {part}
                      </span>
                    ))}
                  </div>
                  <span className={styles.time}>{h.time}</span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
