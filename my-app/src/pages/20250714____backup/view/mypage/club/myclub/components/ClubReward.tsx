import { Collapse, Heading, Box, TextList, ButtonArea, Button } from '@shared/ui';
import styles from './ClubView.module.scss';

export interface RewardData {
  expectedPoint: string;
  currentItems: number;
  totalItems: number;
  currentAmount: number;
  totalAmount: number;
}

interface ClubRewardProps {
  data: RewardData;
}

export const ClubReward = ({ data }: ClubRewardProps) => {
  return (
    <Collapse variant="section" className={styles.collapse}>
      <Collapse.Control>
        <Heading className={styles.tit}>추가 적립</Heading>
      </Collapse.Control>
      <Collapse.Content>
        <Box>
          <Heading>적립 예상 H.Point: {data.expectedPoint}</Heading>
          <TextList
            data={[
              `구매 개수 ${data.currentItems} / ${data.totalItems}`,
              `구매 금액 ${data.currentAmount.toLocaleString()} / ${data.totalAmount.toLocaleString()}`,
            ]}
          />
        </Box>
        <Box>
          <Heading as="strong" size="3" weight="semibold">
            적립 신청 후 현황 확인 및 지급이 가능합니다.
            <br />
            (NCP 홈페이지 바로접속 구매 한정)
          </Heading>
          <TextList
            data={[
              '구매 개수 3개, 구매금액 200,000원 이상 동시 충족시 10,000원 적립',
              '구매개수 3개, 구매금액 400,000원 이상 동시 충족시 20,000원 적립(1인당 최대 20,000원 적립)',
              "적립기간, 지급일 외 자세한 내용은 ‘적립신청 하러가기' 내 공지사항을 참고해 주세요.",
            ]}
            variant="level2"
          />
        </Box>
        <ButtonArea margin="1">
          <Button>적립신청 하러가기</Button>
        </ButtonArea>
      </Collapse.Content>
    </Collapse>
  );
};
