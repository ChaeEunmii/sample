// 컴포넌트
import { TimerBanner } from '@widgets/banner/TimerBanner';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface HF_TIMER_01Props {
  margin?: DisplayProps['margin'];
  endDate: Date | string;
  title: string;
  subtitle?: string;
}

export const HF_TIMER_01 = ({ margin, endDate, title, subtitle }: HF_TIMER_01Props) => {
  return (
    <Display margin={margin}>
      <TimerBanner endDate={endDate} title={title} subtitle={subtitle} />
    </Display>
  );
};
HF_TIMER_01.displayName = 'HF_TIMER_01';
