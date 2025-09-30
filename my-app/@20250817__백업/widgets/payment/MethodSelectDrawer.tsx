import { Drawer, Text, Tip } from '@shared/ui';
import styles from './MethodSelectDrawer.module.scss';

interface MethodSelectDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MethodSelectDrawer = ({ isOpen, onClose }: MethodSelectDrawerProps) => {
  return (
    <Drawer
      title="등록할 결제수단을 선택하세요."
      isOpen={isOpen}
      onClose={onClose}
      className={styles.termsAgreeDrawer}
    >
      <div className={styles.methods}>
        <button className={styles.btn}>
          <span>
            <Text as="strong" size="7">
              현대백화점 카드
            </Text>
            <Text as="span" color="gray2" size="4">
              별도의 카드등록 절차 없이 진행됩니다.
            </Text>
          </span>
          <div>
            <Tip className="" placement="right">
              1초 결제 가능
            </Tip>
          </div>
        </button>
        <button className={styles.btn}>
          <Text as="strong" size="7">
            신용/체크카드
          </Text>
          <div>
            <Tip className="" placement="right">
              1초 결제 가능
            </Tip>
          </div>
        </button>
        <button className={styles.btn}>
          <Text as="strong" size="7">
            은행계좌
          </Text>
        </button>
      </div>
    </Drawer>
  );
};
MethodSelectDrawer.displayName = 'MethodSelectDrawer';
