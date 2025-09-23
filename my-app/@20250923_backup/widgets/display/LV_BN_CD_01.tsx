import { useState } from 'react';
// 컴포넌트
import { Carousel } from '@shared/ui';
import { NotifyBanner, NotifyBannerProps } from '@widgets/banner/NotifyBanner';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface LV_BN_CD_01Props extends DisplayProps {
  data: NotifyBannerProps[];
}

export const LV_BN_CD_01 = ({ title, subtitle, moreUrl, margin, data }: LV_BN_CD_01Props) => {
  const [notiIds, setNotiIds] = useState<string[]>(() =>
    data.filter((item) => item.notification?.isActive).map((item) => item.id)
  );

  const handleNotiToggle = (id: string) => {
    const isCurrentActive = notiIds.includes(id);

    if (isCurrentActive) {
      // 알림 해제
      setNotiIds((prev) => prev.filter((notiId) => notiId !== id));
      console.log('알림 해제:', id);
    } else {
      // 알림 신청
      setNotiIds((prev) => [...prev, id]);
      console.log('알림 신청:', id);
    }
  };

  const loopData = data.length === 3 ? [...data, ...data] : data;

  const renderBanner = () =>
    loopData.map((item, idx) => (
      <NotifyBanner
        key={idx}
        {...item}
        notification={{
          ...item.notification,
          isActive: notiIds.includes(item.id),
          onToggle: handleNotiToggle,
        }}
      />
    ));

  return (
    <Display title={title} subtitle={subtitle} moreUrl={moreUrl} margin={margin}>
      {data.length > 1 ? (
        <Carousel
          slides={renderBanner()}
          variant="scale"
          slidesPerView={1.2}
          spaceBetween={8}
          initialSlide={0}
          centeredSlides
        />
      ) : (
        renderBanner()
      )}
    </Display>
  );
};

LV_BN_CD_01.displayName = 'LV_BN_CD_01';
