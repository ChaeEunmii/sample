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

// 날짜 키 (결제 | 배송)
type EventKey = 'paid' | 'ship';

// 버튼 액션 종류(주문상세/배송조회/없음)와 그에 대응하는 라벨 매핑
type ActionKind = 'order' | 'track' | null;
const ACTION_LABEL: Record<Exclude<ActionKind, null>, string> = {
  order: '주문상세',
  track: '배송조회',
};

// 상태별 InfoItem 구성: [이벤트키, 타이틀, 액션종류]
const STATUS_CONFIG: Record<RoundStatusCode, Array<[EventKey, string, ActionKind]>> = {
  round_skip: [
    ['paid', '결제 중단', null],
    ['ship', '배송 중단', null],
  ],
  round_cancel: [
    ['paid', '결제 취소', null],
    ['ship', '배송 취소', null],
  ],
  round_completed: [
    ['paid', '결제 완료', 'order'],
    ['ship', '배송 완료', 'track'],
  ],
  round_active: [
    ['paid', '결제 완료', 'order'],
    ['ship', '배송 예정', null],
  ],
  round_unsubscribe: [
    ['paid', '결제 종료', null],
    ['ship', '배송 종료', null],
  ],
  round_waiting: [
    ['paid', '결제 대기', null],
    ['ship', '배송 예정', null],
  ],
};

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
  /** 날짜들을 공통 레코드로 관리 */
  dates: Partial<Record<EventKey, string>>;
}

export type ScheduleBoxProps = {
  /** 데이터 */
  data: ScheduleBoxData;
  /** 추가적인 클래스 */
  className?: string;
  /** 주문상세 버튼 */
  onViewOrder?: (id: string) => void;
  /** 배송조회 버튼 */
  onTrackDelivery?: (id: string) => void;
};

export function ScheduleBox({ data, className, onViewOrder, onTrackDelivery }: ScheduleBoxProps) {
  // status에 해당하는 정보 가져오기
  const meta = RoundStatusMetaMap[data.status];
  if (!meta) return null;

  // 상태 정의 → dates에 값이 있는 행만 추출
  const rows = (STATUS_CONFIG[data.status] ?? [])
    .map(([key, title, action]) => {
      const value = data.dates?.[key];
      if (!value) return null;
      // 액션 핸들러/라벨 간단 매핑
      const onAction =
        action === 'order'
          ? () => onViewOrder?.(data.id)
          : action === 'track'
            ? () => onTrackDelivery?.(data.id)
            : undefined;
      const actionLabel = action ? ACTION_LABEL[action] : undefined;
      return { key, title, value, onAction, actionLabel };
    })
    .filter(Boolean) as Array<{
    key: EventKey;
    title: string;
    value: string;
    onAction?: () => void;
    actionLabel?: string;
  }>;

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
      {/* 상세 정보 리스트 */}
      <InfoList variant="line" gridColumns="auto">
        {rows.map(({ key, title, value, onAction, actionLabel }) => (
          <InfoItem
            key={`${data.id}-${key}-${value}`}
            title={
              <Text size="4" color="gray2" weight="regular">
                {title}
              </Text>
            }
            content={
              <div className={styles.detail}>
                <Text as="span" size="4" color="gray1" weight="regular">
                  {value}
                </Text>
                {actionLabel && onAction && (
                  <TextButton variant="underline" size="1" color="gray3" onClick={onAction}>
                    {actionLabel}
                  </TextButton>
                )}
              </div>
            }
          />
        ))}
      </InfoList>
    </Box>
  );
}
