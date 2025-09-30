'use client';

import { Text, Box, Flag, InfoList, InfoItem, TextButton } from '@shared/ui';
import styles from './ScheduleBox.module.scss';
import clsx from 'clsx';

// 회차별 구독 상태코드
export type RoundStatusCode =
  | 'round_skip' // 건너뛰기
  | 'round_cancel' // 취소
  | 'round_completed' // 완료
  | 'round_active' // 진행중
  | 'round_unsubscribe' // 구독 해지
  | 'round_waiting'; // 대기중

// 회차별 구독 정보 (라벨과 플래그 색상)
export const RoundStatusMetaMap = {
  round_skip: { label: '건너뛰기', color: 'gray3' },
  round_cancel: { label: '취소', color: 'red2' },
  round_completed: { label: '완료', color: 'dark' },
  round_active: { label: '진행중', color: 'green3' },
  round_unsubscribe: { label: '해지', color: 'red2' },
  round_waiting: { label: '대기중', color: 'gray4' },
} as const;

// 주문 상태별 플래그 색상 타입 정의 (RoundStatusMetaMap 객체 내 color 필드 타입)
export type FlagColor = (typeof RoundStatusMetaMap)[RoundStatusCode]['color'];

/** 박스 데이터 타입 */
export interface ScheduleBoxData {
  /** 고유 ID */
  id: string;
  /** 회차별 구독 상태 (플래그 표현) */
  status: RoundStatusCode;
  /** 회차별 (현재/전체) */
  round: {
    current: number;
    total: number;
  };
  /** 결제 완료 */
  paidAt?: string;
  /** 배송 예정 */
  scheduledAt?: string;
}

export type ScheduleBoxProps = {
  /** 데이터 */
  data: ScheduleBoxData;
  /** 추가적인 클래스 */
  className?: string;
};

export function ScheduleBox({ data, className }: ScheduleBoxProps) {
  // status에 해당하는 정보 가져오기
  const meta = RoundStatusMetaMap[data.status];

  // 만약 status가 RoundStatusMetaMap에 없으면 렌더링하지 않음
  if (!meta) return null;

  return (
    <Box margin="0" size="3" className={clsx(styles.root, className)}>
      <div className={styles.statusFlag}>
        {/* 플래그 컴포넌트에 라벨과 색상 전달 */}
        <Flag data={{ label: meta.label, color: meta.color }} />
        <ul className={styles.info}>
          <li>{data.round.current}회차</li>
          <li className={styles.total}>총 {data.round.total}회</li>
        </ul>
      </div>
      <InfoList variant="line" gridColumns="auto">
        {data.paidAt && (
          <InfoItem
            title={
              <Text size="4" color="gray2" weight="regular">
                결제 완료
              </Text>
            }
            content={
              <div className={styles.detail}>
                <Text as="span" size="4" color="gray1" weight="regular">
                  {data.paidAt}
                </Text>
                <TextButton variant="underline" size="1" color="gray3">
                  주문상세
                </TextButton>
              </div>
            }
          />
        )}
        {data.scheduledAt && (
          <InfoItem
            title={
              <Text size="4" color="gray2" weight="regular">
                배송 예정
              </Text>
            }
            content={
              <div className={styles.infoCont}>
                <Text as="span" size="4" color="gray1" weight="regular">
                  {data.scheduledAt}
                </Text>
                <TextButton variant="underline" size="1" color="gray3">
                  배송조회
                </TextButton>
              </div>
            }
          />
        )}
      </InfoList>
    </Box>
  );
}
