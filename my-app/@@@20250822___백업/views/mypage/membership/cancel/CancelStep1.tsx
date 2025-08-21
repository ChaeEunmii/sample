'use client';

import {
  ButtonArea,
  Button,
  TitleArea,
  Box,
  InfoList,
  InfoItem,
  Text,
  TitleBar,
  TextList,
  Line,
  Section,
} from '@shared/ui';
import { useSearchParams } from 'next/navigation';
import { Contents } from '@widgets/layout/Container';
import { Benefits } from '@views/mypage/membership/components/Benefits';
import styles from './CancelStep1.module.scss';

export default function CancelStep1() {
  // 화면상태
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const isPlus = type === 'plus';
  const isPrime = type === 'prime';

  return (
    <>
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              김현대님, 멤버십 혜택을
              <br />더 누려보는 건 어떠세요?
            </>
          }
          bottomSlot={
            <>
              <Box className="ncp-w-full">
                <InfoList variant="stacked" className={styles.info}>
                  <InfoItem
                    title={<Text color="gray2">남은 혜택기간</Text>}
                    content={<Text>D-26일</Text>}
                  />
                  <InfoItem
                    title={<Text color="gray2">결제일</Text>}
                    content={<Text>2025.06.04</Text>}
                  />
                </InfoList>
              </Box>
            </>
          }
        />
        <TitleBar
          type="docs"
          title={
            <>
              멤버십 이용한 지 N일 째<br />
              <Text as="span" color="point">
                총 23,000원
              </Text>{' '}
              혜택을 받으셨어요!
            </>
          }
        />
        <Benefits />
        <TitleBar
          type="docs"
          title={
            <>
              지금 해지하면 이용하던 혜택은{' '}
              <Text as="span" color="point">
                7월 4일
              </Text>
              부터
              <br />
              제공되지 않아요.
            </>
          }
        />
        {isPlus && (
          <>
            <Line variant="bold" margin="5" />
            <Section level="1" title={'플러스 혜택은요'} variant="section">
              <Box>
                <TextList data={['생필품 월배송(생수, 티슈 등)', 'H.Point 3,000P', '무료반품']} />
              </Box>
            </Section>
          </>
        )}
        {isPrime && (
          <>
            <Line variant="bold" margin="5" />
            <Section level="1" title={'프라임 혜택은요'} variant="section">
              <Box>
                <TextList data={['생필품 월배송(생수, 티슈 등)', 'H.Point 5,000P', '무료반품']} />
              </Box>
            </Section>
          </>
        )}
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">해지하기</Button>
        <Button variant="primary" size="large">
          계속 이용하기
        </Button>
      </ButtonArea>
    </>
  );
}
