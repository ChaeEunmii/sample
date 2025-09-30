'use client';

import React, { useEffect, useState } from 'react';
import { Carousel, Dialog, Image, Video, Link } from '@shared/ui';

import styles from './ImageViewer.module.scss';
import clsx from 'clsx';

interface ThumbImage {
  src: string;
  alt: string;
  poster?: string;
}

interface ImageViewerProps {
  images: ThumbImage[];
  isOpen: boolean;
  onClose: () => void;
  /** 활성화 슬라이드 제어 */
  activeSlide?: number;
}

export const ImageViewer: React.FC<ImageViewerProps> = ({
  isOpen,
  onClose,
  images,
  activeSlide,
}) => {
  const [currentIdx, setCurrentIdx] = useState(activeSlide ?? 0);

  // 외부에서 activeSlide 변경 시 동기화
  useEffect(() => {
    if (typeof activeSlide === 'number' && isOpen) {
      setCurrentIdx(activeSlide);
    }
  }, [activeSlide, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setCurrentIdx(typeof activeSlide === 'number' ? activeSlide : 0);
    }
  }, [isOpen]);

  const isVideoFile = (src: string) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.wmv', '.flv', '.mkv'];
    return videoExtensions.some((ext) => src.toLowerCase().includes(ext));
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} flush showClose maximize mode="black">
      <div className={styles.root}>
        <Carousel
          className={styles.main}
          flush
          slidesPerView={1}
          pagination="fraction"
          slideTo={currentIdx}
          onSlideChange={setCurrentIdx}
          zoom={true}
          slides={images.map((img, idx) => (
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
          ))}
        />
        <Carousel
          className={styles.thumb}
          slidesPerView={images.length <= 5 ? images.length : 5.5}
          spaceBetween={8}
          slideTo={currentIdx}
          slides={images.map((img, idx) => (
            <Link href="#" type="block" key={idx} onClick={() => setCurrentIdx(idx)}>
              <Image
                src={img.src}
                alt={img.alt}
                className={clsx(styles.thumbImage, idx === currentIdx && styles.active)}
              />
            </Link>
          ))}
        />
      </div>
    </Dialog>
  );
};

ImageViewer.displayName = 'ImageViewer';
