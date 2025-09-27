// 컴포넌트
import { TimerBanner } from '@widgets/banner/TimerBanner';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface HF_TIMER_01Props {
  margin?: DisplayProps['margin'];
  data: {
    endDate: Date | string;
    href: string;
    title: string;
    subtitle?: string;
    image?: { src: string; alt?: string };
  }[];
}

export const HF_TIMER_01 = ({ margin, data }: HF_TIMER_01Props) => {
  return (
    <Display margin={margin}>
      {data.map((item, idx) => (
        <TimerBanner key={idx} {...item} />
      ))}
    </Display>
  );
};
HF_TIMER_01.displayName = 'HF_TIMER_01';
