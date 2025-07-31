'use client';

import React, { useState } from 'react';
import { Carousel, Dialog, Image } from '@shared/ui';
import styles from './ImageViewer.module.scss';
import clsx from 'clsx';

// 이미지 데이터 타입 정의
interface ImageData {
  src: string;
  alt: string;
}

interface ImageViewerDialogProps {
  isOpen: boolean;
  onClose: () => void;
  /** 보여줄 이미지 배열 */
  images: ImageData[];
  /** 썸네일에서 보여줄 개수 (기본: 5) */
  thumbsPerView?: number;
}

export default function ImageViewerDialog({
  isOpen,
  onClose,
  images,
  thumbsPerView = 5,
}: ImageViewerDialogProps) {
  // 스와이퍼 활성 인덱스 상태
  const [currentIdx, setCurrentIdx] = useState(0);

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
        {/* 상단 메인 이미지 영역 */}
        <Carousel
          className={styles.main}
          flush
          slidesPerView={1}
          pagination="fraction"
          slideTo={currentIdx}
          onSlideChange={setCurrentIdx}
          slides={images.map((img, idx) => (
            <React.Fragment key={idx}>
              <Image src={img.src} alt={img.alt} />
            </React.Fragment>
          ))}
        />
        {/* 하단 썸네일 영역 */}
        <div className={styles.thumbWrap}>
          <Carousel
            className={styles.thumb}
            slidesPerView={thumbsPerView}
            spaceBetween={8}
            slideTo={currentIdx}
            onSlideChange={setCurrentIdx}
            slides={images.map((img, idx) => (
              <Image
                key={idx}
                src={img.src}
                alt={img.alt}
                className={clsx(styles.thumbImage, idx === currentIdx && styles.active)}
                onClick={() => setCurrentIdx(idx)} // 클릭 시 currentIdx 변경
              />
            ))}
          />
        </div>
      </div>
    </Dialog>
  );
}
