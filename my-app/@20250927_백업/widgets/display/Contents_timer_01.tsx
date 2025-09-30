// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Dialog, Countdown } from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface Contents_timer_01Props extends DisplayProps {
  data: {
    startDate?: Date | string;
    endDate: Date | string;
  };
}

export const Contents_timer_01 = ({
  title,
  subtitle,
  moreUrl,
  margin,
  data,
}: Contents_timer_01Props) => {
  const { startDate, endDate } = data;
  return (
    <Display title={title} subtitle={subtitle} moreUrl={moreUrl} margin={margin}>
      <Countdown variant="progress" startDate={startDate} endDate={endDate} />
    </Display>
  );
};
Contents_timer_01.displayName = 'Contents_timer_01';
