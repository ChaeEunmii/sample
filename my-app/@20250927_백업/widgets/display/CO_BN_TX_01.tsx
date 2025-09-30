import React from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { FreeButton } from '@shared/ui/custom';

export interface CO_BN_TX_01Props extends DisplayProps {
  label: React.ReactNode;
  href?: string;
  textColor?: React.CSSProperties['color'];
  bgColor?: React.CSSProperties['backgroundColor'];
}

export const CO_BN_TX_01 = ({ margin, label, href, textColor, bgColor }: CO_BN_TX_01Props) => {
  return (
    <Display margin={margin}>
      <FreeButton textColor={textColor} bgColor={bgColor} href={href}>
        {label}
      </FreeButton>
    </Display>
  );
};
CO_BN_TX_01.displayName = 'CO_BN_TX_01';
