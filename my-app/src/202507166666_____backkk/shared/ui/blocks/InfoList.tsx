'use client';

import React, { createContext, useContext } from 'react';
import { Heading } from '@shared/ui';
import clsx from 'clsx';
import styles from './InfoList.module.scss';

type InfoVariant = 'default' | 'stacked' | 'between' | 'line';
type InfoGridColumns = 'auto';
type InfoGap = 'row4' | 'row16';
interface InfoListProps {
  /** 스타일 변형 */
  variant?: InfoVariant;
  /** grid-template-columns 변형 */
  gridColumns?: InfoGridColumns;
  /** gap 변형 */
  gap?: InfoGap;
  /** 하단 라인 추가 */
  divider?: boolean;
  /** 문단 좌우 들여쓰기 */
  indent?: boolean;
  /** 정보 목록의 자식 컴포넌트 (InfoItem 컴포넌트들) */
  children: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
}
interface InfoItemProps {
  /** 정보 항목의 제목 */
  // title: string;
  title: React.ReactNode;
  /** 제목 우측 사이드 slot */
  side?: React.ReactNode;
  /** 텍스트 강조 여부 */
  bold?: boolean;
  /** 정보 항목의 내용 */
  content?: React.ReactNode;
  /** 정보 항목의 자식 컴포넌트 (content 대신 자식 컴포넌트 사용 가능) */
  children?: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
}

const InfoContext = createContext<{ variant?: InfoVariant }>({});

export const InfoList = ({
  variant,
  gridColumns,
  gap,
  divider,
  indent = false,
  children,
  className,
}: InfoListProps) => {
  // variant에 따라 적절한 루트 엘리먼트 사용
  const rootElement =
    variant === 'stacked' || variant === 'between' || variant === 'line' ? (
      <dl
        className={clsx(
          styles.root,
          variant && styles[variant],
          gridColumns && styles[gridColumns],
          gap && styles[gap],
          divider && styles.divider,
          indent && styles.indent,
          className
        )}
      >
        {children}
      </dl>
    ) : (
      <div
        className={clsx(
          styles.root,
          variant && styles[variant],
          gridColumns && styles[gridColumns],
          gap && styles[gap],
          divider && styles.divider,
          indent && styles.indent,
          className
        )}
      >
        {children}
      </div>
    );

  return <InfoContext.Provider value={{ variant }}>{rootElement}</InfoContext.Provider>;
};

export const InfoItem = ({
  title,
  side,
  bold = false,
  content,
  children,
  className,
}: InfoItemProps) => {
  // InfoContext에서 variant 값을 가져옴
  const { variant } = useContext(InfoContext);

  if (variant === 'stacked' || variant === 'between' || variant === 'line') {
    // dl 변형: dt/dd 구조 사용
    return (
      <>
        <dt className={clsx(bold && styles.bold)}>
          {title}
          {side && variant === 'between' && <span className={styles.side}>{side}</span>}
        </dt>
        <dd className={clsx(bold && styles.bold)}>
          {content || children}
          {side && variant === 'stacked' && <span className={styles.side}>{side}</span>}
        </dd>
      </>
    );
  }

  // if (variant === 'line') {
  //   // dl 변형: dt/dd 구조 사용
  //   return (
  //     <>
  //       <div className={styles.row}>
  //         <dt className={clsx(bold && styles.bold)}>
  //           {title}
  //           {side && <span className={styles.side}>{side}</span>}
  //         </dt>
  //         <dd className={clsx(bold && styles.bold)}>{content || children}</dd>
  //       </div>
  //     </>
  //   );
  // }

  // 기본 div 변형
  return (
    <div className={clsx(styles.item, className)}>
      <div className={clsx(styles.title)}>
        <Heading size="2">{title}</Heading>
        {side && <div className={styles.side}>{side}</div>}
      </div>
      {content ? <div className={clsx(styles.content)}>{content}</div> : children}
    </div>
  );
};

InfoList.displayName = 'InfoList';
InfoItem.displayName = 'InfoItem';
