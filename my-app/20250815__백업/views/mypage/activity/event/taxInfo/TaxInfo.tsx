'use client';

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
  Collapse,
  Checkbox,
} from '@shared/ui';
import styles from './TaxInfo.module.scss';

export default function TaxInfo() {
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
        <Collapse variant="section" marginTop="1">
          <Collapse.Control border>
            <Checkbox
              label={
                <span>
                  개인정보 수집 및 이용 동의
                  <Text as="span" color="gray1">
                    (필수)
                  </Text>
                </span>
              }
            />
          </Collapse.Control>
          <Collapse.Content>
            <Text color="gray2" size="4" weight="regular" reading>
              개인정보 처리에 대한 동의를 거부할 권리가 있으나, 거부할 경우 경품 수령에 제한을 받을
              수 있습니다.
            </Text>
            <Box>
              <InfoList gap="row16">
                <InfoItem
                  title={
                    <Text color="gray1" size="4" weight="semibold">
                      목적
                    </Text>
                  }
                  content={
                    <Text color="gray2" size="4" weight="regular">
                      이벤트 당첨자 확인 및 경품 배송
                    </Text>
                  }
                />
                <InfoItem
                  title={
                    <Text color="gray1" size="4" weight="semibold">
                      항목
                    </Text>
                  }
                  content={
                    <Text color="gray2" size="4" weight="regular">
                      이름, 연락처
                    </Text>
                  }
                />
                <InfoItem
                  title={
                    <Text color="gray1" size="4" weight="semibold">
                      보유기간
                    </Text>
                  }
                  content={
                    <Text color="gray2" size="4" weight="regular">
                      이벤트 당첨/공지일로부터 30일
                    </Text>
                  }
                />
              </InfoList>
            </Box>
          </Collapse.Content>
        </Collapse>
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
