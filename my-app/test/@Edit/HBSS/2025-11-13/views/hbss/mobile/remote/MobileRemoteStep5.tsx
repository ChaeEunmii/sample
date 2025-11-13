'use client';

import { Container, Contents } from '@widgets/layout/Container';
import {
  Box,
  TitleArea,
  ButtonArea,
  Button,
  InfoList,
  InfoItem,
  Text,
  TitleBar,
  TextList,
} from '@shared/ui';
import styles from './MobileRemote.module.scss';

export default function MobileRemoteStep5() {
  return (
    <Container title="현대백화점 명절 배송 접수">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              모바일 배송접수가
              <br />
              완료되었습니다
            </>
          }
          className="ncp-mb-x0"
        />
        <Box className="ncp-mt-m">
          <InfoList variant="stacked" gridColumns="auto">
            <InfoItem title="접수번호" content="1234567890-123" />
          </InfoList>
        </Box>
        <TitleBar
          type="docs"
          title={
            <>
              고객님의 소중한 마음을 담아
              <br />
              안전하게 배송해드릴게요
            </>
          }
        />
        <Text size="5" color="gray2" indent className="ncp-mt-m">
          소중한 분과 함께 행복이 가득한 명절 되세요.
        </Text>
        <TextList
          data={[
            '접수하신 고객님의 개인정보는 배소완료된 시점으로부터 60일 이후에 자동으로 삭제됩니다.',
            '접수 내역은 문자 혹은 알림톡을 통해 다시 확인 가능합니다.',
          ]}
          variant="info"
          className="ncp-mt-x6"
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
