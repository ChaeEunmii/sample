'use client';

import React from 'react';
import { Icon, Heading, IconName } from '@shared/ui';
import clsx from 'clsx';
import styles from './DeliveryTraceProcess.module.scss';

/**
 * @description 배송조회(L) - 프로세스 표시 컴포넌트
 *
 */

interface Step {
  title: string;
  iconName?: IconName;
}
export const steps: Step[] = [
  { title: '정보확인중', iconName: 'write' },
  { title: '배송준비중', iconName: 'send' },
  { title: '배송진행중', iconName: 'package' },
  { title: '배송완료', iconName: 'complete' },
];

interface DeliveryTraceProcessProps {
  /** 현재 단계 인덱스 (0부터 시작) */
  current: number;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function DeliveryTraceProcess({ current, className }: DeliveryTraceProcessProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <ul className={styles.process}>
        {steps.map((step, idx) => {
          const isLast = idx === steps.length - 1;
          const isActive = idx === current;
          const isDone = idx < current;

          return (
            <React.Fragment key={idx}>
              <li
                className={clsx(styles.item, isDone && styles.done, isActive && styles.active)}
                aria-current={isActive ? 'step' : undefined}
              >
                <span className={styles.mark}>
                  <Icon name={step.iconName as IconName} className={styles.icon} />
                </span>
                <Heading className={styles.tit}>{step.title}</Heading>
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
