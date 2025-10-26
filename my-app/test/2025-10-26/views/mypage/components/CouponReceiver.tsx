'use client';

import { useState } from 'react';
import {
  Section,
  Box,
  TextButton,
  Text,
  Stack,
  ButtonArea,
  Button,
  TextList,
  Flag,
} from '@shared/ui';
import clsx from 'clsx';
import styles from './CouponReceiver.module.scss';
import { ReceiveCouponList } from '@/views/mypage/components';
import {
  CouponStatus,
  CouponsData,
  isUnselectableStatus,
} from '@/views/mypage/components/ReceiveCouponItem';

export interface CouponReceiverData {
  /** ID */
  id?: string;
  /** 이름 */
  name: string;
  /** 휴대폰 번호 */
  phone: string;
  /** 쿠폰 */
  coupons?: CouponsData[];
}

/** 상태별 개수 계산 + 플래그 생성 */
const summarizeCoupons = (list: CouponsData[]) => {
  const counts: Record<CouponStatus, number> = {
    waiting: 0,
    used: 0,
    expired: 0,
    cancel_apply: 0,
    cancel_completed: 0,
  };
  // 쿠폰 리스트를 돌면서 상태별 쿠폰 개수 집계
  for (const c of list) {
    const s = c.status ?? 'waiting';
    counts[s] += 1;
  }
  // 취소요청/완료 합계
  const cancelSum = counts.cancel_apply + counts.cancel_completed;
  // 상태별 개수 요약 플래그 표시
  const flagData = [
    counts.waiting > 0 && { color: 'gray4' as const, label: `사용대기 ${counts.waiting}` },
    counts.used > 0 && { color: 'dark2' as const, label: `사용완료 ${counts.used}` },
    counts.expired > 0 && { color: 'dark2' as const, label: `기간만료 ${counts.expired}` },
    cancelSum > 0 && { color: 'dark2' as const, label: `취소요청/완료 ${cancelSum}` },
  ].filter(Boolean) as { color: 'gray4' | 'dark2'; label: string }[];

  return { counts, flagData };
};
interface CouponReceiverProps {
  /** 타이틀 */
  title?: string;
  /** 데이터 */
  data: CouponReceiverData[];
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 처음부터 열려 있는지 여부 */
  defaultOpen?: boolean;
  /** 보더 상단처리 여부 */
  borderTop?: boolean;
  /** 쿠폰목록 모드(기본목록, 체크박스선택) */
  mode?: 'default' | 'select';
  /** 추가적인 클래스 */
  className?: string;
  /** 하단 안내문구 숨김 여부 */
  hideInfoTxt?: boolean;
  /** 사이 간격 (32px/24px) */
  gap?: '1' | '2';
}

export const CouponReceiver = ({
  title = '쿠폰 받으시는 분',
  data,
  hideCollapse = false,
  defaultOpen = true,
  borderTop = true,
  mode = 'default',
  className,
  hideInfoTxt = false,
  gap = '1',
}: CouponReceiverProps) => {
  // 쿠폰 체크 상태 관리
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

  // 쿠폰 체크 토글 핸들러
  const handleSelectToggle = (couponId: string | number, isSelected: boolean) => {
    setSelectedIds((prev) => {
      let next = prev;
      // 선택된 상태면, 목록에 없을 때만 추가
      if (isSelected) {
        if (!prev.includes(couponId)) {
          next = [...prev, couponId];
        }
      } else {
        // 선택 해제면, 목록에서 제거
        next = prev.filter((id) => id !== couponId);
      }

      console.log('업데이트된 쿠폰 체크목록:', next);
      // console.log(`쿠폰 체크리스트 ${isSelected ? '추가' : '제거'}:`, couponId);

      return next;
    });
  };

  // 전체 선택 핸들러
  const handleSelectAll = (receivers: CouponReceiverData[]) => {
    const allIds = receivers.flatMap((r) =>
      (r.coupons ?? [])
        .filter((c) => !isUnselectableStatus(c.status, c.due))
        .map((c) => c.id ?? c.number)
    );

    setSelectedIds(allIds);
    console.log('전체 선택된 쿠폰 ID 목록:', allIds);
  };

  // 하단 안내문구 보이는 조건
  const showInfoText = mode !== 'select' && !hideInfoTxt;

  return (
    <Section
      title={title}
      variant={hideCollapse ? 'normal' : 'collapse'}
      level="1"
      flush
      borderTop={borderTop}
      defaultOpen={defaultOpen}
      className={clsx(styles.section, className)}
    >
      <ul className={clsx(styles.list, gap && styles[`gap${gap}`])}>
        {data.map((item, idx) => {
          const key = item.id ?? idx;
          const coupons = item.coupons ?? [];
          const { flagData } = summarizeCoupons(coupons);

          // select모드인데 1개일때
          const isSelectModeSolo = mode === 'select' && data.length === 1;

          return (
            <li key={key} className={clsx(styles.item, isSelectModeSolo && styles.isModeSelect)}>
              <Box size="3" margin="0">
                <Stack type="between" className={styles.top}>
                  {!isSelectModeSolo && (
                    <Text size="6" weight="bold" className={styles.subTitle}>
                      받는분 {idx + 1}
                    </Text>
                  )}
                  <TextButton variant="underline" size="1" color="gray3" className={styles.unmask}>
                    마스킹 해제
                  </TextButton>
                </Stack>
                <div className={styles.content}>
                  <div className={styles.info}>
                    <Text as="span" size="5" weight="semibold" color="primary">
                      {item.name}
                    </Text>
                    <Text as="span" size="5">
                      {item.phone}
                    </Text>
                  </div>
                  {!!coupons.length && (
                    <Text as="span" size="5" color="gray2">
                      쿠폰 {coupons.length}장
                    </Text>
                  )}
                </div>
                {/* 가지고있는 쿠폰들 갯수 정보 플래그들 */}
                {flagData.length > 0 && (
                  <div className={styles.flags}>
                    <Flag data={flagData} />
                  </div>
                )}
              </Box>
              {/* 하단 받은 쿠폰목록 영역 */}
              {!!coupons.length && (
                <div className={styles.bottom}>
                  <ReceiveCouponList
                    mode={mode}
                    coupons={coupons}
                    selection={{
                      selectedIds,
                      onChange: handleSelectToggle,
                    }}
                  />
                  {mode === 'default' && (
                    <ButtonArea margin="1" align="center">
                      <TextButton size="1" suffixIcon="arrowDown" iconSize="xsmall">
                        쿠폰 전체 보기
                      </TextButton>
                    </ButtonArea>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
      {mode === 'select' && (
        <ButtonArea margin="1" align="center">
          <Button onClick={() => handleSelectAll(data)}>전체 취소 선택</Button>
        </ButtonArea>
      )}
      {showInfoText && (
        <div className={styles.infoSec}>
          <TextList
            data={[
              '쿠폰 번호 오른쪽의 복사하기 버튼을 터치하여 쿠폰 번호를 복사할 수 있어요.',
              '복사 후 원하시는 곳에 붙여넣기 하여 공유할 수 있습니다.',
              '복사한 쿠폰 번호는 원치 않는 사람에게 공유되지 않도록 유의해 주세요.',
            ]}
            variant="info"
          />
        </div>
      )}
    </Section>
  );
};
