import { Container, Contents } from '@widgets/layout/Container';
import { Text } from '@shared/ui';
import styles from './SubscriptionDetail.module.scss';

export default function SubscriptionDetail() {
  return (
    <Container showBack title="회원탈퇴">
      <Contents className={styles.layout}>
        <Text>구독상세</Text>
      </Contents>
    </Container>
  );
}
