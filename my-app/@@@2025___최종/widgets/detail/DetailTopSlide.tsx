'use client';

import { useState } from 'react';
import { Carousel, Flag, Text, Image, Video } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

import styles from './DetailTopSlide.module.scss';
import clsx from 'clsx';
import DetailTopSlideDialog from './DetailTopSlideDialog';

export const DetailTopSlide = () => {
  const { item, prodType, prodDetailType } = useProdDetail();

  // 썸네일보기 팝업 상태
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // 스페셜 브랜드인 경우 : 활성화 컬러 코드 상태
  const [currentColorIdx, setCurrentColorIdx] = useState(0);
  const handleSetCurrentColorIdx = (idx: number) => {
    setCurrentColorIdx(idx);
  };

  // 동영상 확장자 체크
  const isVideoFile = (src: string) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.wmv', '.flv', '.mkv'];
    return videoExtensions.some((ext) => src.toLowerCase().includes(ext));
  };

  return (
    <>
      <div className={clsx(styles.root)}>
        <Carousel
          className={styles.thumbnail}
          variant="detail"
          slidesPerView={1}
          pagination="fraction"
          slideTo={currentColorIdx}
          onSlideChange={setCurrentColorIdx}
          slides={item.thumbImages.map(
            (img: { src: string; alt: string; poster?: string }, idx: number) => (
              <button key={idx} onClick={() => setIsDialogOpen(true)}>
                {isVideoFile(img.src) ? (
                  <Video
                    src={img.src}
                    label={img.alt}
                    poster={img.poster}
                    autoPlay
                    loop
                    className={styles.image}
                  />
                ) : (
                  <Image src={img.src} alt={img.alt} />
                )}
              </button>
            )
          )}
        />
        {item.emblem && item.badge && (
          <Flag
            data={[
              {
                color: 'green',
                label: item.emblem,
              },
              {
                color: 'black',
                label: item.badge,
              },
            ]}
            radius="br"
            className={styles.flag}
          />
        )}
        {prodDetailType === 'holidayOnly' && (
          <div className={styles.esgMark}>
            {item.esgMark.includes('esg1') && (
              <Image
                src={'/images/detail/img_holiday_esg1.png'}
                alt="저탄소 인증"
                className={styles.esg}
              />
            )}
            {item.esgMark.includes('esg2') && (
              <Image
                src={'/images/detail/img_holiday_esg2.png'}
                alt="저탄소 인증"
                className={styles.esg}
              />
            )}
            {item.esgMark.includes('esg3') && (
              <Image
                src={'/images/detail/img_holiday_esg3.png'}
                alt="저탄소 인증"
                className={styles.esg}
              />
            )}
          </div>
        )}
        {prodDetailType === 'specialBrand' && (
          <div className={styles.specialBrand}>
            <Carousel
              className={styles.carousel}
              slideClassName={styles.slide}
              spaceBetween={10}
              slideTo={currentColorIdx}
              onSlideChange={setCurrentColorIdx}
              slides={item.colors.map((color: { code: string; name: string }, idx: number) => (
                <button key={idx} onClick={() => handleSetCurrentColorIdx(idx)}>
                  <div
                    className={clsx(
                      styles.colorChip,
                      idx === currentColorIdx && styles.active,
                      color.code === '#FFFFFF' && styles.white
                    )}
                    style={{ '--color-chip-bg': color.code } as React.CSSProperties}
                  />
                </button>
              ))}
            />
            <Text as="span" size="3" weight="medium">
              {currentColorIdx + 1}. {item.colors[currentColorIdx]?.name}
            </Text>
          </div>
        )}
      </div>
      <DetailTopSlideDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
};
DetailTopSlide.displayName = 'DetailTopSlide';
