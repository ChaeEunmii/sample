// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Display, DisplayProps } from '@widgets/display/Display';
import { TimeLineBanner, TimeLineBannerProps } from '@widgets/banner/TimeLineBanner';

export interface Pu_timeline_01Props extends DisplayProps {
  data: TimeLineBannerProps[];
}

export const Pu_timeline_01 = ({
  title,
  subtitle,
  moreUrl,
  titleAlign,
  margin,
  data,
}: Pu_timeline_01Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      <TimeLineBanner
        status="active"
        date="07.01(화) ~ 07.31(목)"
        title="네모네모 스펀지밥 더 현대 대구 팝업스토어"
        subtitle="더현대대구"
        href="#"
        image={{
          src: '/images/dummy/@sample_product_01.png',
          alt: '네이비 캐시미어 니트 스웨터 착용 이미지',
        }}
      />
    </Display>
  );
};
Pu_timeline_01.displayName = 'Pu_timeline_01';
