import { Container, Contents } from '@widgets/layout/Container';
import styles from './TohomeOrderHistory.module.scss';
import TohomeLoginForm from '@/views/mypage/order/history/tohome/components/TohomeLoginForm';

export default function TohomeOrderHistory() {
  return (
    <Container showBack title="현대식품관 to Home 주문/배송 조회">
      <Contents className={styles.layout}>
        ---------- 로그인 시 ----------
        <br />
        현대식품관 to Home 주문/배송 조회
        <br />
        <br />
        <br />
        ---------- 비로그인 시 ----------
        <TohomeLoginForm />
      </Contents>
    </Container>
  );
}
