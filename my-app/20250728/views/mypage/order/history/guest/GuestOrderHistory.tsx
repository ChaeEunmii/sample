import { Container, Contents } from '@widgets/layout/Container';
import styles from './GuestOrderHistory.module.scss';

export default function GuestOrderHistory() {
  return (
    <Container showBack title="과거 주문 내역 조회(비로그인)">
      <Contents className={styles.layout}>과거 주문 내역 조회(비로그인)</Contents>
    </Container>
  );
}
