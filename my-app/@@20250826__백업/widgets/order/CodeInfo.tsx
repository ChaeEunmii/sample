'use client';

import { useState } from 'react';
import { Button, Text } from '@/shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import { AgreementDrawer } from '@/widgets/order/AgreementDrawer';
import styles from './CodeInfo.module.scss';

interface CustomerCodeInfoProps {
  /** 개인통관고유부호 데이터 */
  data?: string;
  /** 버튼 숨김여부 */
  hideChangeBtn?: boolean;
  /** Suffix 숨김여부 */
  hideSuffix?: boolean;
  /** collapse Heading 레벨 설정 */
  level?: '1' | '2';
  /** 보더 상단처리 여부 */
  borderTop?: boolean;
  /** flush 여부 */
  flush?: boolean;
}

export const CustomerCodeInfo = ({
  data,
  hideChangeBtn,
  hideSuffix,
  level = '2',
  borderTop = false,
  flush = false,
}: CustomerCodeInfoProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Section
        title="개인통관고유부호"
        suffix={
          <>
            {data && !hideSuffix && (
              <Text as="span" size="5" weight="medium">
                {data}
              </Text>
            )}
          </>
        }
        variant="collapse"
        level={level}
        className={styles.codeInfo}
        defaultOpen={!data}
        borderTop={borderTop}
        flush={flush}
      >
        <Text size="5" indent>
          {data ? (
            <>
              개인통관고유부호:
              <Text as="span" className={styles.code}>
                {data}
              </Text>
            </>
          ) : (
            '직구상품 주문을 위해 개인통관고유부호를 등록해주세요.'
          )}
        </Text>
        {!hideChangeBtn && (
          <Button
            size="small"
            variant="tertiary"
            className={styles.codeButton}
            onClick={() => setIsDrawerOpen(true)}
          >
            {data ? '변경' : '등록'}
          </Button>
        )}
        {!data && (
          <Text variant="error" size="5" indent>
            개인통관고유부호를 등록해 주세요.
          </Text>
        )}

        {/* 조회 동의 Drawer */}
        <AgreementDrawer
          data={data ?? ''}
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      </Section>
    </>
  );
};
CustomerCodeInfo.displayName = 'CustomerCodeInfo';
