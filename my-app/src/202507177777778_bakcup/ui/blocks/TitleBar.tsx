import React from 'react';
import { Heading, Text, TextButton } from '@shared/ui';
import clsx from 'clsx';
import styles from './TitleBar.module.scss';

export interface TitleBarBaseProps {
  /** 타이틀 텍스트 */
  title: React.ReactNode;
  /** 서브 타이틀 텍스트 */
  subtitle?: React.ReactNode;
  /** 더보기 링크 url */
  moreUrl?: string;
  /** 사이드 슬롯 (더보기 링크 대신 사용) */
  side?: React.ReactNode;
}

interface TitleBarProps extends TitleBarBaseProps {
  /** 타입 */
  type?: 'docs' | 'module';
  /** 레벨 (type이 docs일때만 적용) */
  level?: '1' | '2' | '3';
  /** 정렬 */
  align?: 'left' | 'right' | 'center';
  /** 설명 텍스트 */
  description?: React.ReactNode;
  /** 추가 클래스 */
  className?: string;
}

export const TitleBar: React.FC<TitleBarProps> = ({
  type = 'docs',
  level = '1',
  align = 'left',
  title,
  subtitle,
  description,
  moreUrl,
  side,
  className,
}) => {
  // type과 level에 따른 Heading 설정
  const getHeadingProps = () => {
    if (level) {
      const headingMap = {
        '1': { as: 'h2' as const, size: '6' as const, weight: 'bold' as const },
        '2': { as: 'h3' as const, size: '5' as const, weight: 'bold' as const },
        '3': { as: 'strong' as const, size: '3' as const, weight: 'semibold' as const },
      };
      return headingMap[level];
    }
    return { as: 'h3' as const, size: '6' as const, weight: 'bold' as const };
  };

  const heading = getHeadingProps();

  return (
    <div
      className={clsx(
        styles.root,
        styles[type],
        level && type === 'docs' && styles[`level${level}`],
        align !== 'left' && styles[align],
        className
      )}
    >
      <div className={styles.title}>
        <Heading as={heading.as} size={heading.size} weight={heading.weight} indent>
          {title}
        </Heading>
        {subtitle && (
          <Heading size="3" weight="regular" indent>
            {subtitle}
          </Heading>
        )}
      </div>
      {(side || moreUrl) && (
        <>
          {side ? (
            <>{side}</>
          ) : moreUrl ? (
            <TextButton size="1" color="gray3" suffixIcon="arrowRight" href={moreUrl}>
              더보기
            </TextButton>
          ) : null}
        </>
      )}
      {description && (
        <Text indent className={styles.desc}>
          {description}
        </Text>
      )}
    </div>
  );
};

TitleBar.displayName = 'TitleBar';
