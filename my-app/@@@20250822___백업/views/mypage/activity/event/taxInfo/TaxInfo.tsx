'use client';

import { useState, useEffect } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { IdentityCardUpload } from '@views/mypage/activity/event/components/IdentityCardUpload';
import {
  ButtonArea,
  Button,
  TitleArea,
  Box,
  InfoList,
  InfoItem,
  Text,
  TextList,
  TitleBar,
  Image,
} from '@shared/ui';
import { AgreementGroup } from '@widgets/form';
import { EVENTREWARD_AGREEMENTS } from '@views/policy/agreements-data';
import styles from './TaxInfo.module.scss';

export default function TaxInfo() {
  // 전체동의
  const [agreeStates, setAgreeStates] = useState<Record<string, boolean>>({});
  const [disabledStates, setDisabledStates] = useState<Record<string, boolean>>({});

  const handleCheckChange = (id: string, checked: boolean) => {
    setAgreeStates((prev) => ({ ...prev, [id]: checked }));
  };

  // 동의항목 초기설정
  useEffect(() => {
    const defaultCheckedId = [''];
    const defaultDisabledIds = [''];

    // 초기 체크 상태 설정
    setAgreeStates((prev) => {
      const updated = { ...prev };
      defaultCheckedId.forEach((id) => {
        updated[id] = true;
      });
      return updated;
    });

    // 초기 disabled 상태 설정
    setDisabledStates((prev) => {
      const updated = { ...prev };
      defaultDisabledIds.forEach((id) => {
        updated[id] = true;
      });
      return updated;
    });
  }, []);

  return (
    <Container showBack title="제세공과금 안내">
      <Contents className={styles.layout}>
        <TitleArea
          title="이벤트 당첨을 축하드립니다!"
          level="2"
          bottomSlot={
            <>
              <Box className="ncp-w-full" margin="0">
                <InfoList variant="stacked" gap="row8">
                  <InfoItem
                    title={
                      <Text size="5" weight="regular" color="gray2">
                        이벤트
                      </Text>
                    }
                    content={
                      <Text size="5" weight="medium">
                        도프너(풀카독베이커리)체럼 이벤트
                      </Text>
                    }
                  />
                  <InfoItem
                    title={
                      <Text size="5" weight="regular" color="gray2">
                        당첨 경품
                      </Text>
                    }
                    content={
                      <Text size="5" weight="medium">
                        세먼세이즈 비스킷 연어
                      </Text>
                    }
                  />
                </InfoList>
              </Box>
            </>
          }
        />
        <Text indent reading>
          이벤트 경품 발송을 위해 신분증 사본 제출 및 제세공과금 입금이 필요합니다.
        </Text>
        <Box className={styles.green}>
          <span className={styles.boxTit}>신분증 제출 및 제세공과금 입금 기한</span>
          <Text as="strong" weight="semibold">
            2025.12.01
          </Text>
        </Box>
        <TextList
          data={[
            '제세공과금은 5만원 초과 경품에 대해 경품가의 22%를 당첨자가 부담하게 됩니다.',
            '정해진 입금 기한까지 신분증 사본 미제출 및 제세공과금 미입금 시 경품 지급이 되지 않으니 참고 바랍니다.',
          ]}
          variant="info"
          className="ncp-mt-s"
        />
        <TitleBar
          type="docs"
          title="신분증 업로드"
          level="2"
          description={
            <>
              신분증 (주민등록증/운전면허증)은 반드시 앞면을
              <br />
              복사/촬영 해주세요.
            </>
          }
        />
        <Image src="/images/img_identity_card.png" alt="신분증 이미지" className={styles.img} />
        <IdentityCardUpload />
        <TitleBar type="docs" title="제세공과금 입금 안내" level="2" />
        <Box className="ncp-w-full" margin="0">
          <InfoList variant="stacked" gap="row8">
            <InfoItem
              title={
                <Text size="5" color="gray2">
                  제세공과금
                </Text>
              }
              content={<Text size="5">22,000원(경품금액 100,000원의 22%)</Text>}
            />
            <InfoItem
              title={
                <Text size="5" color="gray2">
                  예금주
                </Text>
              }
              content={<Text size="5">NCP</Text>}
            />
            <InfoItem
              title={
                <Text size="5" color="gray2">
                  입금계좌
                </Text>
              }
              content={<Text size="5">현대은행 1234567-01-123456</Text>}
            />
            <InfoItem
              title={
                <Text size="5" color="gray2">
                  입금기한
                </Text>
              }
              content={<Text size="5">0000년 00월 00일까지</Text>}
            />
          </InfoList>
        </Box>
        <AgreementGroup
          variant="type4"
          data={EVENTREWARD_AGREEMENTS}
          checked={agreeStates[EVENTREWARD_AGREEMENTS.id]}
          onChange={handleCheckChange}
          allStates={agreeStates}
          disabledStates={disabledStates}
          className="ncp-mt-l"
          validateMode
        />
        <ButtonArea>
          <Button size="large">취소</Button>
          <Button variant="primary" size="large">
            등록
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
