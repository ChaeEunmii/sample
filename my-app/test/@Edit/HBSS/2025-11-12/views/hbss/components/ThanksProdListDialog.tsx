import { Dialog, Button, Box, Heading, Text, Image } from '@shared/ui';
import styles from './ThanksProdListDialog.module.scss';

interface ThanksProdListDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ThanksProdListDialog({ isOpen, onClose }: ThanksProdListDialogProps) {
  return (
    <Dialog
      title="감사 상품 목록"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <Button variant="primary" size="large" onClick={onClose}>
          닫기
        </Button>
      }
    >
      <div className={styles.logo}>
        특반 행사 주관/수행사 로고 표시
        {/* <Image
          src={'/images/dummy/@sample_img.png'}
          alt={'특반 행사 주관/수행사 로고'}
          className={styles.img}
        /> */}
      </div>
      <Box size="3" className={styles.box}>
        <Heading size="5" weight="bold">
          다음과 같은 선물이 준비되어 있습니다.
        </Heading>
        <Text>(6품목 중 1품목 선택)</Text>
      </Box>
      <div className={styles.image}>
        <Image
          src={'/images/dummy/@sample_img.png'}
          alt={'라이브 소개 이미지'}
          className={styles.img}
        />
      </div>
    </Dialog>
  );
}
