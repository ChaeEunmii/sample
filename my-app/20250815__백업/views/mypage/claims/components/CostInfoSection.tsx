import { Section, InfoList, InfoItem, Text, Icon } from '@shared/ui';
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
  /** costTitle 옆 아이콘 */
  costTitleIcon?: React.ReactNode;
  /** 비용 */
  cost: number;
  /** 안내문구 */
  info?: React.ReactNode;
  /** marginTop */
  marginTop?: '1' | '2' | '3' | '4';
}

export const CostInfoSection = ({
  title,
  costTitle,
  costTitleIcon,
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
          title={
            <p className={styles.titleWrap}>
              <Text as="span" indent>
                {costTitle}
              </Text>
              {costTitleIcon && <Icon name="info" size="small" />}
            </p>
          }
          content={
            <Text color="alert" weight="medium" indent>
              {formatPrice(cost)}
            </Text>
          }
        />
      </InfoList>
      <Text size="3" color="gray3" indent>
        {info}
      </Text>
    </Section>
  );
};
