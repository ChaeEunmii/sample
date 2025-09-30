'use client';

import { Heading, Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './EntryProcess.module.scss';

// Step 타입 정의
interface Step {
  title: string;
  description?: string;
}

interface EntryProcessProps {
  /** 추가적인 클래스 */
  className?: string;
}

export function EntryProcess({ className }: EntryProcessProps) {
  // 입점절차 정의
  const steps: Step[] = [
    { title: '입점신청', description: '판매자센터 가입 및 입점정보 입력' },
    { title: '심사', description: '서류 및 입점정보 검토' },
    { title: '전자계약 체결', description: '심사 승인 시 입점 계약 체결' },
    { title: '입점 완료' },
  ];

  return (
    <ol className={clsx(styles.process, className)}>
      {steps.map((step, idx) => (
        <li key={idx}>
          <span className={styles.numb}>{idx + 1}</span>
          <div className={styles.cont}>
            <Heading size="5" weight="bold">
              {step.title}
            </Heading>
            {step.description && (
              <Text as="span" size="3" color="gray3">
                {step.description}
              </Text>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
