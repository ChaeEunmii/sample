'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, Text } from '@shared/ui';
import { TitleWithInfoStack, TitleWithInfo, TitleWithInfoProd } from '@views/hbss/components';
import styles from './MobileRemote.module.scss';

export default function MobileRemoteStep5Field() {
  return (
    <Container title="현대백화점 명절 배송 접수">
      <Contents className={styles.layout}>
        <Text size="5" color="gray2" indent className="ncp-mt-s">
          가까운 직원에게 아래 결제 내역을 보여주시면 배송 접수 안내를 도와드려요.
        </Text>
        <TitleWithInfoStack gap="3">
          <TitleWithInfo title="구매일자" content="2025년 12월 25일" />
          <TitleWithInfo title="영수번호" content="12345678" />
          <TitleWithInfoProd
            title="상품명 1"
            data={{
              name: '더 건강한 브런치 슬라이스 닭가슴살 [0000]',
              quantity: 2,
              price: 5200,
            }}
          />
          <TitleWithInfoProd
            title="상품명 2"
            data={{
              name: '더 건강한 브런치 슬라이스 닭가슴살 [0000]',
              quantity: 2,
              price: 5200,
            }}
          />
          <TitleWithInfo title="총 수량" content="99개" />
          <TitleWithInfo title="총 금액" content="47,600원" />
        </TitleWithInfoStack>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          닫기
        </Button>
      </ButtonArea>
    </Container>
  );
}
