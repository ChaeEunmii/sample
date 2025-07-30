import { Section, Box, InfoList, InfoItem, Text, Grid, Image } from '@shared/ui';
import clsx from 'clsx';
import styles from './ReturnReason.module.scss';

interface ReasonCommonProps {
  /** 반품 또는 교환 */
  type?: 'return' | 'exchange';
  /** 요청일시 */
  requestedAt?: string;
  /** 사유 제목 */
  reason: string;
  /** 상세 사유 */
  detailReason: string;
  /** 이미지 리스트 (최대 5개) */
  images?: string[];
}

const REASON_TITLES = {
  return: '반품 사유',
  exchange: '교환 사유',
};

export const ReturnReason = ({
  type = 'return',
  requestedAt,
  reason,
  detailReason,
  images = [],
}: ReasonCommonProps) => {
  const sectionTitle = REASON_TITLES[type];

  return (
    <Section
      variant="normal"
      title={sectionTitle}
      level="1"
      borderTop
      flush
      className={clsx(styles.root)}
    >
      <Box margin="0">
        <InfoList variant="stacked" gridColumns="auto">
          <InfoItem
            title={
              <Text color="gray2" size="4">
                요청일시
              </Text>
            }
            content={<Text size="4">{requestedAt}</Text>}
          />
          <InfoItem
            title={
              <Text color="gray2" size="4">
                {sectionTitle}
              </Text>
            }
            content={
              <Text color="gray2" size="4">
                {reason}
              </Text>
            }
          />
          <InfoItem
            title={
              <Text color="gray2" size="4">
                상세사유
              </Text>
            }
            content={<Text size="4">{detailReason}</Text>}
          />
        </InfoList>

        {/* 이미지 썸네일 (최대 5개) */}
        {images.length > 0 && (
          <Grid columns={5} gutter={8} margin="1">
            {images.slice(0, 5).map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`${sectionTitle} 이미지 ${idx + 1}`}
                className={styles.img}
              />
            ))}
          </Grid>
        )}
      </Box>
    </Section>
  );
};
