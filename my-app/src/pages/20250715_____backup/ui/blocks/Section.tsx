'use client';
import clsx from 'clsx';
// 라이브러리
import React from 'react';
// 컴포넌트
import { Collapse, Heading, Text } from '@shared/ui';
// 스타일
import styles from './Section.module.scss';

interface SectionProps {
  /** 스타일 */
  variant?: 'collapse' | 'normal' | 'section';
  /** margin-top 크기 */
  marginTop?: '1';
  /** 섹션 타이틀 */
  title: string;
  /** 섹션 서브 타이틀 */
  side?: string;
  /** 오른쪽 영역 텍스트 */
  suffix?: React.ReactNode;
  /** 추가적인 타이틀 컨텐츠가 항상 보이는지 여부 */
  defaultSuffix?: boolean;
  /** 처음부터 열려 있는지 여부 */
  defaultOpen?: boolean;
  /** variant가 line일 경우, 컨텐츠 요약 내용 영역이 항상 보이는지 여부 */
  defaultSummary?: boolean;
  /** 섹션 내용 */
  children: React.ReactNode;
  /** 추가적인 클래스 이름 */
  className?: string;
}

const Section = ({
  variant = 'normal',
  marginTop,
  title,
  side,
  suffix,
  children,
  defaultOpen = false,
  defaultSummary = false,
  defaultSuffix = false,
  className,
}: SectionProps) => {
  return (
    <>
      {variant === 'collapse' ? (
        <Collapse
          variant="section"
          defaultOpen={defaultOpen}
          defaultSummary={defaultSummary}
          defaultSuffix={defaultSuffix}
          className={clsx(
            styles.root,
            variant && styles[variant],
            marginTop && styles[`marginTop${marginTop}`],
            className
          )}
        >
          <Collapse.Control
            side={
              <Text as="span" size="4" className={styles.subTitle}>
                {side}
              </Text>
            }
            suffix={suffix}
          >
            <Heading as="h2" size="5" weight="bold" indent className={styles.title}>
              {title}
            </Heading>
          </Collapse.Control>
          <Collapse.Content>{children}</Collapse.Content>
        </Collapse>
      ) : (
        <article
          className={clsx(
            styles.root,
            variant && styles[variant],
            marginTop && styles[`marginTop${marginTop}`],
            className
          )}
        >
          <div className={styles.titleArea}>
            <Heading as="h2" size="5" weight="bold" indent className={styles.title}>
              {title}
            </Heading>
            {side && (
              <Text
                as="span"
                color={variant === 'section' ? 'gray2' : 'gray1'}
                size="4"
                className={styles.subTitle}
              >
                {side}
              </Text>
            )}
            {suffix && <div className={styles.suffix}>{suffix}</div>}
          </div>
          <div className={styles.contentArea}>{children}</div>
        </article>
      )}
    </>
  );
};

export { Section, Text };
