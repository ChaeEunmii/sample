'use client';

import React from 'react';
import { Box, Text, ButtonArea, Button, Section } from '@/shared/ui';
import { StoreTitle } from '.';

interface O4OLocationItem {
  /** ID */
  id: string;
  /** 푸드코드명 */
  courtName?: string;
  /** 매장명 */
  store: string;
  /** 층수 */
  floor?: string;
  /** 기본 주소 */
  defaultAddress: string;
  /** 상세 주소 */
  detailedAddress?: string;
}

interface O4OLocationListProps {
  /** 데이터 타입 */
  type?: 'pickup' | 'apgujeong' | 'daejeonOutlet';
  /** 데이터 */
  data: O4OLocationItem[];
  /** 추가 클래스명 */
  className?: string;
}

export const O4OLocationList = ({ type = 'pickup', data, className }: O4OLocationListProps) => {
  return (
    <Section
      title={type === 'pickup' ? '픽업위치' : '배달위치'}
      variant="section"
      className={className}
    >
      {type === 'pickup' ? (
        <>
          {data.map((item) => (
            <Box key={item.id} size="3">
              <StoreTitle data={item} />
              <Text size="4" color="gray2">
                {item.defaultAddress}
              </Text>
              {item.detailedAddress && (
                <Text size="4" color="gray2" className="ncp-mt-xxs">
                  {item.detailedAddress}
                </Text>
              )}
              <ButtonArea margin="3">
                <Button variant="tertiary" size="small">
                  위치보기
                </Button>
                <Button variant="tertiary" size="small">
                  전화하기
                </Button>
              </ButtonArea>
            </Box>
          ))}
        </>
      ) : (
        <Box size="3">
          <StoreTitle
            data={{
              store:
                type === 'apgujeong' ? '압구정본점 88번 테이블' : '대전아울렛점 노랑이 픽업존 N번',
            }}
          />
        </Box>
      )}
    </Section>
  );
};

O4OLocationList.displayName = 'O4OLocationList';
