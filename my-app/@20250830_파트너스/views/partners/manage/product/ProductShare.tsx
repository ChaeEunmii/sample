'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { Text } from '@shared/ui';
import styles from './ProductShare.module.scss';

export default function ProductShare() {
  return (
    <Container showBack title="파트너스 활동 상품 공유하기">
      <Contents className={styles.layout}>
        <Text>123</Text>
      </Contents>
    </Container>
  );
}
