// 라이브러리
import React, { useState, useEffect, Fragment } from 'react';
import { usePathname } from 'next/navigation';
// 컴포넌트
import { Icon, IconName } from '@shared/ui';
import { useFAB } from '@shared/contexts/FABContext';
import { calculateBottom } from '@/shared/utils/ui';
// 스타일
import styles from './FAB.module.scss';
import clsx from 'clsx';

// 타입 정의
interface ActionItem {
  name: IconName;
  label: string;
  onClick: () => void;
}

export const FAB = () => {
  const [bottom, setBottom] = useState<number | null>(null);
  const pathname = usePathname();
  const { actions } = useFAB();

  const renderAction = ({
    name,
    label,
    className,
    onClick,
  }: {
    name: IconName;
    label: string;
    className?: string;
    onClick: () => void;
  }) => {
    return (
      <button type="button" className={clsx(styles.item, className)} onClick={onClick}>
        <Icon name={name} size="large" label={label} />
      </button>
    );
  };

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ButtonArea 이벤트 감지하여 bottom 계산
  useEffect(() => {
    const handle = () => setBottom(calculateBottom());
    window.addEventListener('ButtonArea:mounted', handle);
    window.addEventListener('ButtonArea:unmounted', handle);
    window.addEventListener('ButtonArea:resized', handle);

    return () => {
      window.removeEventListener('ButtonArea:mounted', handle);
      window.removeEventListener('ButtonArea:unmounted', handle);
      window.removeEventListener('ButtonArea:resized', handle);
    };
  }, []);

  useEffect(() => setBottom(calculateBottom()), [pathname]);

  return (
    <div
      className={styles.root}
      style={
        {
          '--ncp-app-fab-bottom': bottom !== null ? `${bottom}px` : undefined,
        } as React.CSSProperties
      }
      data-ready={bottom !== null}
    >
      <div className={styles.actions}>
        {renderAction({
          name: 'top',
          label: '맨 위로 이동',
          className: styles.toTop,
          onClick: handleToTop,
        })}
        {actions.map((item: ActionItem, idx: number) => (
          <Fragment key={idx}>{renderAction(item)}</Fragment>
        ))}
      </div>
    </div>
  );
};
