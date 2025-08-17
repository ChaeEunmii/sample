'use client';
import {
  Box,
  Button,
  ButtonArea,
  InfoItem,
  InfoList,
  Text,
  TitleArea,
  TitleBar,
} from '@/shared/ui';
import { Container, Contents } from '@/widgets/layout/Container';

export const UseCompleteForm = () => {
  return (
    <Container title="매장 직원 확인용" showBack>
      <Contents>
        <TitleArea
          title={
            <>
              쿠폰 사용이
              <br />
              완료되었습니다.
            </>
          }
        />
        <TitleBar title="상세 정보" level="2" className="ncp-mt-xxl" />
        <Box size="3">
          <InfoList variant="stacked">
            <InfoItem title={<Text color="gray2">쿠폰명</Text>} content="무료 음료 1잔 이용권" />
            <InfoItem title={<Text color="gray2">사용개시 시간</Text>} content="2025.05.01 13:55" />
            <InfoItem title={<Text color="gray2">쿠폰 상태</Text>} content="사용완료" />
          </InfoList>
        </Box>
      </Contents>
      <ButtonArea type="sticky" vertical>
        <Button size="large" variant="primary">
          확인
        </Button>
      </ButtonArea>
    </Container>
  );
};

UseCompleteForm.displayName = 'UseCompleteForm';
