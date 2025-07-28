import { Section, Box, InfoList, InfoItem, Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './DeliveryDestination.module.scss';

/** Delivery destination 타입 */
export interface DeliveryDestinationData {
  /** 이름 */
  name: string;
  /** 연락처  */
  phone: string;
  /** 배송지 주소 배열*/
  address: string[];
  /** 배송방법 (옵션) */
  shippingMethod?: string;
  /** 제한 조건 정보 (옵션) */
  limitInfo?: string;
}

interface DeliveryDestinationProps {
  /** 주문자 정보 데이터 */
  data: DeliveryDestinationData;
  /** 추가적인 클래스 이름 */
  className?: string;
}

/** 'DeliveryDestination' 영역 컴포넌트 */
export const DeliveryDestination = ({ data, className }: DeliveryDestinationProps) => {
  return (
    <Section
      title="Delivery destination"
      variant="collapse"
      level="1"
      flush
      borderTop
      className={clsx(styles.section, className)}
    >
      <Box size="3" margin="0" className={styles.box}>
        <div className={styles.info}>
          <InfoList gap="row24">
            <InfoItem
              title={
                <>
                  <Text as="strong" size="5" weight="semibold" className={styles.titleLine}>
                    {data.name}
                  </Text>
                  <Text as="span" size="5" weight="regular">
                    {data.phone}
                  </Text>
                </>
              }
              content={
                <div className={styles.infos}>
                  {data.address.map((line, idx) => (
                    <Text key={idx} as="span" color="gray2" size="4" weight="regular">
                      {line}
                    </Text>
                  ))}
                </div>
              }
            />
            <InfoItem
              title={
                <Text as="strong" size="5" weight="semibold">
                  Shipping Method
                </Text>
              }
              content={
                <div className={styles.infos}>
                  <Text as="span" size="5" weight="regular">
                    {data.shippingMethod}
                  </Text>
                  {data.limitInfo && (
                    <Text as="em" size="5" weight="semibold" color="point">
                      {data.limitInfo}
                    </Text>
                  )}
                </div>
              }
            />
          </InfoList>
        </div>
      </Box>
    </Section>
  );
};
