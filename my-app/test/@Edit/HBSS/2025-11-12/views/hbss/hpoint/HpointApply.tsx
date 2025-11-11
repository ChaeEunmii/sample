'use client';

import { Container, Contents } from '@widgets/layout/Container';
import {
  TextList,
  TitleBar,
  Box,
  ButtonArea,
  Button,
  InfoList,
  InfoItem,
  Text,
  TextButton,
} from '@shared/ui';
import { HbssOrderItem } from '@views/hbss/components';
import { HpointTextInfos } from './Hpoint';
import styles from './Hpoint.module.scss';
import { mockHbssGiftOrder } from '@mocks/hbss';

export default function HpointApply() {
  // 받은선물정보 + 주문 데이터
  const giftOrderData = { ...mockHbssGiftOrder, senderName: undefined };

  return (
    <Container
      showBack
      title="H.Point 교환하기"
      actions={[
        {
          type: 'custom' as const,
          component: (
            <TextButton variant="underline" size="1" className="ncp-color-black">
              HOME
            </TextButton>
          ),
        },
      ]}
    >
      <Contents className={styles.layout}>
        {/* 받은 선물 + 주문 아이템 */}
        <HbssOrderItem data={giftOrderData} className="ncp-mt-s" />
        <TitleBar type="docs" title="H.Point" level="2" />
        <Box size="3">
          <InfoList variant="between" gap="row16">
            <InfoItem
              title={
                <Text as="span" size="5" color="gray2">
                  교환 가능 포인트
                </Text>
              }
              content={
                <Text as="strong" size="5" color="primary" weight="semibold">
                  150,000P
                </Text>
              }
            />
            <InfoItem
              title={
                <Text as="span" size="5" color="gray2">
                  현재 보유 포인트
                </Text>
              }
              content={
                <Text as="strong" size="5" color="point" weight="semibold">
                  370,000P
                </Text>
              }
            />
          </InfoList>
        </Box>
        <TextList variant="info" data={HpointTextInfos} margin="2" />
        <ButtonArea>
          <Button variant="primary" size="large">
            H.point 로 교환하기
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
