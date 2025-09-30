import React from 'react';
import { Heading, Text, TextButton, Tooltip } from '@shared/ui';
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
  /** 사이드 수직 정렬 */
  sideAlign?: 'start' | 'center' | 'end';
  /** 설명 텍스트 */
  description?: React.ReactNode;
  /** 타이틀 우측 팁 내용 */
  tip?: React.ReactNode;
  /** 타이틀 우측 추가 요소 */
  addon?: React.ReactNode | string;
  /** 추가 클래스 */
  className?: string;
}

export const TitleBar: React.FC<TitleBarProps> = ({
  type = 'docs',
  level = '1',
  align = 'left',
  sideAlign = 'end',
  title,
  subtitle,
  description,
  moreUrl,
  side,
  tip,
  addon,
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
        sideAlign !== 'end' && styles[`side-${sideAlign}`],
        className
      )}
    >
      <div className={styles.title}>
        <Heading as={heading.as} size={heading.size} weight={heading.weight} indent>
          {tip || addon ? <span className={styles.heading}>{title}</span> : title}
          {tip && (
            <Tooltip placement="bottom" iconProps={{ size: 'small' }} className={styles.tip}>
              {tip}
            </Tooltip>
          )}
          {addon && (
            <>
              {typeof addon === 'string' ? (
                <Text as="span" size="4" weight="regular" color="gray2" className="ncp-ml-xs">
                  {addon}
                </Text>
              ) : (
                addon
              )}
            </>
          )}
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
