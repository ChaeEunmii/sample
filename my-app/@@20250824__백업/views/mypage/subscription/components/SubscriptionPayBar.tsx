// SubscriptionPayBar.tsx
'use client';

import { Text, Heading, TextButton } from '@shared/ui';
import styles from './SubscriptionPayBar.module.scss';
import clsx from 'clsx';

/**
 *
 * 구독관리 상단 결제수단 상태 띠형태 바
 *
 */

export type SubscriptionPayBarProps = {
  /** default: 'H.Point Pay' */
  provider?: string; //
  /** 결제수단 개수 */
  methodCount?: number;
  /** '변경' 클릭 핸들러 */
  onChange?: () => void;
  /** '등록' 클릭 핸들러 (methodCount가 0일 때 사용) */
  onRegister?: () => void;
  /** 추가적인 클래스 */
  className?: string;
};

export function SubscriptionPayBar({
  provider = 'H.Point Pay',
  methodCount,
  onChange,
  onRegister,
  className,
}: SubscriptionPayBarProps) {
  const hasCount = typeof methodCount === 'number';
  const hasMethods = (methodCount ?? 0) > 0;

  const message = !hasCount
    ? undefined
    : hasMethods
      ? `${methodCount}개의 결제수단이 등록되어 있어요.`
      : '등록된 결제수단이 없어요.';

  const handleClick = hasMethods ? onChange : (onRegister ?? onChange);
  const buttonLabel = hasMethods ? '변경' : '등록';

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.box}>
        <div className={styles.tit}>
          <Heading size="3" weight="semibold" color="black">
            {provider}
          </Heading>
          {hasCount && (
            <Text as="span" size="4" color={hasMethods ? 'gray2' : 'point'}>
              {message}
            </Text>
          )}
        </div>
        <TextButton
          variant="underline"
          size="1"
          color={hasMethods ? 'gray3' : 'gray1'}
          onClick={handleClick}
          aria-label={`${provider} 결제수단 ${buttonLabel}`}
        >
          {buttonLabel}
        </TextButton>
      </div>
    </div>
  );
}
