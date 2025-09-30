import React from 'react';
import { useRouter } from 'next/navigation';
// 컴포넌트
import { Countdown, Button } from '@shared/ui';
import { ProdCardList, ProdCardItemProps } from './ProdCardList';
// 유틸
import { toDate } from '@shared/utils/ui';
// 스타일
import styles from './ProdCountList.module.scss';

export type ProdCountItemProps = Omit<
  ProdCardItemProps,
  'emblem' | 'badge' | 'button' | 'isPaused' | 'isSoldOut'
> & {
  /** 카운트다운 종료일 (period 없이 카운트다운만 표시할 때) */
  countdown?: Date | string;
  /** 상품 전시기간 (조건부 버튼 로직 사용시) */
  period?: {
    startDate?: Date | string;
    endDate: Date | string;
  };
};

interface ButtonLabels {
  /** 시작 전 버튼 텍스트 */
  wait?: string;
  /** 진행 중 버튼 텍스트 */
  active?: string;
  /** 종료 후 버튼 텍스트 */
  ended?: string;
}

type ProdStatus = 'wait' | 'active' | 'ended';

interface ProdCountListProps {
  /** 데이터 배열 */
  data: ProdCountItemProps[];
  /** 남은시간 표시 형태 */
  countType?: 'display' | 'inline';
  /** 조건부 버튼 텍스트 (period 있을 때만 사용) */
  buttonLabels?: ButtonLabels;
  /** 시간 카운트를 24시간 기준으로 날짜/시간 전환할 상태 ('wait' | 'active' | 'ended') */
  timeSwitch?: ProdStatus | ProdStatus[];
  /** ProdCardList의 모든 props */
  [key: string]: any;
}

export const ProdCountList = ({
  data,
  countType = 'display',
  buttonLabels = {
    wait: '예정',
    active: '진행중',
    ended: '종료',
  },
  timeSwitch,
  ...prodCardListProps
}: ProdCountListProps) => {
  const router = useRouter();
  const now = new Date();

  const dataWithTime: ProdCardItemProps[] = data.map((item) => {
    const variant = countType === 'display' ? 'display1' : 'inline';
    const { period, countdown, href, ...rest } = item;

    let finHref = href;
    let label = buttonLabels.active;
    let disabled = false;
    let endDate = countdown;
    let currentStatus: 'wait' | 'active' | 'ended' = 'active';

    // period가 있는 경우 조건부 버튼 로직 적용
    if (period) {
      const startDate = period.startDate ? toDate(period.startDate) : null;
      const periodEndDate = toDate(period.endDate);
      endDate = period.endDate;

      if (now > periodEndDate) {
        label = buttonLabels.ended;
        finHref = undefined;
        disabled = true;
        currentStatus = 'ended';
      } else if (!startDate || now < startDate) {
        label = buttonLabels.wait;
        currentStatus = 'wait';
      } else {
        label = buttonLabels.active;
        currentStatus = 'active';
      }
    }

    // timeSwitch 옵션에 따른 표시 제어
    let showDday = true;
    let showCount = true;
    const countArray = Array.isArray(timeSwitch) ? timeSwitch : timeSwitch ? [timeSwitch] : [];

    if (countArray?.includes(currentStatus)) {
      const timeDiff = new Date(endDate!).getTime() - now.getTime();
      const hoursLeft = timeDiff / (1000 * 60 * 60);

      if (hoursLeft > 24) {
        showCount = false;
      } else {
        showDday = false;
      }
    }

    return {
      ...rest,
      href: finHref,
      flagSlot: (
        <Countdown
          endDate={endDate!}
          showDday={showDday}
          showCount={showCount}
          variant={variant}
          className={styles.countdown}
        />
      ),
      ...(period && {
        buttonSlot: (
          <div className={styles.buttons}>
            <Button
              variant="tertiary"
              disabled={disabled}
              onClick={() => finHref && router.push(finHref)}
            >
              {label}
            </Button>
          </div>
        ),
      }),
    };
  });

  return <ProdCardList {...prodCardListProps} data={dataWithTime} />;
};

ProdCountList.displayName = 'ProdCountList';
