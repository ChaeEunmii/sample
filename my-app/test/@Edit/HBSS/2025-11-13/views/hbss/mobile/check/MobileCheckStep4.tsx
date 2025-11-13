'use client';

import { Container, Contents } from '@widgets/layout/Container';
import {
  TitleBar,
  TitleArea,
  ButtonArea,
  Button,
  TextList,
  Box,
  Text,
  Icon,
  Stack,
  Link,
} from '@shared/ui';
import styles from './MobileCheckStep.module.scss';

export default function MobileCheckStep4() {
  return (
    <Container title="현대백화점 명절선물 배송지 입력">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              배송지 입력이
              <br />
              완료되었어요!
            </>
          }
        />
        <TitleBar
          type="docs"
          title={
            <>
              빠르고 안전하게 배송하겠습니다.
              <br />
              즐거운 명절 보내세요!
            </>
          }
        />
        <Box size="3" className="ncp-text-center ncp-mt-l">
          <Stack>
            <Icon name="callFill" size="medium" />
            <Text as="strong" size="7" weight="semibold">
              <Link href="tel:02-547-2233" type="inline">
                02-547-2233
              </Link>
            </Text>
          </Stack>
        </Box>
        <TextList
          data={[
            '고객님의 개인정보는 배송 목적 외에 사용하지 않으며, 배송 완료 후 2개월 이내에 삭제됩니다.',
            '명절기간 집중되는 배송 물량으로 인하여, 희망하시는 예정일 보다 늦게 배송될 수 있는 점 양해를 부탁드립니다.',
          ]}
          variant="info"
          margin="4"
        />
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          닫기
        </Button>
      </ButtonArea>
    </Container>
  );
}
