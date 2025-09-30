import { Section, Box, TextButton, InfoList, InfoItem, Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './RefundAccountInfo.module.scss';

/**
 * '환불계좌 안내' 영역 컴포넌트
 */

/** 환불계좌 안내 데이터 타입 */
export interface RefundAccountData {
  /** 입금계좌 */
  account?: string;
  /** 예금주명 */
  name: string;
}

interface RefundAccountInfoProps {
  /** 환불 계좌 정보 데이터 */
  data?: RefundAccountData;
  /** 계좌정보 없음 여부 */
  isEmpty?: boolean;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const RefundAccountInfo = ({ data, isEmpty = false, className }: RefundAccountInfoProps) => {
  return (
    <Section
      title="환불 계좌 안내"
      variant="normal"
      level="1"
      flush
      borderTop
      className={clsx(styles.section, className)}
    >
      {!isEmpty ? (
        <>
          {/* 환불계좌가 있는경우 */}
          <Box size="3" margin="0" className={styles.box}>
            <div className={styles.info}>
              <InfoList variant="stacked" gridColumns="auto">
                <InfoItem
                  title={<Text color="gray2">입금계좌</Text>}
                  content={<Text>{data?.account}</Text>}
                />
                <InfoItem
                  title={<Text color="gray2">예금주명</Text>}
                  content={<Text>{data?.name}</Text>}
                />
              </InfoList>
            </div>
            <div className={styles.btns}>
              <TextButton variant="underline" size="1" color="gray3">
                변경
              </TextButton>
            </div>
          </Box>
        </>
      ) : (
        <>
          {/* 등록된 환불계좌가 없을경우 */}
          <div className={styles.empty}>
            <Text as="span" size="5" weight="medium">
              환불 계좌 등록이 필요합니다.
            </Text>
            <TextButton variant="underline" size="1" color="gray3">
              등록
            </TextButton>
          </div>
        </>
      )}
    </Section>
  );
};
