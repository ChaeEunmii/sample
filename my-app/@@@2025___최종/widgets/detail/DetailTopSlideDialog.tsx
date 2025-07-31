'use client';

import React, { useState } from 'react';
import { Carousel, Dialog, Image, Video } from '@shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

import styles from './DetailTopSlide.module.scss';
import clsx from 'clsx';

interface DetailTopSlideDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DetailTopSlideDialog({ isOpen, onClose }: DetailTopSlideDialogProps) {
  const { item } = useProdDetail();

  // 스와이퍼 활성 인덱스 상태
  const [currentIdx, setCurrentIdx] = useState(0);

  // 동영상 확장자 체크
  const isVideoFile = (src: string) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.wmv', '.flv', '.mkv'];
    return videoExtensions.some((ext) => src.toLowerCase().includes(ext));
  };

  return (
    <Dialog
      title=""
      isOpen={isOpen}
      onClose={onClose}
      className={styles.dialog}
      bodyClassName={styles['dialogBody']}
      flush
      showClose
      maximize
      mode="black"
    >
      <div className={styles.dialogCont}>
        <Carousel
          className={styles.main}
          flush
          slidesPerView={1}
          pagination="fraction"
          slideTo={currentIdx}
          onSlideChange={setCurrentIdx}
          slides={item.thumbImages.map(
            (img: { src: string; alt: string; poster?: string }, idx: number) => (
              <React.Fragment key={idx}>
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
              </React.Fragment>
            )
          )}
        />
        <div className={styles.thumbWrap}>
          <Carousel
            className={styles.thumb}
            flush
            slidesPerView={5.5}
            spaceBetween={8}
            slideTo={currentIdx}
            onSlideChange={setCurrentIdx}
            slides={item.thumbImages.map((img: { src: string; alt: string }, idx: number) => (
              <button key={idx} onClick={() => setCurrentIdx(idx)}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  className={clsx(styles.thumbImage, idx === currentIdx && styles.active)}
                />
              </button>
            ))}
          />
        </div>
      </div>
    </Dialog>
  );
}
