import { Container, Contents } from '@widgets/layout/Container';
import styles from './TheHyundaiOrderHistory.module.scss';
import TheHyundaiLoginForm from '@/views/mypage/order/history/thehyundai/components/TheHyundaiLoginForm';

export default function TheHyundaiOrderHistory() {
  return (
    <Container showBack title="더현대 주문/배송 조회">
      <Contents className={styles.layout}>
        ---------- 로그인 시 ----------
        <br />
        더현대 주문/배송 조회 목록 나옴
        <br />
        <br />
        <br />
        ---------- 비로그인 시 ----------
        <TheHyundaiLoginForm />
      </Contents>
    </Container>
  );
}
