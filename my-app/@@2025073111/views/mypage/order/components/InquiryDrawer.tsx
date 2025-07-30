import { Drawer, Button, ButtonArea, Heading } from '@shared/ui';
import styles from './Inquiry.module.scss';

interface InquirydDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export default function InquirydDrawer({ isOpen, onClose }: InquirydDrawerProps) {
  return (
    <Drawer title="문의하기" isOpen={isOpen} onClose={onClose}>
      <Heading as="strong" size="3" weight="medium">
        문의 방법을 선택해 주세요.
      </Heading>
      <ButtonArea margin="1" className={styles.btns}>
        <Button variant="tertiary">1:1 문의</Button>
        <Button variant="tertiary">전화 문의</Button>
        <Button>고객센터 메인으로</Button>
      </ButtonArea>
    </Drawer>
  );
}
