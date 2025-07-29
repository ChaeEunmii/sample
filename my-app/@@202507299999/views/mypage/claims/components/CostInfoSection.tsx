import { Section, InfoList, InfoItem, Text } from '@shared/ui';
import { formatPrice } from '@/shared/utils/ui';
import styles from './CostInfoSection.module.scss';
import clsx from 'clsx';

/**
 * 비용발생 시 안내하는 레이아웃용 컴퍼넌트
 */

interface CostInfoSectionProps {
  /** 타이틀 */
  title: string;
  /** 비용 발생 항목 */
  costTitle: React.ReactNode;
  /** 비용 */
  cost: number;
  /** 안내문구 */
  info?: React.ReactNode;
  /** marginTop */
  marginTop?: '1' | '2' | '3';
}

export const CostInfoSection = ({
  title,
  costTitle,
  cost,
  info,
  marginTop,
}: CostInfoSectionProps) => {
  return (
    <Section
      variant="normal"
      title={title}
      level="1"
      borderTop
      flush
      className={clsx(styles.root, marginTop && styles[`marginTop${marginTop}`])}
    >
      <InfoList variant="between">
        <InfoItem
          title={<Text>{costTitle}</Text>}
          content={
            <Text color="alert" weight="medium">
              {formatPrice(cost)}
            </Text>
          }
        />
      </InfoList>
      <Text size="3" color="gray3">
        {info}
      </Text>
    </Section>
  );
};
