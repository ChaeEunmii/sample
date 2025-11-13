'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  Heading,
  Text,
  TitleArea,
  ButtonArea,
  Button,
  Box,
  TextList,
  Checkbox,
  InfoList,
  InfoItem,
} from '@shared/ui';
import styles from './SpecialStep.module.scss';

export default function SpecialStepAgree() {
  const [isAgree, setIsAgree] = useState(false); // 동의 체크박스 상태

  return (
    <Container title="DB손해보험 VIP 감사선물 접수">
      <Contents className={styles.layout}>
        <TitleArea
          title={<>개인정보제공동의</>}
          description={
            <Text as="span" size="5" color="gray2" weight="regular">
              현대백화점이 앞장서 실천하는 개인정보 보호 수칙
              <br />
              안심하시고 이용하세요.
            </Text>
          }
          className="ncp-mb-x0"
        />
        <Box size="3" className="ncp-mt-m">
          <InfoList>
            <InfoItem
              title={
                <Heading size="3" weight="medium" reading>
                  수집항목
                </Heading>
              }
              content={
                <Text size="5" color="gray2" reading>
                  보내시는 분, 대리인, 받으시는 분과 관련된 성명, 주소, 연락처, 회사명 등
                </Text>
              }
            />
            <InfoItem
              title={
                <Heading size="3" weight="medium" reading>
                  수집목적
                </Heading>
              }
              content={
                <Text size="5" color="gray2" reading>
                  행사정보, 혜택안내, 회원모집 등 정보 안내 문자 발송
                </Text>
              }
            />
            <InfoItem
              title={
                <Heading size="3" weight="medium" reading>
                  보유기간
                </Heading>
              }
              content={
                <Text size="5" color="gray2" reading>
                  배송완료일로부터 60일 이내 파기
                </Text>
              }
            />
          </InfoList>
        </Box>
        <Checkbox
          label="상기 목적을 위해 정보를 제공하는 데 동의합니다."
          checked={isAgree}
          onChange={(e) => setIsAgree(e.target.checked)}
          className="ncp-mt-s"
        />
        <TextList
          data={[
            '동의를 거부할 권리가 있으나, 동의 거부 시 배송 주문 신청이 불가합니다.',
            '수집 항목은 이용 목적 이외의 용도로 활용되거나 제공되지 않으며 보유기간 종료 후 파기됩니다.',
          ]}
          variant="info"
          margin="3"
        />
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          확인
        </Button>
      </ButtonArea>
    </Container>
  );
}
