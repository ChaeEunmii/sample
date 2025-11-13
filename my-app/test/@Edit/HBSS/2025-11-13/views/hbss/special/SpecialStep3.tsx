'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { Box, TitleArea, ButtonArea, Button, InfoList, InfoItem, Text, TitleBar } from '@shared/ui';
import styles from './SpecialStep.module.scss';

export default function SpecialStep3() {
  return (
    <Container title="DB손해보험 VIP 감사선물 접수">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              모바일 접수가
              <br />
              완료되었습니다
            </>
          }
          className="ncp-mb-x0"
        />
        <Box className="ncp-mt-m">
          <InfoList variant="stacked" gridColumns="auto">
            <InfoItem title="접수번호" content="1234567890" />
          </InfoList>
        </Box>
        <TitleBar
          type="docs"
          title={
            <>
              DB손해보험 VIP 감사 선물
              <br />
              모바일 접수가 완료되었습니다
            </>
          }
        />
        <Text size="5" color="gray2" className="ncp-mt-m">
          DB손해보험을 이용해 주신 고객님께 다시 한번 감사의 인사를 드립니다.
        </Text>
        <Text size="3" color="gray3">
          접수하신 고객님의 개인정보는 배송완료된 시점으로부터 60일 이후에 자동으로 삭제됩니다.
        </Text>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          닫기
        </Button>
      </ButtonArea>
    </Container>
  );
}
