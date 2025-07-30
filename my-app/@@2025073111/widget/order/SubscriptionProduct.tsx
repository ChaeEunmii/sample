'use client';

import React from 'react';
import { InfoItem, InfoList, Text } from '@/shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import { OrderItem } from '../product';
import { mockSubscriptionProductItem } from '@/mocks/subscription';

interface SubscriptionProductProps {
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
}

export const SubscriptionProduct = ({ hideCollapse = false }: SubscriptionProductProps) => {
  return (
    <>
      <Section
        title="정기구독 상품"
        variant={hideCollapse ? 'normal' : 'collapse'}
        flush
        defaultOpen
      >
        <OrderItem
          items={mockSubscriptionProductItem}
          orderDetailData={(item) => (
            <>
              <InfoList variant="line" gridColumns="auto" gap="row4" indent margin="0">
                <InfoItem
                  title={
                    <Text as="span" size="4" weight="medium" color="point">
                      정기구독
                    </Text>
                  }
                  content={
                    <Text as="span" size="4" weight="medium" color="point">
                      6월 19일(금) 최초 수령
                    </Text>
                  }
                />
              </InfoList>
            </>
          )}
          showOrderCount
        />
      </Section>
    </>
  );
};
SubscriptionProduct.displayName = 'SubscriptionProduct';
