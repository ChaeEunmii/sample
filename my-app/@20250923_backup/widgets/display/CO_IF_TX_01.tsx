import React from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { Box, Heading, TextList } from '@shared/ui';

export interface CO_IF_TX_01Props {
  margin?: DisplayProps['margin'];
  data: {
    title?: string;
    texts?: React.ReactNode[];
  };
}

export const CO_IF_TX_01 = ({ margin, data }: CO_IF_TX_01Props) => {
  if (!data) return;
  return (
    <Display margin={margin}>
      <Box size="3">
        {data.title && (
          <Heading indent ellipsis={2}>
            {data.title}
          </Heading>
        )}
        {data.texts && <TextList data={data.texts} variant="level2" />}
      </Box>
    </Display>
  );
};
CO_IF_TX_01.displayName = 'CO_IF_TX_01';
