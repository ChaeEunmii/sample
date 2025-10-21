'use client';

import {
  Section,
  Box,
  Text,
  ButtonArea,
  TextButton,
  InfoList,
  InfoItem,
  Heading,
} from '@/shared/ui';
import clsx from 'clsx';
import styles from './OrderHistoryAddress.module.scss';

/**
 * 과거주문내역조회 상세
 * @description '배송지', '받으시는 분' 컴퍼넌트
 */

export interface OrderHistoryAddressData {
  name: string;
  phone: string;
  addPhone?: string;
  message?: string;
}

interface OrderHistoryAddressProps {
  /** 데이터 */
  data: OrderHistoryAddressData;
  /** 타이틀 변경 시 */
  title?: string;
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 기본 열림 여부 */
  defaultOpen?: boolean;
  /** 마스킹해제버튼 숨김여부 */
  hideMaskingBtn?: boolean;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function OrderHistoryAddress({
  data,
  title = '배송지',
  hideCollapse = false,
  defaultOpen = true,
  hideMaskingBtn = false,
  className,
}: OrderHistoryAddressProps) {
  return (
    <Section
      title={title}
      variant={hideCollapse ? 'normal' : 'collapse'}
      level="1"
      flush
      borderTop
      defaultOpen={defaultOpen}
      className={clsx(styles.root, className)}
    >
      <Box margin="0" size="3" className={styles.box}>
        <div className={styles.top}>
          <InfoList margin="0">
            <InfoItem
              title={
                <Heading size="3" color="gray1" weight="semibold">
                  {data.name}
                </Heading>
              }
              content={
                <Text size="5" color="gray1">
                  {data.phone}
                </Text>
              }
            />
          </InfoList>
          {data.addPhone && (
            <InfoList variant="line" margin="0" className="ncp-mt-xxs">
              <InfoItem
                title={
                  <Heading size="3" color="gray1" weight="regular">
                    추가 연락처
                  </Heading>
                }
                content={
                  <Text size="5" color="gray1">
                    {data.addPhone}
                  </Text>
                }
              />
            </InfoList>
          )}
          {!hideMaskingBtn && (
            <ButtonArea align="right" margin="3">
              <TextButton variant="underline" size="1" color="gray3" className={styles.btn}>
                마스킹 해제
              </TextButton>
            </ButtonArea>
          )}
        </div>
        {data.message && (
          <InfoList>
            <InfoItem title="요청사항" content={<Text size="4">{data.message}</Text>} />
          </InfoList>
        )}
      </Box>
    </Section>
  );
}
