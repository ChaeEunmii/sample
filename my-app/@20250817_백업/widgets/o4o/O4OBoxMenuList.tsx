'use client';
import React from 'react';
import { Box, Text, Section } from '@/shared/ui';
import { formatPrice } from '@/shared/utils/ui';
import { ExtendedO4OItem } from '@/widgets/product/O4OList';
import { StoreTitle } from './StoreTitle';
import { O4OStore } from './O4OCartList';
import { O4OOrderMenus } from './O4OOrderMenus';

interface O4OBoxMenuListProps {
  /** 주문 메뉴 데이터 */
  data: O4OStore[];
  /** 추가 클래스명 */
  className?: string;
}

export const O4OBoxMenuList = ({ data, className }: O4OBoxMenuListProps) => {
  return (
    <Section title="주문 메뉴" variant="section" className={className}>
      {data.map((item) => (
        <Box key={item.id} size="3">
          <StoreTitle data={item} />
          <O4OOrderMenus
            data={item.items}
            ordeOptions={(torderItem: ExtendedO4OItem) => (
              <>
                {torderItem.options && (
                  <Text as="span" size="4" color="gray3">
                    - {torderItem.options.join(' / ')}
                  </Text>
                )}
              </>
            )}
            className="ncp-mt-xs"
          />
          <Text weight="semibold" className="ncp-mt-x6">
            {formatPrice(12000)}
          </Text>
        </Box>
      ))}
    </Section>
  );
};

O4OBoxMenuList.displayName = 'O4OBoxMenuList';
