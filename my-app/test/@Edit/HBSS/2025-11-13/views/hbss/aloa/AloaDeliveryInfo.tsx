'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { Stack, Box, ButtonArea, Button, Heading, TextList, Flag } from '@shared/ui';

export default function AloaDeliveryInfo() {
  return (
    <Container title="현대백화점 배송 안내">
      <Contents>
        <Box size="3">
          <Stack type="between">
            <Heading size="5" color="black" indent>
              배송 순번
            </Heading>
            <Flag data={{ label: '1번째', color: 'green3' }} />
          </Stack>
          <TextList
            variant="level2"
            data={['교통 및 배송 상황에 따라 변동될 수 있습니다.', '문의전화: 02-2662-2234']}
            className="ncp-mt-x6"
          />
        </Box>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          닫기
        </Button>
      </ButtonArea>
    </Container>
  );
}
