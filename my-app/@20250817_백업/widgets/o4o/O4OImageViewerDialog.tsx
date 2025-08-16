import React from 'react';
import { Button, Dialog, Image } from '@/shared/ui';
import { ReviewCardProps } from '@/widgets/review/ReviewCard';
import styles from './O4OImageViewer.module.scss';

interface O4OImageViewerDialogProps {
  data: ReviewCardProps;
  isOpen: boolean;
  onClose: () => void;
}

export default function O4OImageViewerDialog({ data, isOpen, onClose }: O4OImageViewerDialogProps) {
  return (
    <Dialog
      title="이미지 크게보기"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <Button variant="primary" size="large" onClick={onClose}>
          확인
        </Button>
      }
    >
      {data.photos?.map(({ src, alt }, idx) => (
        <Image
          key={idx}
          src={src}
          alt={alt}
          figurecaption={idx === 0 ? '상품 대표이미지' : ''}
          className={styles.image}
        />
      )) || []}
    </Dialog>
  );
}
