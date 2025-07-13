import { Collapse, Heading, Box, TextList } from '@shared/ui';
import styles from './ClubView.module.scss';

export interface BenefitItem {
  label: string;
  content: number;
}

export interface BenefitData {
  signup: BenefitItem[];
  monthly: BenefitItem[];
}

export interface ClubBenefitProps {
  data: BenefitData;
}

export const ClubBenefit = ({ data }: ClubBenefitProps) => {
  return (
    <Collapse variant="section" className={styles.collapse}>
      <Collapse.Control>
        <Heading className={styles.tit}>추가 혜택</Heading>
      </Collapse.Control>
      <Collapse.Content>
        <Box>
          <Heading as="strong" size="3" weight="semibold">
            가입 쿠폰
          </Heading>
          <TextList
            data={data.signup.map((item) => `${item.label} ${item.content}장`)}
            variant="level2"
          />
        </Box>
        <Box>
          <Heading as="strong" size="3" weight="semibold">
            월별 쿠폰
          </Heading>
          <TextList
            data={data.monthly.map((item) => `${item.label} ${item.content}장`)}
            variant="level2"
          />
        </Box>
        <TextList
          data={[
            '가입 쿠폰은 최초 가입 시 1회만 지급되며, 재가입 시에는 제공되지 않습니다.',
            '월별 쿠폰은 마케팅 수신에 동의한 고객에 한해, 월 1회 다운로드할 수 있습니다.',
          ]}
          variant="info"
          margin="2"
        />
      </Collapse.Content>
    </Collapse>
  );
};
