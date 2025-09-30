import { Dialog, Image, Button } from '@shared/ui';
import styles from './ImageViewer.module.scss';

interface ImageViewerDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageViewerDialog({ isOpen, onClose }: ImageViewerDialogProps) {
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
      <div className={styles.wrap}>
        <Image
          src="/images/dummy/@sample_review_01.png"
          alt="리뷰샘플이미지"
          className={styles.img}
        />
        <Image
          src="/images/dummy/@sample_review_02.png"
          alt="리뷰샘플이미지"
          className={styles.img}
        />
        <Image
          src="/images/dummy/@sample_review_03.png"
          alt="리뷰샘플이미지"
          className={styles.img}
        />
      </div>
    </Dialog>
  );
}
