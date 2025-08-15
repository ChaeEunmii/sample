import { Dialog, Image, Button } from '@shared/ui';
import styles from './ImageViewer.module.scss';

interface ImageData {
  src: string;
  alt?: string;
}

interface ImageViewerDialogProps {
  isOpen: boolean;
  onClose: () => void;
  images?: ImageData[];
}

export default function ImageViewerDialog({
  isOpen,
  onClose,
  images = [],
}: ImageViewerDialogProps) {
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
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img.src}
            alt={img.alt ?? `이미지-${idx + 1}`}
            className={styles.img}
          />
        ))}
      </div>
    </Dialog>
  );
}
