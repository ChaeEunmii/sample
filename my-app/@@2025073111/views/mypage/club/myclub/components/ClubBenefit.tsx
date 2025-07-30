import { Collapse, Heading, Box, TextList } from '@shared/ui';
import styles from './ClubView.module.scss';

export interface BenefitItem {
  label: string;
  content: number;
}

export interface BenefitData {
  signup?: BenefitItem[];
  monthly?: BenefitItem[];
}

export interface ClubBenefitProps {
  data: BenefitData;
}

export const ClubBenefit = ({ data }: ClubBenefitProps) => {
  return (
    <>
      <Collapse variant="section" className={styles.collapse}>
        <Collapse.Control border>
          <Heading indent className={styles.tit}>
            추가 혜택
          </Heading>
        </Collapse.Control>
        <Collapse.Content>
          {data.signup && (
            <Box>
              <Heading as="strong" size="3" weight="semibold">
                가입 쿠폰
              </Heading>
              <TextList
                data={data.signup.map((item) => (
                  <>
                    <div className={styles.lyCol}>
                      <p>{item.label}</p>
                      <div className={styles.pointFlex}>{item.content}장</div>
                    </div>
                  </>
                ))}
                variant="level2"
                liFlex
              />
            </Box>
          )}
          {data.monthly && (
            <Box>
              <Heading as="strong" size="3" weight="semibold">
                월별 쿠폰
              </Heading>
              <TextList
                data={data.monthly.map((item) => (
                  <>
                    <div className={styles.lyCol}>
                      <p>{item.label}</p>
                      <div className={styles.pointFlex}>{item.content}장</div>
                    </div>
                  </>
                ))}
                variant="level2"
                liFlex
              />
            </Box>
          )}
          <TextList
            data={[
              data.signup &&
                '가입 쿠폰은 최초 가입 시 1회만 지급되며, 재가입 시에는 제공되지 않습니다.',
              data.monthly &&
                '월별 쿠폰은 마케팅 수신에 동의한 고객에 한해, 월 1회 다운로드할 수 있습니다.',
            ].filter((item) => Boolean(item))} // falsy 값 제거
            variant="info"
            margin="2"
          />
        </Collapse.Content>
      </Collapse>
    </>
  );
};
