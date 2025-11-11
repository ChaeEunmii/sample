'use client';

import { Container, Contents } from '@widgets/layout/Container';
import {
  TitleArea,
  TextList,
  TitleBar,
  Box,
  ButtonArea,
  Button,
  InfoList,
  InfoItem,
  Text,
} from '@shared/ui';
import { HpointTextInfos } from './Hpoint';
import styles from './Hpoint.module.scss';

export default function HpointComplete() {
  return (
    <Container showBack title="H.Point 교환하기">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              H.point로
              <br />
              교환 완료되었습니다
            </>
          }
        />
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
            <InfoItem
              title={
                <Text as="span" size="5" color="gray2">
                  충전 대기 포인트
                </Text>
              }
              content={
                <Text as="strong" size="5" color="primary" weight="semibold">
                  50,000P
                </Text>
              }
            />
          </InfoList>
        </Box>
        <TextList variant="info" data={HpointTextInfos} margin="2" />
        <ButtonArea>
          <Button variant="primary" size="large">
            H.point 앱에서 자세히 보기
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
