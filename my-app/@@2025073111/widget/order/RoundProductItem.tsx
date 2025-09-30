'use client';

import React from 'react';
import { Text, Box, Flag, Stack, TextButton, Button, ButtonArea, TextList } from '@/shared/ui';

export interface RoundProduct {
  /** 회차 */
  round: number;
  /** 상품명 */
  title?: string;
  /** 구성 상품 목록 */
  package?: string[];
}

interface RoundProductItemProps {
  /** 회차 상품 정보 데이터 */
  data: RoundProduct;
  className?: string;
}

export const RoundProductItem = ({ data, className }: RoundProductItemProps) => {
  return (
    <Box size="3" className={className}>
      <Stack>
        <Flag
          data={{
            color: 'green3',
            label: `${data.round}회차`,
          }}
          size="medium"
        />
        <Text as="span" color="point" weight="semibold">
          {data.title ? data.title : '회차별 구성 상품'}
        </Text>
      </Stack>
      {data.package && (
        <TextList
          data={data.package.map((item) => ({
            textProps: { color: 'gray2', size: '4' },
            text: item,
          }))}
          variant="clear"
          className="ncp-mt-s"
        />
      )}
      <TextList
        data={[
          '받고 싶은 수량을 선택하시면 매주 그 수량대로 배송이 됩니다.',
          '구독 후에 자유롭게 해지가 가능합니다.',
          '유통 기한은 상품 포장에 표시 되어 있습니다. 취식 전 확인 부탁드려요.',
        ]}
        variant="info"
        margin="2"
      />
      <Stack type="end" className="ncp-mt-x10">
        <TextButton color="gray3" size="1" variant="underline">
          상품 구매정보 안내
        </TextButton>
      </Stack>
    </Box>
  );
};
RoundProductItem.displayName = 'RoundProductItem';
