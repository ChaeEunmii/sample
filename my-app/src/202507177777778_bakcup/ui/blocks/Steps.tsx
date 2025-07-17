'use client';

import { Fragment, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './Steps.module.scss';

interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 단계 이름 배열 */
  steps: string[];
  /** 현재 활성화된 단계 (0부터 시작) */
  activeStep: number;
  /** 접근성을 위한 라벨 */
  label?: string;
}

export const Steps = ({
  steps,
  activeStep,
  label = '진행단계',
  className,
  ...props
}: StepsProps) => {
  const prevActiveStepRef = useRef(activeStep);

  useEffect(() => {
    // 활성 단계가 변경되었을 때 스크롤을 상단으로 이동
    if (prevActiveStepRef.current !== activeStep) {
      window.scrollTo({
        top: 0,
      });
    }

    prevActiveStepRef.current = activeStep;
  }, [activeStep]);

  return (
    <div className={clsx(styles.root, className)} aria-label={label} {...props}>
      {steps.map((step, index) => (
        <Fragment key={index}>
          <span
            className={clsx(
              styles.item,
              index === activeStep && styles.active,
              index < activeStep && styles.completed
            )}
            aria-current={index === activeStep ? 'step' : undefined}
          >
            <em className="ncp-blind">{step}</em>
          </span>
        </Fragment>
      ))}
    </div>
  );
};

Steps.displayName = 'Steps';
