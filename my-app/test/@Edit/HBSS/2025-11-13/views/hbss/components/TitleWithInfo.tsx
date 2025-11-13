'use client';

import { Box, Heading, Text } from '@/shared/ui';
import clsx from 'clsx';
import styles from './TitleWithInfo.module.scss';

/**
 * @description 타이틀+정보 형태의 레이아웃용 컴퍼넌트
 */

interface TitleWithInfoProps {
  /** 내용 스타일 타입 (default : boxed)*/
  type?: 'boxed' | 'free';
  /** 타이틀 지정 시 */
  title?: React.ReactNode;
  /** 내용 */
  content?: string | React.ReactNode;
  /** 내용 상단 슬롯 */
  contTopSlot?: React.ReactNode;
  /** 내용 하단 슬롯 */
  bottomSlot?: React.ReactNode;
  /** 안내문구 설정시 */
  infoText?: string | React.ReactNode;
  /** marginTop: 0px, 16px, 24px, 32px, 40px) */
  margin?: '0' | '1' | '2' | '3' | '4';
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function TitleWithInfo({
  type = 'boxed',
  title,
  content,
  contTopSlot,
  bottomSlot,
  infoText,
  margin = '0',
  className,
}: TitleWithInfoProps) {
  const isBoxed = type === 'boxed';

  return (
    <div className={clsx(styles.root, margin && styles[`mt${margin}`], className)}>
      {title && (
        <Heading size="3" weight="medium" indent>
          {title}
        </Heading>
      )}
      {contTopSlot && (
        <>
          <div className={styles.contTopSlot}>{contTopSlot}</div>
        </>
      )}
      {isBoxed ? (
        <Box size="3" className={styles.box}>
          {content && (
            <>
              {typeof content === 'string' ? (
                <Text size="5" color="gray1">
                  {content}
                </Text>
              ) : (
                <>{content}</>
              )}
            </>
          )}
        </Box>
      ) : (
        <div className={styles.box}>
          {content && (
            <>
              {typeof content === 'string' ? (
                <Text size="5" color="gray1">
                  {content}
                </Text>
              ) : (
                <>{content}</>
              )}
            </>
          )}
        </div>
      )}
      {infoText && (
        <Text size="3" color="gray3" indent className="ncp-mt-x6">
          {infoText}
        </Text>
      )}
      {bottomSlot && <div className={styles.bottom}>{bottomSlot}</div>}
    </div>
  );
}
