import { Collapse, Heading, Box, TextList, Text, ButtonArea, Button } from '@shared/ui';
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

// 단위 줄이기
function reduceTo(value: number): number {
  return value / 10000;
}

export const ClubReward = ({ data }: ClubRewardProps) => {
  return (
    <>
      <Collapse variant="section" className={styles.collapse} defaultOpen>
        <Collapse.Control border>
          <Heading indent className={styles.tit}>
            추가 적립
          </Heading>
        </Collapse.Control>
        <Collapse.Content>
          <Box>
            <div className={styles.lyCol}>
              <Heading as="strong" weight="semibold">
                적립 예상 H.Point
              </Heading>
              <Heading as="strong" weight="semibold">
                {data.expectedPoint}
              </Heading>
            </div>
            <TextList
              data={[
                <>
                  <div className={styles.lyCol}>
                    <p>구매 개수</p>
                    <div className={styles.pointFlex}>
                      <Text as="span" color="point" weight="medium">
                        {`${data.currentItems}`}개
                      </Text>
                      <span>/</span>
                      <Text as="span">{`${data.totalItems}`}개</Text>
                    </div>
                  </div>
                </>,
                <>
                  <div className={styles.lyCol}>
                    <p>구매 금액</p>
                    <div className={styles.pointFlex}>
                      <Text as="span" color="point" weight="medium">
                        {`${data.currentAmount.toLocaleString()}`}원
                      </Text>
                      <span>/</span>
                      <Text as="span">{`${reduceTo(data.totalAmount)}`}만원</Text>
                    </div>
                  </div>
                </>,
              ]}
              variant="level2"
              liFlex
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
    </>
  );
};
