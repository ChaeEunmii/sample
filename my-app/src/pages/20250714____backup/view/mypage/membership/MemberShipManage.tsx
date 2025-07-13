'use client';

import { Container, Contents } from '@widgets/layout/Container';
import {
  TitleArea,
  Text,
  ButtonArea,
  Button,
  Icon,
  Heading,
  Tooltip,
  Stack,
  TitleBar,
  Box,
  InfoList,
  InfoItem,
  Line,
} from '@shared/ui';
import styles from './MemberShipManage.module.scss';

// 탭
export const tabItems = [{ label: '플러스' }, { label: '프라임' }];

export default function MemberShipManage() {
  return (
    <Container showBack title="유료멤버십 관리">
      <Contents className={styles.layout}>
        <TitleArea
          topSlot={
            <>
              <Text as="strong" size="5" weight="semibold">
                현재 이용중
              </Text>
            </>
          }
          title={
            <>
              HiHi 멤버십 플러스
              <Icon name="arrowRight" />
            </>
          }
          bottomSlot={
            <Text size="4" color="gray3">
              2025.07.04~2025.08.03
            </Text>
          }
        />
        {/* 고민해보아야함 */}
        <Stack>
          <Text size="8" weight="bold">
            이번달 받으신 혜택을 확인해보세요
          </Text>
          <Tooltip placement="bottom" align="end" className={styles.tooltip}>
            YYYY.MM.DD부터 누적 금액 기준으로
            <br />
            환산 가능한 혜택만 계산되었어요.
          </Tooltip>
        </Stack>
        <ul className={styles.benefitsStack}>
          <li>
            <Heading as="strong" className={styles.heading}>
              H.Point 캐시백
            </Heading>
            <div className={styles.cont}>
              <strong className={styles.numb}>10,000</strong>
              <span className={styles.unit}>P</span>
            </div>
          </li>
          <li>
            <Heading as="strong" className={styles.heading}>
              상품 무료 반품
            </Heading>
            <div className={styles.cont}>
              <strong className={styles.numb}>2</strong>
              <span className={styles.unit}>회</span>
            </div>
          </li>
          <li>
            <Heading as="strong" className={styles.heading}>
              월 정기 무료배송 상품
            </Heading>
            <div className={styles.cont}>
              <strong className={styles.txt}>과일꾸러미</strong>
            </div>
          </li>
        </ul>
        <ButtonArea margin="2">
          <Button variant="primary">혜택 계속 이용하기</Button>
        </ButtonArea>
        <TitleBar type="docs" title="다음달 이용예정" level="3" />
        <Box>
          <Heading as="strong" size="3" weight="semibold">
            프라임
          </Heading>
          <InfoList variant="between" className={styles.info}>
            <InfoItem
              title={<Text color="gray3">이용 기간</Text>}
              content={
                <Text size="4" weight="medium">
                  2025.07.04~2025.08.03
                </Text>
              }
            />
            <InfoItem
              title={<Text color="gray3">결제 금액</Text>}
              content={
                <Text size="4" weight="medium">
                  20,000원
                </Text>
              }
            />
          </InfoList>
        </Box>
        <Line variant="bold" margin="3" />
        <div>sdfsdf</div>
        <Line variant="bold" margin="3" />
      </Contents>
    </Container>
  );
}
