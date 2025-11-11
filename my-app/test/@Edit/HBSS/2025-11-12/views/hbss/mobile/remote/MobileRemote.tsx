'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button } from '@shared/ui';
import styles from './MobileRemote.module.scss';

export default function MobileRemote() {
  return (
    <Container showBack title="">
      <Contents className={styles.layout}>
        MobileRemote
        <ButtonArea>
          <Button variant="primary" size="large">
            확인
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
