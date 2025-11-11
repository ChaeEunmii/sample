'use client';

import { Box, Heading, TextList, Text } from '@/shared/ui';
import clsx from 'clsx';
import styles from './InformationBox.module.scss';

/**
 * @description HSBSS 화면에서 반복되는 '안내드립니다' 박스 영역 컴퍼넌트
 */

interface InformationBoxProps {
  /** 타이틀 지정 시 */
  title?: React.ReactNode;
  /** 내용 */
  content?: string | string[] | React.ReactNode;
  /** marginTop: 0px, 16px, 24px, 32px, 40px) */
  margin?: '0' | '1' | '2' | '3' | '4';
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function InformationBox({
  title = '안내드립니다',
  content,
  margin = '0',
  className,
}: InformationBoxProps) {
  const isArray = Array.isArray(content);

  return (
    <Box size="3" className={clsx(styles.root, margin && styles[`mt${margin}`], className)}>
      {title && (
        <Heading size="3" weight="semibold">
          {title}
        </Heading>
      )}
      {isArray ? (
        <TextList variant="level2" data={content as string[]} />
      ) : (
        content && (
          <Text size="4" color="gray2">
            {content}
          </Text>
        )
      )}
    </Box>
  );
}
