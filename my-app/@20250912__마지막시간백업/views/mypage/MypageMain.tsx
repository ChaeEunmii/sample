'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { Text } from '@shared/ui';
import styles from './MypageMain.module.scss';

export default function MypageMain() {
  return (
    <Container title="마이페이지" showBack>
      <Contents className={styles.layout}>
        <Text>마이페이지 메인</Text>
      </Contents>
    </Container>
  );
}
