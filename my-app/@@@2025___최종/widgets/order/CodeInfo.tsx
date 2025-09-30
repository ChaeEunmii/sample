'use client';

import { useState } from 'react';
import { Button, Text } from '@/shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import { AgreementDrawer } from '@/widgets/order/AgreementDrawer';
import styles from './CodeInfo.module.scss';

interface CustomerCodeInfoProps {
  /** 개인통관고유부호 데이터 */
  data?: string;
}

export const CustomerCodeInfo = ({ data }: CustomerCodeInfoProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Section
        title="개인통관고유부호"
        suffix={
          <>
            {data && (
              <Text as="span" size="5" weight="medium">
                {data}
              </Text>
            )}
          </>
        }
        variant="collapse"
        className={styles.codeInfo}
        defaultOpen={!data}
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
        <Button
          size="small"
          variant="tertiary"
          className={styles.codeButton}
          onClick={() => setIsDrawerOpen(true)}
        >
          {data ? '변경' : '등록'}
        </Button>
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
