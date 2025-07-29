import { Box, Heading, InfoList, InfoItem, Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './OrderItemsInfoBox.module.scss';

interface OrderItemsInfoBoxProps {
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const OrderItemsInfoBox = ({ className }: OrderItemsInfoBoxProps) => {
  return (
    <Box margin="0" className={clsx(styles.root, className)}>
      <Heading as="strong" size="2" weight="semibold">
        추가정보
      </Heading>
      <InfoList variant="stacked" gap="row4">
        <InfoItem
          title={
            <Text size="4" color="gray2">
              이름
            </Text>
          }
          content={<Text size="4">김*대</Text>}
        />
        <InfoItem
          title={
            <Text size="4" color="gray2">
              연락처
            </Text>
          }
          content={<Text size="4">010-1234-5678</Text>}
        />
        <InfoItem
          title={
            <Text size="4" color="gray2">
              요청사항
            </Text>
          }
          content={
            <Text size="4">
              포장할 때 각별하게 신경써 주세요. 저번에 배송 왔을 때 다 깨지고 난리도 아니더라고요.
            </Text>
          }
        />
      </InfoList>
    </Box>
  );
};
