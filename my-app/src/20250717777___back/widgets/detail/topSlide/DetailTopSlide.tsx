'use client';

import { Flag } from '@/shared/ui';

import styles from './DetailTopSlide.module.scss';
import clsx from 'clsx';

interface DetailTopSlideProps {
  /** 엠블럼 텍스트 */
  emblem: string;
  /** 뱃지 텍스트 */
  badge: string;
}

export const DetailTopSlide = ({ emblem, badge }: DetailTopSlideProps) => {
  // 동영상 확장자 체크
  // const isVideoFile = (src: string) => {
  //   const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.wmv', '.flv', '.mkv'];
  //   return videoExtensions.some((ext) => src.toLowerCase().includes(ext));
  // };

  return (
    <div className={clsx(styles.root)}>
      <Flag
        data={[
          {
            color: 'green',
            label: emblem,
          },
          {
            color: 'black',
            label: badge,
          },
        ]}
        radius="br"
        className={styles.flag}
      />
      {/* <Carousel
        variant="detail"
        slidesPerView={1}
        pagination="fraction"
        slides={[
          <Thumbnail
            key={index}
            {...item}
            align={align}
            textInside={textInside}
            ratio={bannerType}
            textSize={textSize}
            textSpacing={textSpacing}
            flush={flush}
            textReverse={textReverse}
          />,
        ]}
      /> */}
      <div>carousel 영역</div>
    </div>
  );
};
DetailTopSlide.displayName = 'DetailTopSlide';
