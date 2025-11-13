'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { Text, TitleArea, ButtonArea, Button, TitleBar } from '@shared/ui';
import { HbssFooter } from '@views/hbss/components/HbssFooter';
import styles from './SpecialStep.module.scss';

export default function SpecialStepMain() {
  return (
    <Container title="DB손해보험 VIP 감사선물 접수">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              DB손해보험 VIP 감사선물
              <br />
              모바일 접수 화면입니다
            </>
          }
          description={
            <Text as="span" size="5" color="gray2" weight="regular">
              고객님께 감사의 마음을 담아 정성껏 준비했습니다.
            </Text>
          }
        />
        <TitleBar
          type="docs"
          level="2"
          title={
            <>
              개인정보제공 동의 후<br />
              모바일 사전 접수를 선택해주세요.
            </>
          }
        />
        <ButtonArea margin="3">
          <Button>개인정보 제공 동의</Button>
        </ButtonArea>
        <ButtonArea>
          <Button variant="primary" size="large" disabled>
            모바일 사전 접수
          </Button>
        </ButtonArea>
      </Contents>
      <HbssFooter />
    </Container>
  );
}
