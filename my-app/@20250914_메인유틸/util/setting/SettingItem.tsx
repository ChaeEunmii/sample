'use client';

import { ReactNode } from 'react';
import { Heading, Text } from '@shared/ui';
import styles from './SettingItem.module.scss';

export interface SettingItemProps {
  /** 섹션 제목 (상단 큰 제목) */
  sectionTitle?: string;
  /** 제목 텍스트 */
  title: ReactNode;
  /** 설명 텍스트 */
  description?: string | ReactNode;
  /** 제목/설명 아래쪽에 붙는 추가 슬롯 */
  titleBottom?: ReactNode;
  /** 우측 영역 */
  side?: ReactNode;
  /** 하단 영역 */
  bottom?: ReactNode;
}

export function SettingItem({
  sectionTitle,
  title,
  description,
  titleBottom,
  side,
  bottom,
}: SettingItemProps) {
  // 설명 텍스트 렌더
  const renderDescription = () => {
    if (!description) return null;
    return typeof description === 'string' ? (
      <Text as="span" size="3" color="gray3" indent>
        {description}
      </Text>
    ) : (
      description
    );
  };

  return (
    <div className={styles.wrap}>
      {sectionTitle && (
        <Heading size="2" weight="medium" color="gray3" indent>
          {sectionTitle}
        </Heading>
      )}
      <div className={styles.cont}>
        <div className={styles.tit}>
          <Heading size="3" weight="medium" indent>
            {title}
          </Heading>
          {renderDescription()}
          {titleBottom && <div className={styles.titleBottom}>{titleBottom}</div>}
        </div>
        {side && <div className={styles.side}>{side}</div>}
      </div>
      {bottom && <div className={styles.bottom}>{bottom}</div>}
    </div>
  );
}
