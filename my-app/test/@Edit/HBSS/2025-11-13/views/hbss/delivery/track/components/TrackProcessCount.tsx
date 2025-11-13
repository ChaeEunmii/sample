'use client';

import React from 'react';
import { Icon, Heading, Text, IconName } from '@shared/ui';
import clsx from 'clsx';
import styles from './TrackProcessCount.module.scss';

/**
 * @description 보내시는 분, 받으시는 분 배송조회 화면에서 사용하는 개수 카운트 가능한 프로세스 컴퍼넌트
 *
 * 보내시는분 - 5개 프로세스
 * 받으시는분 - 4개 프로세스
 */

/** 단계 키 (접수완료 | 배송정보 확인중 | 배송준비중 | 배송진행중 | 배송완료) */
export type StepKey = 'apply' | 'verify' | 'prepare' | 'shipping' | 'complete';

/** 내부 고정 단계 정의 (표시순서 + 라벨/아이콘) */
const STEP_ORDER: StepKey[] = ['apply', 'verify', 'prepare', 'shipping', 'complete'] as const;
// type="sender" 용 (기본)
const STEP_META: Record<StepKey, { title: React.ReactNode; icon: IconName }> = {
  apply: { title: '접수완료', icon: 'write' },
  verify: {
    title: (
      <>
        배송정보
        <br />
        확인중
      </>
    ),
    icon: 'folderBg',
  },
  prepare: {
    title: (
      <>
        배송
        <br />
        준비중
      </>
    ),
    icon: 'packageOpen',
  },
  shipping: {
    title: (
      <>
        배송
        <br />
        진행중
      </>
    ),
    icon: 'package',
  },
  complete: { title: '배송완료', icon: 'complete' },
};
// type="receiver" 용
const RECEIVER_STEP_META: Record<StepKey, { title: React.ReactNode; icon: IconName }> = {
  apply: { title: '접수완료', icon: 'write' },
  verify: {
    title: (
      <>
        배송정보
        <br />
        확인중
      </>
    ),
    icon: 'write',
  },
  prepare: {
    title: (
      <>
        배송
        <br />
        준비중
      </>
    ),
    icon: 'send',
  },
  shipping: {
    title: (
      <>
        배송
        <br />
        진행중
      </>
    ),
    icon: 'package',
  },
  complete: { title: '배송완료', icon: 'complete' },
};

interface TrackProcessCountProps {
  /** 사용타입 (기본 : sender) */
  type?: 'sender' | 'receiver';
  /** 현재 단계 (키) */
  currentKey: StepKey;
  /** 단계별 개수 (없는 키는 0으로 처리) */
  counts: Partial<Record<StepKey, number>>;
  /** 0도 표기할지(기본: true) */
  showZero?: boolean;
  /** margin-block: 32px/32px, 20px/40px) */
  margin?: '1' | '2';
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function TrackProcessCount({
  type = 'sender',
  currentKey,
  counts,
  showZero = false,
  margin = '1',
  className,
}: TrackProcessCountProps) {
  // receiver일 때 apply 제외하여 STEP_ORDER 필터링
  const steps = type === 'receiver' ? STEP_ORDER.filter((key) => key !== 'apply') : STEP_ORDER;
  // currentIdx도 필터링된 steps 기준으로 다시 계산
  const currentIdx = steps.indexOf(currentKey);

  // type에 따른 meta 맵(기본 + receiver override)
  const stepMetaMap = type === 'receiver' ? { ...STEP_META, ...RECEIVER_STEP_META } : STEP_META;

  /** 숫자 표시 포맷 (99+ 처리) */
  const formatCount = (value: number) => (value > 99 ? '99+' : String(value));

  return (
    <div className={clsx(styles.root, margin && styles[`margin${margin}`], className)}>
      <ul className={clsx(styles.process, type && styles[type])} aria-label="배송 단계">
        {steps.map((key, idx) => {
          const meta = stepMetaMap[key];
          const isLast = idx === steps.length - 1;
          const isActive = idx === currentIdx;
          const isDone = idx < currentIdx;
          const count = counts[key] ?? 0;

          return (
            <React.Fragment key={key}>
              <li
                className={clsx(styles.item, isDone && styles.done, isActive && styles.active)}
                aria-current={isActive ? 'step' : undefined}
              >
                <span className={styles.mark}>
                  <Icon name={meta.icon} className={styles.icon} />
                </span>
                <div className={styles.info}>
                  <Heading className={styles.tit}>{meta.title}</Heading>
                  {(showZero || count > 0) && (
                    <Text as="span" color={isActive ? 'primary' : 'gray3'} className={styles.count}>
                      {formatCount(count)}
                    </Text>
                  )}
                </div>
              </li>
              {/* 마지막 단계 뒤에는 화살표 없음 */}
              {!isLast && (
                <li className={styles.arrowItem} aria-hidden="true" role="presentation">
                  <Icon name="arrowRight" size="xsmall" className={styles.arrow} />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
