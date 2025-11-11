'use client';

import { Text, TitleArea } from '@shared/ui';
import clsx from 'clsx';
import styles from './HbssStepTitle.module.scss';

interface HbssStepTitleProps {
  /** 단계 번호 */
  step: number;
  /** 단계 라벨 (예: 본인확인, 배송지입력 등) */
  label: string;
  /** 메인 타이틀 */
  title: React.ReactNode;
  /** 하단 설명 */
  description?: string;
  /** 추가 클래스 */
  className?: string;
}

export function HbssStepTitle({ step, label, title, description, className }: HbssStepTitleProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <span className={styles.stepNow}>
        <em className={styles.num}>{step}</em>
        {label}
      </span>
      <TitleArea
        title={<p className={styles.titleText}>{title}</p>}
        bottomSlot={
          description && (
            <Text as="span" size="5" color="gray2" weight="regular" className={styles.desc}>
              {description}
            </Text>
          )
        }
        className={styles.title}
      />
    </div>
  );
}
