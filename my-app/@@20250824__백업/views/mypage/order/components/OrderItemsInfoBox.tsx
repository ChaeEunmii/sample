import { Box, Heading, InfoList, InfoItem, Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './OrderItemsInfoBox.module.scss';

/** 추가정보박스 데이터 */
export interface OrderInfoBoxData {
  /** 항목 */
  label: string;
  /** 내용 */
  value: string;
}

interface OrderItemsInfoBoxProps {
  /** 데이터 */
  data?: OrderInfoBoxData[];
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const OrderItemsInfoBox = ({ data, className }: OrderItemsInfoBoxProps) => {
  return (
    <Box margin="0" className={clsx(styles.root, className)}>
      <Heading as="strong" size="2" weight="semibold">
        추가정보
      </Heading>
      <InfoList variant="stacked" gap="row8">
        {data?.map((info, index) => {
          return (
            <InfoItem
              key={index}
              title={
                <Text size="4" color="gray2">
                  {info.label}
                </Text>
              }
              content={<Text size="4">{info.value}</Text>}
            />
          );
        })}
      </InfoList>
    </Box>
  );
};
