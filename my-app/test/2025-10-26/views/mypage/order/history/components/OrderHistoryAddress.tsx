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
  /** 이름 */
  name: string;
  /** 연락처 */
  phone: string | string[];
  /** 추가 연락처 */
  addPhone?: string;
  /** 주소 */
  defaultAddress?: string;
  /** 상세주소 */
  detailedAddress?: string;
  /** 요청사항 */
  note?: string;
  /** 새벽배송 요청사항 */
  dawnNote?: string;
  /** 택배배송 요청사항 */
  parcelNote?: string;
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
  /** 기본 배송지 여부 */
  isDefaultAddress?: boolean;
  /** 하단 슬롯 */
  bottomSlot?: React.ReactNode;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function OrderHistoryAddress({
  data,
  title = '배송지',
  hideCollapse = false,
  defaultOpen = true,
  hideMaskingBtn = false,
  isDefaultAddress = false,
  bottomSlot,
  className,
}: OrderHistoryAddressProps) {
  // 요청사항 데이터
  const notes = [
    { label: '요청사항', value: data.note },
    { label: '새벽배송 요청사항', value: data.dawnNote },
    { label: '택배배송 요청사항', value: data.parcelNote },
  ].filter((item) => !!item.value);

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
          <div className={styles.info}>
            <Text as="span" size="5" weight="semibold" color="primary">
              {data.name}
            </Text>
            {isDefaultAddress && (
              <Text as="span" size="3" weight="semibold" color="point">
                기본 배송지
              </Text>
            )}
            {data.phone && (
              <Text as="span" size="5" className={clsx(styles.phone)}>
                {Array.isArray(data.phone) ? data.phone.join(', ') : data.phone}
              </Text>
            )}
          </div>
          {data.addPhone && (
            <InfoList variant="line" margin="0" className={styles.addPhone}>
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
          {data.defaultAddress && (
            <>
              <Text size="4" color="gray2">
                {data.defaultAddress}
              </Text>
              <Text size="4" color="gray2" className={styles.detailedAddress}>
                {data.detailedAddress}
              </Text>
            </>
          )}
          {!hideMaskingBtn && (
            <ButtonArea align="right" margin="3">
              <TextButton variant="underline" size="1" color="gray3" className={styles.btn}>
                마스킹 해제
              </TextButton>
            </ButtonArea>
          )}
        </div>
        {/* 요청사항 영역 */}
        <InfoList variant="default">
          {notes.map(({ label, value }) => (
            <InfoItem
              key={label}
              title={
                <Heading size="3" weight="semibold" color="black">
                  {label}
                </Heading>
              }
              content={
                <Text size="4" reading>
                  {value}
                </Text>
              }
            />
          ))}
        </InfoList>
      </Box>
      {bottomSlot && <div className="ncp-mt-m">{bottomSlot}</div>}
    </Section>
  );
}
