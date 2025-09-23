import React from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { Grid, Bubble, TextButton } from '@shared/ui';
import { BubbleTextColor } from '@shared/ui/base/Bubble';

export interface HF_BN_TX_01Props {
  margin?: DisplayProps['margin'];
  data: {
    text: React.ReactNode;
    color?: BubbleTextColor;
  }[];
  link?: {
    label: string;
    href?: string;
  };
}

export const HF_BN_TX_01 = ({ margin, data, link }: HF_BN_TX_01Props) => {
  // 데이터 최대 10개 제한
  const displayData = data.slice(0, 10);

  return (
    <Display margin={margin}>
      <Grid align="left">
        {displayData.slice(0, 10).map((item, idx) => (
          <Bubble key={idx} textColor={item.color} tail={idx === displayData.length - 1}>
            {item.text}
          </Bubble>
        ))}
        {link && (
          <TextButton
            href={link.href}
            size="1"
            suffixIcon="arrowRight"
            iconSize="xsmall"
            className="ncp-ml-xs"
          >
            {link.label}
          </TextButton>
        )}
      </Grid>
    </Display>
  );
};
HF_BN_TX_01.displayName = 'HF_BN_TX_01';
