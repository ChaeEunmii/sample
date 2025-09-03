'use client';

import React from 'react';
import clsx from 'clsx';
import { Accordion, Heading, Text, Flag, Icon } from '@shared/ui';
import styles from './SellerAccordionList.module.scss';

// 플래그 상태 타입
type SellerFlagType = 'hot' | 'new';

// 파일
export type SellerFile = {
  id?: string | number;
  name: string;
  href?: string; // 링크 다운로드가 가능한 경우 사용
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

export type SellerAccordionItem = {
  /** 고유 ID */
  id?: string;
  /** 플래그 설정 */
  flags?: SellerFlagType | readonly SellerFlagType[];
  /** 상단 타이틀 텍스트/노드 */
  label: React.ReactNode;
  /** 보조 정보(날짜 등) */
  updateDate?: React.ReactNode;
  /** 에디터에서 내려오는 HTML 문자열 */
  html?: string;
  /** 직접 작성한 노드 전달 시 */
  content?: React.ReactNode;
  /** 첨부파일 */
  files?: SellerFile[];
  /** 안내사항 */
  notice?: React.ReactNode;
};

export interface SellerAccordionListProps {
  /** 데이터 목록 배열 */
  data: SellerAccordionItem[];
  /** 추가적인 클래스 */
  className?: string;
}

export function SellerAccordionList({ data, className }: SellerAccordionListProps) {
  const mapped = data.map((item, idx) => {
    // 아코디언 id 설정
    const accId = String(item.id ?? `ac-${idx + 1}`);

    // 플래그 설정
    const types: SellerFlagType[] = Array.isArray(item.flags)
      ? item.flags
      : item.flags
        ? [item.flags]
        : [];

    const flagsArr = [];
    if (types.includes('hot')) flagsArr.push({ color: 'green2' as const, label: '인기' });
    if (types.includes('new')) flagsArr.push({ color: 'red2' as const, label: '신규' });

    const labelNode = (
      <div className={styles.title}>
        <div className={styles.tit}>
          {flagsArr.length > 0 && <Flag data={flagsArr} radius="br" />}
          <Heading as="strong" className={styles.head}>
            {item.label}
          </Heading>
        </div>
        {item.updateDate && (
          <div className={styles.desc}>
            <Text as="span" size="3" color="gray3" weight="regular">
              {item.updateDate}
            </Text>
          </div>
        )}
      </div>
    );

    const contentBody = item.html ? (
      <div className={styles.cont} dangerouslySetInnerHTML={{ __html: item.html }} />
    ) : (
      <div className={styles.cont}>{item.content}</div>
    );

    const validFiles = (item.files ?? []).filter(
      (f) => f && String(f.name ?? '').trim().length > 0
    );
    const filesBody = validFiles.length > 0 && (
      <div className={styles.files}>
        <Heading as="strong" size="3" weight="semibold" color="black">
          첨부파일
        </Heading>
        <ul>
          {validFiles.map((file, fIdx) => (
            <li key={file.id ?? `${accId}-file-${fIdx}`}>
              {file.href ? (
                <a href={file.href} onClick={(e) => file.onClick?.(e)}>
                  {file.name}
                </a>
              ) : (
                <button onClick={(e) => file.onClick?.(e)}>{file.name}</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );

    const contentNode = (
      <div className={styles.content}>
        {contentBody}
        {filesBody}
        {item.notice && (
          <div className={styles.infoTxt}>
            <Icon name="info" size="small" />
            <div className={styles.txt}>{item.notice}</div>
          </div>
        )}
      </div>
    );

    return { id: accId, label: labelNode, content: contentNode };
  });

  return (
    <div className={clsx(styles.root, className)}>
      <Accordion variant="info" data={mapped} className={styles.accVars} />
    </div>
  );
}

export default SellerAccordionList;
