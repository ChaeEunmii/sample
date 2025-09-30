import { Drawer, Text } from '@shared/ui';
import styles from './OpenAlram.module.scss';

interface OpenAlramDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export default function OpenAlramDrawer({ isOpen, onClose }: OpenAlramDrawerProps) {
  return (
    <Drawer title="관심 브랜드의 래플 상품 오픈 알림" isOpen={isOpen} onClose={onClose}>
      <div className={styles.wrap}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Text size="5" color="gray1">
              래플 응모 시작! 지금 응모하고 기회를 잡아보세요.
            </Text>
            <Text as="span" size="3" color="gray3">
              23시간 전
            </Text>
          </li>
          <li className={styles.item}>
            <Text size="5" color="gray1">
              래플 응모 시작! 지금 응모하고 기회를 잡아보세요.
            </Text>
            <Text as="span" size="3" color="gray3">
              23시간 전
            </Text>
          </li>
          <li className={styles.item}>
            <Text size="5" color="gray1">
              래플 응모 시작! 지금 응모하고 기회를 잡아보세요.
            </Text>
            <Text as="span" size="3" color="gray3">
              23시간 전
            </Text>
          </li>
          <li className={styles.item}>
            <Text size="5" color="gray1">
              래플 응모 시작! 지금 응모하고 기회를 잡아보세요.
            </Text>
            <Text as="span" size="3" color="gray3">
              23시간 전
            </Text>
          </li>
          <li className={styles.item}>
            <Text size="5" color="gray1">
              래플 응모 시작! 지금 응모하고 기회를 잡아보세요.
            </Text>
            <Text as="span" size="3" color="gray3">
              23시간 전
            </Text>
          </li>
          <li className={styles.item}>
            <Text size="5" color="gray1">
              래플 응모 시작! 지금 응모하고 기회를 잡아보세요.
            </Text>
            <Text as="span" size="3" color="gray3">
              23시간 전
            </Text>
          </li>
          <li className={styles.item}>
            <Text size="5" color="gray1">
              래플 응모 시작! 지금 응모하고 기회를 잡아보세요.
            </Text>
            <Text as="span" size="3" color="gray3">
              23시간 전
            </Text>
          </li>
          <li className={styles.item}>
            <Text size="5" color="gray1">
              래플 응모 시작! 지금 응모하고 기회를 잡아보세요.
            </Text>
            <Text as="span" size="3" color="gray3">
              23시간 전
            </Text>
          </li>
        </ul>
      </div>
    </Drawer>
  );
}
